import BreadCrumb from "@/components/common/BreadCrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import FooterThree from "@/layouts/footers/FooterThree"
import ServiceDetailsArea from "./ServiceDetailsArea"

const ServiceDetails = ({ initialSlug }: { initialSlug?: string }) => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title="Service Details" title="Service Details" />
            <ServiceDetailsArea initialSlug={initialSlug} />
         </main>
      </>
   )
}

export default ServiceDetails
