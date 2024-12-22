import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import picA from '../assets/images/pic a.png'
import picB from '../assets/images/pic b.png'
import {ThemeContext} from "../context/ThemeContext"



const Heroe = () => {
    const {lightMode} = useContext(ThemeContext)
    return (

        <div className={`min-h-screen flex items-center justify-center px-6 transition-all duration-300 ease-in-out  ${lightMode? "bg-gray-900":"bg-[#F6F4F3] " }`}>
            <div className={`max-w-5xl w-full flex flex-col lg:flex-row items-center rounded-lg overflow-hidden transition-all duration-300 ease-in-out  ${lightMode? "text-white":"text-black"}`}>
                {/* Text Section */}
                <div className="flex-1 p-6 lg:p-12">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                        I’M <span className="text-yellow-500">Shina Adedokun</span>
                    </h1>
                    <p className="text-lg sm:text-xl font-light mb-6">
                    Full-Stack Web Developer & Brand Designer
                    </p>
                    <button className={`bg-transparent border  px-6 py-2 rounded-md text-sm 
                         transition-all duration-300 ease-in-out  ${lightMode? "border-yellow-400  text-yellow-400 hover:bg-yellow-400 hover:text-gray-900":"border-gray-900 hover:border-gray-900 text-yellow-400 bg-gray-900 hover:bg-yellow-400 hover:text-gray-900"}`}>
                        Contact Me
                    </button>
                </div>

                {/* Image Section */}
                <div className="relative flex-1 p-6">
                    <img
                        src={picB} // Replace with your image URL
                        alt="Profile"
                        className="w-full h-auto rounded-md object-cover"
                    />
                    
                    {/* Social Icons */}
                    <div className="absolute top-1/2 right-6 transform -translate-y-1/2 space-y-4 text-lg">
                        
                        <a
                            href="https://x.com/Aaytriple"
                            className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
                        >
                            <i className={`transition-all duration-300 ease-in-out fab fa-twitter ${lightMode? "":"text-white"}`}></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/tripleaay?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                            className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
                        >
                            <i className={`transition-all duration-300 ease-in-out fab fa-linkedin-in ${lightMode? "":"text-white"}`}></i>
                        </a>
                        <a
                            href="https://wa.me/2349167740076"
                            className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
                        >
                            <i className={`transition-all duration-300 ease-in-out fab fa-whatsapp ${lightMode? "":"text-white"}`}></i>
                        </a>
                        <a
                            href="tel:+2349167740076"
                            className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
                        >
                            <i className={`transition-all duration-300 ease-in-out fa-solid fa-phone ${lightMode? "":"text-white"}`}></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Heroe
