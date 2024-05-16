import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillFacebook } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


function Home() {
  return (
    <>
      <div id="Home" className="h-lvh bg-rose-100 px-28 flex items-center flex-row text-base/loose  ">
        <div>
          <div className="px-5">
            <img className=" rounded-full  lg:w-80 lg:h-80   " src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
          </div>
        </div>

        <div>
          <div>
            <h1 className="text-5xl text-wrap  uppercase ">Title Full name</h1>
          </div>

          <div>
            <div>
              <p>porto pholio</p>
            </div>

            <div>
              <p className="text-wrap ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi a
                corrupti, nam autem natus illum mollitia debitis maiores, ab
                eveni
              </p>
            </div>

            <div>
              <ul className="flex flex-row justify-around py-3 text-base/loose">
                <li>
                  <AiFillFacebook size={30} />
                </li>
                <li>
                  <FaSquareXTwitter size={30} />
                </li>
                <li>
                  <FaLinkedinIn size={30} />
                </li>
                <li>
                  <FaInstagram size={30} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
