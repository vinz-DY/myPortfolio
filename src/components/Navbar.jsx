import React, { useState } from "react";
import Logo from "../assets/logo3.jpg";
import { GiHamburgerMenu} from "react-icons/gi";
import { FaTimes, FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa";
import { HiOutlineMail} from "react-icons/hi";
import { BsFillPersonLinesFill} from "react-icons/bs";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleclick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img
          src={Logo}
          alt="my_logo"
          style={{ width: "50px" }}
          className="border-2 border-indigo-300 rounded-md"
        />
      </div>

      <ul className="hidden md:flex text-xl">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Burger Menu */}
      <div onClick={handleclick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <GiHamburgerMenu /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social icons*/}
      <div className='hidden lg:flex fixed flex-col top-1/3 left-0'>
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-tr-lg">
            <a className="flex justify-between items-center w-full text-gray-200" href="/">Linkedin <FaLinkedin size={30} /> </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ">
            <a className="flex justify-between items-center w-full text-gray-200" href="/">Github <FaGithub size={30} /> </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a className="flex justify-between items-center w-full text-gray-200" href="/">Email <HiOutlineMail size={30} /> </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-br-lg">
            <a className="flex justify-between items-center w-full text-gray-200" href="/">Resume <BsFillPersonLinesFill size={30} /> </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
