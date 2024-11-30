import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs, getBlogImages } from "../../redux/action/blogAction";

const BlogList = () => {
  const dispatch = useDispatch();
  const { blogs, loading } = useSelector((state) => state.blog);
  const { userInfo } = useSelector((state) => state.account);
  const [blogImages, setBlogImages] = useState({});

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  // Fetch images for each blog post
  useEffect(() => {
    const fetchBlogImages = async () => {
      if (blogs?.length > 0) {
        const imagesPromises = blogs.map((blog) =>
          dispatch(getBlogImages(blog.id))
        );
        const imagesResults = await Promise.all(imagesPromises);

        // Create an object with blog_id as key and images as value
        const imagesMap = {};
        imagesResults.forEach((result, index) => {
          if (result.success) {
            imagesMap[blogs[index].id] = result.data;
          }
        });
        setBlogImages(imagesMap);
      }
    };

    fetchBlogImages();
  }, [blogs, dispatch]);

  const userBlogs =
    blogs?.filter((blog) => blog.user_id === userInfo?.user_id) || [];

  if (loading) return <div>Loading...</div>;

  const getCategoryLabel = (category) => {
    const categories = {
      "property-investment": "Real Estate",
      "real-estate": "Feng Shui",
      "market-analysis": "Knowledge",
      "contract-templates": "Contract Templates",
      miscellaneous: "Miscellaneous",
    };
    return categories[category] || category;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold mb-4">Your Blog Posts</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-fixed">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-20 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Image
              </th>
              <th className="w-1/3 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Title
              </th>
              <th className="w-1/6 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Category
              </th>
              <th className="w-1/6 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Created At
              </th>
              <th className="w-1/6 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {userBlogs.map((blog) => (
              <tr key={blog.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  {blogImages[blog.id]?.length > 0 ? (
                    <img
                      src={blogImages[blog.id][0].file_url}
                      alt={blog.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-gray-400 text-xs">No image</span>
                    </div>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="line-clamp-2 break-words">{blog.title}</div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {getCategoryLabel(blog.category)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(blog.created_at).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-800 mr-2 text-sm font-medium">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {userBlogs.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  You haven&apos;t created any blog posts yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogList;
