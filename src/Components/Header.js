import React from "react";

const Header = () => {
  return (
    <div className="fixed px-4 py-3 bg-gradient-to-b from-slate-50 z-20 flex w-full opacity-40 justify-between">
      <div className="w-8/12 flex justify-between">
        <ul className="flex justify-between">
          <li className="px-6 font-bold text-2xl">ABOUT</li>
          <li className="px-6 font-bold text-2xl">SKILLS</li>
          <li className="px-6 font-bold text-2xl">EXPERIENCE</li>
          <li className="px-6 font-bold text-2xl">PROJECTS</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
