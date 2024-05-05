"use client";
// styles
import classes from './style.module.scss';


const Button = ({ children, className }) => {
  return (
    <button className={`${classes.button} ${className}`}>
      {children}
    </button>
  );
};

export default Button;