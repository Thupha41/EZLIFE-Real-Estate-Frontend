import serviceBanner from "../../../assets/LandingPage/serviceBanner.png";
import Banner from "../../../Components/Banner/Banner";
import Breadcrumb from "../../../Components/Breadcrumb/Breadcrumb";
import ServiceFeature1 from "../../../assets/LandingPage/service_feature1.png";
import ServiceFeature2 from "../../../assets/LandingPage/service_feature2.png";
import ServiceFeature3 from "../../../assets/LandingPage/service_feature3.png";
import { BsBuilding, BsHouseDoor, BsPeople, BsGear } from "react-icons/bs";
import {
  MdApartment,
  MdShoppingCart,
  MdLocationCity,
  MdEngineering,
} from "react-icons/md";

const services = [
  {
    id: 1,
    title: "Building Technical Service",
    icon: BsPeople,
    description: [
      "Setting up online building management software system (Real estate management technology solution PMSS",
      "Providing Management staff (Head of Management service agencies, receptionist, administrative, accountant, etc)",
      "Providing personnel to operate technical systems and supervise maintenance work: Chief engineer, technical staff",
      "Providing services: Security, parking, cleaning, first aid care, swimming pool",
    ],
  },
  {
    id: 2,
    title: "Industrial Cleaning Service",
    icon: BsHouseDoor,
    description: [
      "Industrial spaces require rigorous cleaning protocols to maintain safety standards and operational efficiency",
      "Providing Management staff (Head of Management service agencies, receptionist, administrative, accountant)",
      "Our industrial cleaning services are designed to handle the heavy-duty cleaning requirements of factories, warehouses, and other large-scale facilities, ensuring that these environments remain clean, safe, and compliant with industry regulations",
    ],
  },
  {
    id: 3,
    title: "Apartment Management Service",
    icon: MdApartment,
    description: [
      "Managing residential properties, particularly apartment complexes, involves a specific balance of tenant relations, maintenance, and financial oversight",
      "Our apartment management services focus on creating a pleasant living environment",
      "Ensuring that property owners achieve their financial goals through effective management strategies",
    ],
  },
  {
    id: 4,
    title: "Office Building Management",
    icon: BsBuilding,
    description: [
      "Our office building management services cover everything from routine maintenance and security to tenant management and lease administration",
      "Providing Management staff (Head of Management service agencies, receptionist, administrative, accountant, etc)",
      "Providing services: Security, parking, cleaning, first aid care, swimming pool",
    ],
  },
  {
    id: 5,
    title: "Shopping Mall Management",
    icon: MdShoppingCart,
    description: [
      "Shopping malls are complex entities that require special attention to provide excellent facilities management and customer experiences",
      "Our shopping mall management services are designed to optimize operations, maintenance, and tenant relations, ensuring that the mall operates smoothly from daily maintenance to large-scale events",
      "Providing personnel to operate technical systems and supervision/maintenance work: Chief engineer, technical staff",
    ],
  },
  {
    id: 6,
    title: "Urban Area Management",
    icon: MdLocationCity,
    description: [
      "Urban areas encompass a wide range of properties, including residential, commercial, and public spaces",
      "Our urban area management services focus on the holistic oversight of these areas, ensuring that they are safe, well-maintained, and remain attractive to the needs of the community",
      "Regular maintenance of infrastructure, maintenance in community management interface",
    ],
  },
  {
    id: 7,
    title: "Complex Management",
    icon: BsGear,
    description: [
      "Complexes, whether residential, commercial, or mixed-use, require a balanced management approach that takes into account the diverse needs of tenants and the necessities of multi-use spaces",
      "Our complex management services provide comprehensive oversight, including facilities management, security, and financial management, ensuring that these properties operate efficiently and harmoniously",
    ],
  },
  {
    id: 8,
    title: "Utility Service Exploitation",
    icon: MdEngineering,
    description: [
      "Efficient management of utilities is essential for the smooth operation of any property. Our comprehensive utility services involve the strategic management and optimization of electricity, water, HVAC, and other essential services to ensure they are not only functional but also sustainable and cost-effective",
      "Providing personnel to operate technical systems and supervision/maintenance work: Chief engineer, technical staff",
    ],
  },
];

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Banner backgroundImage={serviceBanner} title="Services" height="70vh" />
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb />
      </div>

      {/* Why Choose Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-16">
          WHY CHOOSE EZLIFE?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img
                src={ServiceFeature1}
                alt="Consulting"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              SUITABLE CONSULTING PACKAGE
            </h3>
            <p className="text-gray-600 text-sm">for each target group</p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img src={ServiceFeature2} alt="Results" className="w-16 h-16" />
            </div>
            <h3 className="text-lg font-semibold mb-2">PRACTICAL RESULTS</h3>
            <p className="text-gray-600 text-sm">proven effectiveness</p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img src={ServiceFeature3} alt="Team" className="w-16 h-16" />
            </div>
            <h3 className="text-lg font-semibold mb-2">EXPERT TEAM</h3>
            <p className="text-gray-600 text-sm">rich in experience</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white p-6 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.06)] transition-shadow duration-300 ease-in-out"
              >
                <div className="flex justify-center mb-6">
                  <IconComponent className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4 text-[#9C8321]">
                  {service.title}
                </h3>
                <ul className="text-sm space-y-3 list-disc pl-4">
                  {service.description.map((item, index) => (
                    <li key={index} className="text-gray-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
