"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";

const setting = {
   slidesPerView: 1,
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   pagination: false,
   navigation: {
      prevEl: ".testimonial-1-button-prev",
      nextEl: ".testimonial-1-button-next",
   }
};

interface PropType {
  style?: boolean;
}

const Testimonial = ({ style }: PropType) => {
   return (
      <section className="testimonials-section p-relative section-space fix" style={{ backgroundImage: `url(/assets/imgs/bg/testimonial-bg.png)` }}>
         <div className="bg-shape" style={{ backgroundImage: `url(/assets/imgs/bg/testimonial-bg-1.png)` }}></div>
         <div className="bg-shape-1" style={{ background: '#ffffff' }}></div>
         <div className="bg-shape-2" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-16.png)` }}></div>
         <div className="small-container">
            <div className="row">
               <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                  <div
                     className="contact-from p-relative"
                     style={{
                        backgroundImage: `linear-gradient(rgba(6,29,57,0.48), rgba(6,29,57,0.24)), url(/assets/imgs/project/projektbild77.jpeg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        padding: '28px',
                        borderRadius: 12,
                     }}
                  >
                     <div className="title-box mb-20 wow fadeInLeft" data-wow-delay=".5s">
                        <span className="section-sub-title text-white">Kontakt aufnehmen</span>
                        <h3 className="section-title mt-10 text-white">Angebot Anfragen</h3>
                     </div>
                     <div className="help-intro mb-20">
                        <h4 className="text-white mb-10">Schnell, unverbindlich & persönlich</h4>
                        <p className="text-white mb-16">Beschreibe kurz Ihr Anliegen – wir melden uns zeitnah mit einem individuellen Angebot und Termin.</p>
                        <Link href="/contact" className="primary-btn-1 btn-hover brand-gradient">Jetzt Anfrage stellen</Link>
                     </div>
                  </div>
               </div>
               <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                  <div className="testimonials-area">
                     <div className="title-box mb-40 wow fadeInLeft" data-wow-delay=".5s">
                        <span className="section-sub-title">Testimonials</span>
                        <h3 className="section-title mt-10">Das sagen unsere Kunden</h3>
                     </div>
                     <p className="mb-40">Ob privater Bauherr, Handwerksbetrieb oder Industrieunternehmen – unsere Kunden schätzen die Zuverlässigkeit, Qualität und Termintreue der TK Gerüste GmbH.</p>
                     <div className="testimonials-box">
                        <Swiper {...setting} modules={[Autoplay, Navigation]} className="swiper testimonial-active-1">
                           {[
                              {
                                 id: 1,
                                 avatar: '/assets/imgs/team/team-1.jpg',
                                 name: 'Zuverlässiger Partner für unser Bauprojekt',
                                 designation: '– Bauunternehmen aus Duisburg',
                                 desc: 'Von der Anfrage bis zum Abbau lief alles reibungslos. Das Team war pünktlich, freundlich und hat sehr sauber gearbeitet. Wir werden definitiv wieder mit TK Gerüste zusammenarbeiten.'
                              },
                              {
                                 id: 2,
                                 avatar: '/assets/imgs/team/team-2.jpg',
                                 name: 'Schnell, flexibel und professionell',
                                 designation: '– Privater Bauherr aus Leverkusen',
                                 desc: 'Wir brauchten kurzfristig ein Fassadengerüst für eine Sanierung. Innerhalb weniger Tage stand alles perfekt. Preis-Leistung top – absolute Empfehlung!'
                              },
                              {
                                 id: 3,
                                 avatar: '/assets/imgs/team/team-3.jpg',
                                 name: 'Sicherheit hat hier oberste Priorität',
                                 designation: '– Industriekunde aus Köln',
                                 desc: 'Unsere Industriehalle wurde mit einem Raumgerüst ausgestattet. Das Konzept war durchdacht und die Ausführung absolut professionell. Wir haben uns während der gesamten Arbeiten sicher gefühlt.'
                              },
                              {
                                 id: 4,
                                 avatar: '/assets/imgs/team/team-4.jpg',
                                 name: 'Kompetente Beratung und individuelle Lösungen',
                                 designation: '– Architekturbüro aus Düsseldorf',
                                 desc: 'Besonders beeindruckt hat uns die persönliche Beratung. Das Angebot war transparent, und auf unsere speziellen Anforderungen wurde perfekt eingegangen.'
                              }
                           ].map((item) => (
                              <SwiperSlide key={item.id} className="swiper-slide">
                                 <div className="autor-upper p-relative">
                                    <figure className="image">
                                       <Image src={item.avatar} alt="" width={80} height={80} />
                                    </figure>
                                    <div className="icon-1">
                                       <i className="icon-comma-double"></i>
                                    </div>
                                    <div className="author-info">
                                       <h5>{item.name}</h5>
                                       <span>{item.designation}</span>
                                       <ul className="rating-list">
                                          <li><i className="fa fa-star"></i></li>
                                          <li><i className="fa fa-star"></i></li>
                                          <li><i className="fa fa-star"></i></li>
                                          <li><i className="fa fa-star"></i></li>
                                          <li><i className="fa fa-star"></i></li>
                                       </ul>
                                    </div>
                                 </div>
                                 <div className="content">
                                    <p>{item.desc}</p>
                                 </div>
                              </SwiperSlide>
                           ))}
                        </Swiper>
                     </div>
                     <div className="testimonials_1_navigation__wrapprer position-relative z-1 text-center mt-40">
                        <div className="common-slider-navigation">
                           <button className="testimonial-1-button-prev p-relative"><i className="icon-arrow-left-angle"></i></button>
                           <button className="testimonial-1-button-next p-relative"><i className="icon-arrow-right-angle"></i></button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Testimonial
