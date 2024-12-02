import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs, getBlogImages } from "../../../redux/action/blogAction";
import { BsGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import blogBanner from "../../../assets/LandingPage/blog-banner.png";
import Banner from "../../../Components/Banner/Banner";
import Breadcrumb from "../../../Components/Breadcrumb/Breadcrumb";

const BlogPage = () => {
  const dispatch = useDispatch();
  const {
    blogs = [],
    loading,
    error,
    blogImages = [],
  } = useSelector((state) => state.blog);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6); // Number of posts to show per page
  const [gridViewActive, setGridViewActive] = useState(true);
  const [listViewActive, setListViewActive] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  // Get the featured blog (always first blog)
  const featuredBlog = blogs[0] || null;
  // Get remaining blogs (excluding featured blog)
  const remainingBlogs = blogs.slice(1);

  // Calculate pagination for remaining blogs only
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = remainingBlogs.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(remainingBlogs.length / postsPerPage);

  const toggleGridView = () => {
    setGridViewActive(true);
    setListViewActive(false);
  };

  const toggleListView = () => {
    setGridViewActive(false);
    setListViewActive(true);
  };

  const stripHtmlTagsAndSEP = (html) => {
    // First remove HTML tags
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    const text = tmp.textContent || tmp.innerText || "";

    // Then remove [SEP] and trim spaces
    return text.replace(/\[SEP\]/g, "").trim();
  };

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  useEffect(() => {
    if (blogs && blogs.length > 0) {
      blogs.forEach((blog) => {
        dispatch(getBlogImages(blog.id));
      });
    }
  }, [dispatch, blogs]);

  const getBlogImageUrl = (blogId) => {
    const blogImage = blogImages.find((img) => img.post === blogId);
    return blogImage?.image_url || "/default-thumbnail.jpg";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Banner backgroundImage={blogBanner} title="Blog" height="70vh" />
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb />
      </div>

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
          {/* Featured Blog - Always first blog */}
          {featuredBlog && (
            <div className="mb-12">
              <div className="grid md:grid-cols-2 gap-8 bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={getBlogImageUrl(featuredBlog.id)}
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
                    {stripHtmlTagsAndSEP(featuredBlog.title)}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-4">
                    {stripHtmlTagsAndSEP(featuredBlog.content)}
                  </p>
                  <button
                    onClick={() =>
                      handleNavigation(`/blogs/${featuredBlog.id}`)
                    }
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
                  </button>
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

          {/* Remaining Blogs Grid - Paginated */}
          <div
            className={`grid grid-cols-1 ${
              gridViewActive
                ? "md:grid-cols-2"
                : "md:grid-cols-2 lg:grid-cols-3"
            } gap-6`}
          >
            {currentPosts.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={getBlogImageUrl(blog.id)}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                    {stripHtmlTagsAndSEP(blog.title)}
                  </h3>
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                    <span>By {blog.user_name}</span>
                    <span>
                      {new Date(blog.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {stripHtmlTagsAndSEP(blog.content)}
                  </p>
                  <button
                    onClick={() => handleNavigation(`/blogs/${blog.id}`)}
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
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {remainingBlogs.length > postsPerPage && (
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={() => {
                  if (currentPage > 1) {
                    setCurrentPage((prev) => prev - 1);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-md ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-primary text-white hover:bg-primary-dark"
                }`}
              >
                Previous
              </button>

              <div className="flex space-x-2">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => {
                      setCurrentPage(index + 1);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`w-8 h-8 rounded-md ${
                      currentPage === index + 1
                        ? "bg-primary text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  if (currentPage < totalPages) {
                    setCurrentPage((prev) => prev + 1);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-md ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-primary text-white hover:bg-primary-dark"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
