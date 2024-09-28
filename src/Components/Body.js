import React from "react";
import Home from "./Home";
import Experience from "./Experience";
import ParticleBackground from "./ParticleBackground";
import Skills from "./Skills";
import Project from "./Poject";
import Footer from "./Footer";

const Body = () => {
  return (
<div className="h-screen w-screen bg-slate-900 overflow-y-auto overflow-x-hidden">
  <div className="overflow-y-visible pointer-events-none"> {/* Add pointer-events-none here */}
    <ParticleBackground />
  </div>
  
  <div className="block lg:hidden text-blue-200 mt-5 p-4 align-middle text-center text-2xl">
    <h1>Coming soon for Mobile and Tablets</h1>
    <h1 className="mt-10">Please visit my website on laptop or desktop</h1>
  </div>

  <div className="hidden lg:block ">
    <Home />
    <Skills />
    <Experience />
    <Project />
    <Footer />
  </div>
</div>

  );
};

export default Body;
