import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

//import Page from "./Pages/Page";
import Home from "./componentes/Home";
import About from "./componentes/About";
import Experiences from "./componentes/Experiences";
import Navbar from "./componentes/Navbar";
import Contact from "./componentes/Contact";

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

const App = () => {
  return (
    <div className=" md:grid grid-cols-5   ">
   
     <div className="  md:col-span-1   ">
      <Navbar/>
      </div> 

      <div className=" md:col-span-4 ">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Experiences" element={<Experiences />} />
            <Route path="Contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>

    </div>
  );
};

export default App;
