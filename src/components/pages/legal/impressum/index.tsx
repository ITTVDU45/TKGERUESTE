import BreadCrumb from "@/components/common/BreadCrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import ImpressumContent from "./ImpressumContent"

const Impressum = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <BreadCrumb sub_title="Impressum" title="Impressum" bgImage="/assets/imgs/project/projektbild38.jpeg" />
        <ImpressumContent />
      </main>
    </>
  )
}

export default Impressum
