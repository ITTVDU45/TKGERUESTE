import project_data from "@/data/ProjectData"
import Image from "next/image"
import Link from "next/link"

const ProjectArea = () => {
   return (
      <section className="project-page-section section-space p-relative fix">
         <div className="small-container">
            <div className="row g-4">
               {project_data.map((item) => (
                  <div key={item.id} className="col-xxl-6 col-xl-6 col-lg-6 mb-15">
                     <div className="project-slider-area p-relative">
                        <figure className="image m-img">
                           <Image src={item.thumb} alt="" width={800} height={600} className="object-cover w-full h-auto" />
                        </figure>
                        {/* hover content removed per request */}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default ProjectArea
