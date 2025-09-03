"use client"
import Link from "next/link"
import { useState } from "react";
import Image from "next/image";

interface TabData {
   icon: string;
   title: string;
}
const tab_title: TabData[] = [
   { icon: "icon-roof-7", title: "Arbeits- & Schutzgerüste" },
   { icon: "icon-roof-2", title: "Fassadengerüste" },
   { icon: "icon-roof-8", title: "Dachfanggerüste" },
   { icon: "icon-roof-4", title: "Raumgerüste" },
   { icon: "icon-roof-6", title: "Industriegerüste" },
   { icon: "icon-roof-5", title: "Beratung & Planung" },
];

interface DataType {
   id: number;
   thumb: string;
   title: string;
   desc: string;
   list: string[];
}

const service_data: DataType[] = [
   {
      id: 1,
      thumb: "/assets/imgs/project/projektbild10.jpeg",
      title: "Sichere Plattformen für Bauarbeiten",
      desc: "Unsere Arbeits- und Schutzgerüste bieten maximale Sicherheit und Effizienz. Ob Montage, Renovierung oder Neubau – wir schaffen stabile Arbeitsflächen und schützen gleichzeitig das Baustellenumfeld. Mit individuellen Lösungen und modernen Systemen gewährleisten wir reibungslose Abläufe und höchste Sicherheit.",
      list: [],
   },
   {
      id: 2,
      thumb: "/assets/imgs/project/projektbild53.jpeg",
      title: "Stabilität für jede Fassade",
      desc: "Fassadengerüste sind die Basis für Maler-, Putz- oder Sanierungsarbeiten an Gebäuden. Wir stellen Ihnen präzise angepasste Systeme bereit, die Ihre Arbeiten erleichtern und Sicherheit in jeder Höhe gewährleisten. Dank unserer Erfahrung profitieren Sie von einem schnellen Aufbau und flexibler Anpassung an jede Gebäudestruktur.",
      list: [],
   },
   {
      id: 3,
      thumb: "/assets/imgs/project/projektbild35.jpeg",
      title: "Schutz vor Absturz – Sicherheit am Dach",
      desc: "Unsere Dachfanggerüste bieten eine zuverlässige Auffanglösung bei Arbeiten an Dächern. Sie verhindern Absturzgefahren und sichern das Baustellenpersonal optimal ab. Mit Fokus auf Prävention tragen wir aktiv dazu bei, Unfälle zu vermeiden und die Arbeitssicherheit zu erhöhen.",
      list: [],
   },
   {
      id: 4,
      thumb: "/assets/imgs/project/projektbild38.jpeg",
      title: "Flexibilität für Innenräume",
      desc: "Raumgerüste sind die ideale Lösung für Arbeiten in Hallen, Kirchen, Industrieanlagen oder schwer zugänglichen Innenbereichen. Sie ermöglichen sicheres Arbeiten an hohen Decken, Wänden oder Installationen. Mit modularen Aufbauten sorgen wir für passgenaue Gerüstsysteme auch in komplexen Räumen.",
      list: [],
   },
   {
      id: 5,
      thumb: "/assets/imgs/project/projektbild47.jpeg",
      title: "Robuste Lösungen für die Industrie",
      desc: "Unsere Industriegerüste erfüllen höchste Anforderungen in Produktionsstätten, Kraftwerken oder Spezialprojekten. Sie sind extrem belastbar, flexibel planbar und für großflächige Anlagen geeignet. Damit bieten wir eine zuverlässige Basis für Instandhaltung, Umbauten und komplexe industrielle Bauvorhaben.",
      list: [],
   },
   {
      id: 6,
      thumb: "/assets/imgs/project/projektbild3.jpeg",
      title: "Individuell & professionell",
      desc: "Ein gelungenes Projekt beginnt mit einer durchdachten Planung. Wir beraten Sie von Anfang an persönlich, analysieren die Gegebenheiten vor Ort und entwickeln maßgeschneiderte Konzepte. So garantieren wir einen effizienten, sicheren und kostensparenden Gerüstbau – exakt nach Ihren Anforderungen.",
      list: [],
   },
];

interface PropType {
   style: boolean;
}

