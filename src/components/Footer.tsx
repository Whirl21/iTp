import React from "react";
import { Link } from "react-router-dom";
//i was going to use it. , but not anymore lol.
const Footer = () => {
  return (
    <>
      <h3 className="ml-2 text-xl font-bold tracking-wide text-center text-gray-100 ">
        Copyright ©️ {new Date().getFullYear()}{" "}
        <a href="https://github.com/whirlxd">Whirl</a>.
      </h3>
      <div className="flex flex-col justify-center pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
        <div className="flex items-center justify-center mt-4 space-x-4 sm:mt-0">
          <a
            href="https://twitter.com/whirlxd"
            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            target="_blank"
            title="Twitter"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
            </svg>
          </a>
          <a
            href="https://whirlxd.xyz"
            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            target="_blank"
            title="Website"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </a>
          <a
            href="https://whirlxd.xyz/contact"
            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            target="_blank"
            title="Discord"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};
export default Footer;
