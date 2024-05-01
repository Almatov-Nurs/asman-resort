"use client";
// modules
import { Swiper, SwiperSlide } from 'swiper/react';
// features
import Section from '@/features/ui/section';
// shared
import Card from '@/shared/ui/card';
// models
import { services } from '../model';
// styles
import "swiper/css";


const swiperOptions = {
  spaceBetween: 20,
  slidesPerView: 3,
  loop: true,
};

const Services = () => {
  return (
    <Section id="services" subtitle="Услуги">
      <Swiper {...swiperOptions}>
        {
          services.concat(services).map(({ title, image }, index) => (
            <SwiperSlide key={index}><Card src={image} title={title}/></SwiperSlide>
          ))
        }
      </Swiper>
    </Section>
  );
};

export default Services;