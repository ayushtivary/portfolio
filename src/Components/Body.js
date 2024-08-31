import React, { useRef, useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Experience from "./Experience";
import ParticleBackground from "./ParticleBackground";
import Skills from "./Skills";
import Project from "./Poject";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="h-screen w-screen bg-gray-900 overflow-x-auto overflow-y-auto scrollbar-hidden">
      <div>
        <ParticleBackground />
      </div>
      {/* <Header /> */}
      <Home />
      <Skills />
      <Experience />
      <Project />
      <Footer />
    </div>
  );
};

export default Body;
