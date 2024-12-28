import logo from "../../assets/LandingPage/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { doLogout } from "../../redux/action/accountAction";
import { FaUser } from "react-icons/fa";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = useSelector((state) => state.account.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    dispatch(doLogout());
    navigate("/");
  };

  return (
    <div className="relative bg-white shadow">
      <div className="flex items-center justify-between p-4">
        {/* Logo Section */}
        <Link to="/">
          <div className="flex items-center space-x-2 md:ml-7">
            <img src={logo} alt="Logo" className="w-10 h-10 md:w-14 md:h-14" />
            <h1 className="text-2xl md:text-3xl font-bold">Hello 12345</h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-grow">
          <div className="flex items-center space-x-8">
            <Link
              to="/about-us"
              className="text-gray-700 text-xl hover:text-gray-900"
            >
              About Us
            </Link>
            <div className="flex items-center">
              <Link
                to="/services"
                className="text-gray-700 text-xl hover:text-gray-900"
              >
                Services
              </Link>
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
              href="/blogs"
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
            <Link
              to="/consultant"
              className="text-gray-700 text-xl hover:text-gray-900"
            >
              Consultant & Training
            </Link>
          </div>
        </nav>

        {/* Desktop Login/User Profile Section */}
        <div className="hidden md:flex items-center md:ml-8">
          {user ? (
            <div className="relative">
              <button
                type="button"
                className="flex items-center text-sm bg-orange-50 justify-center rounded-md md:me-0 h-10 focus:ring-4 focus:ring-gray-300"
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
              >
                <div className="flex items-center justify-center p-5">
                  <div className="flex items-center justify-center w-7 h-7 bg-primary rounded-full">
                    <FaUser className="text-white" />
                  </div>
                  <span className="ml-2 text-gray-900 hidden sm:block">
                    {user.first_name} {user.last_name}
                  </span>
                </div>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 z-50 mt-2 w-60 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-4 py-3">
                    <span className="block text-xl font-semibold text-gray-900">
                      {user.first_name} {user.last_name}
                    </span>
                    <span className="block text-sm text-gray-500 truncate mt-3">
                      {user.email}
                    </span>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <div className="border border-primary rounded px-2 py-0.5 text-xs text-primary">
                        {user.roleWithPermission?.description}
                      </div>
                      <div className="border border-gray-300 rounded px-2 py-0.5 text-xs text-gray-500">
                        Free
                      </div>
                    </div>
                  </div>
                  <ul className="py-2">
                    <li>
                      <a
                        href="/employee/account-settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Basic Information Management
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Contact Us
                      </a>
                    </li>
                    <hr className="my-2 border-gray-200" />
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Log out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link
              to={`${import.meta.env.VITE_BACKEND_SSO}?serviceURL=${
                import.meta.env.VITE_SERVICE_URL
              }`}
              className="text-gray-700 text-lg border-2 border-gray-200 rounded-full px-6 py-2 hover:bg-gray-100 transition-colors hover:text-[#3596FF] font-noto"
            >
              Log In
            </Link>
          )}
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
            <Link
              to="/about-us"
              className="text-gray-700 text-lg hover:text-gray-900"
            >
              About Us
            </Link>
            <div className="flex items-center justify-between">
              <Link
                to="/services"
                className="text-gray-700 text-lg hover:text-gray-900"
              >
                Services
              </Link>
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
            <Link
              to="/consultant"
              className="text-gray-700 text-lg hover:text-gray-900"
            >
              Consultant & Training
            </Link>

            {/* Mobile Login/User Profile */}
            {user ? (
              <div className="border-t pt-4">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
                    <FaUser className="text-white" />
                  </div>
                  <span className="ml-2 text-gray-900">{user.fullname}</span>
                </div>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/planner/account"
                      className="block text-gray-700 hover:text-gray-900"
                    >
                      Basic Information Management
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/consultant"
                      className="block text-gray-700 hover:text-gray-900"
                    >
                      Consultant & Training
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left text-gray-700 hover:text-gray-900"
                    >
                      Log out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                to={`${import.meta.env.VITE_BACKEND_SSO}?serviceURL=${
                  import.meta.env.VITE_SERVICE_URL
                }`}
                className="text-gray-800 hover:text-[#3596FF] font-noto text-xl"
              >
                Log In
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
