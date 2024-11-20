import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import BlogItem from "../../../Components/Blog/BlogItem";

const BlogDetail = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Fetch blog data and comments - replace with your actual API call
  useEffect(() => {
    // Simulated blog data
    setBlog({
      title: "Ngăn chặn hiệu ứng Domino khi sốt giá bất động sản",
      author: "Writer Name",
      date: "23 Dec.",
      content: "Your blog content here...",
      image: "/path/to/main-image.jpg",
    });

    // Simulated comments data
    setComments([
      {
        id: 1,
        user: "User",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia nisl, hendrerit nec amet id lorem, soluta aliquet nulla",
        date: "2 minutes ago",
      },
      // Add more comments...
    ]);

    // Updated related blogs data structure to match BlogItem props
    setRelatedBlogs([
      {
        blogID: "1",
        title: "Other post heading sample text...",
        authorName: "Writer Name",
        date: "23 Dec.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        thumbnail: "/path/to/related-image-1.jpg",
      },
      // Add more related blogs...
    ]);
  }, [blogId]);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    // Add new comment - replace with your API call
    const newCommentObj = {
      id: comments.length + 1,
      user: "Current User",
      content: newComment,
      date: "Just now",
    };
    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <span>By {blog.author}</span>
                <span>{blog.date}</span>
              </div>
              <div className="prose max-w-none">{blog.content}</div>

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
              Comments ({comments.length})
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
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <FaRegUser className="text-gray-500" />
                  </div>
                  <div className="flex-grow">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">{comment.user}</span>
                        <span className="text-sm text-gray-500">
                          {comment.date}
                        </span>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                      <button className="text-sm text-gray-500 mt-2 hover:text-gray-700">
                        Reply
                      </button>
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
            {relatedBlogs.map((blog) => (
              <BlogItem key={blog.blogID} {...blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