const Service = ({ style }: PropType) => {

   const [activeTab, setActiveTab] = useState(0);

   // Create slug for read-more links
   const slugify = (s: string) =>
      s
         .toLowerCase()
         .replace(/ä/g, "ae")
         .replace(/ö/g, "oe")
         .replace(/ü/g, "ue")
         .replace(/ß/g, "ss")
         .replace(/&/g, " ")
         .replace(/[^a-z0-9\s-]/g, "")
         .trim()
         .replace(/\s+/g, "-")
         .replace(/-+/g, "-");

   // Handle tab click event
   const handleTabClick = (index: number) => {
      setActiveTab(index);
   };

   /* Small modular subcomponents so tabs + panels are decoupled */
   const ServiceTabButton = ({ tab, index, isActive }: { tab: TabData; index: number; isActive: boolean }) => (
      <li key={index} className="nav-item" role="presentation">
         <button
            type="button"
            role="tab"
            id={`tab-${index}`}
            aria-controls={`panel-${index}`}
            aria-selected={isActive}
            className={`nav-link ${isActive ? "active tab-active-gradient" : ""}`}
            onClick={() => handleTabClick(index)}
            style={{ cursor: "pointer" }}
         >
            <div className="icon-box">
               <i className={tab.icon}></i>
            </div>
            {tab.title}
         </button>
      </li>
   );

   const ServicePanel = ({ item, index }: { item: DataType; index: number }) => {
      // Render only the active panel to avoid CSS visibility issues
      if (activeTab !== index) return null;
      const slug = slugify(item.title);
      return (
         <div role="tabpanel" id={`panel-${index}`} aria-labelledby={`tab-${index}`} className={`tab-pane fade show active`}>
            <div className="service-tab-content p-relative">
               {/* decorative tab-bg-shape removed */}
               <figure className="image p-relative">
                  <Image src={item.thumb} alt="" width={800} height={520} className="object-cover w-full h-auto" />
               </figure>
               <div className="content p-relative">
                  <h4>{item.title}</h4>
                  <p className="pt-15 pb-10">{item.desc}</p>
                  <ul className="tab-list-content">
                     {item.list.map((list, i) => (
                        <li key={i}>{list}</li>
                     ))}
                  </ul>
                  <Link className="primary-btn-1 btn-hover mt-20" href={`/services/${slug}`}>
                     Mehr dazu &nbsp; | <i className="icon-right-arrow"></i>
                     <span style={{ top: "147.172px", left: "108.5px" }}></span>
                  </Link>
               </div>
            </div>
         </div>
      );
   };

   return (
      <section className={`service-tab-section section-space p-relative ${style ? "is-dark" : ""}`} style={{ background: 'rgb(16,32,57)' }}>
         <div className="bg-image" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-35.png)` }}></div>
         {/* decorative background shapes removed */}
         <div className="small-container">
            <div className="service-tab-title-area mb-70">
               <div className="title-box wow fadeInLeft" data-wow-delay=".5s">
                  <span className="section-sub-title text-gradient">Leistungen</span>
      desc: "Unsere Arbeits- und Schutzgerüste bieten maximale Sicherheit und Effizienz. Ob Montage, Renovierung oder Neubau – wir schaffen stabile Arbeitsflächen und schützen gleichzeitig das Baustellenumfeld. Mit individuellen Lösungen und modernen Systemen gewährleisten wir reibungslose Abläufe und höchste Sicherheit.",
                  <h3 className="section-title mt-10 text-white p-relative">Unsere Leistungen - im Gerüstbau!</h3>
               </div>
               <Link className="primary-btn-4 btn-hover mt-20" href="/services">
                  alle Leistungen &nbsp; | <i className="icon-right-arrow"></i>
                  <span style={{ top: "147.172px", left: "108.5px" }}></span>
               </Link>
            </div>

            <div className="row">
               <div className="col-xxl-4 col-xl-4 col-lg-4">
                  <div className="service-tab-btn-area wow fadeInLeft" data-wow-delay="500ms">
                     <ul className="nav nav-tabs" id="myTab" role="tablist">
                        {tab_title.map((tab, index) => (
                           <ServiceTabButton tab={tab} index={index} isActive={activeTab === index} key={index} />
                        ))}
                     </ul>
                  </div>
               </div>

               <div className="col-xxl-8 col-xl-8 col-lg-8">
                  <div className="service-tab-details-area">
                     <div className="tab-content" id="myTabContent">
                        {service_data.map((item, index) => (
                           <ServicePanel item={item} index={index} key={item.id} />
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Gallery carousel under tabs */}
         {/* Gallery carousel removed from home; moved to Services page */}

      </section>
   )
}

export default Service
