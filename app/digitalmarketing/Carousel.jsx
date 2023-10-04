'use client'
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
    const containerStyle = {
        backgroundColor: 'lightblue',
        padding: '20px',
      };
  return (
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        style={containerStyle}
      >
      <SwiperSlide>
        <div className=' h-9'><p>Slide 1</p></div>
      </SwiperSlide>
      <SwiperSlide><div className=''><p>Slide 2</p></div></SwiperSlide>
      <SwiperSlide><div className=''><p>Slide 3</p></div></SwiperSlide>
      <SwiperSlide><div className=''><p>Slide 4</p></div></SwiperSlide>
      <SwiperSlide><div className=''><p>Slide 5</p></div></SwiperSlide>
      <SwiperSlide><div className=''><p>Slide 6</p></div></SwiperSlide>
      <SwiperSlide><div className=''><p>Slide 7</p></div></SwiperSlide>
      <SwiperSlide><div className=''><p>Slide 8</p></div></SwiperSlide>
      <SwiperSlide><div className=''><p>Slide 9</p></div></SwiperSlide>
    </Swiper>
  );
};