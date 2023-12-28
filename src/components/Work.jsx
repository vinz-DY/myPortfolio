import React from "react";
import Gift from "../assets/projects/gifts5.png";
import Vegglee from "../assets/projects/vegglee.png";
import Just from "../assets/projects/justreact.jpg";
import Collec from "../assets/projects/collections_app.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f] ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#cbbeff]">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/*Container*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/*grid item*/}
          <div
            style={{ backgroundImage: `url(${Gift})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://marguerite-santa.vercel.app/" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-[#cbbeff] hover:text-white hover:animate-pulse text-gray-700 font-bold text-lg">
                    Play
                  </button>
                </a>
                <a
                  href="https://github.com/vinz-DY/Marguerite_Santa"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-[#cbbeff] hover:text-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*grid item*/}
          <div
            style={{ backgroundImage: `url(${Vegglee})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://vegglee.remote-fr-3.wilders.dev"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-[#cbbeff] hover:text-white hover:animate-pulse text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/vinz-DY/JS-RMT-React_If-Projet2-Vegglee"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-[#cbbeff] hover:text-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*grid item*/}
          <div
            style={{ backgroundImage: `url(${Just})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://vinz-dy.github.io/Just_React/" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-[#cbbeff] hover:text-white hover:animate-pulse text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/vinz-DY/Just_React" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-[#cbbeff] hover:text-white  text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*grid item*/}
          <div
            style={{ backgroundImage: `url(${Collec})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://drive.google.com/file/d/1LAUuu1FFlA_LXcRYEaxBkirHyciHMx3F/view?usp=sharing"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-[#cbbeff] hover:text-white hover:animate-pulse text-gray-700 font-bold text-lg">
                    Video
                  </button>
                </a>
                <a
                  href="https://github.com/vinz-DY/projet_fullstack"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-[#cbbeff] hover:text-white  text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
