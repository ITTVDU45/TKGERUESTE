"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import { JSX } from 'react';
import { Button } from "@/components/ui/Button";

import client_img from "@/assets/imgs/banner/clients-group.png"

interface DataType {
   id: number;
   thumb: string;
   sub_title: string;
   title: string;
   desc: JSX.Element;
   ctaText?: string;
   ctaHref?: string;
}

const banner_data: DataType[] = [
   {
      id: 1,
      thumb: "/assets/imgs/project/projektbild53.jpeg",
      sub_title: "Sicherheit & Qualität",
      title: "Sicherheit in jeder Höhe – TK Gerüste GmbH",
      desc: (<>Seit 2022 Ihr zuverlässiger Partner für Gerüstbau in Duisburg und NRW. Ob Neubau, Sanierung oder Industrieprojekt – wir sorgen für stabile Lösungen, höchste Sicherheit und termintreue Umsetzung.</>),
      ctaText: "Jetzt Angebot anfordern",
      ctaHref: "/contact",
   },
   {
      id: 2,
      thumb: "/assets/imgs/project/projektbild58.jpeg",
      sub_title: "Flexible Lösungen",
      title: "Individuelle Gerüstsysteme für jedes Projekt",
      desc: (<>Von Fassaden- und Dachfanggerüsten bis hin zu Raum- und Industriegerüsten – wir passen unsere Systeme exakt an Ihre Anforderungen an. Schnell, flexibel und professionell.</>),
      ctaText: "Mehr zu unseren Leistungen",
      ctaHref: "/services",
   },
   {
      id: 3,
      thumb: "/assets/imgs/project/projektbild69.jpeg",
      sub_title: "Regional & zuverlässig",
      title: "Gerüstbau aus Duisburg – stark in NRW",
      desc: (<>Mit Erfahrung, Qualität und persönlicher Beratung begleiten wir Bauherren, Handwerker und Unternehmen. Verlassen Sie sich auf einen Partner, der regional verwurzelt und überregional einsatzbereit ist.</>),
      ctaText: "Kontakt aufnehmen",
      ctaHref: "/contact",
   },
]

const setting = {
   slidesPerView: 1,
   loop: true,
   effect: "fade",
   fadeEffect: { crossFade: true },
   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".banner-dot",
      clickable: true,
   },
   navigation: false,
};

const Banner = () => {
   return (
      <section className="banner-section-2 p-relative fix">
         <Swiper {...setting} modules={[Autoplay, Pagination, EffectFade]} className="swiper banner-active">
            {banner_data.map((item) => (
               <SwiperSlide key={item.id} className="swiper-slide">
                  <div className="banner-main-2" style={{ backgroundImage: `url(${item.thumb})` }}>
                     <div className="large-container">
                        <div className="banner-area-2 p-relative z-3 wow img-custom-anim-left animated" data-wow-delay="1000ms">
                           <span className="p-relative banner-sub-title">{item.sub_title}</span>
                           <h1 className="banner-title">{item.title}</h1>
                           <p className="banner-text">{item.desc}</p>
                           <div className="banner-btn-area-2">
                              <div className="glass p-6 inline-flex items-center gap-4">
                                 {/* Verwende neues Button-Component */}
                                 <Button href={item.ctaHref || '/services'} className="brand-gradient" aria-label={item.ctaText || 'CTA'}>
                                    {item.ctaText} &nbsp; | <i className="icon-right-arrow"></i>
                                 </Button>
                                 <span style={{ top: "147.172px", left: "108.5px" }}></span>
                              </div>
                              {/* social clients image and 'satisfied clients' removed */}
                           </div>
                        </div>

                        {/* banner visual removed as requested (waveform/blur) */}

                        <div className="socials-area">
                           <ul>
                              <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                           </ul>
                           <span>Bewerte Uns auf Google</span>
                        </div>
                     </div>
                  </div>
                  {/* shapes removed as requested */}
               </SwiperSlide>
            ))}
         </Swiper>
         <div className="banner-dot-inner">
            <div className="banner-dot"></div>
         </div>
      </section>
   )
}

export default Banner
