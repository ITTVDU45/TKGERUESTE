import Image from "next/image";
import Link from "next/link";
import Count from "@/components/common/Count";

import about_1 from "@/assets/imgs/banner/avout sektion.png"
import about_2 from "@/assets/imgs/banner/about 2.png"

interface DataType {
   sub_title: string;
   title: string;
   desc: string;
   feature_list: {
      id: number;
      list: string[];
   }[]
}

const about_data: DataType = {
   sub_title: "Über uns",
   title: "TK Gerüste GmbH – Ihr Partner für Gerüstbau in Duisburg und NRW.",
   desc: "Seit 2022 stehen wir für sichere, flexible und termingerechte Gerüstlösungen. Eingetragen im Handelsregister Köln (HRB 119341) und mit Sitz in Duisburg, betreuen wir Bauunternehmen, Handwerksbetriebe und private Bauherren mit maßgeschneiderten Konzepten – von Fassaden- über Raum- bis zu Sondergerüsten.\n\nTK Gerüste GmbH – für Neubau, Sanierung und Industrieprojekte. Jetzt Kontakt aufnehmen und Angebot anfordern!",
   feature_list: [
      {
         id: 1,
         list: [
            "Erfahrung seit 2022 – zahlreiche erfolgreich abgeschlossene Projekte",
            "Geprüfte Qualität & Sicherheit – nur modernste Materialien und Systeme",
            "Individuelle Lösungen – kein Standard, sondern maßgeschneiderte Konzepte",
         ],
      },
      {
         id: 2,
         list: [
            "Zuverlässigkeit & Termintreue – pünktlich von Aufbau bis Abbau",
            "Regional stark – Duisburg, NRW & deutschlandweite Einsätze möglich",
            "Persönliche Beratung – direkter Draht zum Geschäftsführer",
         ],
      },
   ],
}

const { sub_title, title, desc, feature_list } = about_data;

interface PropType {
   style: boolean;
}

const About = ({ style }: PropType) => {
   return (
      <section className={`about-2-section p-relative fix section-space ${style ? "bg-color-3 is-dark" : ""}`}>
         <div className="bg-shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-30.png)` }}></div>
         <div className="bg-shape-2" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-31.png)` }}></div>
         <div className="small-container">
            <div className="row">
               <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
               <div className="about-2-image-area p-relative wow fadeInLeft" data-wow-delay="500ms">
                     <figure className="main-image m-img">
                        <Image src={about_1} alt="" />
                     </figure>
                     <div className="small-image" style={{ width: 220 }}>
                        <Image src={about_2} alt="" width={220} height={165} />
                     </div>
                     <div className="icon-box">
                        <div className="icon award-icon" style={{ padding: 12, borderRadius: 12, background: '#fff' }}>
                           <i className="icon-prize-1" style={{ color: 'var(--theme-color-1)' }}></i>
                        </div>
                        <div className="content">
                           <h3 className="mb-10" style={{ fontSize: '1.5rem', fontWeight: 700 }}>Gerüstbauprojekte in Duisburg</h3>
                        </div>
                     </div>
                     {/* decorative shape removed */}
                  </div>
               </div>
               <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                  <div className="about-2-content-area pl-50">
                     <div className="title-box mb-35 wow fadeInRight" data-wow-delay=".5s">
                        <span className="section-sub-title text-gradient">{sub_title}</span>
                        <h3 className="section-title mt-10">{title}</h3>
                     </div>
                     <p className="mb-35">{desc}</p>
                     <div className="row mb-45">
                        {feature_list.map((item) => (
                           <div key={item.id} className="col-lg-6">
                              <ul className="list-area">
                                 {item.list.map((list, i) => (
                                    <li key={i} className="mb-10">{list}</li>
                                 ))}
                              </ul>
                           </div>
                        ))}
                     </div>
                     <div className="about-2-btn-area">
                        <Link className="primary-btn-1 btn-hover brand-gradient animate-gradient-move" href="/about">
                           Über Uns &nbsp; | <i className="icon-right-arrow"></i>
                           <span style={{ top: "147.172px", left: "108.5px" }}></span>
                        </Link>
                        <div className="call-us">
                           <div className="icon-1 brand-gradient animate-gradient-move" style={{ padding: 8, borderRadius: 999 }}>
                              <i className="fal fa-phone-volume" style={{ color: 'white' }}></i>
                           </div>
                           <div className="content p-relative">
                              <span>Jetzt Anrufen</span>
                              <h5><Link href="tel:2085550112">+49 178 268 60 00</Link></h5>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About
