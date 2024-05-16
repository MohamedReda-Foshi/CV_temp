import React from "react";

import "./App.css";
import Navbar from "./componentes/Navbar";
import Page from "./Pages/Page";

function App() {
  
  return (
    <div className="bg-slate-200">
      <div className="grid grid-cols-5 ">
        <div className=" bg-slate-300">
          <Navbar />
        </div>
        <div className="col-span-4 h-lvh">
          <Page />
        </div> 
      </div>
    </div>
  );
}

export default App;