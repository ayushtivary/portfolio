import React from "react";
import { about } from "../Utils/constants";
import img from "../Assests/photo_linkedin.png";
const Home = () => {
  const aboutText = about;

  return (
    <div>
      <div className="flex justify-center items-center mt-[18%] ">
        <div className="relative w-8/12 h-[30rem]">
          <div className="-top-[40%] absolute animate-slide-in justify-center items-center text-center w-full  mt-3 bg-black py-3 bg-opacity-35 rounded-full">
            <h1 className=" text-green-200 font-bold text-3xl z-10">
              A Little About Myself
            </h1>
          </div>

          {/* Profile section*/}
          <div className="justify-center items-center text-center ">
            <img
              className="w-30 h-40 rounded-full absolute justify-center -top-[20%] left-[42%] z-20 opacity-80"
              src={img}
              alt="profile"
            />
          </div>
          <div className="absolute animate-slide-in inset-0 flex flex-col justify-start items-center px-12 bg-black bg-opacity-50 shadow-lg rounded-2xl overflow-scroll">
            {/* About Section */}
            <div className="w-full relative mt-20 overflow-y-auto text-ellipsis break-words ">
              <h3 className="text-2xl text-blue-200  px-10 text-justify space-x-10">
                {aboutText}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
