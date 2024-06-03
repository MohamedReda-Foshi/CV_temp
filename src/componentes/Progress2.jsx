import React from 'react'

function Progress2(props) {
  return (
    <div>
         <div className="flex-col flex">

      <div>
      <h1 className="  text-black dark:text-white     ">
        {props.skill} <span className=" text-sm text-black-400">{props.level}%</span>
      </h1>
      <div className="mt-2 ml-10  h-4 relative w-60 rounded-full overflow-hidden">
        <div className=" w-full h-full bg-gray-200 dark:bg-gray-700 absolute "></div>
        <div className=" h-full bg-black dark:bg-white absolute w-11/12"></div>
      </div>
      </div>






    </div>
    </div>
  )
}

export default Progress2