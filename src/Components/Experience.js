import React, { useEffect, useRef, useState } from "react";
import { exp } from "../Utils/constants";
import geminilogo from "../Assests/Gemini_Logo_2.1acba111.svg";
const Experience = () => {
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
  const aboutText = exp;
  return (
    <div>
      <div className="flex justify-center items-center mt-[15rem] ">
        <div className="relative w-8/12 h-[30rem]">
          <div
            ref={leftRef}
            className={`transition-transform duration-1000 ease-in-out transform ${
              leftVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            } text-center items-center `}
          >
            <div className="-top-[40%] w-full absolute animate-slide-in justify-center items-center bg-black py-3 bg-opacity-80 rounded-full">
              <h1 className="  text-yellow-400 font-bold text-3xl z-10">
                Professional Experience
              </h1>
            </div>
          </div>
          {/* Profile section*/}
          <div className="justify-center items-center text-center ">
            <div
              ref={rightRef}
              className={`transition-transform duration-1000 ease-in-out transform ${
                rightVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              } text-center items-cente`}
            >
              <div className="-top-[40%] w-full absolute animate-slide-in justify-center items-center text-center mt-[13%]  bg-black bg-opacity-80 shadow-lg rounded-2xl">
                <img
                  className="w-30 h-40 px-[15%] py-2 justify-center text-center items-center"
                  src={geminilogo}
                  alt="gemlogo"
                />
                <h1 className="text-3xl text-cyan-100 font-bold mt-3 pt-3 text-center px-3">
                  2021 - Present
                </h1>
                <h1 className=" text-2xl text-gray-300 p-10 font-poppins text-justify space-x-6 ">
                {/* font-poppins text-base text-gray-300 px-20 text-justify overflow-y-auto text-ellipsis break-words */}
                  {aboutText}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Experience;
