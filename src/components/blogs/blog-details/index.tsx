import BreadCrumb from "@/components/common/BreadCrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import FooterThree from "@/layouts/footers/FooterThree"
import BlogDetailsArea from "./BlogDetailsArea"
import posts from '@/data/BlogPosts'

const BlogDetails = ({ slug }: { slug?: string }) => {
   const post = slug ? posts.find(p => p.slug === slug) : undefined

   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title={post ? post.title : "Blog Details"} title={post ? post.title : "Blog Details"} />
            <BlogDetailsArea slug={slug} />
         </main>
      </>
   )
}

export default BlogDetails
