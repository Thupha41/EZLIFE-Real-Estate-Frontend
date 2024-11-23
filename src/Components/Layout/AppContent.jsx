/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { doGetAccount } from "../../redux/action/accountAction";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import TopNavBar from "../TopNavBar/TopNavBar";
import Newsletter from "../Newsletter/Newsletter";
import AppRoutes from "../../routes/AppRoutes";

const AppContent = ({ firstRenderRef }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const protectedPaths = [
    "/admin",
    "/admin/users",
    "/admin/dashboard",
    "/admin/permissions",
    "/admin/roles",
    "/employee/account-settings",
  ];

  const employeePaths = ["/blogs", "/blogs/"];

  useEffect(() => {
    const checkAuth = async () => {
      if (
        protectedPaths.some((path) => location.pathname.startsWith(path)) &&
        firstRenderRef.current
      ) {
        dispatch(doGetAccount());
        firstRenderRef.current = false;
      } else {
        firstRenderRef.current = false;
      }
    };

    checkAuth();
  }, [location.pathname]);

  const shouldHideLayout = () => {
    return (
      ["/404", ...protectedPaths].includes(location.pathname) ||
      employeePaths.some((path) => location.pathname.startsWith(path))
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      {!shouldHideLayout() && (
        <>
          <TopNavBar />
          <Navbar />
        </>
      )}
      <main className="flex-1">
        <AppRoutes />
      </main>
      {!shouldHideLayout() && (
        <>
          <Newsletter />
          <Footer />
        </>
      )}
    </div>
  );
};

export default AppContent;
