import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Services from "./component/Services";
import Values from "./component/Values";

export default function App() {
  return (
    <>
      {" "}
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Services />
      <Contact />
      <Footer />{" "}
    </>
  );
}
