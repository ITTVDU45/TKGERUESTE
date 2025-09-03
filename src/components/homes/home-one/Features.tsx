import Link from "next/link";
import { MapPin, Phone, FileText, Clock } from "lucide-react";

interface DataType {
   id: number;
   icon: React.ReactNode;
   title: string;
   desc: string;
}

const feature_data: DataType[] = [
   {
      id: 1,
      icon: <MapPin size={22} />,
      title: "Unser Standort",
      desc: "Besuchen Sie uns direkt vor Ort in [Straße, PLZ Ort]. Wir beraten Sie gerne persönlich und zeigen Ihnen unsere Lösungen.",
   },
   {
      id: 2,
      icon: <Phone size={22} />,
      title: "Direkt erreichbar",
      desc: "Rufen Sie uns an unter [Telefonnummer]. Unser Team ist schnell für Sie da und beantwortet alle Fragen rund um Ihr Bauvorhaben.",
   },
   {
      id: 3,
      icon: <FileText size={22} />,
      title: "Individuelles Angebot",
      desc: "Fordern Sie mit wenigen Klicks Ihr persönliches Angebot an. Transparent, fair und exakt auf Ihr Projekt zugeschnitten.",
   },
   {
      id: 4,
      icon: <Clock size={22} />,
      title: "Unsere Zeiten",
      desc: "Wir sind für Sie da: Mo–Fr von 7:00–17:00 Uhr. Vereinbaren Sie auch gerne individuelle Termine nach Absprache.",
   },
]

interface PropType {
   style: boolean;
}

const Features = ({ style }: PropType) => {
   return (
      <section className={`features-section pt-80 pb-80 p-relative ${style ? "is-dark" : ""}`} style={{ background: 'white' }}>
         <div className="bg-shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-27.png)` }}></div>
         <div className="bg-shape-2" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-28.png)` }}></div>
         <div className="small-container">
            <div className="row g-4">
               {feature_data.map((item) => (
                  <div key={item.id} className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                     <div className={`features-box-area p-relative wow fadeInLeft ${style ? "bg-color-3" : ""}`} data-wow-delay="500ms">
                        {/* decorative shapes removed per request */}
                        {/* keep icon-box standard (no brand-gradient) to preserve original design */}
                        <div className="icon-box" style={{ padding: 12, width: 44, height: 44, borderRadius: 10, background: 'var(--theme-color-1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           <div style={{ color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{item.icon}</div>
                        </div>
                        <h5 className="mt-20 mb-10"><Link href="/services" style={{ color: "var(--brand-ink)" }}>{item.title}</Link></h5>
                        <p style={{ color: "rgba(47,47,47,0.8)" }}>{item.desc}</p>
                        {/* action buttons per card */}
                        {item.title === "Direkt erreichbar" && (
                           <div className="mt-20">
                              <Link href="tel:+2085550112" className="primary-btn-1 btn-hover brand-gradient btn-sm">
                                 Jetzt anrufen &nbsp; | <i className="icon-right-arrow"></i>
                              </Link>
                           </div>
                        )}
                        {item.title === "Individuelles Angebot" && (
                           <div className="mt-20">
                              <Link href="/contact" className="primary-btn-1 btn-hover brand-gradient btn-sm">
                                 Angebot anfragen &nbsp; | <i className="icon-right-arrow"></i>
                              </Link>
                           </div>
                        )}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Features
