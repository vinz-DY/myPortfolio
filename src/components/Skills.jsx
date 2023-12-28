import React from 'react'
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Mysql from "../assets/mysql.png";
import Ps from "../assets/ps.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#cbbeff] ">
            Skills
          </p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>
        
        <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={HTML} alt="html icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={CSS} alt="html icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={JavaScript} alt="html icon" />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={ReactImg} alt="html icon" />
            <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={Node} alt="html icon" />
            <p className='my-4'>NODEJS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={Mysql} alt="html icon" />
            <p className='my-4'>MYSQL</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={Tailwind} alt="html icon" />
            <p className='my-4'>TAILWIND</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto border-2 border-blue-800 rounded-lg" src={Ps} alt="html icon" />
            <p className='my-4'>PHOTOSHOP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills