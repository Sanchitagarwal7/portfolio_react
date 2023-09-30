import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Thankyou from "./components/Thankyou";

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    {/* <Skills/> */}
    <Thankyou/>
    </>
  );
}

export default App;
