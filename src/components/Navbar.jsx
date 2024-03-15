import React, { useState } from "react";
import Logo from "../assets/logo3.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleclick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <a href="/">
          <img
            src={Logo}
            alt="my_logo"
            style={{ width: "50px" }}
            className="border-2 border-indigo-300 rounded-md"
          />
        </a>
      </div>

      <ul className="hidden md:flex text-xl font-semibold">
        <li className="hover:text-[#9db1f5]">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-[#9db1f5]">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-[#9db1f5]">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-[#9db1f5]">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:text-[#9db1f5]">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
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
        <li className="py-6 text-4xl hover:text-[#9db1f5]">
          <Link onClick={handleclick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#9db1f5]">
          <Link onClick={handleclick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#9db1f5]">
          <Link onClick={handleclick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#9db1f5]">
          <Link onClick={handleclick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#9db1f5]">
          <Link onClick={handleclick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons*/}
      <div className="hidden lg:flex fixed flex-col top-1/3 left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-tr-lg">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="https://www.linkedin.com/in/vincent-ducamp-%F0%9F%92%BE-59895a278/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="https://github.com/vinz-DY"
              target="_blank"
            >
              Github <FaGithub size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="mailto:vincentducampyong@gmail.com"
            >
              Email <HiOutlineMail size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-br-lg">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="https://drive.google.com/file/d/1fdZkJ4olW6M9pSrlrzwmvtmX3ywbOVFK/view?usp=sharing"
              target="blank "
              rel="noopener noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
