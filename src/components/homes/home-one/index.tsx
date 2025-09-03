import HeaderOne from "@/layouts/headers/HeaderOne"
import Banner from "./Banner"
import Features from "./Features"
import About from "./About"
import Service from "./Service"
import Process from "./Process"
import Project from "./Project"
import Benefits from "./Benefits"
import Testimonial from "./Testimonial"
// HelpForm removed from homepage
// import HelpForm from "./HelpForm"
import Blog from "./Blog"
// Counter removed from home page
// import Counter from "./Counter"
import FooterOne from "@/layouts/footers/FooterOne"

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Banner />
        <Features style={true} />
        <About style={false} />
        <Service style={false} />
        <Process style={false} />
        <Project style={false} />
        <Benefits />
        <Testimonial />
        <Blog style={false} />
      </main>
    </>
  )
}

export default HomeOne
