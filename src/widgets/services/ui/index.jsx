"use client";
// modules
import { Swiper, SwiperSlide } from 'swiper/react';
// hooks
import { useParams } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';
import { useMediaQuery } from '@react-hook/media-query';
// features
import Section from '@/features/ui/section';
// shared
import Card from '@/shared/ui/card';
// models
import { services } from '../consts';
// styles
import "swiper/css";
import classes from './style.module.scss';


const Services = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng);

  const desktop = useMediaQuery('(max-width: 1200px)');

  const swiperOptions = {
    spaceBetween: 20,
    slidesPerView: desktop ? 2 : 3,
    loop: true,
  };
  return (
    <Section id="services" subtitle="Услуги">
      <Swiper {...swiperOptions} className={classes.swiper}>
        {
          services.concat(services).map(({ title, image }, index) => (
            <SwiperSlide key={index}><Card src={image} title={t(title)}/></SwiperSlide>
          ))
        }
      </Swiper>

      {/* mobile */}
      <div className={classes.mobile}>
        {
          services.map(({ title, image }, index) => (
            <Card src={image} title={t(title)} key={index}/>
          ))
        }
      </div>
    </Section>
  );
};

export default Services;