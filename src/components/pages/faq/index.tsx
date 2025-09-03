import BreadCrumb from "@/components/common/BreadCrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import FooterThree from "@/layouts/footers/FooterThree"
import FaqArea from "./FaqArea"

const Faq = () => {
  return (
    <>
      <HeaderThree />
      <main>
         <BreadCrumb sub_title="Häufig gestellte Fragen" title="Häufig gestellte Fragen" bgImage="/assets/imgs/project/projektbild35.jpeg" />
         <FaqArea />
      </main>
    </>
  )
}

export default Faq
