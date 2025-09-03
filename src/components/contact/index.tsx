import HeaderThree from "@/layouts/headers/HeaderThree"
import BreadCrumb from '../common/BreadCrumb'
import ContactArea from './ContactArea'

const Contact = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title='Kontakt' title='Kontakt' bgImage="/assets/imgs/project/projektbild35.jpeg" />
            <ContactArea />
         </main>
      </>
   )
}

export default Contact
