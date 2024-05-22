import React from "react";
import { Link } from "react-router-dom";

// import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className=" flex flex-col  items-center  ">
      <div className="space-y-4 fixed bg-stone-300 h-screen py-40 px-4 ">
        <div>
          <h1 className="text-4xl  font-bold text-wrap uppercase font-bolds">
            Main nav bar
          </h1>
        </div>

        <div>
          <ul className="flex flex-col justify-items-center space-y-3 ">
            <li >
              <Link
                to="/"
                spy={true}
                smooth={true}
                className="relative cursor-pointer text-xl w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                spy={true}
                smooth={true}
                className="relative cursor-pointer text-xl w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Portfolio"
                spy={true}
                smooth={true}
                className="relative cursor-pointer text-xl w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="relative cursor-pointer text-xl w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-light">
            <p>202? Morocco</p>
            <p>Created by Mohamed Reda Foshi</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
