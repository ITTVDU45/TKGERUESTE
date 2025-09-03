import Link from "next/link";
import { Search, MapPin, Layers, CheckCircle } from 'lucide-react';

interface Datatype {
   id: number;
   icon: React.ReactNode;
   title: string;
   desc: string;
}

const process_data: Datatype[] = [
   {
      id: 1,
      icon: <Search size={28} />,
      title: "Ihre Anfrage",
      desc: "Alles beginnt mit Ihrer Kontaktaufnahme. Schildern Sie uns Ihr Vorhaben, und wir klären gemeinsam die Anforderungen und Rahmenbedingungen. So schaffen wir die Basis für eine erfolgreiche Zusammenarbeit.",
   },
   {
      id: 2,
      icon: <MapPin size={28} />,
      title: "Objektbesichtigung & Angebot",
      desc: "Unsere Experten besichtigen Ihr Objekt vor Ort, um alle Details zu erfassen. Auf Grundlage dieser Analyse erstellen wir ein transparentes und maßgeschneidertes Angebot – passgenau auf Ihre Anforderungen und Ihr Budget abgestimmt.",
   },
   {
      id: 3,
      icon: <Layers size={28} />,
      title: "Planung & Aufbau",
      desc: "Wir entwickeln ein präzises Gerüstkonzept nach höchsten Sicherheitsstandards. Anschließend erfolgt der fachgerechte Aufbau durch unser erfahrenes Team – schnell, effizient und zuverlässig, damit Ihre Arbeiten ohne Verzögerung beginnen können.",
   },
   {
      id: 4,
      icon: <CheckCircle size={28} />,
      title: "Abbau & Abschluss",
      desc: "Nach Projektende bauen wir das Gerüst professionell und zügig wieder ab. Dabei hinterlassen wir die Baustelle sauber, sicher und bereit für die nächste Phase Ihres Bauvorhabens.",
   },
];

interface PropType {
   style: boolean;
}

const Process = ({ style }: PropType) => {
   return (
      <section className={`work-process-section section-space p-relative ${style ? "is-dark" : ""}`} style={{ backgroundImage: `url(${style ? "/assets/imgs/shapes/shape-51.png" : "/assets/imgs/bg/process-bg.png"})` }}>
         <div className="shape-1" style={{ backgroundImage: `url(${style ? "/assets/imgs/shapes/shape-52.png" : "/assets/imgs/bg/line.png"})` }}></div>
         <div className="small-container">
            <div className="title-box text-center mb-60 wow fadeInLeft" data-wow-delay=".5s">
               <span className="section-sub-title text-gradient">Ablauf eines Gerüstbauprojektes – Schritt für Schritt</span>
               <h3 className="section-title mt-10">Von der ersten Anfrage bis zum professionellen Abbau</h3>
               <p className="mt-20">Von der ersten Anfrage bis zum professionellen Abbau begleiten wir Sie zuverlässig durch alle Phasen Ihres Projekts. Unsere strukturierte Vorgehensweise garantiert Sicherheit, Qualität und Termintreue.</p>
            </div>
            <div className="row g-4">
               {process_data.map((item) => (
                  <div key={item.id} className="col-xxl-3 col-xl-3 col-lg-3">
                     <div className="work-process-box text-center ">
                        <div className="icon-box p-relative">
                           <span className="icon-number" aria-hidden>{item.id}</span>
                        </div>
                        <div className="content">
                           <h4 className="pt-25 pb-25">{item.title}</h4>
                           <p>{item.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* CTA below the steps */}
            <div className="row">
               <div className="col-12 text-center mt-50">
                  <Link href="/contact" className="primary-btn-1 btn-hover brand-gradient animate-gradient-move">
                     Jetzt Angebot anfragen &nbsp; | <i className="icon-right-arrow"></i>
                     <span style={{ top: "147.172px", left: "108.5px" }}></span>
                  </Link>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Process
