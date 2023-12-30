import React from 'react'
import { FaGithub, FaLinkedin,} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      className="
    bg-[#272b48]  flex py-10 justify-center lg:hidden"
    >
      <ul className="flex">
        <li className="">
          <a
            className=" text-gray-200 bg-[#cbbeff]"
            href="https://www.linkedin.com/in/vincent-ducamp-%F0%9F%92%BE-59895a278/"
            target="_blank"
          >
            <FaLinkedin size={50} />
          </a>
        </li>
        <li className="">
          <a
            className=" text-gray-200"
            href="https://github.com/vinz-DY"
            target="_blank"
          >
            <FaGithub size={50} />
          </a>
        </li>
        <li className="">
          <a
            className=" text-gray-200"
            href="mailto:vincentducampyong@gmail.com"
          >
            <HiOutlineMail size={50} />
          </a>
        </li>
        <li className="">
          <a
            className=" text-gray-200"
            href="https://drive.google.com/file/d/1A1JWubG9b-HDheVIc9COEVmychtVeogl/view?usp=sharing"
            target="blank "
            rel="noopener noreferrer"
          >
            <BsFillPersonLinesFill size={50} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer