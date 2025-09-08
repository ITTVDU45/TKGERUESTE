"use client"
import posts from '@/data/BlogPosts'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import ReactPaginate from "react-paginate";

const BlogArea = () => {

   // use central BlogPosts.ts data
   const blog = posts

   const itemsPerPage = 6;
   const [itemOffset, setItemOffset] = useState(0);
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = blog.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(blog.length / itemsPerPage);
   // click to request another page.
   const handlePageClick = (event: { selected: number }) => {
      const newOffset = (event.selected * itemsPerPage) % blog.length;
      setItemOffset(newOffset);
   };

   return (
      <section className="blog-section-one section-space">
         <div className="small-container">
            <div className="row g-4">
               {currentItems.map((item) => (
                  <div key={item.slug} className="col-xxl-4 col-xl-4 col-lg-6 mb-15">
                     <div className="blog-style-one">
                        <Link className="blog-image w-img" href={`/blog/${item.slug}`}>
                           <Image
                              src={item.thumb ? (item.thumb as any) : '/assets/imgs/blog/blog-4.jpg'}
                              alt={item.title}
                              width={600}
                              height={360}
                              className="img-fluid"
                           />
                        </Link>
                        <div className="blog-content">
                           <div className="post-meta">
                              <span className="p-relative"><Link href={`/blog/${item.slug}`}><i className="fal fa-user"></i>{item.author}</Link></span>
                              <span className="p-relative"><Link href={`/blog/${item.slug}`}><i className="fal fa-calendar-alt"></i>{item.date}</Link></span>
                           </div>
                           <hr />
                           <h5 className="blog-title mb-30"><Link href={`/blog/${item.slug}`}>{item.title}</Link></h5>
                           <p className="blog-text">{item.excerpt}</p>
                           <div className="blog-link">
                              <Link className="primary-btn-5 btn-hover" href={`/blog/${item.slug}`}>
                                 Mehr dazu &nbsp; | <i className="icon-right-arrow"></i>
                                 <span style={{ top: "147.172px", left: "108.5px" }}></span>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <div className="row">
               <div className="col-xxl-12">
                  <div className="pagination__wrapper mt-50">
                     <div className="bd-basic__pagination d-flex align-items-center justify-content-center">
                        <nav>
                           <ReactPaginate
                              className="pagination"
                              breakLabel="..."
                              nextLabel={<i className="far fa-arrow-right"></i>}
                              onPageChange={handlePageClick}
                              pageRangeDisplayed={3}
                              pageCount={pageCount}
                              previousLabel={<i className="far fa-arrow-left"></i>}
                              renderOnZeroPageCount={null}
                           />
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default BlogArea
