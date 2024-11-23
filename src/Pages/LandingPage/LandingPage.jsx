import heroBg from "../../assets/LandingPage/hero-bg.png";
import { GoSearch } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import aboutus1 from "../../assets/LandingPage/aboutus1.png";
import aboutus2 from "../../assets/LandingPage/aboutus2.png";
import services from "../../assets/LandingPage/services.png";
import ViewHome from "../../Components/ViewHome/ViewHome";
import { MdArrowOutward } from "react-icons/md";
import consultant1 from "../../assets/LandingPage/consultant1.png";
import consultant2 from "../../assets/LandingPage/consultant2.png";
import consultant3 from "../../assets/LandingPage/consultant3.png";
import Banner from "../../Components/Banner/Banner";
const LandingPage = () => {
  return (
    <>
      <div>
        <Banner backgroundImage={heroBg} title="Live Green, Live Luxuriously.">
          <div className="flex flex-col sm:flex-row items-center w-full max-w-6xl gap-2">
            <div className="relative w-full sm:w-auto">
              <select className="w-full sm:w-auto p-2 rounded-lg sm:rounded-l-full sm:rounded-r-none border-none bg-gray-200 font-semibold text-black appearance-none pr-10">
                <option>For Sale</option>
                <option>For Rent</option>
                <option>Sold</option>
              </select>
              <MdKeyboardArrowDown className="text-2xl absolute right-4 top-1/2 transform -translate-y-1/2 text-black pointer-events-none" />
            </div>
            <input
              type="text"
              placeholder="Enter an address, city, neighborhood, or ZIP code."
              className="w-full p-2 border-none bg-white text-black rounded-lg sm:rounded-none"
            />
            <button className="w-full sm:w-auto p-3 bg-[#9C8321] rounded-lg sm:rounded-l-none sm:rounded-r-full text-white flex items-center justify-center">
              <GoSearch />
            </button>
          </div>
        </Banner>

        {/* About Us Section */}
        <div
          data-aos="fade-up"
          className="py-10 px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Us</h2>
          <div className="bg-secondary">
            <div className="flex flex-col lg:flex-row justify-around items-center gap-8 mb-12">
              <div className="max-w-md px-4">
                <div className="flex items-center mb-4">
                  <div className="border-t-4 border-tertiary flex-grow"></div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-tertiary ml-4 whitespace-nowrap">
                    Who We Are
                  </h3>
                </div>
                <div className="space-y-3 text-left">
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                    Pioneer in transferring technology solutions for real estate
                    management in Vietnam with{" "}
                    <span className="text-tertiary">EzLife Realty.</span>
                  </p>
                  <div className="mt-6 space-y-2 text-lg sm:text-xl lg:text-2xl">
                    <p>
                      <span className="font-bold">EZLIFE REALTY</span> is the
                      company to develop and hand over the realty management
                      solutions to the best quality.
                    </p>
                    <p>
                      <span className="font-bold">EZLIFE REALTY</span> has got
                      lots of practical experiences in consulting, managing, and
                      applying technology in the real estate.
                    </p>
                    <p>
                      Dealing with our talented staff, we are willing to
                      provides some good services including consultancy;
                      professional training; exploitation and technological
                      application in our management and operation for our
                      investors.
                    </p>
                  </div>
                </div>
              </div>
              <img
                src={aboutus1}
                alt="Real estate"
                className="max-w-full lg:max-w-3xl rounded-lg"
              />
            </div>

            {/* Second part of About Us */}
            <div className="flex flex-col-reverse lg:flex-row justify-around items-center gap-8 mt-12">
              <img
                src={aboutus2}
                alt="Team"
                className="max-w-full lg:max-w-3xl rounded-lg"
              />
              <div className="max-w-md px-4">
                <div className="flex items-center mb-4">
                  <div className="border-t-4 border-tertiary flex-grow"></div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-tertiary ml-4 whitespace-nowrap">
                    Our Mission
                  </h3>
                </div>
                <div className="space-y-3 text-left">
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                    <span className="text-tertiary">EzLife Realty</span> will be
                    the real estate manager’s fellow.
                  </p>
                  <div className="mt-6 space-y-2 text-lg sm:text-xl lg:text-2xl">
                    <p>
                      The agency’s mission is to provide clients with a
                      selection of properties that meet high environmental
                      standards, while also providing a comfortable and
                      luxurious lifestyle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ViewHome />
        {/* Our Services Section */}
        <div
          data-aos="fade-up"
          className="py-10 px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Services</h2>
          <div className="bg-secondary p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <img
                src={services}
                alt="Our Services"
                className="max-w-full lg:max-w-md rounded-lg"
              />
              <div className="flex flex-col items-start text-left space-y-4">
                <div className="space-y-3">
                  <p className="text-2xl">
                    Customers contact EzLife Vietnam to be introduced in detail
                    about PMSS Technology Solution as well as provide some
                    qualitative information about the project so that Ezlife
                    Vietnam can support consulting suitable to the needs.
                  </p>
                  <p className="text-2xl ">
                    Based on the requirements and information provided by
                    customers, EzLife Vietnam experts will conduct a survey at
                    the project to advise on building methods and processes,
                    personnel, and then provide a service report.
                  </p>
                </div>
                <div className="flex justify-center mt-10">
                  <button className="flex items-center text-white bg-tertiary px-4 py-2 rounded-full">
                    Read more
                    <MdArrowOutward className="text-white ml-1 text-lg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Consultant & Training Section */}
        <div className="py-10 text-center">
          <h2 className="text-4xl font-bold mb-16">Consultant & Training</h2>
          <div className="flex flex-col md:flex-row justify-center">
            <div className="max-w-xs bg-white overflow-hidden mr-4 relative">
              <img
                src={consultant1}
                alt="Management Consultant"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bottom-7 flex items-center justify-center">
                <h3 className="text-2xl font-semibold text-white">
                  Management Consultant
                </h3>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="max-w-xs bg-white overflow-hidden mb-4 relative">
                <img
                  src={consultant2}
                  alt="Real Estate Management Tech Solutions"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-white">
                    Real Estate Management Tech Solutions
                  </h3>
                </div>
              </div>
              <div className="max-w-xs bg-white overflow-hidden relative">
                <img
                  src={consultant3}
                  alt="Resort and Hotel Management Solution"
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-white">
                    Resort and Hotel Management Solution
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Latest News Section */}
        <div
          data-aos="fade-up"
          className="py-10 px-4 sm:px-6 lg:px-8 text-center bg-secondary"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Our Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative">
              <div className="absolute left-4 top-0 bg-white rounded-b-lg w-16 p-2 z-10">
                <span className="block text-black font-bold text-xl">28</span>
                <span className="block text-gray-500 text-lg">Tue</span>
              </div>
              <img
                src={consultant1}
                alt="News 1"
                className="w-full aspect-video object-cover rounded-lg"
              />
              <div className="mt-4">
                <p className="text-xl sm:text-2xl font-semibold">
                  EZLIFE organized activities toward WORLD ENVIRONMENT DAY
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-0 bg-white rounded-b-lg w-16 p-2 z-10">
                <span className="block text-black font-bold text-xl">08</span>
                <span className="block text-gray-500 text-lg">Mon</span>
              </div>
              <img
                src={consultant2}
                alt="News 2"
                className="w-full aspect-video object-cover rounded-lg"
              />
              <div className="mt-4">
                <p className="text-xl sm:text-2xl font-semibold">
                  Ezlife officially launch new project UIT
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-0 bg-white rounded-b-lg w-16 p-2 z-10">
                <span className="block text-black font-bold text-xl">26</span>
                <span className="block text-gray-500 text-lg">Wed</span>
              </div>
              <img
                src={consultant3}
                alt="News 3"
                className="w-full aspect-video object-cover rounded-lg"
              />
              <div className="mt-4">
                <p className="text-xl sm:text-2xl font-semibold">
                  Ezlife do charities to children
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="flex items-center text-white bg-tertiary px-4 py-2 rounded-full">
              Read more
              <MdArrowOutward className="text-white ml-1 text-lg" />
            </button>
          </div>
        </div>
        {/* Our Blog Section */}
        <div
          data-aos="fade-up"
          className="py-10 px-4 sm:px-6 lg:px-8 text-center bg-white"
        >
          <p className="text-xl font-medium"> WHAT&apos;S TRENDING</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative">
              <div className="absolute left-4 top-0 bg-white rounded-b-lg w-16 p-2 z-10">
                <span className="block text-black font-bold text-xl">28</span>
                <span className="block text-gray-500 text-lg">Tue</span>
              </div>
              <img
                src={consultant1}
                alt="News 1"
                className="w-full aspect-video object-cover rounded-lg"
              />
              <div className="mt-4">
                <p className="text-xl sm:text-2xl font-semibold">
                  Top 10 Home Buying Mistakes to Avoid
                </p>
                <p className="text-gray-500">
                  Etiam eget elementum elit. Aenean dignissim dapibus vestibulum
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-0 bg-white rounded-b-lg w-16 p-2 z-10">
                <span className="block text-black font-bold text-xl">08</span>
                <span className="block text-gray-500 text-lg">Mon</span>
              </div>
              <img
                src={consultant2}
                alt="News 2"
                className="w-full aspect-video object-cover rounded-lg"
              />
              <div className="mt-4">
                <p className="text-xl sm:text-2xl font-semibold">
                  How to Stage Your Home for a Quick Sale
                </p>
                <p className="text-gray-500">
                  Nullam odio lacus, dictum quis pretium congue, vehicula
                  venenatis nunc
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-0 bg-white rounded-b-lg w-16 p-2 z-10">
                <span className="block text-black font-bold text-xl">26</span>
                <span className="block text-gray-500 text-lg">Wed</span>
              </div>
              <img
                src={consultant3}
                alt="News 3"
                className="w-full aspect-video object-cover rounded-lg"
              />
              <div className="mt-4">
                <p className="text-xl sm:text-2xl font-semibold">
                  5 Tips for First-Time Home Sellers
                </p>
                <p className="text-gray-500">
                  In hac habitasse platea dictumst. Phasellus vel velit vel
                  augue maximus
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="flex items-center text-white bg-tertiary px-4 py-2 rounded-full">
              Browse Now
              <MdArrowOutward className="text-white ml-1 text-lg" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
