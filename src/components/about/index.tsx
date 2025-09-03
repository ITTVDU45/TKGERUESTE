import AboutHome from "@/components/homes/home-one/About"
import BreadCrumb from "../common/BreadCrumb"
import Process from "../homes/home-one/Process"
import Map from "./Map"
import HeaderThree from "@/layouts/headers/HeaderThree"
import FooterThree from "@/layouts/footers/FooterThree"

const About = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title="ÜBER UNS" title="ÜBER UNS" bgImage="/assets/imgs/project/projektbild35.jpeg" />
            <AboutHome style={false} />
            <Process style={false} />
            <Map />
         </main>
      </>
   )
}

export default About
