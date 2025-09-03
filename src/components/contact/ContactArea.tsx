import Link from "next/link";
import ContactForm from "../forms/ContactForm";
// map will be embedded directly below as full-width iframe

interface DataType {
   id: number;
   icon: string;
   title: string;
   info: string;
   link: string;
}

const contact_data: DataType[] = [
   {
      id: 1,
      icon: "fat fa-location-dot",
      title: "Adresse:",
      info: "Düsseldorfer Landstraße 59, 47249 Duisburg",
      link: "https://maps.app.goo.gl/jtHtizvYtDCnuNV49",
   },
   {
      id: 2,
      icon: "fat fa-phone-volume",
      title: "Telefonnummer:",
      info: "+49 178 268 6000",
      link: "tel:01782686000",
   },
   {
      id: 3,
      icon: "fat fa-envelope",
      title: "E-Mail:",
      info: "info@tk-gerueste.de",
      link: "mailto:info@tkgerueste.de",
   },
];

const ContactArea = () => {
   return (
      <section className="contact-page-section section-space">
         <div className="small-container">
            <div className="row">
               <div className="col-xxl-4 col-xl-4 col-lg-4">
                  <div className="contact-p-info-area">
                     {contact_data.map((item) => (
                        <div key={item.id} className="contact-box">
                           <div className="icon-1">
                              <i className={item.icon}></i>
                           </div>
                           <div className="info">
                              <span>{item.title}</span>
                              <h4><Link href={item.link}>{item.info}</Link></h4>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="col-xxl-8 col-xl-8 col-lg-8">
                  <div className="contact-page-form-area">
                     <div className="title-box mb-40 wow fadeInLeft" data-wow-delay=".5s">
                        <span className="section-sub-title">Kontakt aufnehmen</span>
                        <h3 className="section-title mt-10">Jetzt Anfrage stellen!</h3>
                     </div>
                     <div className="contact-page-form">
                        <ContactForm />
                     </div>
                  </div>
               </div>

            </div>
         </div>

         {/* Full-width map below small-container */}
         <div className="map-fullwidth">
            <iframe src="https://www.google.com/maps?q=D%C3%BCsseldorfer+Landstra%C3%9Fe+59,+47249+Duisburg&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
         </div>
      </section>
   )
}

export default ContactArea
