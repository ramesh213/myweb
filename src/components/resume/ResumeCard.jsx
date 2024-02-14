import React from 'react'

const ResumeCard = ({degree, duration,Addr, college, gpa, desc}) => {
  return (
    <div className='w-full h-1/2 group flex'>
        <div className="w-10 h-[6px] mt-16 relative ">
            <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-40 '> <span className='w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300'></span></span>
        </div>
        <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-10 flex flex-col justify-center gap-4 shadow-shadowOne">
          <div>
          <h3 className='text-2xl font-semibold group-hover:text-white duration-300'>{degree}</h3>
          <p className='text-md font-semibold mt-2 text-gray-400 group-hover:text-white duration-300'>{college}</p>
          <p className='text-sm mt-2 text-gray-400'>{Addr}</p>
          <div className="w-full flex">
          <p className='text-sm mt-2 text-gray-400'>{duration}</p>
          <p className='text-sm ml-20 mt-2 text-gray-400'>{gpa}</p>
          </div>
          </div>
          <div>
            <p className='text-sm mt-2 text-gray-400'>{desc}</p>
          </div>
        </div>
    </div>
  )
}

export default ResumeCard
