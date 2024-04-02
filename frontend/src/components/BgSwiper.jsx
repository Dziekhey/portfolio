import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import './BgSwiper.css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import video1 from '../assets/video.mp4'

const BgSwiper = () => {
  return (
    <>
    <Swiper
      effect={'fade'}
      
      modules={[EffectFade, Navigation, Pagination]}
      spaceBetween='30'
      className="mySwiper"
    >
      <SwiperSlide>
        <video src={video1} autoPlay muted loop/>
      </SwiperSlide>
     
    </Swiper>
  </>
  )
}

export default BgSwiper;