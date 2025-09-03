"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import project_data from '@/data/ProjectData';

const ProjectCarouselClient = () => {
  return (
    <div className="project-carousel-section mt-60">
      <div className="small-container">
        <div className="title-box mb-30">
          <span className="section-sub-title text-gradient">Projekte</span>
          <h3 className="section-title mt-10">Ausgewählte Projekte</h3>
        </div>
      </div>
      <div className="container-fluid">
        <Swiper
          slidesPerView={4}
          loop={true}
          spaceBetween={20}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            1400: { slidesPerView: 4 },
            1200: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          modules={[Autoplay]}
          className="swiper project-carousel-1"
        >
          {project_data.map((item) => (
            <SwiperSlide key={item.thumb} className="swiper-slide">
              <div className="project-slider-two-box p-relative">
                <figure className="image w-img">
                  <Image src={item.thumb} alt={item.title} width={800} height={600} className="object-cover w-full h-48" />
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectCarouselClient;


