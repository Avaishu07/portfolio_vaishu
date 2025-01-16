import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: html,

      
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: oracle,
      name: "Oracle",
    },
    {
      id: 6,
      logo: spring,
      name: "Spring",
    },
    {
      id: 7,
      logo: springBoot,
      name: "Spring Boot",
    },
  ];

  return (
    <div
      name="Experience"
      className="relative max-w-screen-2xl mx-auto px-4 py-16 bg-gradient-to-r from-[#e0f7fa] via-[#81d4fa] to-[#4fc3f7]"
      style={{
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      {/* Animated Particles Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="w-[200px] h-[200px] rounded-full bg-gradient-to-r from-white to-[#4fc3f7] blur-3xl absolute -top-20 -left-10 animate-pulse"></div>
        <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#81d4fa] to-[#4fc3f7] blur-3xl absolute top-40 right-0 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-gray-800">
        <h1 className="text-5xl font-bold mb-5 animate__animated animate__fadeInDown">
          My <span className="text-yellow-500">Experience</span>
        </h1>
        <p className="text-lg font-light mb-12 animate__animated animate__fadeInUp">
          Explore the technologies I’ve mastered over time!
        </p>
      </div>

      {/* Cards Grid */}
      <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 z-10">
        {cardItem.map(({ id, logo, name }) => (
          <div
            key={id}
            className="group relative bg-white bg-opacity-90 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
            }}
          >
            <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-r from-[#4fc3f7] to-[#81d4fa] p-1 transform group-hover:scale-110 transition-transform duration-300">
              <img
                src={logo}
                alt={name}
                className="w-full h-full rounded-full object-cover transition-transform duration-300 transform group-hover:rotate-12"
              />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-800 group-hover:text-yellow-500 transition-colors duration-300 animate__animated animate__bounceIn">
              {name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
