import React from 'react'

function PerInfo() {
  return (
    <div> <div className="grid grid-cols-2 gap-4  w-full">
    <div className="flex flex-col items-start justify-center rounded-2xl bg-white dark:bg-stone-900  bg-clip-border px-3 shadow-3xl shadow-shadow-500 bg-navy-700 hadow-none">
    <p className="text-sm text-gray-600 dark:text-white">Education</p>
    <p className="text-base font-medium text-navy-700 text-black dark:text-white">
        Stanford Universitys
    </p>
    </div>

    <div className="flex flex-col justify-center rounded-2xl bg-white  dark:bg-stone-900 bg-clip-border px-3  shadow-3xl shadow-shadow-500 bg-navy-700 hadow-none">
    <p className="text-sm text-gray-600  dark:text-white">Languages</p>
    <p className="text-base font-medium text-navy-700  dark:text-white text-black">
        English, Spanish, Italian
    </p>
    </div>

    <div className="flex flex-col items-start justify-center rounded-2xl bg-white dark:bg-stone-900 bg-clip-border px-3  shadow-3xl shadow-shadow-500 !bg-navy-700 shadow-none">
    <p className="text-sm text-gray-600  dark:text-white">Department</p>
    <p className="text-base font-medium text-navy-700 dark:text-white  text-black">
        Product Design
    </p>
    </div>

    <div className="flex flex-col justify-center rounded-2xl bg-white dark:bg-stone-900 bg-clip-border px-3  shadow-3xl shadow-shadow-500 !bg-navy-700 shadow-none">
    <p className="text-sm text-gray-600  dark:text-white">Work History</p>
    <p className="text-base font-medium text-navy-700  dark:text-white text-black">
        English, Spanish, Italian
    </p>
    </div>

    <div className="flex flex-col items-start justify-center rounded-2xl  bg-white dark:bg-stone-900 bg-clip-border px-3  shadow-3xl shadow-shadow-500 !bg-navy-700 shadow-none">
    <p className="text-sm text-gray-600  dark:text-white">Organization</p>
    <p className="text-base font-medium text-navy-700  dark:text-white text-black">
        Simmmple Web LLC
    </p>
    </div>

    <div className="flex flex-col justify-center rounded-2xl bg-white dark:bg-stone-900 bg-clip-border px-3 shadow-3xl shadow-shadow-500 !bg-navy-700 shadow-none">
    <p className="text-sm text-gray-600  dark:text-white">Birthday</p>
    <p className="text-base font-medium text-navy-700  dark:text-white text-black">
        20 July 1986
    </p>
    </div>
</div></div>
  )
}

export default PerInfo