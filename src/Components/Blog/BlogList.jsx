import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBlogs,
  getBlogImages,
  updateBlog,
  deleteBlog,
} from "../../redux/action/blogAction";
import { Modal, Form, Input, Select, message } from "antd";
const { confirm } = Modal;

const { TextArea } = Input;

const BlogList = () => {
  const dispatch = useDispatch();
  const { blogs, loading, blogImages, updateBlogLoading } = useSelector(
    (state) => state.blog
  );
  const { userInfo } = useSelector((state) => state.account);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  // Fetch images for each blog post
  useEffect(() => {
    if (blogs?.length > 0) {
      blogs.forEach((blog) => {
        dispatch(getBlogImages(blog.id));
      });
    }
  }, [blogs, dispatch]);

  const userBlogs =
    blogs?.filter((blog) => blog.user_id === userInfo?.user_id) || [];

  // Find matching blog image
  const getBlogImage = (blogId) => {
    return blogImages?.find((img) => img.post === blogId);
  };

  const stripHtmlTagsAndSEP = (html) => {
    // First remove HTML tags
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    const text = tmp.textContent || tmp.innerText || "";

    // Then remove [SEP] and trim spaces
    return text.replace(/\[SEP\]/g, "").trim();
  };
  const handleEdit = (blog) => {
    setEditingBlog(blog);
    form.setFieldsValue({
      title: blog.title,
      content: stripHtmlTagsAndSEP(blog.content),
      category: blog.category,
    });
    setIsEditModalVisible(true);
  };

  const handleEditSubmit = async () => {
    try {
      const values = await form.validateFields();
      const updateData = {
        ...values,
        user_id: userInfo.user_id,
        user_email: userInfo.email,
        user_name: userInfo.first_name + " " + userInfo.last_name,
      };

      const result = await dispatch(updateBlog(editingBlog.id, updateData));

      if (result.success) {
        message.success("Blog updated successfully");
        setIsEditModalVisible(false);
        setEditingBlog(null);
        form.resetFields();
      } else {
        message.error("Failed to update blog");
      }
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  const handleCancel = () => {
    setIsEditModalVisible(false);
    setEditingBlog(null);
    form.resetFields();
  };

  const handleDelete = (blog) => {
    confirm({
      title: "Delete Blog Post",
      content: `Are you sure you want to delete "${blog.title}"? This action cannot be undone.`,
      okText: "Yes, Delete",
      okType: "danger",
      cancelText: "No, Cancel",
      async onOk() {
        try {
          const result = await dispatch(deleteBlog(blog.id));
          if (result.success) {
            message.success("Blog post deleted successfully");
            // Refresh the blogs list
            dispatch(getBlogs());
          } else {
            message.error(result.error || "Failed to delete blog post");
          }
        } catch (error) {
          console.error("Delete error:", error);
          message.error("Something went wrong while deleting the blog post");
        }
      },
      onCancel() {
        // User cancelled, do nothing
      },
    });
  };

  if (loading) return <div>Loading...</div>;

  const getCategoryLabel = (category) => {
    const categories = {
      "real-estate": "Real Estate",
      "feng-shui": "Feng Shui",
      knowledge: "Knowledge",
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
            {userBlogs.map((blog) => {
              const blogImage = getBlogImage(blog.id);
              return (
                <tr key={blog.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    {blogImage ? (
                      <img
                        src={blogImage.image_url}
                        alt={blogImage.label}
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
                    <button
                      onClick={() => handleEdit(blog)}
                      className="text-blue-600 hover:text-blue-800 mr-2 text-sm font-medium"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blog)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
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

      <Modal
        title="Edit Blog Post"
        open={isEditModalVisible}
        onOk={handleEditSubmit}
        onCancel={handleCancel}
        confirmLoading={updateBlogLoading}
        width={800}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            title: editingBlog?.title,
            content: editingBlog?.content,
            category: editingBlog?.category,
          }}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="content"
            label="Content"
            rules={[{ required: true, message: "Please input the content!" }]}
          >
            <TextArea rows={6} />
          </Form.Item>

          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: "Please select a category!" }]}
          >
            <Select>
              <Select.Option value="real-estate">Real Estate</Select.Option>
              <Select.Option value="feng-shui">Feng Shui</Select.Option>
              <Select.Option value="knowledge">Knowledge</Select.Option>
              <Select.Option value="contract-templates">
                Contract Templates
              </Select.Option>
              <Select.Option value="miscellaneous">Miscellaneous</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default BlogList;
