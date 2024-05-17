import React from "react";
import { Link } from "react-scroll";
import { BrowserRouter } from "react-router-dom";

function Navbar() {
  return (
    <div className=" fixed h-dvh w-full justify-center mx-12 hidden md:block">
      <div className="py-80">
        <div>
          <h1 className="text-4xl font-bold text-wrap uppercase font-bolds">
            title full name
          </h1>
        </div>
        <div className="my-9 ">
          <BrowserRouter>
            <ul className="flex flex-col justify-items-center ">
              <li className=" py-1">
                <Link
                  spy={true}
                  smooth={true}
                  className="relative cursor-pointer text-xl w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  
                >
                  Home
                </Link>
              </li>
              <li className="py-1">
                <Link
                  spy={true}
                  smooth={true}
                  className="relative cursor-pointer text-xl w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  About
                </Link>
              </li>
              <li className="py-1">
                <Link
                  spy={true}
                  smooth={true}
                  
                  className="relative cursor-pointer text-xl w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Portfolio
                </Link>
              </li>
              <li className="py-1">
                <Link className="relative cursor-pointer text-xl w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                  Contact
                </Link>
              </li>
            </ul>
          </BrowserRouter>
        </div>
        <div>
          <p className="font-light">
            <p>202? Morocco</p>
            <p>Created by Mohamed Reda Foshi</p>
          </p>
        </div>
      </div>

      <div>
        {/*

                <button
                className="px-1 text-white bg-black dark:bg-white dark:text-black w-10 h-10 bottom-16 right-16 rounded-md items-center"
                onClick={toggleDarkMode}
                >
            {darkMode ? <MdDarkMode size={30} /> : <FaSun size={30} />}
            </button>
            */}
      </div>
    </div>
  );
}

export default Navbar;
