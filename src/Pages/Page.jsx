import React from "react";
import Home from "../componentes/Home";
import About from "../componentes/About";
import Portfolio from "../componentes/Portfolio";

import { useState } from "react";




import { Link } from "react-scroll";
import { BrowserRouter } from "react-router-dom";

export default function Page() {

  const [Copoment, setCopoment] = useState("Home");

  const Page_Home = () => {
    setCopoment('Home');
  };

  const Page_About = () => {
    setCopoment('About');
  };
  const Page_Portfolio = () => {
    setCopoment('Portfolio');
  };

  
  
  


 
  return (
    <div className="grid grid-cols-5">
       <div>
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
                  <li className=" py-1  ">
                  
                    <Link
                      spy={true}
                      smooth={true}
                      className="relative cursor-pointer text-xl w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                    >
                    <button onClick={Page_Home}>
                    Home
                    </button>
                      
                    </Link>
             
                  </li>
                  <li className="py-1">
 
                    <Link
                    
                      spy={true}
                      smooth={true}
                      className="relative cursor-pointer text-xl w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                    >

                      <button onClick={Page_About}>
                        About
                    </button>
           
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link
                      spy={true}
                      smooth={true}
                      className="relative cursor-pointer text-xl w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                    >
                    
                    <button onClick={Page_Portfolio}>
                        Portfolio
                    </button>

                      
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
        </div>
      </div> 

      <div className="col-span-4 h-lvh">

             
                
      
                <div>
        {Copoment === 'Home' && (
          <div
 >
              <Home/>
          </div>
        )}


        {Copoment === 'About' && (
          <div
  >
            <About/>
          </div>
        )}

        {Copoment === 'Portfolio' && (
          <div
 >
            <Portfolio/>
          </div>
        )}



      </div>
              
          
      </div>
    </div>
  );
}
