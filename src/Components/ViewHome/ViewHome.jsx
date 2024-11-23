import home from "../../assets/LandingPage/home.png";
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
    <div data-aos="fade-up" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Latest Listed Projects</h2>

        {/* Filter Tabs */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-6">
            <button className="text-tertiary border-b-2 border-tertiary pb-2">
              New to market
            </button>
            <button className="text-gray-500 hover:text-tertiary pb-2">
              Nature Nearby
            </button>
            <button className="text-gray-500 hover:text-tertiary pb-2">
              Most viewed homes
            </button>
          </div>
          <select className="border border-[#3A0CA3] text-[#3A0CA3] rounded-full px-4 py-1 appearance-none pr-8 relative">
            <option>District</option>
          </select>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="mb-4">
                {/* Price and Status */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#B4925A] text-white px-3 py-1 rounded text-sm">
                      {project.status}
                    </span>
                    <span className="font-semibold text-lg">
                      {project.price}
                    </span>
                    {project.isNew && (
                      <span className="text-sm text-gray-600">New</span>
                    )}
                  </div>
                </div>

                {/* Property Details */}
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <span>{project.details}</span>
                  <div className="flex items-center gap-1">
                    <CiClock1 />
                    <span>{project.age}</span>
                  </div>
                </div>
              </div>

              {/* Property Image */}
              <div className="relative mb-4">
                <img
                  src={home}
                  alt={project.address}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100">
                  <CiHeart className="text-xl" />
                </button>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-[#27563A] hover:underline cursor-pointer">
                  {project.address}
                </h3>
                <p className="text-gray-600">{project.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Browse More Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-tertiary text-white px-6 py-2 rounded-full flex items-center gap-2">
            Browse Now <MdArrowOutward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewHome;
