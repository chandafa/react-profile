import "./App.css";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "primereact/resources/themes/lara-light-cyan/theme.css";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
