import React, { useEffect, useRef, useState } from "react";
import { reactPortfolio } from "../Utils/constants";
import { cyber } from "../Utils/constants";
import { V2 } from "../Utils/constants";
import { python } from "../Utils/constants";
import { reactFoodApp } from "../Utils/constants";
import { reactNetflixGpt } from "../Utils/constants";
const Project = () => {
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  const leftRef = useRef(null);
  const rightRef = useRef(null);
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
    const rightObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setRightVisible(true);
          rightObserver.unobserve(entry.target); // Stop observing once it becomes visible
        }
      },
      { threshold: 0.1 }
    );

    //   fetching ref of left observable and updating with left obs function which we created above
    if (leftRef.current) {
      leftObserver.observe(leftRef.current);
    }

    // similar to left.current we are observing update right ref
    if (rightRef.current) {
      rightObserver.observe(rightRef.current);
    }

    // following react lifecycle after unmounting the component we are disconnecting to prevent menory leaks, stale obs etc
    return () => {
      leftObserver.disconnect();
      rightObserver.disconnect();
    };
  });
  const cyberText = cyber;
  const V2Text = V2;
  return (
    <div className="flex justify-center items-center mt-[17rem]">
      <div className="relative w-8/12 h-auto">
        {/* Heading component  */}
        <div
          ref={leftRef}
          className={`transition-transform duration-1000 ease-in-out transform ${
            leftVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          } text-center items-center mb-[15%] mt-20`}
        >
          <div className="-top-[40%] w-full absolute animate-slide-in justify-center items-center text-center mt-3 bg-black py-3 bg-opacity-35 rounded-full">
            <h1 className=" text-green-200 font-bold text-3xl z-10">
              Project Portfolio
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-16">
          {/* First Project */}
          <div
            ref={leftRef}
            className={`transition-transform duration-1000 ease-in-out transform ${
              leftVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            } text-center items-center`}
          >
            <div className="relative w-full h-[35rem] animate-slide-in justify-center items-center text-center mt-[13%] bg-black bg-opacity-50 shadow-lg rounded-2xl overflow-scroll">
              <h1 className="text-2xl text-blue-200 font-bold mt-3 pt-3 text-center">
                CyberSafe (2022 - Present)
              </h1>
              <h3 className="text-xl text-blue-200 p-10 text-justify overflow-y-auto text-ellipsis break-words">
                {cyberText}
              </h3>
            </div>
          </div>

          {/* Second Project */}
          <div
            ref={rightRef}
            className={`transition-transform duration-1000 ease-in-out transform ${
              rightVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            } text-center items-center`}
          >
            <div className="relative w-full h-[35rem] animate-slide-in justify-center items-center text-center mt-[13%] bg-black bg-opacity-50 shadow-lg rounded-2xl overflow-scroll">
              <h1 className="text-2xl text-blue-200 font-bold mt-3 pt-3 text-center">
                V2-Connect (2023 - 2024)
              </h1>
              <h1 className="text-xl text-blue-200 p-10 text-justify overflow-y-auto text-ellipsis break-words">
                {V2Text}
              </h1>
            </div>
          </div>

          {/* Third Project */}
          <div
            className={`transition-transform duration-1000 ease-in-out transform ${
              leftVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            } text-center items-center`}
          >
            <div className="relative w-full h-[30rem] animate-slide-in justify-center items-center text-center mt-[5%] bg-black bg-opacity-50 shadow-lg rounded-2xl overflow-scroll">
              <h1 className="text-2xl text-blue-200 font-bold mt-3 pt-3 text-center text-ellipsis px-3 break-words text-wrap">
                Vendor Management System (2022-2023)
              </h1>
              <h1 className="text-xl text-blue-200 p-10 text-justify overflow-y-auto text-ellipsis break-words">
                {python}
              </h1>
            </div>
          </div>

          {/* Fourth Project */}

          <div
            className={`transition-transform duration-1000 ease-in-out transform ${
              rightVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            } text-center items-center`}
          >
            <div className="relative w-full h-[30rem] animate-slide-in justify-center items-center text-center mt-[5%] bg-black bg-opacity-50 shadow-lg rounded-2xl overflow-scroll">
              <h1 className="text-2xl text-blue-200 font-bold mt-3 pt-3 text-center">
                Porfolio (2024)
              </h1>
              <h1 className="text-xl text-blue-200 p-10 text-justify overflow-y-auto text-ellipsis break-words">
                {reactPortfolio}
              </h1>
              {/* <h3>
                {portfolioAppLink}
              </h3> */}
            </div>
          </div>

          {/* fifth Project */}
          <div
            className={`transition-transform duration-1000 ease-in-out transform ${
              leftVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            } text-center items-center`}
          >
            <div className="relative w-full h-[30rem] animate-slide-in justify-center items-center text-center mt-[5%] bg-black bg-opacity-50 shadow-lg rounded-2xl overflow-scroll">
              <h1 className="text-2xl text-blue-200 font-bold mt-3 pt-3 text-center">
                Netflix Gemini GPT (2024)
              </h1>
              <h1 className="text-xl text-blue-200 p-10 text-justify overflow-y-auto text-ellipsis break-words">
                {reactNetflixGpt}
              </h1>
            </div>
          </div>

          {/* sixth Project */}
          <div
            className={`transition-transform duration-1000 ease-in-out transform ${
              rightVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            } text-center items-center`}
          >
            <div className="relative w-full h-[30rem] animate-slide-in justify-center items-center text-center mt-[5%] bg-black bg-opacity-50 shadow-lg rounded-2xl overflow-scroll">
              <h1 className="text-2xl text-blue-200 font-bold mt-3 pt-3 text-center">
                Food Ordering (2024)
              </h1>
              <h1 className="text-xl text-blue-200 p-10 text-justify overflow-y-auto text-ellipsis break-words">
                {reactFoodApp}
              </h1>
              {/* <h3>
                {foodAppLink}
              </h3> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
