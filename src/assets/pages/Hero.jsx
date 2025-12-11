import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="mt-10 md:mt-0 scroll-mt-20" id="home">
      <div className="flex flex-col h:auto  md:h-[97vh] items-center md:flex-row mx-4 ">
        <div className="text-white flex-1 md:flex-3 order-2 md:order-1 mt-5 md:mt-0 ">
          {/* {" "}
          Hi I am Nirmal Thapa ,Frontend developer based in Nepal */}
          <div className="md:ml-20">
            <h1 className="text-[40px] m-0 p-0">Hi I am Nirmal Thapa</h1>
            <h1 className="text-[20px] align-left  ">
              Frontend developer based in Nepal
            </h1>
            <div className="flex gap-3 mt-2 text-center">
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
            <div>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/uc?export=download&id=1EM6nJ0czw6b7Bn-_zfK9oYviTLrQ3hUX"
                  )
                }
                className="mt-4 bg-[linear-gradient(276deg,#da72a5_0.36%,#b923e1_102.36%)] rounded-[45px] cursor-pointer hover:scale-105 w-fit mx-auto mt-2 text-white p-3"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>

        <div className=" mt-2 md:mt-0w-[80%] md:w-[40%] order-1 md:order-2 ">
          <img className="mx-auto md:mx-0 " src="/developerimg.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
