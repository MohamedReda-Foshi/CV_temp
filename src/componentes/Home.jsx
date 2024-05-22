import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillFacebook } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Animation_text from "./Animation_text"

function Home() {
  return (
    
      <div  className=" bg-white-300 h-lvh flex items-center flex-row text-base/loose  ">
          <div className="">
          <div className="px-5">
            <img className=" rounded-full  w-60 h-48  max-w-60  max-h-60  " src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
          </div>
        </div>

        <div  className="space-y-2">

          <div>
            <h1 className="text-5xl text-wrap  uppercase ">P title Full name</h1>
          </div>

          <div className=" flex  flex-col items-start 	">

            <div>
              <Animation_text/>
            </div>

            <div>
              <p className="text-wrap ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi a
                corrupti, nam autem natus illum mollitia debitis maiores, ab
                eveni
              </p>
            </div>

            <div className=" py-5 ">
              <ul className="flex flex-row justify-around  space-x-5 text-base/loose">
                <li className="">
                  <button className="transition ">

                  <AiFillFacebook size={30} />
                  </button>
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
    
  );
}

export default Home;
