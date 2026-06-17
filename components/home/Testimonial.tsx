"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { testimonialBrands } from "@/data/testimonialBrands";

export default function Testimonial() {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      speed={500}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      spaceBetween={30}
      breakpoints={{
        0: { slidesPerView: 2 },
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 },
        1200: { slidesPerView: 8 },
      }}
    >
      {testimonialBrands.map((brand, index) => (
        <SwiperSlide key={index}>
          <div className="brand-img">
            <Link href="#" title="" scroll={false}>
              <Image
                src={brand.src}
                alt={`Brand Logo ${brand.id}`}
                width={150}
                height={50}
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
