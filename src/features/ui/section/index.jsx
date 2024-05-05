"use client";
import classes from './style.module.scss';

const Section = (props) => {
  const { className, children, subtitle } = props;

  return (
    <section {...props} className={`container-lg ${classes.section} ${className || ''}`}>
      <h2 className={classes.subtitle}>{subtitle}</h2>
      {children}
    </section>
  );
};

export default Section;