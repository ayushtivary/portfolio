import React from "react";
import { emailId, instaId, linkedinId, Phno } from "../Utils/constants";

const Footer = () => {
  return (
    <div className="px-4 py-3 bg-gradient-to-b from-black z-20 bg-black bg-opacity-25 flex w-full  justify-between mt-20">
      <div className="w-full flex justify-between">
        <ul className="flex justify-between text-green-200 w-full">
          <li className="px-6 w-3/12 text-lg">
            Contact 👇🏻 <p className="text-sm font-bold">{Phno}</p>
          </li>
          <li className="px-6  w-5/12 text-lg">
            Linkedin 👇🏻
            <p>
              <a
                href="https://www.linkedin.com/in/ayush-tiwary-6783681b6/"
                className="no-underline text-sm font-bold"
              >
                {linkedinId}
              </a>
            </p>
          </li>
          <li className="px-6 w-4/12  text-lg">
            Mail Id 👇🏻 <p className="text-sm font-bold">{emailId}</p>
          </li>
          <li className="px-6 w-4/12 text-lg">
            Insta Id 👇🏻<p className="text-sm font-bold">{instaId}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
