import React from "react";
import { RiMapPin2Line } from "react-icons/ri";
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";

const TopNavBar = () => {
    return (
        <div className="flex justify-between text-white p-2 bg-primary text-lg">
            <div className="flex space-x-2 justify-center items-center ml-10">
                <RiMapPin2Line className="mr-2 "/> Building E, University of Information and Technology
            </div>
            <div className="flex mr-16 justify-center items-center">
                <div className="flex justify-center items-center mr-20">
                <LuPhone className="mr-2" /> 0399248580
                </div>
                <CiMail className="mr-2" /> 21522445@gm.uit.edu.vn
            </div>
        </div>
    )
}

export default TopNavBar;
