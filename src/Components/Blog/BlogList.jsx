import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogPost } from "../../redux/action/blogAction";

const BlogList = () => {
  const dispatch = useDispatch();
  const { data: blogs, loading } = useSelector((state) => state.blog);
  const { data: account } = useSelector((state) => state.account);

  useEffect(() => {
    dispatch(getBlogPost());
  }, [dispatch]);

  // Filter blogs to show only the current user's blogs
  const userBlogs = blogs?.filter((blog) => blog.user_id === account?.id) || [];

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
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Created At
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {userBlogs.map((blog) => (
              <tr key={blog.id}>
                <td className="px-6 py-4">
                  <div className="line-clamp-1">{blog.title}</div>
                </td>
                <td className="px-6 py-4">{getCategoryLabel(blog.category)}</td>
                <td className="px-6 py-4">
                  {new Date(blog.created_at).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:text-blue-800 mr-2">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {userBlogs.length === 0 && (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
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
