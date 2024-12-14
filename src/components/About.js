import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-6">
    <div className="max-w-4xl mx-auto text-gray-300">
      {/* About Me Header */}
      <h2 className="text-4xl font-bold text-white mb-6 text-center hover:underline hover:text-yellow-500 transition duration-300">
        About Me
      </h2>

      {/* Content */}
      <p className="text-lg leading-relaxed mb-6">
  Hi, I’m <span className="font-semibold text-yellow-500">Adedokun Adeshina Idris</span>, a passionate{" "}
  <span className="font-semibold text-white">Full-Stack Web Developer</span> and{" "}
  <span className="font-semibold text-white">Brand Designer</span> with over{" "}
  <span className="font-semibold text-yellow-500">10 years of experience</span> crafting innovative, user-centric
  digital solutions. I hold a <span className="font-semibold text-yellow-400">BSc degree in Computer Science</span>, 
  equipping me with a strong technical foundation and creative edge.
</p>

<p className="text-lg leading-relaxed mb-6">
  I don’t just build websites—I create experiences that tell stories. My mission is to merge{" "}
  <span className="italic text-yellow-400">creativity, functionality, and strategy</span> to help brands 
  thrive in today’s digital-first world.
</p>

<ul className="list-disc list-inside mb-6 space-y-2">
  <li>
    Cutting-edge <span className="text-yellow-400">web development</span> that delivers seamless user experiences.
  </li>
  <li>
    Purpose-driven <span className="text-yellow-400">brand design</span>, from logos to complete visual identities.
  </li>
  <li>
    Scalable <span className="text-yellow-400">fintech and automotive solutions</span> tailored to global standards.
  </li>
</ul>

<p className="text-lg leading-relaxed mb-6">
  Beyond coding and design, I’m an explorer—hitting hiking trails, challenging myself at the gym, or brainstorming{" "}
  <span className="italic text-yellow-400">game-changing ideas</span> to empower others. My work is not just my craft; 
  it’s my passion.
</p>

<p className="text-lg leading-relaxed text-center font-semibold text-yellow-400">
  Let’s bring your vision to life. Together, we’ll build something remarkable!
</p>

    </div>
  </div>
  )
}

export default About
