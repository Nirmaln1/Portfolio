import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import Hero from "../assets/pages/Hero";
import About from "../assets/pages/About";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState("home");

  return (
    <div className="fixed top-0 left-0 right-0  bg-[#2a2a2a]  w-full max-w-[1000px] mx-auto scroll-mt-20 z-50 ">
      <div className="flex justify-between  h-auto items-center border-b-3  p-3 ">
        <div>
          <a
            href="#"
            className="text-[20px] text-white ml-2  border p-1 bg-[linear-gradient(276deg,#da72a5_0.36%,#b923e1_102.36%)]"
          >
            NT
          </a>
        </div>
        <ul className=" text-[20px] cursor-pointer hidden md:flex gap-5 text-white ">
          <li
            className={`relative
    hover:before:content-['']
    hover:before:block
    hover:before:absolute
    hover:before:top-7
    hover:before:right-0
    hover:before:h-px
    hover:before:w-full
    hover:before:bg-white

  `}
          >
            <a
              href=""
              className={menu === "home" ? " " : ""}
              onClick={() => setMenu("home")}
            >
              Home
            </a>
          </li>
          <li
            className={`relative
    hover:before:content-['']
    hover:before:block
    hover:before:absolute
    hover:before:top-7
    hover:before:right-0
    hover:before:h-px
    hover:before:w-full
    hover:before:bg-white

    
  `}
          >
            <a
              className={menu === "about" ? "" : ""}
              href="#about"
              onClick={() => setMenu("about")}
            >
              About
            </a>
          </li>
          <li
            className={`relative
    hover:before:content-['']
    hover:before:block
    hover:before:absolute
    hover:before:top-7
    hover:before:right-0
    hover:before:h-px
    hover:before:w-full
    hover:before:bg-white

   
  `}
          >
            <a
              href="#skills"
              className={menu === "skills" ? " " : ""}
              onClick={() => setMenu("skills")}
            >
              Skills
            </a>
          </li>
          <li
            className={`relative
    hover:before:content-['']
    hover:before:block
    hover:before:absolute
    hover:before:top-7
    hover:before:right-0
    hover:before:h-px
    hover:before:w-full
    hover:before:bg-white

    
  `}
          >
            <a
              className={menu === "project" ? "" : ""}
              href="#project"
              onClick={() => setMenu("project")}
            >
              Project
            </a>
          </li>
          <li
            className={`relative
    hover:before:content-['']
    hover:before:block
    hover:before:absolute
    hover:before:top-7
    hover:before:right-0
    hover:before:h-px
    hover:before:w-full
    hover:before:bg-white

   
  `}
          >
            <a
              href="#education"
              className={menu === "education" ? "" : ""}
              onClick={() => setMenu("education")}
            >
              Education
            </a>
          </li>
          {/* <li
            className={`relative
    hover:before:content-['']
    hover:before:block
    hover:before:absolute
    hover:before:top-7
    hover:before:right-0
    hover:before:h-[1px]
    hover:before:w-full
    hover:before:bg-white

    ${
      menu === "contact"
        ? "before:content-[''] before:block before:absolute before:top-7 before:right-0 before:h-[1px] before:w-full before:bg-[#da72a5]"
        : ""
    }
  `}
          >
            <a
              href="#contact"
              className={menu === "contact" ? "text-[#da72a5] " : ""}
              onClick={() => setMenu("contact")}
            >
              Contact
            </a>
          </li> */}
        </ul>
        {/* <div className="hidden md:flex text-[22px] p-3 bg-[linear-gradient(276deg,#da72a5_0.36%,#b923e1_102.36%)] rounded-[45px] cursor-pointer hover:scale-105"
         */}
        <div
          className={`relative ${
            menu === "contact"
              ? "text-[22px] p-2 bg-[linear-gradient(276deg,#da72a5_0.36%,#b923e1_102.36%)] rounded-[45px] cursor-pointer hover:scale-105  "
              : "hidden md:flex text-[22px] p-2 bg-[linear-gradient(276deg,#da72a5_0.36%,#b923e1_102.36%)] rounded-[45px] cursor-pointer hover:scale-105"
          }`}
        >
          <a
            href="#contact"
            onClick={() => setMenu("contact")}
            className={`relative hidden md:block `}
          >
            Connect with me
          </a>
        </div>

        <div className="flex md:hidden mx-2">
          <Menu
            className="text-white mr-2"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </div>
      </div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navbar;
