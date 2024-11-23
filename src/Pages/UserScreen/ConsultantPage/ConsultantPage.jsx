import consultantBanner from "../../../assets/LandingPage/consultantBanner.png";
import meeting1 from "../../../assets/LandingPage/meeting1.png";
import meeting2 from "../../../assets/LandingPage/meeting2.png";
import Banner from "../../../Components/Banner/Banner";
import Breadcrumb from "../../../Components/Breadcrumb/Breadcrumb";

const ConsultantPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Banner backgroundImage={consultantBanner} height="70vh" />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb />
      </div>
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-12">
        Consultant & Training
      </h1>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Introduction Text */}
          <div className="space-y-6 text-gray-600">
            <p>
              <span className="font-semibold text-primary">
                EZLIFE Real Estate Service Co., Ltd.
              </span>{" "}
              is one of pioneering enterprises in Vietnam in the field of realty
              maintenance and technology transfer because it is surely leading
              experts in the fields.
            </p>

            <p>
              With the motto of &quot;Always serving prestige and quality
              first&quot;, after many years in the real estate,{" "}
              <span className="font-semibold text-primary">EZLIFE</span> has
              always brought its experience to serve customers in the best way.
              With the motto of &quot;Quality is the key to success&quot;,{" "}
              <span className="font-semibold text-primary">EZLIFE</span> Board
              of Directors has also taken the issue of quality and prestige as a
              guideline for the company short and long-term work.
            </p>

            <p>
              Currently,{" "}
              <span className="font-semibold text-primary">EZLIFE</span> has
              been a pioneering enterprise and technology transfer for many
              large-scale projects and especially from the trust that has been
              built with partners over the years.
            </p>

            <p>
              Therefore, when you intend to find a leading technology transfer
              consulting company to enhance value and increase efficiency for
              your business,{" "}
              <span className="font-semibold text-primary">EZLIFE</span> is
              proud to be one of you.
            </p>
          </div>

          {/* Meeting Images */}
          <div className="space-y-8">
            <div>
              <img
                src={meeting1}
                alt="Meeting"
                className="w-full rounded-lg mb-4"
              />
              <p className="text-center text-gray-600">
                • Providing Management staff: Head of Management, Management
                Supervisor, Technical Supervisor, Receptionist, Staff,
                Accountant,...
              </p>
            </div>

            <div>
              <img
                src={meeting2}
                alt="Business Meeting"
                className="w-full rounded-lg mb-4"
              />
              <p className="text-center text-gray-600">
                • Providing personnel to operate technical systems and supervise
                maintenance work: Chief Engineer, Technical Staff
              </p>
            </div>
          </div>

          <p className="text-center text-gray-600">
            • Providing services: Security, Cleaning, Healthcare, First Aid,
            Swimming Pool Maintenance, Parking (gym,...)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsultantPage;
