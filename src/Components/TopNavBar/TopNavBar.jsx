import { RiMapPin2Line } from "react-icons/ri";
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";

const TopNavBar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between text-white p-2 bg-primary text-base md:text-lg">
      <div className="flex justify-center items-center md:ml-10 mb-2 md:mb-0">
        <RiMapPin2Line className="mr-2" />
        <span className="text-center md:text-left">
          Building E, University of Information and Technology
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:mr-16 space-y-2 md:space-y-0">
        <div className="flex justify-center items-center md:mr-20">
          <LuPhone className="mr-2" /> 0399248580
        </div>
        <div className="flex justify-center items-center">
          <CiMail className="mr-2" /> 21522445@gm.uit.edu.vn
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
