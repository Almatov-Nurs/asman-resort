// modules
import url from '@/shared/assets/background.svg';
// widgets
import Header from "@/widgets/header/ui";
import Footer from "@/widgets/footer/ui";
// styles
import classes from "./page.module.scss";


const background = `top url('${url.src}') var(--background-clr)`;

export default function Home() {
  return (
    <main className={classes.main} style={{ background }}>
      <Header/>
      <section id="hero">text</section>
      <Footer/>
    </main>
  );
}
