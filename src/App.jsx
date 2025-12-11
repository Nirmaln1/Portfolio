import Contact from "./assets/pages/Contact";
import About from "./assets/pages/About";
import Hero from "./assets/pages/Hero";
import Navbar from "./Components/Navbar";

import Skills from "./assets/pages/Skills";
import Edu from "./assets/pages/Edu";
import Project from "./assets/pages/Project";
import { Route, Routes } from "react-router-dom";
import Footer2 from "./Components/Footer2";

function App() {
  return (
    <>
      <div className="max-w-[1000px] mx-auto bg-[#1a1a1a] ">
        {/* {contianer} */}
        <Navbar />
        <Hero />
        <About />
        <Edu />
        <Skills />
        <Project />
        <Contact />
        <Footer2 />
      </div>
    </>
  );
}

export default App;
