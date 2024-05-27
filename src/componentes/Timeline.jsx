import React from 'react';
import Button from './Button';
import { Link } from 'react-scroll';

const Timeline = () => {
  return (
    <div className="container mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden lg:p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-2/4"></div>

        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-black shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
          </div>
          <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">Bachelor's</h3>
            <p className="text-sm leading-snug tracking-wide text-black text-opacity-100 line-clamp-3">
              Lorem Ipsum is simply dummy text of the printing and
            </p>
            <div className="py-4">
              <Link to="first"
              smooth={true} 
              >
                
                <Button name="learn more" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-black shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
          </div>
          <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-black text-xl">Master's</h3>
            <p className="ttext-sm leading-snug tracking-wide text-black text-opacity-100 line-clamp-3">
              Lorem Ipsum is simply dummy text of the printing and
            </p>
            <div className="py-4">
              <Link to="second"
              smooth={true} 
              >
                <Button name="learn more" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-black shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
          </div>
          <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-black text-xl">Doctoral</h3>
            <p className="text-sm leading-snug tracking-wide text-black text-opacity-100 line-clamp-3">
              Lorem Ipsum is simply dummy text of the printing and
            </p>
            <div className="py-4">
              <Link to="third"
              smooth={true} 
              >
                <Button name="learn more" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
