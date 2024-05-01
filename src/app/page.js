// widgets
import Services from '@/widgets/services/ui';
// styles
import classes from "./page.module.scss";
import AboutUs from '@/widgets/about-us/ui';


export default function Home() {
  return (
    <main className={classes.main}>
      <section id="hero" className="container-lg">text</section>
      <Services/>
      <AboutUs/>
    </main>
  );
}
