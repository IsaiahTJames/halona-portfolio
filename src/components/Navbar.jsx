"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="flex items-center justify-center h-24 max-w-[1240px] mx-auto px-4 text-black border-b">
            {/* Title */}
            <div className="flex flex-1">
                <h1 className="text-2xl font-bold text-blue-500">Halona Portfolio</h1>
            </div>
            {/* Navigation Links */}
            <div className="flex flex-1 justify-center">
                <ul className="hidden md:flex space-x-4 text-[16px] font-medium">
                    <li className="p-4 hover-underline cursor-pointer">Home</li>
                    <li className="p-4 hover-underline cursor-pointer">Certifications</li>
                    <li className="p-4 hover-underline cursor-pointer">Services</li>
                    <li className="p-4 hover-underline cursor-pointer">Contact</li>
                </ul>
            </div>
            {/* Get In Touch Button */}
            <div className="hidden md:flex flex-1 justify-end">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300">
                    Get In Touch
                </button>
            </div>
            {/* Hamburger Icon */}
            <div className="flex items-center space-x-4">
                <div onClick={handleNav} className="block md:hidden ml-4 hover:text-blue-700 transition-colors duration-200">
                    {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 h-full w-[60%] bg-white border-r border-gray-300 z-10 transform transition-transform duration-300 ease-in-out 
                ${nav ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="p-4">
                    <h1 className="text-xl font-bold text-blue-500 mb-8">Halona Portfolio</h1>
                    <ul className="uppercase flex flex-col gap-6 text-gray-600 font-medium">
                        <li className="p-2 border-b border-gray-600">Home</li>
                        <li className="p-2 border-b border-gray-600">Certifications</li>
                        <li className="p-2 border-b border-gray-600">About</li>
                        <li className="p-2 relative hover-underline"
                            onClick={() => setContactOpen(!contactOpen)}>
                            Contact
                            {contactOpen && (
                                <div className="absolute left-0 top-12 bg-white shadow-md border border-gray-300 rounded-lg w-40">
                                    <span className="block px-4 py-2 text-black hover:text-blue-700 hover:bg-gray-200 transition-colors duration-200">Instagram</span>
                                    <span className="block px-4 py-2 text-black hover:text-blue-700 hover:bg-gray-200 transition-colors duration-200">Facebook</span>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;