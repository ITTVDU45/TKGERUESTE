import BreadCrumb from "@/components/common/BreadCrumb"
import ProjectArea from "./ProjectArea"
import HeaderThree from "@/layouts/headers/HeaderThree"
import FaqArea from '@/components/pages/faq/FaqArea'
import Blog from '@/components/homes/home-one/Blog'

const Project = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title="Unsere Projekte" title="Projekte" bgImage="/assets/imgs/project/projektbild35.jpeg" />
            <ProjectArea />
            <div className="mt-60">
               <FaqArea />
            </div>
            <div className="mt-60">
               <Blog style={false} />
            </div>
         </main>
      </>
   )
}

export default Project
