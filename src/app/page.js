// widgets
import Hero from '@/widgets/hero/ui';
import Services from '@/widgets/services/ui';
import AboutUs from '@/widgets/about-us/ui';
// styles
import classes from "./page.module.scss";


export default function Home() {
  return (
    <main className={classes.main}>
      <Hero/>
      <Services/>
      <AboutUs/>
    </main>
  );
}
