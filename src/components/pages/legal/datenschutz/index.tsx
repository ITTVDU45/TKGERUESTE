import BreadCrumb from "@/components/common/BreadCrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import DatenschutzContent from "./DatenschutzContent"

const Datenschutz = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <BreadCrumb sub_title="Datenschutzerklärung" title="Datenschutzerklärung" bgImage="/assets/imgs/project/projektbild47.jpeg" />
        <DatenschutzContent />
      </main>
    </>
  )
}

export default Datenschutz
