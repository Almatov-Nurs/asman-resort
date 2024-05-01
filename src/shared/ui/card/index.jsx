"use client";
// next
import Image from 'next/image';
// styles
import classes from './style.module.scss';


const Card = ({ src, title }) => {
  return (
    <div className={classes.card}>
      <Image
        src={src}
        width={380}
        height={360}
        alt='image of service'
        className={classes.image}
      />
      <h4 className={classes.title}>{title}</h4>
    </div>
  );
};

export default Card;