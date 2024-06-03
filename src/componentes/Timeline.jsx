import React from 'react';
import Button from './Button';
import { Link } from 'react-scroll';

const Timeline = () => {
  return (
    <div className="container max-w-6xl">
      <div className="relative wrap overflow-hidden lg:p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-2/4"></div>

        {/* Bachelor's Section */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-black dark:bg-white shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white dark:text-black">1</h1>
          </div>
          <div className="order-1 bg-white dark:bg-black rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 dark:text-white text-xl">Bachelor's</h3>
            <p className="text-sm leading-snug tracking-wide text-black dark:text-white text-opacity-100 line-clamp-3">
              Lorem Ipsum is simply dummy text of the printing and
            </p>
            <div className="py-4">
              <Link to="first" smooth={true} duration={500}>
                <Button name="Learn More" />
              </Link>
            </div>
          </div>
        </div>

        {/* Master's Section */}
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-black dark:bg-white shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white dark:text-black font-semibold text-lg">2</h1>
          </div>
          <div className="order-1 bg-white dark:bg-black rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-black dark:text-white text-xl">Master's</h3>
            <p className="text-sm leading-snug tracking-wide text-black dark:text-white text-opacity-100 line-clamp-3">
              Lorem Ipsum is simply dummy text of the printing and
            </p>
            <div className="py-4">
              <Link to="second" smooth={true} duration={500}>
                <Button name="Learn More" />
              </Link>
            </div>
          </div>
        </div>

        {/* Doctoral Section */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-black dark:bg-white shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white dark:text-black">3</h1>
          </div>
          <div className="order-1 bg-white dark:bg-black rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-black dark:text-white text-xl">Doctoral</h3>
            <p className="text-sm leading-snug tracking-wide text-black dark:text-white text-opacity-100 line-clamp-3">
              Lorem Ipsum is simply dummy text of the printing and
            </p>
            <div className="py-4">
              <Link to="third" smooth={true} duration={500}>
                <Button name="Learn More" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
