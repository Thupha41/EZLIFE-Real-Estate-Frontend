import { Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Admin from "../Pages/AdminScreen/Admin";
import LoginWithSSO from "../Components/LoginWithSSO/LoginWithSSO";
import UserManagement from "../Pages/AdminScreen/UserManagement/UserManagement";
import PrivateRoutes from "./PrivateRoutes";
import NotFoundPage from "../Pages/404Page/NotFoundPage";
import Dashboard from "../Pages/AdminScreen/Dashboard/Dashboard";
import AdminLayout from "../Components/Layout/AdminLayout";
import PermissionManagement from "../Pages/AdminScreen/PermissionManagement/PermissionManagenent";
import RoleManagement from "../Pages/AdminScreen/RoleManagement/RoleManagement";
import BlogPage from "../Pages/UserScreen/BlogPage/BlogPage";
import EmployeeLayout from "../Components/Layout/EmployeeLayout";
import BlogDetail from "../Pages/UserScreen/BlogDetail/BlogDetail";
import AccountSetting from "../Pages/UserScreen/AccountSetting/AccountSetting";
import ServicePage from "../Pages/UserScreen/ServicePage/ServicePage";
import AboutUsPage from "../Pages/UserScreen/AboutUsPage/AboutUsPage";
import ConsultantPage from "../Pages/UserScreen/ConsultantPage/ConsultantPage";
const AppRoute = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/code" element={<LoginWithSSO />} />

      {/* Employee Routes */}
      <Route element={<EmployeeLayout />}>
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:blogId" element={<BlogDetail />} />
        <Route path="/employee/account-settings" element={<AccountSetting />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/consultant" element={<ConsultantPage />} />
      </Route>

      {/* Admin Routes */}
      <Route
        element={
          <PrivateRoutes allowedRoles={["admin"]}>
            <AdminLayout />
          </PrivateRoutes>
        }
      >
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/permissions" element={<PermissionManagement />} />
        <Route path="/admin/roles" element={<RoleManagement />} />
      </Route>

      {/* Error Routes */}
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoute;
