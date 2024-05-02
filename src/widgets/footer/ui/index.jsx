"use client";
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
        <a href="/">
          <Asman className={classes.asman}/>
        </a>

        <ul className={classes.links}>
          <li className={classes.item}>
            <a href="mailto: asman.yurt@gmail.com" className={classes.link}>
              <Mail/> asman.yurt@gmail.com
            </a>
          </li>
          <li className={classes.item}>
            <a href="tel:+996550884248" className={classes.link}>
              <Phone/> +996 550 88 42 48
            </a>
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