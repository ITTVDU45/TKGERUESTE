import BreadCrumb from "@/components/common/BreadCrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import FooterThree from "@/layouts/footers/FooterThree"
import ProjectDetailsArea from "./ProjectDetailsArea"

const ProjectDetails = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title="Project Details" title="Project Details" bgImage="/assets/imgs/project/projektbild35.jpeg" />
            <ProjectDetailsArea />
         </main>
      </>
   )
}

export default ProjectDetails
