/* eslint-disable react/prop-types */
import BlogItem from "./BlogItem";

const BlogGrid = ({ blogs }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      <div className="mb-6 sm:mb-8 lg:mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Discover latest blogs
        </h1>
        <p className="mt-2 text-sm sm:text-base text-gray-600">
          Explore our collection of insightful articles and stay updated
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {blogs.map((blog) => (
          <div key={blog.blogID} className="h-full">
            <BlogItem {...blog} />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {blogs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No blogs found</p>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
