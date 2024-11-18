import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import TopNavBar from "../../Components/TopNavBar/TopNavBar";
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
import Schedule from "../../Components/Schedule/Schedule";
import Footer from "../../Components/Footer/Footer";
const LandingPage = () => {
    return (        
        <>  
        <div>
            <TopNavBar />
            <NavBar />
        
        <div 
            className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-white text-center" 
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <h1 className="text-8xl font-bold mb-6">Live Green, Live Luxuriously.</h1>
            <div className="flex items-center">
                <div className="relative">
                    <select className="mr-0 p-2 rounded-l-full border-none bg-gray-200 font-semibold text-black h-full appearance-none pr-10">
                        <option>For Sale</option>
                        <option>For Rent</option>
                        <option>Sold</option>
                    </select>
                    <MdKeyboardArrowDown className=" text-2xl absolute right-4 top-1/2 transform -translate-y-1/2 text-black" />
                </div>
                <input 
                    type="text" 
                    placeholder="Enter an address, city, neighborhood, or ZIP code." 
                    className="p-2 border-none bg-white text-black w-[70rem]"
                />
                <button className="ml-0 p-3 bg-[#9C8321] rounded-r-full text-white flex items-center">
                    <GoSearch />
                </button>
            </div>
            
        </div>

        {/* About Us Section */}
        <div className="py-10   text-center">
                <h2 className="text-4xl font-bold mb-6 ">About Us</h2>
            <div className="bg-secondary">
                <div className="flex flex-col md:flex-row justify-around items-center  mb-12 ">
                    <div className="max-w-md mb-6 ">
                        <div className="flex items-center">
                            <div className="border-t-4 border-tertiary w-full mb-2 "></div>
                            <h3 className="text-2xl font-semibold text-tertiary mb-5 mr-[15rem] whitespace-nowrap">Who We Are</h3>
                        </div>
                        <div className="space-y-3">
                        <p className="text-5xl text-left font-bold max-w-5xl text-nowrap">
                            Pioneer in transferring technology 
                        </p>
                        <p className="text-5xl text-left font-bold max-w-5xl text-nowrap">
                                solutions for real estate management 
                            </p>
                            <p className="text-5xl text-left font-bold max-w-5xl text-nowrap">
                                in Vietnam with <span className="font-bold text-tertiary">EzLife Realty.</span>
                            </p>
                        </div>
                        <div className="space-y-3 mt-10">
                            <p className="text-2xl text-left mt-8 text-nowrap  ">
                                <span className="font-bold">EZLIFE REALTY </span> is the company to develop and hand over the realty 
                            </p>
                            <p className="text-2xl text-left  text-nowrap  ">
                                management solutions to the best quality. <span className="font-bold">EZLIFE REALTY </span> has got lots of 
                            </p>
                            <p className="text-2xl text-left  text-nowrap  ">
                                practical experiences in consulting, managing, and applying technology in the
                            </p>
                            <p className="text-2xl text-left  text-nowrap  ">
                                real estate. Dealing with our talented staff, we are willing to provides some 
                            </p>
                            <p className="text-2xl text-left  text-nowrap  ">
                                good services including consultancy; professional training; exploitation and
                            </p>
                            <p className="text-2xl text-left  text-nowrap  ">
                                technological application in our management and operation for our investors,
                            </p>
                        </div>
                    </div>
                        <img src={aboutus1} alt="Real estate" className="max-w-3xl ml-[34rem] rounded-lg " />
                    </div>
                    <div className="flex flex-col md:flex-row justify-around  items-center mt-24">
                    <img src={aboutus2} alt="Team" className="max-w-3xl rounded-lg mr-[14rem] " />
                        <div className="max-w-md mb-6 mr-[20rem]">
                        <div className="flex items-center">
                            <div className="border-t-4 border-tertiary w-full mb-2 "></div>
                            <h3 className="text-2xl font-semibold text-tertiary mb-5 mr-[15rem] whitespace-nowrap">Our Mission</h3>
                        </div>
                            <div className="space-y-3">
                            <p className="text-5xl text-left font-bold text-nowrap">
                                <span className="font-bold text-tertiary text-left ">EzLife Realty</span> will be the real estate 
                            </p>
                                <p className="text-5xl text-left font-bold text-nowrap">
                                manager’s fellow.
                            </p>    
                            </div>
                            <div className="space-y-3 mt-10">
                                <p className="text-2xl text-left mt-8 text-nowrap">
                                    The agency’s mission is to provide clients with a selection of properties 
                                </p>
                                <p className="text-2xl text-left mt-8 text-nowrap">
                                    that meet high environmental standards, while also providing a 
                                </p>
                                <p className="text-2xl text-left mt-8 text-nowrap">
                                    comfortable and luxurious lifestyle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ViewHome />
            {/* Our Services Section */}
            <div className="py-10 text-center">
                <h2 className="text-4xl font-bold mb-6 ">Our Services</h2>
                <div className="bg-secondary p-6">
                    <div className="flex flex-col md:flex-row items-center">
                        <img src={services} alt="Our Services" className="max-w-md mb-4 md:mb-0 md:mr-4" />
                        <div className="flex flex-col items-start text-left ml-20">
                            <div className="space-y-3">
                                <p className="text-2xl">
                                    Customers contact EzLife Vietnam to be introduced in detail about PMSS 
                                </p>
                                <p className="text-2xl ">
                                    Technology Solution as well as provide some qualitative information about the 
                                </p>
                                <p className="text-2xl ">
                                    project so that Ezlife Vietnam can support consulting suitable to the needs. 
                                </p>
                                <p className="text-2xl ">
                                    Based on the requirements and information provided by customers, EzLife 
                                </p>
                                <p className="text-2xl ">
                                    Vietnam experts will conduct a survey at the project to advise on building
                                </p>
                                <p className="text-2xl ">
                                    methods and processes, personnel, and then provide a service report.
                                </p>
                            </div>
                            <div className="flex justify-center mt-10">
                                <button className="flex items-center text-white bg-tertiary px-4 py-2 rounded-full">
                                Read more
                                <MdArrowOutward className="text-white ml-1 text-lg"/>
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
                        <img src={consultant1} alt="Management Consultant" className="w-full h-96 object-cover" />
                        <div className="absolute inset-0 bottom-7 flex items-center justify-center">
                            <h3 className="text-2xl font-semibold text-white">Management Consultant</h3>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="max-w-xs bg-white overflow-hidden mb-4 relative">
                            <img src={consultant2} alt="Real Estate Management Tech Solutions" className="w-full h-48 object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-xl font-semibold text-white">Real Estate Management Tech Solutions</h3>
                            </div>
                        </div>
                        <div className="max-w-xs bg-white overflow-hidden relative">
                            <img src={consultant3} alt="Resort and Hotel Management Solution" className="w-full h-44 object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-xl font-semibold text-white">Resort and Hotel Management Solution</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Latest News Section */}
            <div className="py-10 text-center bg-secondary">
                <h2 className="text-4xl font-bold mb-6">Our Latest News</h2>
                <div className="space-x-4 flex justify-center">
                    <div className="rounded-lg p-4">
                        <div className="text-center flex flex-col items-center">
                            <div className="flex flex-col items-center absolute left-96 bg-white rounded-b-lg w-16 p-2">
                                <span className="block text-black font-bold text-xl">28</span>
                                <span className="block text-gray-500 text-lg">Tue</span>
                            </div>
                            <img src={consultant1} alt="News 1" className="w-96 h-72 object-cover rounded-lg" />
                            <p className="mt-2 text-2xl font-semibold">EZLIFE organized activities toward</p>
                            <p className=" text-2xl font-semibold">WORLD ENVIRONMENT DAY</p>
                        </div>
                        
                    </div>
                    <div className="rounded-lg p-4">
                        <div className="text-center flex flex-col items-center">
                        <div className="flex flex-col items-center absolute left-[51rem] bg-white rounded-b-lg w-16 p-2">
                                <span className="block text-black font-bold text-xl">08</span>
                                <span className="block text-gray-500 text-lg">Mon</span>
                            </div>
                            <img src={consultant2} alt="News 2" className="w-96 h-72 object-cover rounded-lg" />
                            <p className="mt-2 text-2xl text-wrap font-semibold">Ezlife officially launch new project</p>
                            <p className="text-2xl text-wrap font-semibold">UIT</p>
                        </div>
                        
                    </div>
                    <div className="rounded-lg p-4">
                        <div className="text-center flex flex-col items-center">
                        <div className="flex flex-col items-center absolute left-[78rem] bg-white rounded-b-lg w-16 p-2">
                                <span className="block text-black font-bold text-xl">26</span>
                                <span className="block text-gray-500 text-lg">Wed</span>
                            </div>
                            <img src={consultant3} alt="News 3" className="w-96 h-72 object-cover rounded-lg" />
                            <p className="mt-2 text-2xl text-wrap font-semibold">Ezlife do charities to children</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <button className="flex items-center text-white bg-tertiary px-4 py-2 rounded-full">
                        Read more
                        <MdArrowOutward className="text-white ml-1 text-lg"/>
                    </button>
                </div>
            </div>
            {/* Our Blog Section */}
            <div className="py-10 text-center bg-white">
                <p className="text-xl font-medium"> WHAT'S TRENDING</p>
                <h2 className="text-4xl font-bold mb-6">Our Blogs</h2>
                <div className="space-x-4 flex justify-center">
                    <div className="rounded-lg p-4">
                        <div className="text-center flex flex-col items-center">
                            <div className="flex flex-col items-center absolute left-96 bg-white rounded-b-lg w-16 p-2">
                                <span className="block text-black font-bold text-xl">28</span>
                                <span className="block text-gray-500 text-lg">Tue</span>
                            </div>
                            <img src={consultant1} alt="News 1" className="w-96 h-72 object-cover rounded-lg" />
                            <p className="mt-2 text-2xl font-semibold">Top 10 Home Buying Mistakes </p>
                            <p className=" text-2xl font-semibold">to Avoid</p>
                            <p className="text-gray-500"> Etiam eget elementum elit. Aenean dignissim </p>
                            <p className="text-gray-500"> dapibus vestibulum</p>
                        </div>
                        
                    </div>
                    <div className="rounded-lg p-4">
                        <div className="text-center flex flex-col items-center">
                        <div className="flex flex-col items-center absolute left-[51rem] bg-white rounded-b-lg w-16 p-2">
                                <span className="block text-black font-bold text-xl">08</span>
                                <span className="block text-gray-500 text-lg">Mon</span>
                            </div>
                            <img src={consultant2} alt="News 2" className="w-96 h-72 object-cover rounded-lg" />
                            <p className="mt-2 text-2xl text-wrap font-semibold">How to Stage Your Home </p>
                            <p className="text-2xl text-wrap font-semibold">for a Quick Sale</p>
                            <p className="text-gray-500"> Nullam odio lacus, dictum quis pretium  </p>
                            <p className="text-gray-500"> congue, vehicula venenatis nunc</p>
                            
                        </div>
                        
                    </div>
                    <div className="rounded-lg p-4">
                        <div className="text-center flex flex-col items-center">
                        <div className="flex flex-col items-center absolute left-[78rem] bg-white rounded-b-lg w-16 p-2">
                                <span className="block text-black font-bold text-xl">26</span>
                                <span className="block text-gray-500 text-lg">Wed</span>
                            </div>
                            <img src={consultant3} alt="News 3" className="w-96 h-72 object-cover rounded-lg" />
                            <p className="mt-2 text-2xl text-wrap font-semibold">5 Tips for First-Time Home Sellers</p>
                            <p className="text-gray-500"> In hac habitasse platea dictumst.  </p>
                            <p className="text-gray-500"> Phasellus vel velit vel augue maximus</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <button className="flex items-center text-white bg-tertiary px-4 py-2 rounded-full">
                        Browse Now
                        <MdArrowOutward className="text-white ml-1 text-lg"/>
                    </button>
                </div>
            </div>
            <Schedule />
            <Footer />
        </div>
        </> 
    )   
}

export default LandingPage;
