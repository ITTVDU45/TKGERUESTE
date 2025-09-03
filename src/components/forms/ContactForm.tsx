"use client"
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useRef, useState } from 'react';

interface FormData {
   first_name: string;
   last_name: string;
   user_email: string;
   user_phone: string;
   project_address: string;
   project_type: string;
   preferred_start_date: string;
   estimated_duration?: string | undefined;
   usage_area: string;
   building_height?: string | undefined;
   building_length?: string | undefined;
   special_requirements?: string | undefined;
   environment_type?: string | undefined;
   access_situation?: string | undefined;
   budget?: string | undefined;
   attachments?: FileList | null;
   message?: string | undefined;
}

const schema = yup
   .object({
      first_name: yup.string().required('Vorname ist erforderlich'),
      last_name: yup.string().required('Name ist erforderlich'),
      user_email: yup.string().required('E-Mail ist erforderlich').email('Ungültige E-Mail-Adresse'),
      user_phone: yup.string().required('Telefonnummer ist erforderlich'),
      project_address: yup.string().required('Projektadresse ist erforderlich'),
      project_type: yup.string().required('Art des Projekts ist erforderlich'),
      preferred_start_date: yup.string().required('Startdatum ist erforderlich'),
      estimated_duration: yup.string().notRequired(),
      usage_area: yup.string().required('Einsatzbereich ist erforderlich'),
      building_height: yup.string().notRequired(),
      building_length: yup.string().notRequired(),
      special_requirements: yup.string().notRequired(),
      environment_type: yup.string().notRequired(),
      access_situation: yup.string().notRequired(),
      budget: yup.string().notRequired(),
      attachments: yup.mixed().notRequired(),
      message: yup.string().notRequired(),
   })
   .required();

const ContactForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema) as any, });

   const form = useRef<HTMLFormElement>(null);
   const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
   const [selectedPreviews, setSelectedPreviews] = useState<string[]>([]);
   const [selectedFileObjects, setSelectedFileObjects] = useState<File[]>([]);
   const attachmentsInputRef = useRef<HTMLInputElement | null>(null);

   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (!files || files.length === 0) return;

      const newFiles = Array.from(files);

      // Combine previously selected files with newly selected ones
      const combinedFiles = [...selectedFileObjects, ...newFiles];

      // Revoke previous previews to avoid memory leaks
      selectedPreviews.forEach((url) => URL.revokeObjectURL(url));

      const combinedPreviews = combinedFiles.map((f) => URL.createObjectURL(f));
      setSelectedFileObjects(combinedFiles);
      setSelectedFiles(combinedFiles.map((f) => f.name));
      setSelectedPreviews(combinedPreviews);

      // Update the hidden input.files so form submission contains all files
      if (attachmentsInputRef.current) {
         const dt = new DataTransfer();
         combinedFiles.forEach((f) => dt.items.add(f));
         attachmentsInputRef.current.files = dt.files;
      }
   };

   const handleRemoveFile = (index: number) => {
      // Revoke all previous previews first
      selectedPreviews.forEach((url) => URL.revokeObjectURL(url));

      const newFileObjs = selectedFileObjects.filter((_, i) => i !== index);
      const newPreviews = newFileObjs.map((f) => URL.createObjectURL(f));

      // update input.files via DataTransfer
      if (attachmentsInputRef.current) {
         const dt = new DataTransfer();
         newFileObjs.forEach((f) => dt.items.add(f));
         attachmentsInputRef.current.files = dt.files;
      }

      setSelectedFileObjects(newFileObjs);
      setSelectedFiles(newFileObjs.map((f) => f.name));
      setSelectedPreviews(newPreviews);
   };

   const attachmentsRegister = register("attachments") as any;

   const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
      let binary = '';
      const bytes = new Uint8Array(buffer);
      const len = bytes.byteLength;
      for (let i = 0; i < len; i++) {
         binary += String.fromCharCode(bytes[i]);
      }
      return typeof window !== 'undefined' ? window.btoa(binary) : Buffer.from(binary, 'binary').toString('base64');
   };

   const sendEmail = async () => {
      if (!form.current) {
         console.error('Form reference is null');
         return;
      }

      try {
         const fd = new FormData(form.current);
         const payload: any = { attachments: [] };

         for (const entry of Array.from(fd.entries())) {
            const key = entry[0];
            const value = entry[1];
            if (value instanceof File) {
               const file = value as File;
               const buffer = await file.arrayBuffer();
               const b64 = arrayBufferToBase64(buffer);
               payload.attachments.push({ filename: file.name, contentType: file.type || 'application/octet-stream', data: b64 });
            } else {
               if (payload[key] !== undefined) {
                  if (Array.isArray(payload[key])) payload[key].push(value);
                  else payload[key] = [payload[key], value];
               } else {
                  payload[key] = value;
               }
            }
         }

         const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
         });

         if (res.ok) {
            toast('Nachricht erfolgreich gesendet', { position: 'top-center' });
            reset();
            setSelectedFiles([]);
         } else {
            const text = await res.text();
            console.error('Mail send failed', text);
            toast('Fehler beim Senden der Nachricht', { position: 'top-center' });
         }
      } catch (err) {
         console.error(err);
         toast('Fehler beim Senden der Nachricht', { position: 'top-center' });
      }
   };

   return (
      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
         <div className="row">
            <div className="col-lg-6">
               <label>Vorname*</label>
               <input type="text" {...register("first_name")} placeholder="Vorname*" />
               <p className="form_error">{errors.first_name?.message}</p>
            </div>
            <div className="col-lg-6">
               <label>Name*</label>
               <input type="text" {...register("last_name")} placeholder="Name*" />
               <p className="form_error">{errors.last_name?.message}</p>
            </div>

            <div className="col-lg-6">
               <label>E-Mail Adresse*</label>
               <input type="email" {...register("user_email")} placeholder="E-Mail*" />
               <p className="form_error">{errors.user_email?.message}</p>
            </div>
            <div className="col-lg-6">
               <label>Telefonnummer*</label>
               <input type="tel" {...register("user_phone")} placeholder="Telefonnummer*" />
               <p className="form_error">{errors.user_phone?.message}</p>
            </div>

            <div className="col-lg-12">
               <label>Projektadresse / Baustellenadresse*</label>
               <input type="text" {...register("project_address")} placeholder="Straße, PLZ, Ort" />
               <p className="form_error">{errors.project_address?.message}</p>
            </div>

            <div className="col-lg-6">
               <label>Art des Projekts / Maßnahme*</label>
               <div className="select-wrapper">
                  <select className="styled-select" {...register("project_type")} defaultValue="">
                     <option value="" disabled>Bitte auswählen...</option>
                     <option value="Sanierung">Sanierung</option>
                     <option value="Neubau">Neubau</option>
                     <option value="Malerarbeiten">Malerarbeiten</option>
                     <option value="Dacharbeiten">Dacharbeiten</option>
                     <option value="Industrieprojekt">Industrieprojekt</option>
                     <option value="Sonstiges">Sonstiges</option>
                  </select>
               </div>
               <p className="form_error">{errors.project_type?.message}</p>
            </div>
            <div className="col-lg-6">
               <label>Zeitraum / gewünschtes Startdatum*</label>
               <div className="date-wrapper">
                  <input type="date" className="styled-date" {...register("preferred_start_date")} aria-label="Gewünschtes Startdatum" />
               </div>
               <p className="form_error">{errors.preferred_start_date?.message}</p>
            </div>

            <div className="col-lg-6">
               <label>Voraussichtliche Dauer / Standzeit des Gerüsts <small>(falls bekannt)</small></label>
               <input type="text" {...register("estimated_duration")} placeholder="z. B. 2 Wochen, 3 Monate" />
               <p className="form_error">{errors.estimated_duration?.message}</p>
            </div>
            <div className="col-lg-6">
               <label>Einsatzbereich*</label>
               <div className="select-wrapper">
                  <select className="styled-select" {...register("usage_area")} defaultValue="">
                     <option value="" disabled>Bitte auswählen...</option>
                     <option value="Fassade">Fassade</option>
                     <option value="Dach">Dach</option>
                     <option value="Innenraum">Innenraum</option>
                     <option value="Industrieanlage">Industrieanlage</option>
                     <option value="Sonderkonstruktion">Sonderkonstruktion</option>
                     <option value="Nicht bekannt">Nicht bekannt</option>
                  </select>
               </div>
               <p className="form_error">{errors.usage_area?.message}</p>
            </div>

            <div className="col-lg-12">
               <h5>Projektmaße <small>(falls relevant)</small></h5>
            </div>
            <div className="col-lg-6">
               <label>Projekthöhe (m)</label>
               <input type="text" {...register("building_height")} placeholder="z. B. 12" />
               <p className="form_error">{errors.building_height?.message}</p>
            </div>
            <div className="col-lg-6">
               <label>Projektlänge (m)</label>
               <input type="text" {...register("building_length")} placeholder="z. B. 30" />
               <p className="form_error">{errors.building_length?.message}</p>
            </div>
            <div className="col-lg-6">
               <label>Budgetvorstellung</label>
               <input type="text" {...register("budget")} placeholder="z. B. 5.000 €" />
               <p className="form_error">{errors.budget?.message}</p>
            </div>

            <div className="col-lg-12">
               <label>Fotos oder Pläne hochladen</label>
               <div className="file-uploader">
                  <label className="file-drop" htmlFor="attachments-input">
                     <input id="attachments-input" ref={(el) => { attachmentsInputRef.current = el; attachmentsRegister.ref(el); }} type="file" {...(attachmentsRegister as any)} onChange={handleFileChange} multiple style={{ display: 'none' }} />
                     <div className="file-drop-inner">
                        <strong>Dateien auswählen</strong>
                        <span className="file-drop-hint">JPG, PNG, PDF — max. 8MB pro Datei</span>
                     </div>
                  </label>
                  <div className="file-list">
                     {selectedPreviews.length === 0 ? <span className="muted">Keine Dateien ausgewählt</span> : (
                        <div className="preview-grid">
                           {selectedPreviews.map((src, idx) => {
                              const fileObj = selectedFileObjects[idx];
                              const isImage = fileObj ? fileObj.type.startsWith('image/') : false;
                              return (
                                 <div className="preview-item" key={idx}>
                                    {isImage ? <img src={src} alt={selectedFiles[idx]} /> : <div className="file-icon">{selectedFiles[idx]}</div>}
                                    <button type="button" className="remove-file" onClick={() => handleRemoveFile(idx)}>Entfernen</button>
                                 </div>
                              );
                           })}
                        </div>
                     )}
                  </div>
               </div>
               <p className="form_error">{errors.attachments?.message}</p>
            </div>

            <div className="col-lg-12">
               <label>Besondere Anforderungen (optional)</label>
               <textarea {...register("special_requirements")} placeholder="z. B. Wetterschutzdach, Treppenturm, Personenaufzug"></textarea>
               <p className="form_error">{errors.special_requirements?.message}</p>
            </div>

            <div className="col-lg-6">
               <label>Art der Umgebung (optional)</label>
               <input type="text" {...register("environment_type")} placeholder="z. B. bewohntes Haus, innerstädtisch" />
               <p className="form_error">{errors.environment_type?.message}</p>
            </div>
            <div className="col-lg-6">
               <label>Zugangssituation (optional)</label>
               <input type="text" {...register("access_situation")} placeholder="z. B. enge Zufahrt, Gehweg betroffen" />
               <p className="form_error">{errors.access_situation?.message}</p>
            </div>

            <div className="col-lg-12">
               <label>Weitere Informationen / Nachricht (optional)</label>
               <textarea {...register("message")} placeholder="Weitere Details"></textarea>
               <p className="form_error">{errors.message?.message}</p>
            </div>

            <div className="col-lg-12">
               <button type="submit" className="primary-btn-1 btn-hover">
                  Absenden &nbsp; | <i className="icon-right-arrow"></i>
                  <span style={{ top: "147.172px", left: "108.5px" }}></span>
               </button>
            </div>
         </div>
      </form>
   )
}

export default ContactForm
