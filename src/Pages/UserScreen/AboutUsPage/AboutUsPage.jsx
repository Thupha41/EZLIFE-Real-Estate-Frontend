import aboutUsBanner from "../../../assets/LandingPage/about-us-banner.png";
import HoVyImage from "../../../assets/LandingPage/hovy.png";
import PhatImage from "../../../assets/LandingPage/thupha.jpg";
import Banner from "../../../Components/Banner/Banner";
import Breadcrumb from "../../../Components/Breadcrumb/Breadcrumb";
import { BsPeople } from "react-icons/bs";
import { FaHandshake, FaChartLine } from "react-icons/fa";

const commitments = [
  {
    id: 1,
    icon: BsPeople,
    title: "Working as a team",
    description:
      "One group, one vision, one team united in heart with our business partners for the good of all.",
  },
  {
    id: 2,
    icon: FaHandshake,
    title: "Doing what is right",
    description:
      "Staying true to ourselves and each other, maintaining the highest standards of discipline and integrity in everything we say and do.",
  },
  {
    id: 3,
    icon: FaChartLine,
    title: "Caring about our future",
    description:
      "We are committed to creating a positive future for generations to come. Caring for our people, our environment, our community, our nation.",
  },
];

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Banner backgroundImage={aboutUsBanner} height="70vh" />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb />
      </div>

      {/* Who are we? Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Who are we?</h2>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-12">
            {/* Founder Card */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 mb-4 rounded-full overflow-hidden border-4 border-gray-200">
                <img
                  src={HoVyImage}
                  alt="Ho Ngoc Tuong Vy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1 text-center">
                HỒ NGỌC TƯỜNG VY
              </h3>
              <p className="text-gray-600 text-sm">21522445</p>
              <p className="text-gray-600">Developer</p>
            </div>

            {/* Co-Founder Card */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 mb-4 rounded-full overflow-hidden border-4 border-gray-200">
                <img
                  src={PhatImage}
                  alt="Ngo Thuan Phat"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1 text-center">
                NGÔ THUẬN PHÁT
              </h3>
              <p className="text-gray-600 text-sm">21522445</p>
              <p className="text-gray-600">Developer</p>
            </div>
          </div>

          <div className="space-y-6 text-gray-600">
            <p>
              <span className="font-semibold text-primary">EZLIFE REALTY</span>{" "}
              is the company to develop and hand over the realty management
              solutions to the best quality.
            </p>

            <p>
              <span className="font-semibold text-primary">EZLIFE REALTY</span>{" "}
              has got lots of practical experiences in consulting, managing, and
              applying technology in the real estate. Dealing with our talented
              staff, we are willing to provide some good services including:
              consultancy; professional training; exploitation and technological
              application in our management and operation for our investors,
              Directorate Board as well as Operation Management Company.
            </p>

            <p>
              In addition,{" "}
              <span className="font-semibold text-primary">EZLIFE REALTY</span>{" "}
              will be the famous company in the Realty industry in Vietnam. We
              would like to get our standardization and simplification of our
              managem-ent and operation and help us increase our professional
              image of our projects, our buildings ... as well as increase the
              value of that real estate.
            </p>
          </div>
        </div>
      </div>

      {/* Our commitments Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our commitments
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {commitments.map((commitment) => {
                const IconComponent = commitment.icon;
                return (
                  <div
                    key={commitment.id}
                    className="flex flex-col items-center"
                  >
                    <div className="mb-4">
                      <IconComponent className="w-16 h-16 text-[#9C8321]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#9C8321] mb-3">
                      {commitment.title}
                    </h3>
                    <p className="text-center text-gray-600">
                      {commitment.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
