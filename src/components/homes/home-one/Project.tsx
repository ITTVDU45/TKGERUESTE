"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
// Use all project images from public/assets/imgs/project

const setting = {
   slidesPerView: 4,
   loop: true,
   spaceBetween: 30,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   pagination: false,
   navigation: false,
   breakpoints: {
      '1400': {
         slidesPerView: 4,
      },
      '1200': {
         slidesPerView: 3,
      },
      '768': {
         slidesPerView: 2,
      },
      '0': {
         slidesPerView: 1,
      },
   },
};

interface PropType {
   style: boolean;
}

const Project = ({ style }: PropType) => {
   return (
      <section className={`project-slider-two-section section-space-bottom p-relative fix ${style ? "bg-color-1 is-dark" : ""}`}>
         <div className="bg-shape" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-37.png)` }}></div>
         <div className="small-container">
            <div className="project-two-title-area mb-60">
               <div className="title-box wow fadeInLeft" data-wow-delay=".5s">
                  <span className="section-sub-title text-gradient">portfolio</span>
                  <h3 className="section-title mt-10">unsere bisherigen projekte</h3>
               </div>
               <Link className="primary-btn-1 btn-hover brand-gradient animate-gradient-move" href="/projects">
                  zu unseren Projekten &nbsp; | <i className="icon-right-arrow"></i>
                  <span style={{ top: "147.172px", left: "108.5px" }}></span>
               </Link>
            </div>
         </div>
         <div className="container-fluid">
            <Swiper {...setting} modules={[Autoplay]} className="swiper project-active-1">
               {Array.from({ length: 78 }).map((_, idx) => {
                  const num = idx + 1;
                  const src = `/assets/imgs/project/projektbild${num}.jpeg`;
                  return (
                     <SwiperSlide key={src} className="swiper-slide">
                        <div className="project-slider-two-box p-relative">
                           <figure className="image w-img">
                              <Image src={src} alt={`Projektbild ${num}`} width={800} height={600} className="object-cover w-full h-48" />
                           </figure>
                        </div>
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </div>
      </section>
   )
}

export default Project
