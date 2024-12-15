import React from 'react'

const SkillsSection = () => {
    const skills = [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
        { name: "HTML & CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      ];
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-6 ">
        <h2 className="text-4xl font-bold text-white mb-6 text-center hover:underline hover:text-yellow-500 transition duration-300 cursor-pointer">My Skills</h2>
    
    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 items-center justify-center">

      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-10 bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition duration-300"
        >
          <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-4" />
          <p className="text-white text-lg font-semibold">{skill.name}</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default SkillsSection
