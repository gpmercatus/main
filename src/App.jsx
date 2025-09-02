import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import CtaBox from "./components/CtaBox";
import Info from "./components/info";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Founder from "./Pages/Founder";
import Ideal_section from "./Pages/Ideal_section";

function App() {
  return (
    <>
      {/* <div className="scroll-smooth"> */}
        <Navbar />
        <Home />
        <CtaBox />
        <About />
        <Ideal_section />
        <Info />
        <Service />
        <Founder />
        <Contact />
        <Footer />
      {/* </div> */}
    </>
  );
}
export default App;
