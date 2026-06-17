"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { homeTestimonialSlides } from "@/data/testimonial2";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonial2() {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".testi-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            // Only create exactly 2 dots
            if (index < 2) {
              return `<span class="${className}"></span>`;
            }
            return "";
          },
        }}
        onSlideChange={(swiper) => {
          if (typeof document !== "undefined") {
            const bullets = document.querySelectorAll(
              ".testi-pagination .swiper-pagination-bullet",
            );

            bullets.forEach((bullet) => {
              bullet.classList.remove("swiper-pagination-bullet-active");
            });

            // Toggle active state only between the 2 generated dots
            const activeIndex = swiper.realIndex % 2;
            if (bullets[activeIndex]) {
              bullets[activeIndex].classList.add(
                "swiper-pagination-bullet-active",
              );
            }
          }
        }}
        breakpoints={{
          1920: { slidesPerView: 6, spaceBetween: 30 },
          1440: { slidesPerView: 5, spaceBetween: 30 },
          1366: { slidesPerView: 4, spaceBetween: 30 },
          1201: { slidesPerView: 3, spaceBetween: 30 },
          1025: { slidesPerView: 3, spaceBetween: 30 },
          769: { slidesPerView: 2, spaceBetween: 30 },
          577: { slidesPerView: 2, spaceBetween: 30 },
          480: { slidesPerView: 1, spaceBetween: 20 },
          375: { slidesPerView: 1, spaceBetween: 20 },
        }}
      >
        {homeTestimonialSlides.map((testi) => (
          <SwiperSlide key={testi.id}>
            <div className="testi-card">
              <h3 className="title">{testi.title}</h3>
              <p>{testi.text}</p>
              <div className="testi-auther">
                <Image
                  src={testi.authorImage}
                  alt={testi.authorAlt}
                  width={60}
                  height={60}
                  className="auther"
                  style={{ width: "auto", height: "auto" }}
                />
                <h4 className="name">
                  {testi.name},{" "}
                  <span className="designation">{testi.designation}</span>
                </h4>
                <Image
                  src={testi.ratingIcon}
                  alt="Rating Stars"
                  width={85}
                  height={15}
                  className="rating-img"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Pagination */}
      <div className="swiper-pagination testi-pagination" />
    </>
  );
}
