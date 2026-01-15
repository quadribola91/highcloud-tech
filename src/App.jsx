import { useEffect } from "react";

import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Services from "./component/Services";
import Values from "./component/Values";
// import Partners from "./component/Partners";
import WhatsAppChat from "./component/WhatsAppChat";
import SolutionsStats from "./component/SolutionsStats";
import { pageview } from "./utils/ga";

export default function App() {
  useEffect(() => {
    pageview(window.location.pathname);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Services />
      {/* <Partners /> */}
      <SolutionsStats />
      <Contact />
      <Footer />
      <WhatsAppChat />
    </>
  );
}
