import { MdKeyboardArrowDown } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import heroBg from "../../assets/LandingPage/hero-bg.png";

const BannerLandingPage = () => {
  return (
    <div className="relative min-h-[600px] h-screen">
      {/* <div className="py-60 px-4 sm:px-6 lg:px-8"> */}
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Title - Responsive text size and padding */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center mb-8 md:mb-12 px-4 max-w-4xl">
          Live Green, Live Luxuriously.
        </h1>
        {/* Search Bar Container */}
        <div className="w-full max-w-4xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0">
            {/* For Sale Dropdown - */}
            <div className="relative w-full sm:w-auto">
              <select
                className="w-full sm:w-40 p-3 md:p-4 rounded-lg sm:rounded-l-lg sm:rounded-r-none 
                          border-none bg-white text-gray-700 font-medium appearance-none 
                          focus:outline-none focus:ring-2 focus:ring-tertiary"
              >
                <option>For Sale</option>
                <option>For Rent</option>
                <option>Sold</option>
              </select>
              <MdKeyboardArrowDown
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xl md:text-2xl 
                           text-gray-700 pointer-events-none"
              />
            </div>

            {/* Search Input - mobile */}
            <input
              type="text"
              placeholder="Enter an address, city, neighborhood, or ZIP code"
              className="w-full p-3 md:p-4 border-none bg-white text-gray-700 
                         sm:rounded-none focus:outline-none focus:ring-2 focus:ring-tertiary
                         placeholder:text-sm md:placeholder:text-base"
            />

            {/* Search Button */}
            <button
              className="w-full sm:w-auto p-3 md:p-4 bg-[#B4925A] hover:bg-[#9C8321] 
                         text-white rounded-lg sm:rounded-l-none sm:rounded-r-lg 
                         transition-colors flex items-center justify-center 
                         min-w-[50px] active:bg-[#8A7219]"
            >
              <GoSearch className="text-lg md:text-xl" />
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default BannerLandingPage;
