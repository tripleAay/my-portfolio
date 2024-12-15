import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import picA from '../assets/images/pic a.png'
import picB from '../assets/images/pic b.png'



const Heroe = () => {
    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-900 px-6">
            <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center  text-white rounded-lg overflow-hidden ">
                {/* Text Section */}
                <div className="flex-1 p-6 lg:p-12">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                        I’M <span className="text-yellow-400">Shina Adedokun</span>
                    </h1>
                    <p className="text-lg sm:text-xl font-light mb-6">
                    Full-Stack Web Developer & Brand Designer
                    </p>
                    <button className="bg-transparent border border-yellow-400 text-yellow-400 px-6 py-2 rounded-md text-sm hover:bg-yellow-400 hover:text-gray-900 transition duration-300">
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
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/tripleaay?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                            className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a
                            href="https://wa.me/2349167740076"
                            className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
                        >
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a
                            href="tel:+2349167740076"
                            className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
                        >
                            <i className="fa-solid fa-phone"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Heroe
