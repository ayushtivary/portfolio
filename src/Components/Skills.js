import React, { useRef, useEffect, useState } from "react";
import skillLogoMain from "../Assests/Image1.png";
import python from "../Assests/Pyhton.png";
import angular from "../Assests/Angular.png";
import react from "../Assests/React.png";
import git from "../Assests/Git.png";
import aws from "../Assests/Aws.png";
import node from "../Assests/Node.png";
import { angularText } from "../Utils/constants";
import { pythonText } from "../Utils/constants";
import { awstext } from "../Utils/constants";
import { reactText } from "../Utils/constants";
import { gitText } from "../Utils/constants";
import { nodeTextmessage } from "../Utils/constants";
const Skills = () => {
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const leftObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setLeftVisible(true);
          leftObserver.unobserve(entry.target); // Stop observing once it becomes visible
        }
      },
      { threshold: 0.1 }
    );

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

    if (leftRef.current) {
      leftObserver.observe(leftRef.current);
    }
    if (rightRef.current) {
      rightObserver.observe(rightRef.current);
    }

    return () => {
      leftObserver.disconnect();
      rightObserver.disconnect();
    };
  }, []);

  const AngularText = angularText;
  const PythonText = pythonText;
  const AwsText = awstext;
  const ReactText = reactText;
  const NodeText = nodeTextmessage;
  return (
    <div className="flex flex-col justify-center items-center space-y-20 mt-20">
      {/* Skills Title */}
      <div
        ref={leftRef}
        className={`transition-transform duration-1000 ease-in-out transform ${
          leftVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        } text-center items-center w-8/12`}
      >
        <div className="absolute animate-slide-in justify-center items-center text-center w-full mt-3 bg-black py-3 bg-opacity-35 rounded-full">
          <h1 className="text-green-200 font-bold text-3xl z-10">
            Competencies and Knowledge
          </h1>
        </div>
      </div>

      {/* Skill Images Layout */}
      <div
        ref={rightRef}
        className={`transition-transform duration-1000 ease-in-out transform ${
          rightVisible
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        } text-center items-center w-3/4`}
      >
        <div className="relative flex justify-center items-center w-full h-96 mt-[15%]">
          {/* Main Skill Logo */}
          <img
            className="w-32 h-40 md:w-48 md:h-56 lg:w-60 lg:h-70 xl:w-70 xl:h-80 mt-12 bg-opacity-15 transition-transform duration-1000 ease-in-out transform delay-600"
            src={skillLogoMain}
            alt="Main Skill"
          />

          {/* Surrounding Images */}
          <div className="absolute flex justify-around items-center w-full h-full">
            {/* Top Image with Text */}
            <div className="flex flex-col items-center absolute -top-[35%] left-1/2 transform -translate-x-1/2 ">
              <h1 className="text-blue-200 text-md mb-2 z-10 bg-black bg-opacity-20 px-10 py-5 justify-around rounded-full">
                {AngularText}
              </h1>
              <img
                className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-2 mt-3 border-gray-400 bg-opacity-15 transition-transform duration-1000 ease-in-out transform delay-100"
                src={angular}
                alt="Angular"
              />
            </div>

            {/* Top Right Image with Text */}
            <div className="flex items-center absolute top-[25%] right-[8%] md:right-[22%] transform -translate-x-[18%]">
              {/* Text */}
              <h1 className="text-blue-200 text-md ml-3 md:ml-6  bg-black bg-opacity-20 px-4 py-2 w-[50%] rounded-full -mb-[10%]">
                {ReactText}
              </h1>

              {/* Image */}
              <img
                className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-2 ml-3 -mb-10 border-gray-400 bg-opacity-15 transition-transform duration-1000 ease-in-out transform delay-200"
                src={react}
                alt="React"
              />
            </div>

            {/* Bottom Right Image with Text */}
            <div className="flex items-center absolute bottom-0 left-[17%] -top-[25%] right-[15rem] md:right-[22%] transform -translate-x-1/2 translate-y-[38%]">
              {/* Text */}
              <h1 className="text-blue-200 text-md z-10 bg-black bg-opacity-20  px-4 py-2 w-[70%] rounded-full -mb-5">
                {gitText}
              </h1>

              {/* Image */}
              <img
                className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-2 ml-3 border-gray-400 bg-opacity-15 transition-transform duration-1000 ease-in-out transform delay-300"
                src={git}
                alt="git"
              />
            </div>

            {/* bottom Image with Text */}
            <div className="flex flex-col items-center absolute top-[23rem] left-1/2 transform -translate-x-1/2 ">
              <img
                className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-2 mt-3 border-gray-400 bg-opacity-15 transition-transform duration-1000 ease-in-out transform delay-100"
                src={node}
                alt="node"
              />
              <h1 className="text-blue-200 text-md mb-2 mt-2 z-10 bg-black bg-opacity-20 px-10 py-5 justify-around rounded-full">
                {NodeText}
              </h1>
            </div>

            {/* Bottom Left Image with Text */}
            <div className="flex items-center absolute bottom-[15%] left-[15%] md:left-[22%] transform translate-x-1/2 translate-y-1/2  flex-col px-10 md:flex-row">
              {/* Image */}
              <img
                className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-2 border-gray-400 bg-opacity-15 transition-transform duration-1000 ease-in-out transform delay-400"
                src={aws}
                alt="AWS"
              />

              {/* Text */}
              <h1 className="text-blue-200 text-md ml-3 md:ml-6  bg-black bg-opacity-20 px-4 py-2 w-[50%] rounded-full -mb-5">
                {AwsText}
              </h1>
            </div>

            {/* Top Left Image with Text */}
            <div className="items-center absolute top-[45%] left-[29%]  transform -translate-y-3/4 translate-x-1/2 flex flex-col px-10 md:flex-row">
              {/* Image */}
              <img
                className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-2 border-gray-400 bg-opacity-15 transition-transform duration-1000 ease-in-out transform delay-500"
                src={python}
                alt="Python"
              />

              {/* Text */}
              <h1 className="text-blue-200 text-md ml-3 md:ml-6 mt-2 md:mt-0 bg-black bg-opacity-20 px-4 py-2 w-[50%] rounded-full mb-5">
                {PythonText}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
