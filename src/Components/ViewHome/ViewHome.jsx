import home from "../../assets/LandingPage/home.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
const ViewHome = () => {
  const projects = [
    {
      price: "$450,000",
      details: "4 beds • 1 baths • 1931 sqft • Eco-friendly",
      address: "Plot 16 Chief Nwuke Street, Trans Amadi Industrial Layout",
      age: "2 years ago",
    },
    {
      price: "$250,000",
      details: "7 beds • 3 baths • 1334 sqft • Eco-friendly",
      address: "44, Arinola Street, Ori Okuta, Ikorodu",
      age: "New",
    },
    {
      price: "$195,000",
      details: "2 beds • 2 baths • 1000 sqft • Eco-friendly",
      address: "5 Olaide Tomori Street, off Simbiat Abiola Road, Ikeja",
      age: "3 years ago",
    },
    {
      price: "$300,000",
      details: "3 beds • 2 baths • 1500 sqft • Eco-friendly",
      address: "123 Main Street, Anytown",
      age: "1 year ago",
    },
    {
      price: "$400,000",
      details: "5 beds • 4 baths • 2500 sqft • Eco-friendly",
      address: "456 Elm Street, Othertown",
      age: "6 months ago",
    },
    {
      price: "$350,000",
      details: "4 beds • 3 baths • 2000 sqft • Eco-friendly",
      address: "789 Oak Street, Sometown",
      age: "1 year ago",
    },
  ];

  return (
    <div data-aos="fade-up" className="py-10">
      <h2 className="text-4xl font-bold text-left mb-6 ml-8">
        Latest Listed Projects
      </h2>
      <div className="flex justify-between items-center my-10 ml-8">
        <div className="flex space-x-4 text-lg text-gray-600">
          <span className="text-tertiary underline">New to market</span>
          <span>Nature Nearby</span>
          <span>Most viewed homes</span>
        </div>
        <button className=" flex items-center text-[#3A0CA3] border border-[#3A0CA3] px-4 py-2 mr-10 rounded-full">
          District
          <MdKeyboardArrowDown className="text-gray-700 text-xl" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-8">
        {projects.map((project, index) => (
          <div key={index} className="border-t  p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{project.price}</h3>
              <button className="flex font-bold text-white bg-tertiary px-4 py-2 rounded-full ml-auto">
                FOR SALE
              </button>
            </div>
            <div className="flex justify-between">
              <p className="my-4">{project.details}</p>
              <div className="flex items-center">
                <CiClock1 className="mr-2" />
                <p className="text-gray-400">{project.age}</p>
              </div>
            </div>
            <img
              src={home}
              alt="Project"
              className="w-full h-96 object-cover mb-4"
            />
            <div className="flex justify-between">
              <p className="text-[#27563A] underline">{project.address}</p>
              <CiHeart className="text-gray-400" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="flex items-center text-white bg-tertiary px-4 py-2 rounded-full">
          Browse Now
          <MdArrowOutward className="text-white ml-1 text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ViewHome;
