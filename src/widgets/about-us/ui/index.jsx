"use client";
// modules
import parse from 'html-react-parser';
import Image from 'next/image';
// hooks
import { useParams } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';
// features
import Section from "@/features/ui/section";
// assets
import image1 from '@/shared/assets/img/about-us1.png';
import image2 from '@/shared/assets/img/about-us2.png';
import image3 from '@/shared/assets/img/about-us3.png';
// styles
import classes from './style.module.scss';


const AboutUs = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng);
  return (
    <Section id="about-us" subtitle="О нас">
      <div className={classes['about-us']}>
        <div className={classes.description}>
          <p className={classes.text}>{parse(t('description'))}</p>
        </div>
        <div className={classes.images}>
          <Image src={image1} alt='image of abbout us'/>
          <div className={classes.rowImages}>
            <Image src={image2} alt='image of abbout us'/>
            <Image src={image3} alt='image of abbout us'/>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;