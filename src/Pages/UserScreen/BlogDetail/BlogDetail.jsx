import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import BlogItem from "../../../Components/Blog/BlogItem";
import { getBlogDetail, getBlogImages } from "../../../redux/action/blogAction";

const BlogDetail = () => {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState("");

  // Get data from Redux store
  const {
    blogDetail,
    blogDetailLoading,
    blogDetailError,
    blogImages,
    blogImagesLoading,
  } = useSelector((state) => state.blog);

  // Fetch blog detail and images
  useEffect(() => {
    const fetchBlogData = async () => {
      await dispatch(getBlogDetail(blogId));
      await dispatch(getBlogImages(blogId));
    };

    fetchBlogData();
  }, [dispatch, blogId]);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    // Comment submission logic will be added later
    setNewComment("");
  };

  if (blogDetailLoading) return <div>Loading...</div>;
  if (blogDetailError) return <div>Error: {blogDetailError}</div>;
  if (!blogDetail) return <div>No blog found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            {/* Display the first blog image if available */}
            {!blogImagesLoading && blogImages?.length > 0 && (
              <img
                src={blogImages[0].file_url}
                alt={blogDetail.title}
                className="w-full h-[400px] object-cover"
              />
            )}

            <div className="p-6">
              <h1 className="text-3xl font-bold mb-4">{blogDetail.title}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <span>By {blogDetail.user_name}</span>
                <span>
                  {new Date(blogDetail.created_at).toLocaleDateString()}
                </span>
              </div>
              <div className="prose max-w-none">{blogDetail.content}</div>

              {/* Social Share */}
              <div className="mt-8 pt-6 border-t">
                <p className="text-gray-700 mb-4">Share this</p>
                <div className="flex gap-4">
                  <button className="text-gray-600 hover:text-blue-600">
                    <FaFacebook size={24} />
                  </button>
                  <button className="text-gray-600 hover:text-blue-400">
                    <FaTwitter size={24} />
                  </button>
                  <button className="text-gray-600 hover:text-pink-600">
                    <FaInstagram size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">
              Comments ({blogDetail.comments_count || 0})
            </h2>

            {/* Comment Form */}
            <form onSubmit={handleSubmitComment} className="mb-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <FaRegUser className="text-gray-500" />
                </div>
                <div className="flex-grow">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add your comment..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
                    rows="3"
                  />
                  <button
                    type="submit"
                    className="mt-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    Post Comment
                  </button>
                </div>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-6">
              {blogDetail.comments?.map((comment) => (
                <div key={comment.id} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <FaRegUser className="text-gray-500" />
                  </div>
                  <div className="flex-grow">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">
                          {comment.user_name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {new Date(comment.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold mb-6">Related Articles</h2>
          <div className="space-y-6">
            {blogDetail.related_posts?.map((blog) => (
              <BlogItem
                key={blog.id}
                blogID={blog.id}
                title={blog.title}
                authorName={blog.user_name}
                date={new Date(blog.created_at).toLocaleDateString()}
                description={blog.content.substring(0, 150) + "..."}
                thumbnail={blog.thumbnail_url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
