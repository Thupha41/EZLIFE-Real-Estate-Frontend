import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import TopNavBar from "../TopNavBar/TopNavBar";
import Footer from "../Footer/Footer";
import Newsletter from "../Newsletter/Newsletter";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const EmployeeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <TopNavBar />
      <NavBar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Breadcrumb />
          <Outlet />
        </div>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default EmployeeLayout;
