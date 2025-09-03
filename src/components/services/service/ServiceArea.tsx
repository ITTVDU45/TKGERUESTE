import Image from "next/image"
import Link from "next/link"
import service_img1 from "@/assets/imgs/resources/service-tab-1.jpg"
import FaqArea from '@/components/pages/faq/FaqArea'
import Blog from '@/components/homes/home-one/Blog'
import ServiceProjectsClientWrapper from './ServiceProjectsClientWrapper';

const ServiceArea = () => {
   const services = [
      {
         id: 1,
         icon: "icon-roof-7",
         thumb: "/assets/imgs/project/projektbild10.jpeg",
         title: "Arbeits- & Schutzgerüste",
         desc: "Unsere Arbeits- und Schutzgerüste bieten maximale Sicherheit und Effizienz. Ob Montage, Renovierung oder Neubau – wir schaffen stabile Arbeitsflächen und schützen gleichzeitig das Baustellenumfeld.",
      },
      {
         id: 2,
         icon: "icon-roof-2",
         thumb: "/assets/imgs/project/projektbild53.jpeg",
         title: "Fassadengerüste",
         desc: "Fassadengerüste sind die Basis für Maler-, Putz- oder Sanierungsarbeiten an Gebäuden. Wir stellen Ihnen präzise angepasste Systeme bereit.",
      },
      {
         id: 3,
         icon: "icon-roof-8",
         thumb: "/assets/imgs/project/projektbild35.jpeg",
         title: "Dachfanggerüste",
         desc: "Unsere Dachfanggerüste bieten eine zuverlässige Auffanglösung bei Arbeiten an Dächern und erhöhen die Arbeitssicherheit.",
      },
      {
         id: 4,
         icon: "icon-roof-4",
         thumb: "/assets/imgs/project/projektbild38.jpeg",
         title: "Raumgerüste",
         desc: "Raumgerüste sind ideal für Innenräume wie Hallen oder Kirchen und ermöglichen sicheres Arbeiten an hohen Decken.",
      },
      {
         id: 5,
         icon: "icon-roof-6",
         thumb: "/assets/imgs/project/projektbild47.jpeg",
         title: "Industriegerüste",
         desc: "Robuste und belastbare Lösungen für Industrieprojekte – flexibel planbar und für großflächige Anlagen geeignet.",
      },
      {
         id: 6,
         icon: "icon-roof-5",
         thumb: "/assets/imgs/project/projektbild3.jpeg",
         title: "Beratung & Planung",
         desc: "Individuelle Planung und persönliche Beratung für maßgeschneiderte Gerüstkonzepte – von der Analyse bis zur Umsetzung.",
      },
   ];

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

   return (
      <section className="service-page-section section-space">
         <div className="small-container">
            <div className="service-tab-title-area mb-40">
               <div className="title-box">
                  <span className="section-sub-title text-gradient">Leistungen</span>
                  <h3 className="section-title mt-10">Unsere Leistungen im Gerüstbau</h3>
               </div>
               <Link className="primary-btn-4 btn-hover mt-20" href="/services">
                  Alle Leistungen &nbsp; | <i className="icon-right-arrow"></i>
               </Link>
            </div>

            <div className="row g-4">
               {services.map((item) => (
                  <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 mb-15">
                     <div className="service-slider-area p-relative">
                        <figure className="image w-img">
                           <Image src={item.thumb} alt="" width={800} height={520} className="object-cover w-full h-auto" />
                        </figure>
                        <div className="content">
                           <div className="icon-box">
                              <i className={item.icon}></i>
                           </div>
                           {
                              (() => {
                                 const slug = slugify(item.title);
                                 return (
                                    <>
                                       <h4 className="mb-15"><Link href={`/services/${slug}`}>{item.title}</Link></h4>
                                       <p className="mb-25">{item.desc}</p>
                                       <Link href={`/services/${slug}`} className="service-btn">Mehr dazu <i className="icon-arrow-right-double"></i></Link>
                                    </>
                                 );
                              })()
                           }
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            
            {/* Projects carousel (show above FAQ) */}
            <div className="mt-60">
               <ServiceProjectsClientWrapper />
            </div>

            {/* FAQ + Blog below ServiceArea */}
            <div className="mt-60">
               <FaqArea />
            </div>
            <div className="mt-60">
               <Blog style={false} />
            </div>
         </div>
      </section>
   )
}

export default ServiceArea
