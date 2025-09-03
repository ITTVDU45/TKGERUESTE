import Image from "next/image"
import Link from "next/link"

import sidebar_thumb from "@/assets/imgs/service/service-widget-1.jpg"

const sidebar_list: string[] = [
  "Industriegerüste",
  "Fassadengerüste",
  "Arbeits- & Schutzgerüste",
  "Raumgerüste",
  "Dachfanggerüste",
  "Beratung & Planung",
]

const ServiceSidebar = () => {
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
      <div className="col-xxl-4 col-xl-4 col-lg-4">
         <div className="service-sidebar">
            <aside>
               <div className="service-widget-1 mb-30">
                  <h5>Unsere Leistungen</h5>
                  <ul>
                     {sidebar_list.map((list, i) => {
                        const slug = slugify(list)
                        return (
                           <li key={i}>
                              <Link href={`/services/${slug}`}>
                                 <span>{list}</span>
                                 <span><i className="icon-arrow-right-double"></i></span>
                              </Link>
                           </li>
                        )
                     })}
                  </ul>
               </div>
               <div className="service-widget-2 mb-30">
                  <figure className="w-img">
                     <Image src={sidebar_thumb} alt="" />
                  </figure>
                  <div className="content bg-color-1 text-center">
                     <div className="icon-box p-relative">
                        <i className="fal fa-phone-volume"></i>
                     </div>
                     <h5>Noch Fragen? Jetzt Anrufen!</h5>
                     <a className="pt-25 pb-25 phone" href="tel:+2085550112">+208-555-0112</a>
                     <div className="btn-box">
                        <Link className="primary-btn-1 btn-hover" href="/contact">
                           Jetzt Angebot Anfragen &nbsp; | <i className="icon-right-arrow"></i>
                           <span style={{ top: "147.172px", left: "108.5px" }}></span>
                        </Link>
                     </div>
                  </div>
               </div>
               {/* company file removed by request */}
            </aside>
         </div>
      </div>
   )
}

export default ServiceSidebar
