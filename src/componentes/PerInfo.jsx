import React from 'react'

function PerInfo() {
  return (
    <div> <div className="grid grid-cols-2 gap-4 px-2 w-full">
    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 bg-navy-700 hadow-none">
    <p className="text-sm text-gray-600">Education</p>
    <p className="text-base font-medium text-navy-700 text-black ">
        Stanford Universitys
    </p>
    </div>

    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 bg-navy-700 hadow-none">
    <p className="text-sm text-gray-600">Languages</p>
    <p className="text-base font-medium text-navy-700  text-black">
        English, Spanish, Italian
    </p>
    </div>

    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 !bg-navy-700 shadow-none">
    <p className="text-sm text-gray-600">Department</p>
    <p className="text-base font-medium text-navy-700  text-black">
        Product Design
    </p>
    </div>

    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 !bg-navy-700 shadow-none">
    <p className="text-sm text-gray-600">Work History</p>
    <p className="text-base font-medium text-navy-700  text-black">
        English, Spanish, Italian
    </p>
    </div>

    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 !bg-navy-700 shadow-none">
    <p className="text-sm text-gray-600">Organization</p>
    <p className="text-base font-medium text-navy-700  text-black">
        Simmmple Web LLC
    </p>
    </div>

    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 !bg-navy-700 shadow-none">
    <p className="text-sm text-gray-600">Birthday</p>
    <p className="text-base font-medium text-navy-700  text-black">
        20 July 1986
    </p>
    </div>
</div></div>
  )
}

export default PerInfo