import React from 'react'
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#cbbeff] ">
            Experience
          </p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>
        <div>
          <div>
            <img className="w-20 mx-auto" src={HTML} alt="html icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills