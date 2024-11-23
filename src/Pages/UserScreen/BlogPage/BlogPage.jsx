import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../../redux/action/blogAction";
import { BsGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import blogBanner from "../../../assets/LandingPage/blog-banner.png";
import Banner from "../../../Components/Banner/Banner";
import Breadcrumb from "../../../Components/Breadcrumb/Breadcrumb";
const BlogPage = () => {
  const dispatch = useDispatch();
  const { blogs = [], loading, error } = useSelector((state) => state.blog);
  const [gridViewActive, setGridViewActive] = useState(true);
  const [listViewActive, setListViewActive] = useState(false);

  const toggleGridView = () => {
    setGridViewActive(true);
    setListViewActive(false);
  };

  const toggleListView = () => {
    setGridViewActive(false);
    setListViewActive(true);
  };

  const stripHtmlTags = (html) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  // Get the first blog for featured section
  const featuredBlog = blogs[0] || null;
  // Get remaining blogs
  const remainingBlogs = blogs.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Banner backgroundImage={blogBanner} title="Blog" height="70vh" />
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb />
      </div>
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-12">
        Discover latest blogs
      </h1>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div>Loading...</div>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="text-red-500">Error: {error}</div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Featured Blog */}
          {featuredBlog && (
            <div className="mb-12">
              <div className="grid md:grid-cols-2 gap-8 bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={featuredBlog.thumbnail || "/default-thumbnail.jpg"}
                    alt={featuredBlog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">
                      By {featuredBlog.user_name}
                    </span>
                    <span className="text-gray-500">
                      {new Date(featuredBlog.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold mb-4">
                    {stripHtmlTags(featuredBlog.title)}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-4">
                    {stripHtmlTags(featuredBlog.content)}
                  </p>
                  <Link
                    to={`/blogs/${featuredBlog.id}`}
                    className="text-primary hover:text-primary-dark font-medium inline-flex items-center"
                  >
                    See full
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Grid View Toggle */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-4">
              <span
                className={`${
                  gridViewActive
                    ? "bg-black text-white"
                    : "border-[1px] border-gray-300 text-[#737373]"
                } w-8 h-8 text-lg flex items-center justify-center cursor-pointer gridView`}
                onClick={toggleGridView}
              >
                <BsGridFill />
              </span>
              <span
                className={`${
                  listViewActive
                    ? "bg-black text-white"
                    : "border-[1px] border-gray-300 text-[#737373]"
                } w-8 h-8 text-base flex items-center justify-center cursor-pointer listView`}
                onClick={toggleListView}
              >
                <BsFillGrid3X3GapFill />
              </span>
            </div>
          </div>

          {/* Remaining Blogs Grid */}
          <div
            className={`grid grid-cols-1 ${
              gridViewActive
                ? "md:grid-cols-2"
                : "md:grid-cols-2 lg:grid-cols-3"
            } gap-6`}
          >
            {remainingBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.thumbnail || "/default-thumbnail.jpg"}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                    {stripHtmlTags(blog.title)}
                  </h3>
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                    <span>By {blog.user_name}</span>
                    <span>
                      {new Date(blog.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {stripHtmlTags(blog.content)}
                  </p>
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="inline-flex items-center text-primary hover:text-primary-dark font-medium text-sm"
                  >
                    See full
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
