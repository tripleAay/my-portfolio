import React, {useContext} from 'react'
import {ThemeContext} from "../context/ThemeContext"

const SkillsSection = () => {
  const {lightMode} = useContext(ThemeContext);
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
    <section className={`min-h-screen flex flex-col items-center justify-center  px-6 ${lightMode? "bg-gray-900":"bg-[#FFFBFC]"}`}>
        <h2 className={`transition-all duration-300 ease-in-out  text-4xl font-bold  mb-6 text-center hover:underline  
        transition cursor-pointer duration-300 ${lightMode? "text-white hover:text-yellow-500":"text-gray-800 hover:text-gray-600"}`}>My Skills</h2>
    
    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 items-center justify-center mb-6">

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
