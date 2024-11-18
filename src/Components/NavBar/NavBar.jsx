import React from "react";
import logo from '../../assets/LandingPage/logo.png';
import { MdKeyboardArrowDown } from "react-icons/md";
const NavBar = () => {
    return (
        <div className="flex items-center justify-between p-4 bg-white shadow">
            <div className="flex items-center space-x-2 justify-between ml-7">
                <img src={logo} alt="Logo" className="w-14 h-14" />
                <h1 className="text-3xl font-bold">Ezlife Realty</h1>   
            </div>
         
            <nav className="flex space-x-4 justify-center items-center font-semibold ">
                <div className="flex space-x-16 justify-center items-center mr-56  ">
                    <a href="#about" className="text-gray-700 text-xl">About Us</a>
                    <div className="flex items-center ">
                        
                        <a href="#services" className="text-gray-700 text-xl">Services</a>
                        <MdKeyboardArrowDown className="text-gray-700 text-2xl" />
                    </div>
                    <div className="flex items-center">
                        
                        <a href="#projects" className="text-gray-700 text-xl">Project</a>
                        <MdKeyboardArrowDown className="text-gray-700 text-2xl" />
                    </div>
                    <a href="#blog" className="text-gray-700 text-xl">Blog</a>
                    <a href="#news" className="text-gray-700 text-xl">News</a>
                    <a href="#contact" className="text-gray-700 text-xl">Contact Us</a>
                </div>
                <div>
                    <a href="#login" className=" mr-14 text-gray-700 text-xl border-2 border-gray-200 rounded-full px-4 py-2">Login</a>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;