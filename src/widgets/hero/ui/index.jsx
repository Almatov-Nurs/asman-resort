"use client";
// modules
import Image from  "next/image";
import Link from "next/link";
// hooks
import { useParams } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";
// shared
import Asman from "@/shared/ui/asman/ui";
import Button from "@/shared/ui/button";
// assets
import yurta from  "@/shared/assets/img/yurta.svg";
import image from  "@/shared/assets/img/hero-image.png";
// styles
import classes from  "./style.module.scss";


const background = `url( "${image.src} ") center bottom / cover no-repeat`;

const Hero = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng);
  return (
    <section id="hero" className={classes.hero}>
      <div className={classes.bg} style={{ background }}></div>
      <div className={`container-lg ${classes.content}`}>
        <div style={{ zIndex: 10 }}>
          <Asman className={classes.asman}/>
          <p className={classes.description}>{t('hero')}</p>
          <Link href="https://wa.me/996550884248" target='_blank'><Button>{t('reservation')}</Button></Link>
        </div>
        <Image src={yurta} alt="image from hero" className={classes.yurta}/>
      </div>
    </section>
  );
};

export default Hero;
