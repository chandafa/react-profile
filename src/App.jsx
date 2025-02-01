import { Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "primereact/resources/themes/lara-light-cyan/theme.css";

// Lazy Load Komponen
const Hero = lazy(() => import("./components/Hero"));
const AboutMe = lazy(() => import("./components/AboutMe"));
const Skills = lazy(() => import("./components/Skills"));
const Services = lazy(() => import("./components/Services"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>
        <Hero />
        <AboutMe />
        <Skills />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
