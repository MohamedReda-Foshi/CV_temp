import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

//import Page from "./Pages/Page";
import Home from "./componentes/Home";
import About from "./componentes/About";
import Portfolio from "./componentes/Portfolio";
import Navbar from "./componentes/Navbar";

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
    <div className=" grid grid-cols-6">
   
     <div className=" hidden md:block md:col-span-1   ">
      <Navbar/>
      </div> 

      <div className=" col-span-5 ">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Portfolio" element={<Portfolio />} />
          </Route>
        </Routes>
      </div>

    </div>
  );
};

export default App;
