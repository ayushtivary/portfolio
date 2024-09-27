import React from "react";
import { emailId, instaId, linkedinId, Phno } from "../Utils/constants";

const Footer = () => {
  return (
    <div className="px-4 py-3 bg-gradient-to-b from-black z-20 bg-black flex w-full  justify-between mt-20">
      <div className="w-full flex justify-between">
        <ul className="flex justify-between text-green-200 w-full">
          <li className="px-6 text-xl w-3/12 font-semibold">
            Contact 👇🏻 <p className="text-lg text-cyan-100 font-bold">{Phno}</p>
          </li>
          <li className="px-6  w-5/12 text-xl font-semibold ">
            Linkedin 👇🏻
            <p  role="button">
              <a
                href="https://www.linkedin.com/in/ayush-tiwary-6783681b6/"
                className="no-underline text-lg text-cyan-100 font-bold"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
              >
                {linkedinId}
              </a>
            </p>

          </li>
          <li className="px-6 w-4/12  text-xl font-semibold">
            Mail Id 👇🏻 <p className="text-lg text-cyan-100 font-bold">{emailId}</p>
          </li>
          <li className="px-6 w-4/12 text-xl font-semibold">
            Insta Id 👇🏻<p className="text-lg text-cyan-100 font-bold">{instaId}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
