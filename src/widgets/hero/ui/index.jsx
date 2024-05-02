"use client";
// modules
import Image from  "next/image";
// shared
import Button from "@/shared/ui/button";
// assets
import asman from  "@/shared/assets/asman.svg";
import yurta from  "@/shared/assets/yurta.svg";
import image from  "@/shared/assets/hero-image.png";
// styles
import classes from  "./style.module.scss";


const background = `url( "${image.src} ") center bottom / cover no-repeat`;

const Hero = () => {
  return (
    <section id="hero" className={classes.hero}>
      <div className={classes.bg} style={{ background }}></div>
      <div className={`container-lg ${classes.content}`}>
        <div>
          <Image src={asman} alt="logo" className={classes.asman}/>
          <p className={classes.description}>Юрточный городок на побережье Иссик-Куля</p>
          <Button>Забронировать</Button>
        </div>
        <Image src={yurta} alt="image from hero" className={classes.yurta}/>
      </div>
    </section>
  );
};

export default Hero;
