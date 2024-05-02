"use client";
// shared
import Button from '@/shared/ui/button';
// models
import { links } from '../consts';
// styles
import classes from './style.module.scss';


const Header = () => {
  return (
    <header id="header" className={classes.header}>
      <nav className={`container-lg ${classes.nav}`}>
        <a href="/">Logo</a>
        <ul className={classes.links}>
          {
            links.map(({ title, link }, index) => (
              <li key={index} className={classes.link}><a href={link}>{title}</a></li>
            ))
          }
        </ul>
        <Button>Бронировать</Button>
      </nav>
    </header>
  );
};

export default Header;