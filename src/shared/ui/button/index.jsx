"use client";
// styles
import classes from './style.module.scss';


const Button = ({ children }) => {
  return (
    <button className={classes.button}>
      {children}
    </button>
  );
};

export default Button;