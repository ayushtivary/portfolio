import React, { useEffect, useRef, useState } from "react";
import { reactPortfolio } from "../Utils/constants";
import { cyber } from "../Utils/constants";
import { V2 } from "../Utils/constants";
import { python } from "../Utils/constants";
import { reactFoodApp } from "../Utils/constants";
import { reactNetflixGpt } from "../Utils/constants";
const Project = () => {
  const [leftVisible, setLeftVisible] = useState(false);
  // const [rightVisible, setRightVisible] = useState(false);
  const leftRef = useRef(null);
  // const rightRef = useRef(null);
  useEffect(() => {
    // observable to check if the screen is reach/scrolled to the point to be visible
    const leftObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // check if the element can be viewd or not
        if (entry.isIntersecting) {
          // if we have reached the element to be viewed
          setLeftVisible(true);
          leftObserver.unobserve(entry.target); // stop the obervable emit
        }
      },
      { threshold: 0.1 } // provide which amount to element should be considered as entry point for intersecting
    );

    // same code as above for checking element from right side of screen
    // const rightObserver = new IntersectionObserver(
    //   (entries) => {
    //     const entry = entries[0];
    //     if (entry.isIntersecting) {
    //       setRightVisible(true);
    //       rightObserver.unobserve(entry.target); // Stop observing once it becomes visible
    //     }
    //   },
    //   { threshold: 0.1 }
    // );

    //   fetching ref of left observable and updating with left obs function which we created above
    if (leftRef.current) {
      leftObserver.observe(leftRef.current);
    }

    // similar to left.current we are observing update right ref
    // if (rightRef.current) {
    //   rightObserver.observe(rightRef.current);
    // }

    // following react lifecycle after unmounting the component we are disconnecting to prevent menory leaks, stale obs etc
    return () => {
      leftObserver.disconnect();
      // rightObserver.disconnect();
    };
  });

  
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => prevAngle - 60); // Rotates by 60 degrees every 15 seconds
    }, 13000); // Auto-rotate every 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);
  const cyberText = cyber;
  const V2Text = V2;
  const projects = [
    {
      title: "CyberSafe (2022 - 2024)",
      description: cyberText,
    },
    {
      title: "V2-Connect (2023 - 2024)",
      description: V2Text,
    },
    {
      title: "Vendor Management System (2022-2023)",
      description: python,
    },
    {
      title: "Portfolio (2024)",
      description: reactPortfolio,
    },
    {
      title: "Netflix Gemini GPT (2024)",
      description: reactNetflixGpt,
    },
    {
      title: "Food Ordering (2024)",
      description:  reactFoodApp,
    },
  ];
  return (
<>
      <div className="flex justify-center items-center mt-[15rem]">
        <div className="relative w-8/12 h-auto">
          {/* Heading component */}
          <div
            ref={leftRef}
            className={`transition-transform duration-1000 ease-in-out transform ${
              leftVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            } text-center items-center mb-[15%] mt-20`}
          >
            <div className="-top-[40%] w-full absolute animate-slide-in justify-center items-center text-center mt-3 bg-black py-3 bg-opacity-80 rounded-full">
              <h1 className=" text-yellow-400 font-bold text-3xl z-10">
                Project Portfolio
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel-container mt-[5rem] mb-[5rem]">
        <div
          className="carousel"
          style={{ transform: `rotateY(${angle}deg)` }}
        >
          {projects.map((project, index) => (
            <div className="carousel__face" key={index}>
              <div className="card">
                <h1 className="card-title text-lg text-cyan-100 font-bold mt-3 pt-3 text-center px-3">{project.title}</h1>
                <p className="card-description text-2xl text-white font-poppins px-20 text-justify overflow-y-auto text-ellipsis break-words">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
