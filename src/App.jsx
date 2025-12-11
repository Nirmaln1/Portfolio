import Contact from "./assets/pages/Contact";
import About from "./assets/pages/About";
import Hero from "./assets/pages/Hero";
import Navbar from "./Components/Navbar";

import Skills from "./assets/pages/Skills";
import Edu from "./assets/pages/Edu";
import Project from "./assets/pages/Project";
import Footer from "./Components/footer";
import { Route, Routes } from "react-router-dom";

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
        <Footer />
      </div>
    </>
  );
}

export default App;
