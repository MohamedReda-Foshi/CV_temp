import React from 'react'
import ResearchCard from './ResearchCard'

function Research() {
  return (
    <div className='p-4'>
        <div>
            <h1 className='text-4xl '>Information about your research </h1>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-center '>
            <ResearchCard/>
        </div>          


    </div>
  )
}

export default Research 