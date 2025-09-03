import Link from "next/link";
import Image from "next/image";
import BlogSidebar from "../blog-sidebar";
import BlogComments from "./BlogComments";
import BlogForm from "@/components/forms/BlogForm";

import img_1 from "@/assets/imgs/blog/blog-details-1.jpg"
import img_2 from "@/assets/imgs/blog/blog-details-2.jpg"
import img_3 from "@/assets/imgs/blog/blog-details-3.jpg"

interface DataType {
   title_1: string;
   desc_1: string;
   desc_2: string;
   desc_3: string;
   desc_4: string;
   desc_5: string;
   blockquote: string;
   tags: string[];
}

import posts from '@/data/BlogPosts'

function renderMarkdownToHtml(md: string) {
   if (!md) return ''
   const lines = md.split('\n')
   let out = ''
   for (let i = 0; i < lines.length; i++) {
     const line = lines[i].trim()
     if (line.startsWith('### ')) out += `<h3>${line.replace('### ', '')}</h3>`
     else if (line.startsWith('## ')) out += `<h2>${line.replace('## ', '')}</h2>`
     else if (line.startsWith('# ')) out += `<h1>${line.replace('# ', '')}</h1>`
     else if (line === '') out += `<p></p>`
     else out += `<p>${line}</p>`
   }
   return out
}

const BlogDetailsArea = ({ slug }: { slug?: string }) => {
   const post = slug ? posts.find(p => p.slug === slug) : undefined
   if (!post) return null
   const contentHtml = renderMarkdownToHtml(post.content)

   return (
      <section className="blog-details-page section-space">
         <div className="small-container">
            <div className="row">
               <div className="col-xxl-8 col-xl-8 col-lg-8">
                  <h3 className="blog-details-title mb-30 mt-20"><Link href="#">{post.title}</Link></h3>
                  <p className="mb-30">{post.excerpt}</p>
                  <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
               </div>
               <BlogSidebar />
            </div>
         </div>
      </section>
   )
}

export default BlogDetailsArea
