import aboutus1 from "../../assets/LandingPage/aboutus1.png";
import aboutus2 from "../../assets/LandingPage/aboutus2.png";
import services from "../../assets/LandingPage/services.png";
import ViewHome from "../../Components/ViewHome/ViewHome";
import { MdArrowOutward } from "react-icons/md";
import consultant1 from "../../assets/LandingPage/consultant1.png";
import consultant2 from "../../assets/LandingPage/consultant2.png";
import consultant3 from "../../assets/LandingPage/consultant3.png";
import charity1 from "../../assets/LandingPage/charity1.png";
import charity2 from "../../assets/LandingPage/charity2.png";
import charity3 from "../../assets/LandingPage/charity3.png";
import { useNavigate } from "react-router-dom";
import BannerLandingPage from "../../Components/Banner/BannerLandingPage";
const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <BannerLandingPage />

        {/* About Us Section */}
        <div data-aos="fade-up" className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* First Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-20">
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-wider text-tertiary mb-2">
                    WHO WE ARE
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Pioneer in transferring technology solutions for real estate
                    management in Vietnam with{" "}
                    <span className="text-tertiary">EzLife Realty</span>.
                  </h2>
                </div>

                <div className="space-y-4 text-gray-600">
                  <p>
                    <span className="font-semibold">EZLIFE REALTY</span> is the
                    company to develop and hand over the realty management
                    solutions to the best quality.{" "}
                    <span className="font-semibold">EZLIFE REALTY</span> has got
                    lots of practical experiences in consulting, managing, and
                    applying technology in the real estate.
                  </p>
                  <p>
                    Dealing with our talented staff, we are willing to provides
                    some good services including consultancy; professional
                    training; exploitation and technological application in our
                    management and operation for our investors.
                  </p>
                </div>
              </div>

              <div className="lg:w-1/2">
                <img
                  src={aboutus1}
                  alt="Modern House"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Second Section */}
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12">
              <div className="lg:w-1/2">
                <img
                  src={aboutus2}
                  alt="Our Team"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              <div className="lg:w-1/2 space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-wider text-tertiary mb-2">
                    OUR MISSION
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    <span className="text-tertiary">Ezlife Realty</span> will be
                    the real estate manager&apos;s fellow.
                  </h2>
                </div>

                <div className="space-y-4 text-gray-600">
                  <p>
                    The agency&apos;s mission is to provide clients with a
                    selection of properties that meet high environmental
                    standards, while also providing a comfortable and luxurious
                    lifestyle.
                  </p>
                </div>

                <button
                  onClick={() => handleNavigation("/about-us")}
                  className="bg-tertiary text-white px-6 py-2 rounded-full flex items-center gap-2"
                >
                  Learn More <MdArrowOutward />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Listed Projects Section */}
        <ViewHome />

        {/* Our Services Section */}
        <div
          data-aos="fade-up"
          className="py-16 px-4 sm:px-6 lg:px-8 bg-[#E8E8E3]"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Services
            </h2>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left side - Illustration */}
              <div className="lg:w-1/2">
                <img
                  src={services}
                  alt="Services Illustration"
                  className="w-full max-w-md mx-auto"
                />
              </div>

              {/* Right side - Text Content */}
              <div className="lg:w-1/2 space-y-6">
                <p className="text-gray-700">
                  Customers contact Ezlife Vietnam to be introduced in detail
                  about PMSS Technology Solution as well as provide some
                  qualitative information about the project so that Ezlife
                  Vietnam can support consulting suitable to the needs.
                </p>

                <p className="text-gray-700">
                  Based on the requirements and information provided by
                  customers, Ezlife Vietnam experts will conduct a survey at the
                  project to advise on building methods and processes,
                  personnel, and then provide a service report.
                </p>

                <button
                  onClick={() => handleNavigation("/services")}
                  className="bg-tertiary text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-colors"
                >
                  Read more <MdArrowOutward />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Consultant & Training Section */}
        <div data-aos="fade-up" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Consultant & Training
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Management Consultant */}
              <div className="lg:col-span-2 relative group cursor-pointer">
                <img
                  src={consultant1}
                  alt="Management Consultant"
                  className="w-full h-[500px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
                  <h3 className="text-3xl font-semibold text-white">
                    Management Consultant
                  </h3>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-6">
                {/* Real Estate Management Tech Solutions */}
                <div className="relative group cursor-pointer">
                  <img
                    src={consultant2}
                    alt="Real Estate Management Tech Solutions"
                    className="w-full h-[240px] object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4 rounded-lg">
                    <h3 className="text-2xl font-semibold text-white">
                      Real Estate Management Tech Solutions
                    </h3>
                  </div>
                </div>

                {/* Resort and Hotel Management Solution */}
                <div className="relative group cursor-pointer">
                  <img
                    src={consultant3}
                    alt="Resort and Hotel Management Solution"
                    className="w-full h-[240px] object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4 rounded-lg">
                    <h3 className="text-2xl font-semibold text-white">
                      Resort and Hotel Management Solution
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Latest News Section */}
        <div
          data-aos="fade-up"
          className="py-16 px-4 sm:px-6 lg:px-8 bg-[#E8E8E3]"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Latest News
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* News Card 1 */}
              <div className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <img
                    src={charity1}
                    alt="World Environment Day"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2">
                    <p className="font-bold text-xl">28</p>
                    <p className="text-gray-500">Tue</p>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-800 group-hover:text-tertiary transition-colors">
                  EZLIFE organized activities toward WORLD ENVIRONMENT DAY
                </h3>
              </div>

              {/* News Card 2 */}
              <div className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <img
                    src={charity2}
                    alt="New Project Launch"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2">
                    <p className="font-bold text-xl">08</p>
                    <p className="text-gray-500">Mon</p>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-800 group-hover:text-tertiary transition-colors">
                  Ezlife officially launch new project in UIT
                </h3>
              </div>

              {/* News Card 3 */}
              <div className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <img
                    src={charity3}
                    alt="Charity Event"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2">
                    <p className="font-bold text-xl">26</p>
                    <p className="text-gray-500">Wed</p>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-800 group-hover:text-tertiary transition-colors">
                  Ezlife do charities to children
                </h3>
              </div>
            </div>

            {/* Read More Button */}
            <div className="flex justify-center mt-10">
              <button
                onClick={() => handleNavigation("/news")}
                className="bg-tertiary text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-colors"
              >
                Read more <MdArrowOutward />
              </button>
            </div>
          </div>
        </div>
        {/* Our Blogs Section */}
        <div data-aos="fade-up" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-wider text-tertiary mb-2">
                WHAT&apos;S TRENDING
              </p>
              <h2 className="text-3xl font-bold">Our Blogs</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Blog Card 1 */}
              <div className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <img
                    src={consultant1}
                    alt="Home Buying Tips"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2">
                    <p className="font-bold text-xl">28</p>
                    <p className="text-gray-500">Tue</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-tertiary transition-colors">
                    Top 10 Home Buying Mistakes to Avoid
                  </h3>
                  <p className="text-gray-600">
                    Etiam eget elementum elit. Aenean dignissim dapibus
                    vestibulum
                  </p>
                </div>
              </div>

              {/* Blog Card 2 */}
              <div className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <img
                    src={consultant2}
                    alt="Home Staging"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2">
                    <p className="font-bold text-xl">08</p>
                    <p className="text-gray-500">Mon</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-tertiary transition-colors">
                    How to Stage Your Home for a Quick Sale
                  </h3>
                  <p className="text-gray-600">
                    Nullam odio lacus, dictum quis pretium congue, vehicula
                    venenatis nunc
                  </p>
                </div>
              </div>

              {/* Blog Card 3 */}
              <div className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <img
                    src={consultant3}
                    alt="Home Selling Tips"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2">
                    <p className="font-bold text-xl">26</p>
                    <p className="text-gray-500">Wed</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-tertiary transition-colors">
                    5 Tips for First-Time Home Sellers
                  </h3>
                  <p className="text-gray-600">
                    In hac habitasse platea dictumst. Phasellus vel velit vel
                    augue maximus
                  </p>
                </div>
              </div>
            </div>

            {/* Browse Now Button */}
            <div className="flex justify-center mt-10">
              <button
                onClick={() => handleNavigation("/blogs")}
                className="bg-tertiary text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-colors"
              >
                Browse Now <MdArrowOutward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
