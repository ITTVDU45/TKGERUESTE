"use client"
import Link from "next/link"
// Category removed per design
import RecentPost from "./RecentPost"
import Tags from "./Tags"
import Image from "next/image"
import posts from '@/data/BlogPosts'

import img_1 from "@/assets/imgs/project/projektbild16.jpeg"

const BlogSidebar = () => {
   return (
      <div className="col-xxl-4 col-xl-4 col-lg-4">
         <div className="blog-sidebar">
            <aside>
               <RecentPost />
               <Tags />
               <div className="blog-widget-4 mb-30">
                  <h5 className="blog-widget-title p-relative mb-45">Alle Beiträge</h5>
                  <ul className="all-posts-list">
                     {posts.map((p) => (
                        <li key={p.slug}><Link href={`/blog/${p.slug}`}>{p.title}</Link></li>
                     ))}
                  </ul>
               </div>
               <div className="service-widget-2 mb-30">
                  <figure className="w-img">
                     <Image src={img_1} alt="" />
                  </figure>
                  <div className="content bg-color-1 text-center">
                     <div className="icon-box p-relative">
                        <i className="fal fa-phone-volume"></i>
                     </div>
                     <h5>Noch Fragen?</h5>
                     <p className="mb-15">Wir beraten Sie persönlich und finden die passende Lösung für Ihr Projekt. Rufen Sie uns gern an oder fordern Sie ein Angebot an.</p>
                     <a className="pt-25 pb-25 phone" href="tel:2085550112">Jetzt Anrufen</a>
                     <div className="btn-box">
                        <Link className="primary-btn-1 btn-hover" href="/contact">
                           Angebot Anfragen &nbsp; | <i className="icon-right-arrow"></i>
                           <span style={{ top: "147.172px", left: "108.5px" }}></span>
                        </Link>
                     </div>
                  </div>
               </div>
            </aside>
         </div>
      </div>
   )
}

export default BlogSidebar
