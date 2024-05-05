"use client";
// consts
import { LANGUAGES, links } from '../consts';
// modules
import Link from 'next/link';
// hooks
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';
// shared
import Asman from '@/shared/ui/asman/ui';
import Button from '@/shared/ui/button';
import Burger from '@/shared/ui/burger/ui';
import Close from '@/shared/ui/close/ui';
// entities
import Languages from '@/entities/ui/languages/ui';
// assets
import navMobile from '@/shared/assets/img/navbar.svg';
// styles
import classes from './style.module.scss';


const background = `url('${navMobile.src}') var(--background-clr) center center / cover no-repeat`;

const Header =  () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng);
  
  const [ open, setOpen ] = useState(false);
  
  const languages = Object.keys(LANGUAGES).filter((key) => key !== 'undefined' && lng !== key);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <header id="header" className={classes.header}>
      <nav className={`container-lg ${classes.nav}`}>
        <Burger className={classes.burger} onClick={handleOpen}/>
        <Link href="/" className={classes.logo}><Asman className={classes.logo}/></Link>
        <ul className={classes.links}>
          {
            links.map(({ title, link }, index) => (
              <li key={index} className={classes.link}><Link href={link}>{t(title)}</Link></li>
            ))
          }
        </ul>
        <div className={classes.buttons}>
          <Languages/>
          <Link href="https://wa.me/996550884248" target='_blank'><Button className={classes.button}>{t('reservation')}</Button></Link>
        </div>
      </nav>

      {
        open
        &&
        <nav className={classes['mobile-nav']} aria-label="Mobile navbar">
          <div className={classes['mobile-outside']} onClick={handleClose}></div>
          <div className={classes['mobile-bg']} style={{ background }}>
            <Close className={classes.close} onClick={handleClose}/>
            <ul className={classes['mobile-links']}>
              {
                links.map(({ title, link }, index) => (
                  <li key={index} className={classes.link} onClick={handleClose}>
                    <Link href={link}>{t(title)}</Link>
                  </li>
                ))
              }
            </ul>
            <ul className={classes['mobile-links']}>
              {
                languages.map((key) => (
                  <li key={key} className={classes.link} onClick={handleClose}>
                    <Link href={`/${key}/`}>{LANGUAGES[key]}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </nav>
      }
    </header>
  );
};

export default Header;