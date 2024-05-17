import React, { useState } from 'react';
import Home from "./Home";

const Test_1 = () => {
  const [Copoment, setCopoment] = useState("Home");

  const Page_Home = () => {
    setCopoment('Home');
  };

  const Page_About = () => {
    setCopoment('red');
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mr-2"
          onClick={Page_Home}
        >
          Show Green Circle
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={Page_About}
        >
          Show Red Circle
        </button>
      </div>
      <div>
        {Copoment === 'Home' && (
          <div
            className="w-24 h-24 rounded-full bg-green-500"
          >
              <Home/>
          </div>
        )}
        {Copoment === 'red' && (
          <div
            className="w-24 h-24 rounded-full bg-red-500"
          >
            
          </div>
        )}
      </div>
    </div>
  );
};
 
export default Test_1;
