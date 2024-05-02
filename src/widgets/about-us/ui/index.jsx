"use client";
// modules
import Image from 'next/image';
// features
import Section from "@/features/ui/section";
// assets
import image1 from '@/shared/assets/img/about-us1.png';
import image2 from '@/shared/assets/img/about-us2.png';
import image3 from '@/shared/assets/img/about-us3.png';
// styles
import classes from './style.module.scss';


const AboutUs = () => {
  return (
    <Section id="about-us" subtitle="О нас">
      <div className={classes['about-us']}>
        <div className={classes.description}>
          <p className={classes.text}>
            <b>{'История и Комфорт в Юртах у Берегов \nИссык-Куля'}</b>
            {`Добро пожаловать в уникальный мир уюта и приключений у берегов Иссык-Куля! Наши юрты — это не просто место для ночлега, это погружение в традиционную культуру кыргызов с современными удобствами.\n\n`}

            <b>Приключения на Природе</b>
            {'Откройте для себя бесконечные возможности активного отдыха в окружении природы: тропы для прогулок, верховые прогулки, катание на лошадях.\n\n'}

            <b>Кулинарные Удовольствия</b>
            {'Насладитесь разнообразием блюд киргизской и международной кухни, приготовленных с любовью нашими опытными поварами.\n\n'}
          </p>
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