import React, {useContext} from 'react'
import {ThemeContext} from "../context/ThemeContext"; 

const About = () => {
  const {lightMode} = useContext(ThemeContext);
  return (
    <div className={`transition-all duration-300 ease-in-out min-h-screen flex items-center justify-center px-6 ${lightMode? "bg-gray-900":"bg-{#FFFBFC}"} `}>
    <div className="max-w-4xl mx-auto text-gray-300">
      {/* About Me Header */}
      <h2 className={`transition-all duration-300 ease-in-out  text-4xl font-bold  mb-6 text-center hover:underline  
        transition cursor-pointer duration-300 ${lightMode? "text-white hover:text-yellow-500":"text-gray-800 hover:text-gray-600"}`}>
        About Me
      </h2>

      {/* Content */}
      <p className={`transition-all duration-300 ease-in-out text-lg leading-relaxed mb-6 ${lightMode? "":"text-gray-800"}`}>
  Hi, I’m <span className="font-semibold text-yellow-500">Adedokun</span>, a passionate{" "}
  <span className={`transition-all duration-300 ease-in-out font-semibold text-white ${lightMode? "":"text-gray-800"}`}>Full-Stack Web Developer</span> and{" "}
  <span className={`transition-all duration-300 ease-in-out font-semibold text-white ${lightMode? "":"text-gray-800"}`}>Brand Designer</span> with over{" "}
  <span className="font-semibold text-yellow-500">10 years of experience</span> crafting innovative, user-centric
  digital solutions. I hold an <span className="font-semibold text-yellow-400">Hnd and a BSc degree in Computer Science</span>, 
  equipping me with a strong technical foundation and creative edge.
</p>

<p className={`transition-all duration-300 ease-in-out text-lg leading-relaxed mb-6 ${lightMode? "":"text-gray-800"}`}>
  I don’t just build websites—I create experiences that tell stories. My mission is to merge{" "}
  <span className="italic text-yellow-400">creativity, functionality, and strategy</span> to help brands 
  thrive in today’s digital-first world.
</p>

<ul className={`transition-all duration-300 ease-in-out list-disc list-inside mb-6 space-y-2 ${lightMode? "":"text-gray-800"}`}>
  <li>
    Cutting-edge <span className="text-yellow-400">web development</span> that delivers seamless user experiences.
  </li>
  <li>
    Purpose-driven <span className="text-yellow-400">brand design</span>, from logos to complete visual identities.
  </li>
  
</ul>

<p className={`transition-all duration-300 ease-in-out text-lg leading-relaxed mb-6 ${lightMode? "":"text-gray-800"}`}>
  Beyond coding and design, I’m an explorer—hitting hiking trails, challenging myself at the gym, or brainstorming{" "}
  <span className="italic text-yellow-400">game-changing ideas</span> to empower others. My work is not just my craft; 
  it’s my passion.
</p>

<p className="text-lg leading-relaxed text-center font-semibold text-yellow-400 mb-4">
  Let’s bring your vision to life. Together, we’ll build something remarkable!
</p>

    </div>
  </div>
  )
}

export default About
