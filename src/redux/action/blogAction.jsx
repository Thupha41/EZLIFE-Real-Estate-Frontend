import axios from "../../setup/axios";

// Action Types
export const CREATE_BLOG_REQUEST = "CREATE_BLOG_REQUEST";
export const CREATE_BLOG_SUCCESS = "CREATE_BLOG_SUCCESS";
export const CREATE_BLOG_FAILURE = "CREATE_BLOG_FAILURE";

export const GET_BLOGS_REQUEST = "GET_BLOGS_REQUEST";
export const GET_BLOGS_SUCCESS = "GET_BLOGS_SUCCESS";
export const GET_BLOGS_FAILURE = "GET_BLOGS_FAILURE";

export const UPLOAD_BLOG_IMAGE_REQUEST = "UPLOAD_BLOG_IMAGE_REQUEST";
export const UPLOAD_BLOG_IMAGE_SUCCESS = "UPLOAD_BLOG_IMAGE_SUCCESS";
export const UPLOAD_BLOG_IMAGE_FAILURE = "UPLOAD_BLOG_IMAGE_FAILURE";

export const getBlogPost = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BLOGS_REQUEST });

    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_SERVICE_URL}/blogs/posts/`
    );
    dispatch({
      type: GET_BLOGS_SUCCESS,
      payload: response.data,
    });

    return { success: true, data: response.data };
  } catch (error) {
    dispatch({
      type: GET_BLOGS_FAILURE,
      payload: error.response?.data?.message || "Failed to fetch blog posts",
    });

    return {
      success: false,
      error: error.response?.data?.message || "Failed to fetch blog posts",
    };
  }
};

// Action Creators
export const createBlogPost = (blogData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_BLOG_REQUEST });

    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_SERVICE_URL}/blogs/posts/create-post/`,
      blogData
    );

    console.log("Full API Response:", response);
    console.log("Response data:", response.DT);

    dispatch({
      type: CREATE_BLOG_SUCCESS,
      payload: response.DT,
    });

    return {
      success: true,
      data: response.DT,
    };
  } catch (error) {
    console.error("Error in createBlogPost:", error);
    dispatch({
      type: CREATE_BLOG_FAILURE,
      payload: error.message,
    });

    return {
      success: false,
      error: error.message,
    };
  }
};

export const getBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BLOGS_REQUEST });

    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_SERVICE_URL}/blogs/posts/`
    );

    // Add this check to ensure we're getting the correct data
    if (response) {
      dispatch({
        type: GET_BLOGS_SUCCESS,
        payload: response,
      });
    } else {
      throw new Error("Invalid response format");
    }

    return { success: true, data: response };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    dispatch({
      type: GET_BLOGS_FAILURE,
      payload: error.message || "Failed to fetch blog posts",
    });

    return {
      success: false,
      error: error.message || "Failed to fetch blog posts",
    };
  }
};

export const uploadBlogImage = (postId, imageData) => async (dispatch) => {
  try {
    dispatch({ type: UPLOAD_BLOG_IMAGE_REQUEST });

    const formData = new FormData();
    formData.append("post", parseInt(postId));
    formData.append("file", imageData.file);
    formData.append("label", imageData.label || "");

    const response = await axios.post(
      `${
        import.meta.env.VITE_BACKEND_SERVICE_URL
      }/blogs/posts/${postId}/images/upload/`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    dispatch({
      type: UPLOAD_BLOG_IMAGE_SUCCESS,
      payload: response.data,
    });

    return { success: true, data: response.data };
  } catch (error) {
    dispatch({
      type: UPLOAD_BLOG_IMAGE_FAILURE,
      payload: error.response?.data?.message || "Failed to upload image",
    });

    return {
      success: false,
      error: error.response?.data?.message || "Failed to upload image",
    };
  }
};
