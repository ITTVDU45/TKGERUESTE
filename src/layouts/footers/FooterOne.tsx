"use client"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import dynamic from 'next/dynamic'
import { useState } from "react"
const Lightbox = dynamic(() => import('yet-another-react-lightbox'), { ssr: false })

import gallery_1 from "@/assets/imgs/footer/footer-1.png"
import gallery_2 from "@/assets/imgs/footer/footer-2.png"
import gallery_3 from "@/assets/imgs/footer/footer-3.png"
import gallery_4 from "@/assets/imgs/footer/footer-4.png"
import posts from '@/data/BlogPosts'

const gallery_data: StaticImageData[] = [gallery_1, gallery_2, gallery_3, gallery_4];

// use latest posts from BlogPosts data
const footerPosts = posts.slice(0, 3);

const FooterOne = () => {

   const [open, setOpen] = useState(false)
   const [index, setIndex] = useState(0)

   const handleOpen = (i: number) => {
      setIndex(i)
      setOpen(true)
   }

   const slides = gallery_data.map((img) => ({
      src: img.src,
   }))

   return (
      <>
         <footer>
            <div className="footer-main bg-color-1 p-relative">
               <div className="footer-shape-1" style={{ backgroundImage: `url(/assets/imgs/footer/shape-f-1.png)` }}></div>
               <div className="footer-shape-2" style={{ backgroundImage: `url(/assets/imgs/footer/shape-f-2.png)` }}></div>
               <div className="footer-top section-space-medium">
                  <div className="small-container">
                     <div className="row g-4">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                           <div className="footer-widget-1">
                              <figure className="image">
                                 <Image src="/assets/imgs/logo/tkgeruestelogo.png" alt="tkgeruestelogo" width={160} height={40} />
                              </figure>
                              <p className="mt-40 mb-30">
                                 TK Gerüste GmbH – Ihr Partner für Gerüstbau in Duisburg und NRW.
                                 Seit 2022 stehen wir für sichere, flexible und termintreue Gerüstlösungen – von Arbeits- und Schutzgerüsten über Fassaden- und Dachfanggerüste bis hin zu Raum- und Industriegerüsten. Mit Erfahrung, Qualität und individueller Planung schaffen wir die Basis für erfolgreiche Bauprojekte.
                              </p>
                              <div className="footer-socials p-relative">
                                 <span><Link href="#"><i className="fab fa-facebook-f"></i></Link></span>
                                 <span><Link href="#"><i className="fab fa-twitter"></i></Link></span>
                                 <span><Link href="#"><i className="fab fa-linkedin-in"></i></Link></span>
                                 <span><Link href="#"><i className="fab fa-youtube"></i></Link></span>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                           <div className="footer-widget-2 text-center">
                              <h4 className="mb-20 footer-title">Quicklinks</h4>
                              <ul className="footer-links" style={{ display: 'inline-block', textAlign: 'left' }}>
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
                                 {footerPosts.map((post) => (
                                    <div className="post-item d-flex items-center mb-3" key={post.slug} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                                       <Link href={`/blog/${post.slug}`} className="d-block">
                                          <Image src={(post as any).thumb ?? '/assets/imgs/project/projektbild53.jpeg'} alt={post.title} width={100} height={70} style={{ objectFit: 'cover', borderRadius: 6 }} />
                                       </Link>
                                       <div>
                                          <Link href={`/blog/${post.slug}`} className="d-block">
                                             <h6 className="mb-2">{post.title}</h6>
                                          </Link>
                                          <span className="text-sm muted">{post.date}</span>
                                       </div>
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
                     <div className="left-area p-relative">
                        <span>© All Copyright 2025 by <Link href="/">TK Gerüste GmbH</Link></span>
                     </div>
                     <div className="footer-socials p-relative">
                        <span><Link href="#"><i className="fab fa-facebook-f"></i></Link></span>
                        <span><Link href="#"><i className="fab fa-twitter"></i></Link></span>
                        <span><Link href="#"><i className="fab fa-linkedin-in"></i></Link></span>
                        <span><Link href="#"><i className="fab fa-youtube"></i></Link></span>
                     </div>
                     <div className="right-area p-relative">
                        <span><Link href="#">Terms & Condition</Link></span>
                        <span><Link href="#">Privacy Policy</Link></span>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
         <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={slides}
            index={index}
            on={{
               view: ({ index }) => setIndex(index),
            }}
         />
      </>
   )
}

export default FooterOne
