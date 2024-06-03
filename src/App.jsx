import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

//import Page from "./Pages/Page";
import Home from "./componentes/Home";
import About from "./componentes/About";
import Experiences from "./componentes/Experiences";
import Navbar from "./componentes/Navbar";
import Contact from "./componentes/Contact";
import Research from "./componentes/Research";

import { useState } from "react";

//import './scroll.css';

// Routes
// Route
// useNavigate
// Navigate
// Outlet
// Link

/*
function App() {
  
  return (
    <div className="bg-slate-200">
     
    
        
        <Page/>
        
      
     </div>
    );
  }
  
  
  
  export default App;
  
  */


function App  ()  {



  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  







  return (
    <div className={`${darkMode ? "dark" : ""} overflow-y-scroll h-lvh`} >
    <div className=" md:grid grid-cols-5   ">
   
     <div className="  md:col-span-1   ">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div> 

    <div className=" md:col-span-4  ">
      <div className="text-black bg-white dark:text-white dark:bg-stone-900">    
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Experiences" element={<Experiences />} />
            <Route path="Research" element={<Research />} />
            <Route path="Contact" element={<Contact darkMode={darkMode}/>} />
          </Route>
        </Routes>
      </div>
    </div>

    </div>
    </div>
  );
};

export default App;
