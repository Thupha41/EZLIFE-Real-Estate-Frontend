import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogGrid from "../../../Components/Blog/BlogGrid";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Example data - replace with your API fetch
    const dummyBlogs = [
      {
        blogID: "1",
        title: "Other post heading sample text...",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        authorName: "Writer Name",
        date: "23 Dec.",
        thumbnail: "/path/to/city1.jpg",
      },
      {
        blogID: "2",
        title: "Other post heading sample text...",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        authorName: "Writer Name",
        date: "23 Dec.",
        thumbnail: "/path/to/city2.jpg",
      },
      // Add more dummy blogs as needed
    ];
    setBlogs(dummyBlogs);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Featured Blog */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Featured Blog Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8 sm:mb-12">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Image Container */}
            <div className="relative h-[200px] sm:h-[300px] md:h-full overflow-hidden">
              <img
                src="/path/to/featured-image.jpg"
                alt="Featured Blog"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Content Container */}
            <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
              {/* Author and Date */}
              <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 gap-1">
                <span className="truncate">By Writer Name</span>
                <span>23 Dec.</span>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-4">
                Featured blog post title goes here
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2 sm:line-clamp-3 lg:line-clamp-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              {/* Read More Link */}
              <Link
                to="/blogs/featured"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors duration-200 font-medium group"
              >
                Read more
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
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

        {/* Blog Grid Component */}
        <BlogGrid blogs={blogs} />
      </div>
    </div>
  );
};

export default BlogPage;
