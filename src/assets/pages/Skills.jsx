import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-20">
      <div>
        <h1 className="text-blue-500 text-[45px] font-[80px] font-bold text-center ">
          Skills
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 mx-10 mt-10 mb-10">
          <div className="aspect-square bg-[#1e1e1e] rounded-lg flex flex-col items-center justify-center ">
            <img src="/html.png" className="w-20 h-20 object-contain" />
            <h3 className="text-white mt-2">HTML</h3>
          </div>

          <div className="aspect-square bg-[#1e1e1e] rounded-lg flex flex-col items-center justify-center p-4">
            <img src="/css.jpeg" className="w-20 h-20 object-contain" />
            <h3 className="text-white mt-2">CSS</h3>
          </div>

          <div className="aspect-square bg-[#1e1e1e] rounded-lg flex flex-col items-center justify-center p-4">
            <img src="/bootsstrap.jpeg" className="w-20 h-20 object-contain" />
            <h3 className="text-white mt-2">Bootstrap</h3>
          </div>

          <div className="aspect-square bg-[#1e1e1e] rounded-lg flex flex-col items-center justify-center p-4">
            <img src="/tailwind.png" className="w-20 h-20 object-contain" />
            <h3 className="text-white mt-2">Tailwind</h3>
          </div>

          <div className="aspect-square bg-[#1e1e1e] rounded-lg flex flex-col items-center justify-center p-4">
            <img src="/js.png" className="w-20 h-20 object-contain" />
            <h3 className="text-white mt-2">JavaScript</h3>
          </div>

          <div className="aspect-square bg-[#1e1e1e] rounded-lg flex flex-col items-center justify-center p-4">
            <img src="/react.png" className="w-20 h-20 object-contain" />
            <h3 className="text-white mt-2">React</h3>
          </div>

          <div className="aspect-square bg-[#1e1e1e] rounded-lg flex flex-col items-center justify-center p-4">
            <img src="/ts.png" className="w-20 h-20 object-contain" />
            <h3 className="text-white mt-2">Typescript</h3>
          </div>

          <div className="aspect-square bg-[#1e1e1e] rounded-lg flex flex-col items-center justify-center p-4">
            <img src="/git.png" className="w-20 h-20 object-contain" />
            <h3 className="text-white mt-2">Git</h3>
          </div>

          <div className="aspect-square bg-[#1e1e1e] rounded-lg flex flex-col items-center justify-center p-4">
            <img src="/github.png" className="w-20 h-20 object-contain" />
            <h3 className="text-white mt-2">GitHub</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
