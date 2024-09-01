import React from "react";

const Footer = () => {
  return (
    <div className="px-4 py-3 bg-gradient-to-b from-black z-20 bg-black bg-opacity-25 flex w-full  justify-between mt-20">
      <div className="w-full flex justify-between">
        <ul className="flex justify-between text-green-200">
          <li className="px-6 font-bold text-xl">
            Contact 👇🏻 <p>91+ 9438433233</p>
          </li>
          <li className="px-6 font-bold text-xl">
            Linkedin 👇🏻
            <p>
              <a
                href="https://www.linkedin.com/in/ayush-tiwary-6783681b6/"
                className="no-underline"
              >
                https://www.linkedin.com/in/ayush-tiwary-6783681b6/
              </a>
            </p>
          </li>
          <li className="px-6 font-bold text-xl">
            Mail Id 👇🏻 <p>ayushtivary92@gmail.com</p>
          </li>
          <li className="px-6 font-bold text-xl">
            Instagram Id 👇🏻<p>ayush_tivary01</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
