import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { BiSolidHomeHeart } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-[#02254B] text-white p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Logo and Social Section */}
          <div className="flex flex-col space-y-6 sm:space-y-8">
            {/* Logo */}
            <div className="flex items-center">
              <BiSolidHomeHeart size={30} />
              <span className="ml-2 text-xl sm:text-2xl font-bold">
                Ezlife Realty
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <div className="rounded-full bg-white p-2 hover:bg-gray-200 transition-colors cursor-pointer">
                <FaFacebook className="text-[#213123] text-lg sm:text-xl" />
              </div>
              <div className="rounded-full bg-white p-2 hover:bg-gray-200 transition-colors cursor-pointer">
                <FaTwitter className="text-[#213123] text-lg sm:text-xl" />
              </div>
              <div className="rounded-full bg-white p-2 hover:bg-gray-200 transition-colors cursor-pointer">
                <FaLinkedin className="text-[#213123] text-lg sm:text-xl" />
              </div>
              <div className="rounded-full bg-white p-2 hover:bg-gray-200 transition-colors cursor-pointer">
                <FaInstagram className="text-[#213123] text-lg sm:text-xl" />
              </div>
            </div>

            {/* Contact Button */}
            <button className="bg-[#E4E5DF] font-medium text-[#213123] py-2 px-4 rounded-full hover:bg-gray-200 transition-colors w-fit">
              Contact Us
            </button>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 mt-6 lg:mt-0">
            {/* Navigation */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Navigation</h4>
              <ul className="space-y-3">
                <li className="hover:text-gray-300 cursor-pointer">Company</li>
                <li className="hover:text-gray-300 cursor-pointer">Home</li>
                <li className="hover:text-gray-300 cursor-pointer">
                  Contact Us
                </li>
                <li className="hover:text-gray-300 cursor-pointer">Blog</li>
                <li className="hover:text-gray-300 cursor-pointer">
                  Consultant & Training
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Company</h4>
              <ul className="space-y-3">
                <li className="hover:text-gray-300 cursor-pointer">About us</li>
                <li className="hover:text-gray-300 cursor-pointer">
                  Our mission and vision
                </li>
                <li className="hover:text-gray-300 cursor-pointer">Our team</li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Support</h4>
              <ul className="space-y-3">
                <li className="hover:text-gray-300 cursor-pointer">
                  Contact us
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-left mt-8 pt-6 border-t border-gray-600">
          <p>Copyright © 2022. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
