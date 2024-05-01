// widgets
import Header from "@/widgets/header/ui";
import Footer from "@/widgets/footer/ui";
// styles
import classes from "./page.module.scss";

export default function Home() {
  return (
    <main className={classes.main}>
      <Header/>
      <section id="hero">text</section>
      <Footer/>
    </main>
  );
}
