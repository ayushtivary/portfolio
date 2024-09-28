import React, { useEffect, useRef, useState } from "react";
import { reactPortfolio, cyber, V2, python, reactFoodApp, reactNetflixGpt } from "../Utils/constants";

const Project = () => {
  const [leftVisible, setLeftVisible] = useState(false);
  const leftRef = useRef(null);
  const [angle, setAngle] = useState(0);
  const projects = [
    {
      title: "CyberSafe (2022 - 2024)",
      description: cyber,
    },
    {
      title: "V2-Connect (2023 - 2024)",
      description: V2,
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
      description: reactFoodApp,
    },
  ];

  const totalProjects = projects.length;
  const rotationAngle = 360 / totalProjects; // Calculate dynamic rotation based on number of projects

  useEffect(() => {
    const leftObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setLeftVisible(true);
          leftObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (leftRef.current) {
      leftObserver.observe(leftRef.current);
    }

    return () => {
      leftObserver.disconnect();
    };
  }, []);

  // Auto-rotation logic every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => prevAngle - rotationAngle); // Auto-rotate based on the calculated angle
    }, 10000); // 5 seconds interval

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [rotationAngle]);

  // Handle click to rotate the carousel based on where the click happens
  const handleClick = (e) => {
    const clickX = e.clientX;
    const screenWidth = window.innerWidth;

    if (clickX < screenWidth / 2) {
      // Click is on the left side of the screen
      setAngle((prevAngle) => prevAngle + rotationAngle); // Rotate left by dynamic angle
    } else {
      // Click is on the right side of the screen
      setAngle((prevAngle) => prevAngle - rotationAngle); // Rotate right by dynamic angle
    }
  };

  return (
    <>
      <div className="flex justify-center items-center mt-[15rem] pointer-events-none">
        <div className="relative w-8/12 h-auto">
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

      {/* Add onClick event to handle left/right click */}
      <div
        className="carousel-container mt-[5rem] mb-[5rem] w-full h-[500px] relative"
        onClick={handleClick}
      >
        <div
          className="carousel"
          style={{ transform: `rotateY(${angle}deg)` }}
        >
          {projects.map((project, index) => (
            <div className="carousel__face" key={index}>
              <div className="card">
                <h1 className="card-title text-lg text-cyan-100 font-bold mt-3 pt-3 text-center px-3">
                  {project.title}
                </h1>
                <p className="card-description text-2xl text-white font-poppins px-20 text-justify overflow-y-auto text-ellipsis break-words">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
