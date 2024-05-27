import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";


function Navbar() {

  const [Open, setOpen]=useState(false);
  const [message, setMessage] = useState(<GiHamburgerMenu size={30} />)
  
  


  // dynamic year
  const today = new Date();
  const year = today.getFullYear();
  





  
  const handClickPc=()=>
    {
      // setMessage("Second")
      // if(message === "Second") {
        // setMessage(<GiHamburgerMenu />)
      // }


      if(Open) {
        setMessage(<GiHamburgerMenu size={30} />)
      } else {
        setMessage(<IoMdClose size={30} />)

      }
      setOpen(!Open)
    };
    
    
    
    
    return (
      
      <div>
    <div className="md:hidden" >

        <div className="w-lvw fixed z-30 bg-stone-100 flex justify-between  items-center shadow-sm   " >

          <div>
           <button  onClick={handClickPc} className="py-3" >
               {message}
            </button>
              
                  <div>

                     {Open && (<div><Hamburger/></div>)}
                    </div>
                
          </div>

            <div className=" px-3">
            <button className="px-1 text-white  w-10 h-10 bottom-16 right-16 rounded-md items-center" >
           darck mode
            </button>
            </div>

        </div>
    
      </div>

    <div className="hidden md:block">
    <div  className=" flex flex-col  items-center   "> 
      
      
    

    
      <div className="space-y-4 fixed bg-stone-100 h-screen py-56 px-4 ">


     
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
                className="relative cursor-pointer text-xl w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-black  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                spy={true}
                smooth={true}
                className="relative cursor-pointer text-xl w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-black  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Experiences"
                spy={true}
                smooth={true}
                className="relative cursor-pointer text-xl w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-black  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">

                    Experiences
              </Link>
            </li>
            <li>
              <Link 
               to="/Contact"
               spy={true}
               smooth={true}
              
              className="relative cursor-pointer text-xl w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-black  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                Contact
              </Link>
            </li>
          </ul>
        </div>

 
        <div className=" py-64">
          <p className="font-light">
            
            <p>
            <p>Copywrite © {year} </p>
              
            </p> 
            <p>Created by Mohamed Reda Foshi</p>
          </p>
        </div>
      </div>
     </div>    
    </div>    
    </div>
  );
}

export default Navbar;
