import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import posts from '@/data/BlogPosts'

interface DataType {
   id: number,
   page: string;
   thumb?: StaticImageData;
   author: string;
   date: string;
   title: string;
   desc?: string;
   col?: string;
   class?: string;
}

// Use central posts data for homepage teasers
// We'll render the first two posts: main (large) and secondary (small)
const blog_data = posts

interface PropType {
   style: boolean;
}

const Blog = ({ style }: PropType) => {
   return (
      <section className={`blog-two-section section-space ${style ? "bg-color-3 is-dark" : ""}`}>
         <div className="small-container">
            <div className="blog-two-title-area mb-60">
               <div className="title-box wow fadeInLeft" data-wow-delay=".5s">
                  <span className="section-sub-title text-gradient">Neuigkeiten</span>
                  <h3 className="section-title mt-10">Neuigkeiten & Ratgeber</h3>
               </div>
               <Link className="primary-btn-1 btn-hover brand-gradient animate-gradient-move" href="/blog-grid">
                  Alle Neuigkeiten &nbsp; | <i className="icon-right-arrow"></i>
                  <span style={{ top: "147.172px", left: "108.5px" }}></span>
               </Link>
            </div>
            <div className="row g-4">
               {(
                  // pick up to first 2 posts
                  blog_data.slice(0, 2).map((item, idx) => {
                     const isMain = idx === 0
                     const col = isMain ? 'col-xxl-8 col-xl-8 col-lg-12' : 'col-xxl-4 col-xl-4 col-lg-12'
                     return (
                        <div key={item.slug} className={col}>
                           <div className={`blog-style-two`}>
                              {(
                                 (item as any).thumb ? (
                                    <Link className="blog-image w-img" href={`/blog/${item.slug}`}>
                                       <Image src={(item as any).thumb as any} alt={item.title} width={800} height={450} />
                                    </Link>
                                 ) : (
                                    <Link className="blog-image w-img" href={`/blog/${item.slug}`}>
                                       <Image src="/assets/imgs/project/projektbild53.jpeg" alt={item.title} width={800} height={450} />
                                    </Link>
                                 )
                              )}
                              <div className="blog-content-area">
                                 <div className="post-meta">
                                    <span className="p-relative"><Link href={`/blog/${item.slug}`}><i className="fal fa-user"></i>{item.author}</Link></span>
                                    <span className="p-relative"><Link href={`/blog/${item.slug}`}><i className="fal fa-calendar-alt"></i>{item.date}</Link></span>
                                 </div>
                                 <hr />
                                 <h5 className="blog-title"><Link href={`/blog/${item.slug}`}>{item.title}</Link></h5>
                                 <p className="blog-text">{item.excerpt}</p>
                                 <Link className="primary-btn-5 btn-hover" href={`/blog/${item.slug}`}>
                                    Mehr dazu &nbsp; | <i className="icon-right-arrow"></i>
                                    <span style={{ top: "147.172px", left: "108.5px" }}></span>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     )
                  })
               )}
            </div>
         </div>
      </section>
   )
}

export default Blog
