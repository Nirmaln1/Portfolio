import React from "react";

const Edu = () => {
  const educationData = [
    {
      year: 2076,
      level: "SEE",
      school: "Vidhya Aarjan English Secondary School",
      location: "Kathmandu, Mulpani",
    },
    {
      year: 2078,
      level: "+2",
      school: "Ambition Academy",
      course: "Management",
      location: "Kathmandu, Baneshwor",
    },
    {
      year: "Ongoing ",
      level: "Bachelor",
      school: "Texas college",
      course: "Bit",
      location: "Kathmandu, Siphal",
    },
  ];

  return (
    <div id="education" className="h-[93svh] mb-0 md:mb-10 scroll-mt-25">
      <h1 className="text-blue-500 text-[45px] font-[80px] font-bold text-center  ">
        Education
      </h1>
      <div className="mt-25 mx-15">
        {educationData.map((edu, index) => (
          <div key={index} className="mb-5 relative pl-[35px]">
            <h3 className="text-white font-bold">{edu.year}</h3>
            <p className="text-gray-400 font-[italic]">{edu.level}</p>
            <p className="text-gray-400  font-[italic]">{edu.school}</p>
            <p className=" text-gray-400  font-[italic]"> {edu.course}</p>
            <p className="text-gray-400 font-[italic]">{edu.location}</p>
            <div className="h-[15px] w-[15px] rounded-[50%] bg-blue-700 absolute top-[5px] left-0"></div>
            <div className="absolute w-1 top-0 bottom-0 left-[5.5px] border border-blue-700 bg-blue-700  "></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Edu;
