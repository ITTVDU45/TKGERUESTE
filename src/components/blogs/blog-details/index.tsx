import BreadCrumb from "@/components/common/BreadCrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import FooterThree from "@/layouts/footers/FooterThree"
import BlogDetailsArea from "./BlogDetailsArea"

const BlogDetails = ({ slug }: { slug?: string }) => {

   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title="Blog Details" title="Blog Details" />
            <BlogDetailsArea slug={slug} />
         </main>
      </>
   )
}

export default BlogDetails
