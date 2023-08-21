import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { createImgArray } from "~/tools/image-array";

export default function Carousel() {
  const images = createImgArray(9);

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-full"
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={image}
                className="mx-auto max-w-full"
                style={{ maxHeight: "calc(100vh - 90px)" }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
