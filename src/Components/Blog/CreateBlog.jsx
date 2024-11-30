import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBlogPost, uploadBlogImage } from "../../redux/action/blogAction";
import { notification } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { doGetAccount } from "../../redux/action/accountAction";

const CreateBlog = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.account.userInfo);
  const { createLoading, createError } = useSelector((state) => state.blog);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [labels, setLabels] = useState("");
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (!user) {
      dispatch(doGetAccount());
    }
  }, [dispatch, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!user) {
    //   notification.error({
    //     message: "Error",
    //     description: "Please log in to create a blog post",
    //   });
    //   return;
    // }

    if (!title || !content || !category) {
      notification.warning({
        message: "Warning",
        description: "Please fill in all required fields",
      });
      return;
    }

    try {
      // Create blog post first
      const blogData = {
        title,
        content,
        category,
        user_email: user.email,
        user_name: `${user.first_name} ${user.last_name}`.trim(),
        user_id: user.user_id,
      };

      const result = await dispatch(createBlogPost(blogData));

      if (result.success && result.data && result.data.id) {
        // Upload images if there are any
        if (files.length > 0) {
          const postId = result.data.id;
          console.log("Post ID:", postId);
          // Upload images sequentially
          for (const file of files) {
            const imageData = {
              file: file,
              label: labels || file.name,
            };

            console.log("Uploading image:", imageData); // Debug log

            const uploadResult = await dispatch(
              uploadBlogImage(postId, imageData)
            );

            if (!uploadResult.success) {
              notification.error({
                message: "Error",
                description: `Failed to upload image: ${file.name}`,
              });
            }
          }
        }

        // Success notification and form reset
        notification.success({
          message: "Success",
          description: "Blog post created successfully!",
        });

        // Reset form
        setTitle("");
        setContent("");
        setCategory("");
        setLabels("");
        setFiles([]);
      }
    } catch (error) {
      notification.error({
        message: "Error",
        description: error.message || "Failed to create blog post",
      });
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prevFiles) => [
      ...prevFiles,
      ...acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      ),
    ]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
    },
    maxSize: 10485760, // 10MB
  });

  const removeFile = (fileToRemove) => {
    setFiles(files.filter((file) => file !== fileToRemove));
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ color: [] }, { background: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Create New Blog Post
      </h2>
      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Title Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Enter an engaging title for your blog post"
          />
        </div>

        {/* Category Select */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select a category</option>
            <option value="feng-shui">Feng Shui</option>
            <option value="real-estate">Real Estate</option>
            <option value="knowledge">Knowledge</option>
            <option value="contract">Contract Templates</option>
            <option value="summary">Miscellaneous</option>
          </select>
        </div>

        {/* Rich Text Editor */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Content
          </label>
          <div className="border rounded-lg">
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
              className="h-64 mb-12"
            />
          </div>
        </div>

        {/* Labels Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Labels
          </label>
          <input
            type="text"
            value={labels}
            onChange={(e) => setLabels(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Enter labels separated by commas (e.g., property, investment, tips)"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Images
          </label>
          <div
            {...getRootProps()}
            className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg
              ${
                isDragActive ? "border-primary bg-primary/5" : "border-gray-300"
              }
              hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer`}
          >
            <input {...getInputProps()} />
            <div className="space-y-2 text-center">
              <FiUploadCloud className="mx-auto h-12 w-12 text-gray-400" />
              <div className="text-sm text-gray-600">
                <span className="font-medium text-primary">
                  Click to upload
                </span>{" "}
                or drag and drop
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>

          {/* Preview Images */}
          {files.length > 0 && (
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {files.map((file) => (
                <div key={file.name} className="relative group">
                  <img
                    src={file.preview}
                    alt={file.name}
                    className="h-24 w-full object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => removeFile(file)}
                    className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <RiDeleteBin6Line className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            disabled={createLoading}
            className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            Save as Draft
          </button>
          <button
            type="submit"
            disabled={createLoading}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {createLoading ? "Publishing..." : "Publish Post"}
          </button>
        </div>

        {createError && (
          <p className="text-red-500 text-sm mt-2">{createError}</p>
        )}
      </form>
    </div>
  );
};

export default CreateBlog;
