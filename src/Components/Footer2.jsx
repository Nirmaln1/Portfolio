import React from "react";

const Footer2 = () => {
  return (
    <div className="mt-5">
      <div className=" grid grid-cols-1  md:grid-cols-3 gap-10 p-5  bg-black">
        <div>
          <h1 className="text-gray-400  text-[20px] text-center">Contact</h1>
          <p className="text-gray-400 font-[italic] text-center mt-5">
            Email:nirmalthapan2@gmail.com
          </p>
          <p className="text-gray-400 font-[italic] text-center ">
            Ktm, Mulpani
          </p>
          <p className="text-gray-400 font-[italic] text-center">
            Phone:9840002374
          </p>
        </div>
        <div>
          <h1 className="text-gray-400  text-[20px] text-center">
            Quick links
          </h1>
          <ul className="flex flex-col gap-4 text-[20px] mt-2 mb-2 items-center">
            {/* <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Contact</li> */}
            <li>
              <a
                href="#home"
                className="text-gray-400 text-[15px] relative
    hover:before:content-['']
    hover:before:block
    hover:before:absolute
    hover:before:top-5
    hover:before:right-0
    hover:before:h-px
    hover:before:w-full
    hover:before:bg-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-400 text-[15px]  relative
    hover:before:content-['']
    hover:before:block
    hover:before:absolute
    hover:before:top-5
    hover:before:right-0
    hover:before:h-px
    hover:before:w-full
    hover:before:bg-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-400 text-[15px] relative
    hover:before:content-['']
    hover:before:block
    hover:before:absolute
    hover:before:top-5
    hover:before:right-0
    hover:before:h-px
    hover:before:w-full
    hover:before:bg-white"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="text-gray-400 text-[15px] relative
    hover:before:content-['']
    hover:before:block
    hover:before:absolute
    hover:before:top-5
    hover:before:right-0
    hover:before:h-px
    hover:before:w-full
    hover:before:bg-white"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="text-gray-400 text-[15px] relative
    hover:before:content-['']
    hover:before:block
    hover:before:absolute
    hover:before:top-5
    hover:before:right-0
    hover:before:h-px
    hover:before:w-full
    hover:before:bg-white"
              >
                Project
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-gray-400  text-[20px] text-center">
            Social Media
          </h1>
          <div className="flex gap-3 mt-2 mx-auto w-fit">
            <button className="rounded border border-blue-500 p-2">
              <a
                href="https://www.facebook.com/share/16nmCaZw33/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/facebook.png" alt="" className="h-5 w-5" />
              </a>
            </button>

            <button className="rounded border border-blue-500 p-2">
              <a
                href="https://www.instagram.com/nirmal__g_?igsh=MWdhNGt0YXU3d2lhOA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/instagram.png" alt="" className="h-5 w-5" />
              </a>
            </button>

            <button className="rounded border border-blue-500 p-2">
              <a
                href="https://www.linkedin.com/in/nirmal-thapa-195b272b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/linkedin.png" alt="" className="h-5 w-5" />
              </a>
            </button>
          </div>
        </div>
      </div>
      <hr className="border-white" />
      <p className="text-white text-end mr-3">Nirmal Thapa</p>
      <p className="text-white text-end mr-3">
        {" "}
        {new Date().getFullYear()}/{new Date().getMonth() + 1}/
        {new Date().getDate()} {new Date().getHours()}:{new Date().getMinutes()}
      </p>
    </div>
  );
};

export default Footer2;
