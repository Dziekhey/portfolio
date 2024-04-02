import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './CubeSwiper.css'
// import required modules
import { EffectCube, Pagination } from 'swiper/modules';
import video1 from '../assets/video.mp4'

const CubeSwiper = () => {
  return (
    <>
    <Swiper
      effect={'cube'}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={true}
      modules={[EffectCube, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <video src={video1} autoPlay muted loop/>
      </SwiperSlide>
      <SwiperSlide>
        <video src={video1} autoPlay muted loop/>
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default CubeSwiper;