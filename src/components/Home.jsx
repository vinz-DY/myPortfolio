import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
      <div name="home" className="w-full h-screen bg-[#0a192f]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <p className="text-[#cbbeff]">Hi, My name is</p>
          <h1 className="sm:text-7xl text-4xl font-bold text-[#e1edff]">
            Vincent DY
          </h1>
          <h2 className="sm:text-7xl text-4xl font-bold text-[#9699cc]">
            I'm a Full Stack Developer.
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[750px]">
            I'm a full-stack developer specializing in building and designing
            exceptional digital experiences. Currently, I'm focused on building
            responsive full-stack web applications with my lovely React
          </p>
          <div>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6166d7] hover:border-[#6166d7]">
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
}

export default Home