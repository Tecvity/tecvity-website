import React, { useRef } from "react";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import "../App.css";
import work1 from "../assets/images/portfolio/dinghysailing.jpg";
import work2 from "../assets/images/portfolio/techontap.jpg";
import work3 from "../assets/images/portfolio/terravirtua.jpg";

SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

const slide_img = [work1, work2, work3];

const FeaturedWork = () => {
  const swiperRef = useRef(null);

  return (
    <div className=" mt-14 bg-black">
      <div className="justify-center  flex">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}>
          <h1 className="text-main text-center pt-24 lg:pb-10  font-first text-3xl lg:text-7xl">
            Featured Work
          </h1>
        </motion.div>
      </div>
      <motion.div  variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }} className=" w-full mt-12 lg:w-4/5 h-3/5 flex border-4 border-white items-center justify-center mx-auto mb-12">
        <Swiper
          pauseOnMouseEnter={true}
          centeredSlides={true}
          autoplay={{ delay: 250 }}
          loop={true}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          navigation={true}
          className="mySwiper"
          ref={swiperRef}>
          {slide_img.map((img, i) => {
            return (
              <SwiperSlide key={i}>
                <img src={slide_img[i]} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
       
    </div>
  );
};

export default FeaturedWork;
