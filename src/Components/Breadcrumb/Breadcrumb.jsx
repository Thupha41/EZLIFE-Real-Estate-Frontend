import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const Breadcrumb = () => {
  const location = useLocation();

  const getBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);

    const getTitleFromPath = (path) => {
      const titles = {
        blogs: "Blogs",
        admin: "Admin",
        users: "User Management",
        dashboard: "Dashboard",
        permissions: "Permission Management",
        roles: "Role Management",
      };
      return titles[path] || path.charAt(0).toUpperCase() + path.slice(1);
    };

    const breadcrumbs = pathnames.map((path, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
      const isLast = index === pathnames.length - 1;
      const title = getTitleFromPath(path);

      if (path.match(/^[0-9a-fA-F]{24}$/)) {
        return {
          title: "Blog Detail",
          path: routeTo,
          isLast: isLast,
        };
      }

      return {
        title: title,
        path: routeTo,
        isLast: isLast,
      };
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  if (location.pathname === "/") return null;

  return (
    <div className="bg-white shadow-sm rounded-lg mb-8">
      <nav className="max-w-7xl mx-auto px-6 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li className="flex items-center">
            <Link
              to="/"
              className="text-gray-500 hover:text-primary transition-colors duration-200 flex items-center group"
            >
              <IoHomeOutline className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="sr-only">Home</span>
            </Link>
          </li>

          {breadcrumbs.map((breadcrumb) => (
            <Fragment key={breadcrumb.path}>
              <li className="flex items-center">
                <MdKeyboardArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
              </li>
              <li className="flex items-center">
                {breadcrumb.isLast ? (
                  <span className="text-primary font-medium">
                    {breadcrumb.title}
                  </span>
                ) : (
                  <Link
                    to={breadcrumb.path}
                    className="text-gray-500 hover:text-primary transition-colors duration-200"
                  >
                    {breadcrumb.title}
                  </Link>
                )}
              </li>
            </Fragment>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
