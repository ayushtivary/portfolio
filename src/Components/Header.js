import React from "react";

const Header = () => {
  return (
    <div className="px-4 py-3 bg-gradient-to-b from-black z-20 bg-black bg-opacity-25 flex w-full  justify-between mt-20">
      <div className="w-8/12 flex justify-between">
        <ul className="flex justify-between text-green-200">
          <li className="px-6 font-bold text-xl">ABOUT</li>
          <li className="px-6 font-bold text-xl">SKILLS</li>
          <li className="px-6 font-bold text-xl">EXPERIENCE</li>
          <li className="px-6 font-bold text-xl">PROJECTS</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
