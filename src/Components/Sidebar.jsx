import { CircleX } from "lucide-react";
import React from "react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const time = `${hour}:${minute}`;
  return (
    <div
      className={
        isOpen
          ? "absolute right-0 w-full top-[-12px] opacity-100 bg-[#1a1a1a]  p-0 md:hidden transition-all duration-500 ease-in-out z-50 "
          : "top-0 right-[-100%] hidden"
      }
    >
      <div className="  w-[100%] p-3 ">
        <div className="flex justify-between items-center p-[10px] ">
          <div>
            {" "}
            <a
              href="#"
              className="text-[20px] text-white ml-2  border p-1 bg-[linear-gradient(276deg,#da72a5_0.36%,#b923e1_102.36%)]"
            >
              NT
            </a>
          </div>
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="text-[20px] p-2 "
          >
            <CircleX className="text-white" />
          </div>
        </div>
        <hr className="bg-white" />
        <ul className="flex flex-col gap-4 text-[20px] mt-2 mb-2 items-center">
          {/* <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Contact</li> */}
          <li>
            <a
              href="#hero"
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#project"
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              Project
            </a>
          </li>
        </ul>
        <hr className="bg-white" />
        <div className="flex justify-end mr-5">
          <a
            href="#contact"
            className="text-[22px] p-3 rounded-[45px] bg-[linear-gradient(276deg,#da72a5_0.36%,#b923e1_102.36%)] text-white w-fit mt-2 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            Connect with me
          </a>
        </div>
      </div>
      <div className="text-end mr-10 mb-5">
        <h1 className="font-[italic] text-[30px] text-white">Nirmal Thapa</h1>
        <p className="font-[]italic text=[20px] text-white">
          Frontend Developer
        </p>
        <p className="font-[]italic text=[20px] text-white">
          {year}-{month}-{day}-{time}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
