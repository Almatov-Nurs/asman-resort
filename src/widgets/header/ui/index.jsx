"use client";
// shared
import Button from '@/shared/ui/button';
// models
import { links } from '../model';
// styles
import classes from './style.module.scss';


const Header = () => {
  return (
    <header id="header" className={`container-lg ${classes.header}`}>
      <a href="/">Logo</a>
      <ul>
        {
          links.map(({ title, link }, index) => (
            <li key={index}><a href={link}>{title}</a></li>
          ))
        }
      </ul>
      <Button>Бронировать</Button>
    </header>
  );
};

export default Header;