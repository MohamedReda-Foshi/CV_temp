import React from "react";

function Progress(props) {
  return (
    <div className="flex-col flex">

      <div>
      <h1 className="  text-black sm:pl-12   ">
        {props.skill} <span className=" text-sm text-black-400">{props.level}%</span>
      </h1>
      <div className="mt-2 ml-10 h-4 relative w-60 rounded-full overflow-hidden">
        <div className=" w-full h-full bg-gray-200 absolute "></div>
        <div className=" h-full bg-black  absolute w-full"></div>
      </div>
      </div>






    </div>
  );
}

export default Progress;