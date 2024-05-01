// widgets
import Header from "@/widgets/header/ui";
import Footer from "@/widgets/footer/ui";
// assets
import url from '@/shared/assets/background.svg';
// fonts
import { Inter, Montserrat } from "next/font/google";
// styles
import "./globals.css";


const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });
const background = `top url('${url.src}') var(--background-clr)`;

export const metadata = {
  title: "Asman",
  description: "Asman web site without SEO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className} style={{ background }}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
