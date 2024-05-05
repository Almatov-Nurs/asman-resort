"use client";
// modules
import Link from 'next/link';
// shared
import Asman from '@/shared/ui/asman/ui';
import Instagram from '@/shared/ui/instagram/ui';
import WhatsApp from '@/shared/ui/whatsapp/ui';
import YMap from '@/shared/ui/map/ui';
// icons
import Mail from '@/shared/ui/mail/ui';
import Phone from '@/shared/ui/phone/ui';
import Clock from '@/shared/ui/clock/ui';
// styles
import classes from './style.module.scss';


const Footer = () => {
  return (
    <footer id="footer" className={classes.footer}>
      <nav className={`container-lg ${classes.nav}`}>
        <Link href="/">
          <Asman className={classes.asman}/>
        </Link>

        <ul className={classes.links}>
          <li className={classes.item}>
            <Link href="mailto: asman.yurt@gmail.com" className={classes.link}>
              <Mail/> asman.yurt@gmail.com
            </Link>
          </li>
          <li className={classes.item}>
            <Link href="tel:+996550884248" className={classes.link}>
              <Phone/> +996 550 88 42 48
            </Link>
          </li>
          <li className={classes.item}><Clock/> 24/7</li>
          <li className={classes.item}><Instagram/><WhatsApp/></li>
        </ul>

        <YMap/>
      </nav>
    </footer>
  );
};

export default Footer;