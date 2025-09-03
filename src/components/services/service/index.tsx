import BreadCrumb from "@/components/common/BreadCrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import ServiceArea from "./ServiceArea"
// Counter removed from service page
// import Counter from "@/components/homes/home-one/Counter"

const Service = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title="Unsere Leistungen" title="Leistungen" bgImage="/assets/imgs/project/projektbild35.jpeg" />
            <ServiceArea />
         </main>
      </>
   )
}

export default Service
