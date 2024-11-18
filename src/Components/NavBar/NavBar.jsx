import logo from "../../assets/LandingPage/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative bg-white shadow">
      <div className="flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 md:ml-7">
          <img src={logo} alt="Logo" className="w-10 h-10 md:w-14 md:h-14" />
          <h1 className="text-2xl md:text-3xl font-bold">Ezlife Realty</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-grow">
          <div className="flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-700 text-xl hover:text-gray-900"
            >
              About Us
            </a>
            <div className="flex items-center">
              <a
                href="#services"
                className="text-gray-700 text-xl hover:text-gray-900"
              >
                Services
              </a>
              <MdKeyboardArrowDown className="text-gray-700 text-2xl" />
            </div>
            <div className="flex items-center">
              <a
                href="#projects"
                className="text-gray-700 text-xl hover:text-gray-900"
              >
                Project
              </a>
              <MdKeyboardArrowDown className="text-gray-700 text-2xl" />
            </div>
            <a
              href="#blog"
              className="text-gray-700 text-xl hover:text-gray-900"
            >
              Blog
            </a>
            <a
              href="#news"
              className="text-gray-700 text-xl hover:text-gray-900"
            >
              News
            </a>
            <a
              href="#contact"
              className="text-gray-700 text-xl hover:text-gray-900"
            >
              Contact Us
            </a>
          </div>
        </nav>

        {/* Desktop Login Button */}
        <div className="hidden md:flex items-center md:ml-8">
          <a
            href="#login"
            className="text-gray-700 text-xl border-2 border-gray-200 rounded-full px-6 py-2 hover:bg-gray-100 transition-colors"
          >
            Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-500 hover:text-gray-600"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <IoMdClose className="h-6 w-6" />
          ) : (
            <RiMenu3Line className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
          <div className="flex flex-col space-y-4 p-4">
            <a
              href="#about"
              className="text-gray-700 text-lg hover:text-gray-900"
            >
              About Us
            </a>
            <div className="flex items-center justify-between">
              <a
                href="#services"
                className="text-gray-700 text-lg hover:text-gray-900"
              >
                Services
              </a>
              <MdKeyboardArrowDown className="text-gray-700 text-2xl" />
            </div>
            <div className="flex items-center justify-between">
              <a
                href="#projects"
                className="text-gray-700 text-lg hover:text-gray-900"
              >
                Project
              </a>
              <MdKeyboardArrowDown className="text-gray-700 text-2xl" />
            </div>
            <a
              href="#blog"
              className="text-gray-700 text-lg hover:text-gray-900"
            >
              Blog
            </a>
            <a
              href="#news"
              className="text-gray-700 text-lg hover:text-gray-900"
            >
              News
            </a>
            <a
              href="#contact"
              className="text-gray-700 text-lg hover:text-gray-900"
            >
              Contact Us
            </a>
            {/* Mobile Login Button */}
            <a
              href="#login"
              className="text-gray-700 text-lg border-2 border-gray-200 rounded-full px-6 py-2 hover:bg-gray-100 transition-colors text-center"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
