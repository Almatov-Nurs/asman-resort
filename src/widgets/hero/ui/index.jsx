"use client";
// modules
import Image from  "next/image";
// shared
import Button from "@/shared/ui/button";
// assets
import yurta from  "@/shared/assets/img/yurta.svg";
import image from  "@/shared/assets/img/hero-image.png";
// styles
import classes from  "./style.module.scss";
import Asman from "@/shared/ui/asman/ui";


const background = `url( "${image.src} ") center bottom / cover no-repeat`;

const Hero = () => {
  return (
    <section id="hero" className={classes.hero}>
      <div className={classes.bg} style={{ background }}></div>
      <div className={`container-lg ${classes.content}`}>
        <div>
          <Asman className={classes.asman}/>
          <p className={classes.description}>Юрточный городок на побережье Иссик-Куля</p>
          <Button>Забронировать</Button>
        </div>
        <Image src={yurta} alt="image from hero" className={classes.yurta}/>
      </div>
    </section>
  );
};

export default Hero;
