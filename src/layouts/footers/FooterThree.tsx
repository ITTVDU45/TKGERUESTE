"use client"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { JSX } from "react"

// logo from public
import img_1 from "@/assets/imgs/blog/blog-s-1.jpg"
import img_2 from "@/assets/imgs/blog/blog-s-2.jpg"
import posts from '@/data/BlogPosts'

interface DataType {
   id: number;
   thumb: StaticImageData;
   title: JSX.Element;
   date: string;
}

const latest_post_data: DataType[] = [
   {
      id: 1,
      thumb: img_1,
      title: (<>Best Repairing <br /> soakage Roof..</>),
      date: "05 Dec, 2024"
   },
   {
      id: 2,
      thumb: img_2,
      title: (<>Doing Things Currently..</>),
      date: "05 Dec, 2024"
   },
];

const FooterThree = () => {

   return (
      <>
         <footer>
            <div className="footer-main bg-color-1">
               <div className="footer-top section-space-medium">
                  <div className="small-container">
                     <div className="row g-4">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                           <div className="footer-widget-1">
                              <figure className="image">
                                 <Image src="/assets/imgs/logo/tkgeruestelogo.png" alt="tkgeruestelogo" width={160} height={40} />
                              </figure>
                              <p className="mt-40 mb-40">TK Gerüste GmbH – Ihr Partner für Gerüstbau in Duisburg und NRW. Seit 2022 stehen wir für sichere, flexible und termintreue Gerüstlösungen – von Arbeits- und Schutzgerüsten über Fassaden- und Dachfanggerüste bis hin zu Raum- und Industriegerüsten. Mit Erfahrung, Qualität und individueller Planung schaffen wir die Basis für erfolgreiche Bauprojekte.</p>
                              <div className="footer-socials">
                                 <span><Link href="#"><i className="fab fa-facebook-f"></i></Link></span>
                                 <span><Link href="#"><i className="fab fa-twitter"></i></Link></span>
                                 <span><Link href="#"><i className="fab fa-linkedin-in"></i></Link></span>
                                 <span><Link href="#"><i className="fab fa-youtube"></i></Link></span>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                           <div className="footer-widget-1">
                              <figure className="image">
                                 <Image src="/assets/imgs/logo/tkgeruestelogo.png" alt="tkgeruestelogo" width={160} height={40} />
                              </figure>
                              <p className="mt-40 mb-40">TK Gerüste GmbH – Ihr Partner für Gerüstbau in Duisburg und NRW. Seit 2022 stehen wir für sichere, flexible und termintreue Gerüstlösungen – mit Erfahrung, Qualität und individueller Planung.</p>
                              <div className="footer-socials">
                                 <span><Link href="#"><i className="fab fa-facebook-f"></i></Link></span>
                                 <span><Link href="#"><i className="fab fa-twitter"></i></Link></span>
                                 <span><Link href="#"><i className="fab fa-linkedin-in"></i></Link></span>
                                 <span><Link href="#"><i className="fab fa-youtube"></i></Link></span>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                           <div className="footer-widget-2">
                              <h4 className="mb-20 footer-title">Quicklinks</h4>
                              <ul className="footer-links">
                                 <li><Link href="/">Startseite</Link></li>
                                 <li><Link href="/about">Über uns</Link></li>
                                 <li><Link href="/services">Leistungen</Link></li>
                                 <li><Link href="/projects">Projekte</Link></li>
                                 <li><Link href="/contact">Kontakt</Link></li>
                                 <li><Link href="/blog">Blog</Link></li>
                                 <li><Link href="/faq">FAQ</Link></li>
                              </ul>
                           </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                           <div className="footer-widget-4">
                              <h4 className="mb-20 footer-title">Weitere Beiträge</h4>
                              <div className="latest-post-widget">
                                 {posts.slice(0,3).map((post) => (
                                    <div className="post-item" key={post.slug}>
                                       <Link href={`/blog/${post.slug}`} className="d-flex gap-3 items-center">
                                          <div style={{width:90, height:60, background:'#223'}} className="image-placeholder" />
                                          <div>
                                             <h6 className="mb-2">{post.title}</h6>
                                             <span className="text-sm">{post.date}</span>
                                          </div>
                                       </Link>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="small-container">
                  <div className="footer-bottom pt-30 pb-30">
                     <div className="left-area">
                        <span>© All Copyright 2025 by <Link href="/">TK Gerüste GmbH</Link></span>
                     </div>
                     <div className="right-area">
                        <span><Link href="#">Terms & Condition</Link></span>
                        <span><Link href="#">Privacy Policy</Link></span>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   )
}

export default FooterThree
