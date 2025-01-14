import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-xl container mx-auto px-6 md:px-16 py-12"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">About Me</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Hi, I'm vaishnavi! A passionate and enthusiastic fresher in the field of web development. My journey into the world of technology has been fueled by curiosity and a drive to create meaningful, impactful digital experiences. With a solid foundation in the MERN stack and a keen interest in modern web technologies, I am eager to bring ideas to life through clean, functional, and aesthetically pleasing code.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          Education & Training
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Bachelor's in Computer Science And Engineering, Matoshri Pratisthan Group Of Institution Khupsarwadi,Nanded, 2024</li>
          <li>Completed Full Stack Development Course in java, Kiran Academy,pune, 2024</li>
          <li>Certified in [Relevant Certification], [Institution/Platform], [Year]</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          Skills & Expertise
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Proficient in JavaScript, React.js, Node.js, Express.js, and MongoDB. Experienced with Git, version control systems, and responsive design principles. I possess strong problem-solving skills, a creative mindset, and a collaborative attitude that makes me a valuable team player.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          Projects
        </h2>
        <p className="text-gray-700 leading-relaxed">
          As a fresher, I have worked on a few academic and personal projects that highlight my skills and passion for development:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4">
          <li>
            <strong>Portfolio Website:</strong> Built my personal portfolio using React.js to showcase my skills and projects.
          </li>
          <li>
            <strong>E-commerce App:</strong> Developed a mock e-commerce application with user authentication, product listings, and a shopping cart using the MERN stack.
          </li>
          <li>
            <strong>Blog Platform:</strong> Created a blog platform where users can post and comment, integrating CRUD operations with MongoDB.
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          Achievements
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Completed a capstone project on full-stack development, receiving high praise from mentors.</li>
          <li>Certified in [Relevant Skill or Technology], [Platform], [Year].</li>
          <li>Consistently ranked among the top 10% in coding challenges on [Platform, e.g., HackerRank].</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          Mission Statement
        </h2>
        <p className="text-gray-700 leading-relaxed">
          My mission is to leverage my skills in web development to create user-centric, innovative solutions that solve real-world problems. As a fresher, I am committed to continuous learning, embracing challenges, and contributing to impactful projects that shape the digital landscape.
        </p>
      </div>
    </div>
  );
}

export default About;
