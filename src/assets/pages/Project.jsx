import React from "react";

const Project = () => {
  const project = [
    {
      img: "/portal.png",
      title: "Mono repository of News portal and Ecommerce",
      description:
        "Worked on mono repository using next js shadeCnt and tailwind css .Shared same Components and utils between portal and ecommerce .Implemented SSR and SSG for better performance and SEO .",
    },
    {
      img: "/Ecom.jpeg",
      title: "Ecommerce website",
      description:
        "Developed a responsive ecommerce website using React and Tailwind CSS .",
    },
    {
      img: "/port.png",
      title: "Portfolio website",
      description:
        "Created a personal portfolio website using React and Tailwind CSS to showcase my projects and skills.",
    },
    {
      img: "/todo.png",
      title: "Todo app",
      description:
        "Built a simple and intuitive todo app using React for managing tasks efficiently.",
    },
    {
      img: "/weather.jpeg",
      title: "Weather app",
      description:
        "Developed a weather application using React that fetches data from a weather API to display current weather conditions based on user location.",
    },
  ];
  return (
    <div className=" mb-10  scroll-mt-20" id="project">
      <h1 className="text-blue-500 text-[45px] font-[80px] font-bold text-center ">
        Project
      </h1>
      <div className="mt-10">
        {project.map((proj, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] rounded-lg p-4 m-4 flex flex-col md:flex-row items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full md:w-1/3 h-auto rounded-lg mb-4 md:mb-0 md:mr-4"
            />
            <div>
              <h3 className="text-white text-2xl font-bold mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-400">{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
