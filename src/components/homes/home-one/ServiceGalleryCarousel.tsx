"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import project_data from '@/data/ProjectData'

const settings = {
  slidesPerView: 3,
  spaceBetween: 14,
  loop: true,
  autoplay: { delay: 3000, disableOnInteraction: false },
  breakpoints: {
    1400: { slidesPerView: 3 },
    992: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  },
}

const ServiceGalleryCarousel = () => {
  return (
    <div className="service-gallery-carousel mt-40">
      <div className="small-container">
        <Swiper {...settings} modules={[Autoplay, Navigation, Pagination]} navigation pagination={{ clickable: false }} className="swiper service-gallery-swiper">
          {project_data.slice(0, 20).map((item) => (
            <SwiperSlide key={item.thumb} className="swiper-slide">
              <div className="gallery-slide-box rounded-xl overflow-hidden shadow-lg">
                <Image src={item.thumb} alt={item.title} width={600} height={420} className="object-cover w-full h-36" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ServiceGalleryCarousel


