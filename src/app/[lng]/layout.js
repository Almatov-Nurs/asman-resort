// modules
import { dir } from 'i18next'
import Head from "next/head";
import { languages } from '../i18n/settings'
// widgets
import Header from "@/widgets/header/ui";
import Footer from "@/widgets/footer/ui";
// assets
import url from '@/shared/assets/img/background.svg';
// fonts
import { Montserrat } from "next/font/google";
// styles
import "../styles/globals.scss";


const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });
const background = `top url('${url.src}') var(--background-clr)`;

export const metadata = {
  title: "Asman",
  description: "Asman web site without SEO",
};

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={montserrat.className} style={{ background }}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
 
export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
