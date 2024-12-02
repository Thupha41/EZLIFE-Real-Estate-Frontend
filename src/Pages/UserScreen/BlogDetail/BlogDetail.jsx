import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaEllipsisV,
} from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import BlogItem from "../../../Components/Blog/BlogItem";
import {
  getBlogDetail,
  getBlogImages,
  likePost,
  unlikePost,
  createComment,
  getComments,
  getPostLikes,
  updateComment,
  deleteComment,
  getBlogs,
} from "../../../redux/action/blogAction";
import { message, Modal } from "antd";
import { Dropdown } from "antd";

const BlogDetail = () => {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedCommentContent, setEditedCommentContent] = useState("");
  const [localLikesCount, setLocalLikesCount] = useState(0);
  const [localCommentsCount, setLocalCommentsCount] = useState(0);

  // Get data from Redux store
  const {
    blogDetail,
    blogDetailLoading,
    blogDetailError,
    blogImages,
    blogImagesLoading,
    likePostLoading,
    createCommentLoading,
    comments,
    commentsLoading,
    commentsError,
    postLikes,
    blogs,
  } = useSelector((state) => state.blog);
  const { userInfo } = useSelector((state) => state.account);

  useEffect(() => {
    dispatch(getBlogDetail(blogId));
    dispatch(getBlogImages(blogId));
    dispatch(getComments(blogId));
    dispatch(getPostLikes(blogId));
    dispatch(getBlogs());
  }, [dispatch, blogId]);

  useEffect(() => {
    if (blogDetail) {
      setLocalLikesCount(blogDetail.likes_count || 0);
      setLocalCommentsCount(blogDetail.comments_count || 0);
    }
  }, [blogDetail]);

  // Separate useEffect for related articles' images
  useEffect(() => {
    if (blogs && blogs.length > 0) {
      // Filter out the current blog and fetch images only for related articles
      const relatedBlogs = blogs.filter((blog) => blog.id !== parseInt(blogId));
      relatedBlogs.forEach((blog) => {
        dispatch(getBlogImages(blog.id));
      });
    }
  }, [dispatch, blogs, blogId]);

  // Filter images that match the current post ID
  const postImages =
    blogImages?.filter((img) => img.post === parseInt(blogId)) || [];

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!userInfo) {
      message.error("Please login to comment");
      return;
    }
    if (!newComment.trim()) return;

    const commentData = {
      parent: null,
      content: newComment.trim(),
    };

    try {
      const result = await dispatch(createComment(blogId, commentData));

      if (result.success) {
        message.success("Comment posted successfully");
        setNewComment("");
        dispatch(getComments(blogId));
        setLocalCommentsCount((prev) => prev + 1);
      } else {
        message.error(result.error || "Failed to post comment");
      }
    } catch (error) {
      console.error("Comment error:", error);
      message.error("Something went wrong");
    }
  };

  const hasUserLiked = () => {
    if (!userInfo || !postLikes) return false;
    const isLike = postLikes.some((like) => like.user_id === userInfo.user_id);
    return isLike;
  };

  const getUserLikeId = () => {
    if (!userInfo || !postLikes) return null;
    const userLike = postLikes.find(
      (like) => like.user_id === userInfo.user_id
    );
    return userLike ? userLike.id : null;
  };
  const getBlogImageUrl = (blogId) => {
    const blogImage = blogImages.find((img) => img.post === blogId);
    return blogImage?.image_url || "/default-thumbnail.jpg";
  };
  const handleLikeToggle = async (e) => {
    e.preventDefault();
    if (!userInfo) {
      message.error("Please login to like this post");
      return;
    }

    const userData = {
      user_id: userInfo.user_id,
      user_name: userInfo.first_name + " " + userInfo.last_name,
      user_email: userInfo.email,
    };

    try {
      let result;
      const isCurrentlyLiked = hasUserLiked();

      if (isCurrentlyLiked) {
        const like_id = getUserLikeId();
        if (!like_id) {
          message.error("Error finding like record");
          return;
        }

        result = await dispatch(unlikePost(blogId, like_id, userData));
        if (result.success) {
          message.success("Post unliked successfully");
          dispatch(getPostLikes(blogId));
          setLocalLikesCount((prev) => Math.max(0, prev - 1));
        } else {
          message.error(result.error || "Failed to unlike post");
        }
      } else {
        result = await dispatch(likePost(blogId, userData));
        if (result.success) {
          message.success("Post liked successfully");
          dispatch(getPostLikes(blogId));
          setLocalLikesCount((prev) => prev + 1);
        } else {
          message.error(result.error || "Failed to like post");
        }
      }
    } catch (error) {
      console.error("Like/Unlike error:", error);
      message.error("Something went wrong");
    }
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const handleEditComment = (commentId, currentContent) => {
    setEditingCommentId(commentId);
    setEditedCommentContent(currentContent);
  };

  const handleUpdateComment = async (commentId) => {
    try {
      const result = await dispatch(
        updateComment(blogId, commentId, {
          content: editedCommentContent.trim(),
        })
      );

      if (result.success) {
        message.success("Comment updated successfully");
        setEditingCommentId(null);
        dispatch(getComments(blogId));
      } else {
        message.error(result.error || "Failed to update comment");
      }
    } catch (error) {
      console.error("Update comment error:", error);
      message.error("Something went wrong");
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      const result = await dispatch(deleteComment(blogId, commentId));
      if (result.success) {
        message.success("Comment deleted successfully");
        dispatch(getComments(blogId));
        setLocalCommentsCount((prev) => Math.max(0, prev - 1));
      } else {
        message.error(result.error || "Failed to delete comment");
      }
    } catch (error) {
      console.error("Delete comment error:", error);
      message.error("Something went wrong");
    }
  };

  const getRelatedArticles = () => {
    if (!blogs || !blogDetail) return [];
    return blogs
      .filter(
        (blog) =>
          // Filter blogs from same category but exclude current blog
          blog.category === blogDetail.category && blog.id !== parseInt(blogId)
      )
      .slice(0, 3);
  };

  if (blogDetailLoading) return <div>Loading...</div>;
  if (blogDetailError) return <div>Error: {blogDetailError}</div>;
  if (!blogDetail) return <div>No blog found</div>;
  const stripHtmlTagsAndSEP = (html) => {
    // First remove HTML tags
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    const text = tmp.textContent || tmp.innerText || "";

    // Then remove [SEP] and trim spaces
    return text.replace(/\[SEP\]/g, "").trim();
  };
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            {/* Display the first blog image if available */}
            {!blogImagesLoading && postImages.length > 0 && (
              <img
                src={postImages[0].image_url}
                alt={`${blogDetail.title} - ${postImages[0].label}`}
                className="w-full h-[400px] object-cover"
              />
            )}

            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold">{blogDetail.title}</h1>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <span>By {blogDetail.user_name}</span>
                <span>
                  {new Date(blogDetail.created_at).toLocaleDateString()}
                </span>
              </div>
              <div className="prose max-w-none">
                {stripHtmlTagsAndSEP(blogDetail.content)}
              </div>

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

          {/* Like and Comments Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Stats Section */}
            <div className="flex items-center gap-8 pb-6 mb-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <FaHeart className="text-red-500" size={20} />
                <span className="text-gray-700">
                  <span className="font-semibold">{localLikesCount}</span> likes
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegComment className="text-gray-500" size={20} />
                <span className="text-gray-700">
                  <span className="font-semibold">{localCommentsCount}</span>{" "}
                  comments
                </span>
              </div>
            </div>

            {/* Like Button */}
            <button
              onClick={(e) => handleLikeToggle(e)}
              disabled={likePostLoading}
              className={`flex items-center gap-2 transition-colors mb-6 ${
                hasUserLiked()
                  ? "text-red-500 hover:text-gray-600"
                  : "text-gray-600 hover:text-red-500"
              }`}
            >
              {hasUserLiked() ? (
                <>
                  <FaHeart size={24} />
                  <span>Unlike this post</span>
                </>
              ) : (
                <>
                  <FaRegHeart size={24} />
                  <span>Like this post</span>
                </>
              )}
            </button>

            {/* Comments Section Title with Dropdown */}
            <div
              onClick={toggleComments}
              className="flex items-center gap-2 cursor-pointer mb-6 select-none"
            >
              <h2 className="text-xl font-bold">
                Comments ({localCommentsCount})
              </h2>
              <span
                className={`transition-transform duration-200 ${
                  showComments ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>

            {/* Comment Form - Always visible */}
            <form onSubmit={handleSubmitComment} className="mb-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <FaRegUser className="text-gray-500" />
                </div>
                <div className="flex-grow">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder={
                      userInfo
                        ? "Add your comment..."
                        : "Please login to comment"
                    }
                    disabled={!userInfo || createCommentLoading}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
                    rows="3"
                  />
                  <button
                    type="submit"
                    disabled={!userInfo || createCommentLoading}
                    className={`mt-2 px-4 py-2 bg-primary text-white rounded-lg transition-colors ${
                      !userInfo || createCommentLoading
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-opacity-90"
                    }`}
                  >
                    {createCommentLoading ? "Posting..." : "Post Comment"}
                  </button>
                </div>
              </div>
            </form>

            {/* Comments List - Toggleable */}
            {showComments && (
              <div className="space-y-6">
                {commentsLoading ? (
                  <p className="text-center text-gray-500">
                    Loading comments...
                  </p>
                ) : commentsError ? (
                  <p className="text-center text-red-500">
                    Error loading comments: {commentsError}
                  </p>
                ) : comments?.length === 0 ? (
                  <p className="text-gray-500 text-center">
                    No comments yet. Be the first to comment!
                  </p>
                ) : (
                  comments?.map((comment) => (
                    <div key={comment.id} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <FaRegUser className="text-gray-500" />
                      </div>
                      <div className="flex-grow">
                        <div className="bg-gray-50 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">
                              {comment.user_name}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-500">
                                {new Date(
                                  comment.created_at
                                ).toLocaleDateString()}
                              </span>
                              {userInfo &&
                                comment.user_id === userInfo.user_id && (
                                  <Dropdown
                                    menu={{
                                      items: [
                                        {
                                          key: "1",
                                          label: "Edit",
                                          onClick: () =>
                                            handleEditComment(
                                              comment.id,
                                              comment.content
                                            ),
                                        },
                                        {
                                          key: "2",
                                          label: "Delete",
                                          danger: true,
                                          onClick: () => {
                                            Modal.confirm({
                                              title: "Delete Comment",
                                              content:
                                                "Are you sure you want to delete this comment?",
                                              okText: "Yes",
                                              okType: "danger",
                                              cancelText: "No",
                                              onOk: () =>
                                                handleDeleteComment(comment.id),
                                            });
                                          },
                                        },
                                      ],
                                    }}
                                    trigger={["click"]}
                                    placement="bottomRight"
                                  >
                                    <button className="text-gray-500 hover:text-gray-700">
                                      <FaEllipsisV size={16} />
                                    </button>
                                  </Dropdown>
                                )}
                            </div>
                          </div>
                          {editingCommentId === comment.id ? (
                            <div className="mt-2">
                              <textarea
                                value={editedCommentContent}
                                onChange={(e) =>
                                  setEditedCommentContent(e.target.value)
                                }
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
                                rows="3"
                              />
                              <div className="flex justify-end gap-2 mt-2">
                                <button
                                  onClick={() => setEditingCommentId(null)}
                                  className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
                                >
                                  Cancel
                                </button>
                                <button
                                  onClick={() =>
                                    handleUpdateComment(comment.id)
                                  }
                                  className="px-3 py-1 text-sm bg-primary text-white rounded hover:bg-opacity-90"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          ) : (
                            <p className="text-gray-700">{comment.content}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        {/* Related Articles */}
        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold mb-6">Related Articles</h2>
          <div className="space-y-6">
            {getRelatedArticles().length > 0 ? (
              getRelatedArticles().map((blog) => (
                <BlogItem
                  key={blog.id}
                  blogID={blog.id}
                  title={blog.title}
                  authorName={blog.user_name}
                  date={new Date(blog.created_at).toLocaleDateString()}
                  description={
                    stripHtmlTagsAndSEP(blog.content).substring(0, 150) + "..."
                  }
                  thumbnail={getBlogImageUrl(blog.id)}
                />
              ))
            ) : (
              <p className="text-gray-500">No related articles found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
