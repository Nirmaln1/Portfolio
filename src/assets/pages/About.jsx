import React from "react";

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 mb-1 mt-20">
      <div className="mt-15 md:mt-0 mb-10 md:mx-10 ">
        <div>
          <h1 className="text-blue-500 text-[45px] font-[80px] font-bold text-center">
            About Me
          </h1>
        </div>
        <div className="flex mt-10 m">
          <img
            className="h-[150px] sm:h-[300px] md:h-[450px] my-auto"
            src="/boy.jpeg"
            alt=""
          />
          <div className="bg-[#161513] md:h-[140px] ">
            <p className="text-white rounded-[20px] shadow-[0_0_35px_rgba(255,255,255,0.15)] p-4">
              Hi,I am nirmal Thapa. I am a student of bachelor in information
              technology .I have keep my interest in web development and new
              technology.I am web developer with robust problem-solving skills.I
              am average and funny character guy and is passionate about my
              work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
