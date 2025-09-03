import BreadCrumb from "@/components/common/BreadCrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import FooterThree from "@/layouts/footers/FooterThree"
import BlogArea from "./BlogArea"

const BlogGrid = () => {
  return (
    <>
      <HeaderThree />
      <main>
         <BreadCrumb sub_title="Neuigkeiten & Ratgeber" title="News & Ratgeber" />
         <BlogArea />
      </main>
    </>
  )
}

export default BlogGrid
