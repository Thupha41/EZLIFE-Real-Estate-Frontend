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

export const GET_BLOG_IMAGES_REQUEST = "GET_BLOG_IMAGES_REQUEST";
export const GET_BLOG_IMAGES_SUCCESS = "GET_BLOG_IMAGES_SUCCESS";
export const GET_BLOG_IMAGES_FAILURE = "GET_BLOG_IMAGES_FAILURE";

export const GET_BLOG_DETAIL_REQUEST = "GET_BLOG_DETAIL_REQUEST";
export const GET_BLOG_DETAIL_SUCCESS = "GET_BLOG_DETAIL_SUCCESS";
export const GET_BLOG_DETAIL_FAILURE = "GET_BLOG_DETAIL_FAILURE";

export const CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST";
export const CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS";
export const CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE";

export const GET_COMMENTS_REQUEST = "GET_COMMENTS_REQUEST";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAILURE = "GET_COMMENTS_FAILURE";

export const DELETE_COMMENT_REQUEST = "DELETE_COMMENT_REQUEST";
export const DELETE_COMMENT_SUCCESS = "DELETE_COMMENT_SUCCESS";
export const DELETE_COMMENT_FAILURE = "DELETE_COMMENT_FAILURE";

export const UPDATE_COMMENT_REQUEST = "UPDATE_COMMENT_REQUEST";
export const UPDATE_COMMENT_SUCCESS = "UPDATE_COMMENT_SUCCESS";
export const UPDATE_COMMENT_FAILURE = "UPDATE_COMMENT_FAILURE";

export const DELETE_BLOG_REQUEST = "DELETE_BLOG_REQUEST";
export const DELETE_BLOG_SUCCESS = "DELETE_BLOG_SUCCESS";
export const DELETE_BLOG_FAILURE = "DELETE_BLOG_FAILURE";

export const UPDATE_BLOG_REQUEST = "UPDATE_BLOG_REQUEST";
export const UPDATE_BLOG_SUCCESS = "UPDATE_BLOG_SUCCESS";
export const UPDATE_BLOG_FAILURE = "UPDATE_BLOG_FAILURE";

// Action Creators
export const createBlogPost = (blogData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_BLOG_REQUEST });

    const response = await axios.post(`/blogs/posts/create-post/`, blogData);

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

    const response = await axios.get(`/blogs/posts/`);

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
      `/blogs/posts/${postId}/images/upload/`,
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

export const getBlogImages = (postId) => async (dispatch) => {
  try {
    dispatch({ type: GET_BLOG_IMAGES_REQUEST });

    const response = await axios.get(`/blogs/posts/${postId}/images/`);

    if (response) {
      dispatch({
        type: GET_BLOG_IMAGES_SUCCESS,
        payload: response,
      });
    } else {
      throw new Error("Invalid response format");
    }

    return { success: true, data: response };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    dispatch({
      type: GET_BLOG_IMAGES_FAILURE,
      payload: error.message || "Failed to fetch blog posts",
    });

    return {
      success: false,
      error: error.message || "Failed to fetch blog posts",
    };
  }
};

export const getBlogDetail = (postId) => async (dispatch) => {
  try {
    dispatch({ type: GET_BLOG_DETAIL_REQUEST });

    const response = await axios.get(`/blogs/posts/${postId}/details/`);

    if (response) {
      dispatch({
        type: GET_BLOG_DETAIL_SUCCESS,
        payload: response.DT,
      });
      return { success: true, data: response.DT };
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    console.error("Error fetching blog detail:", error);
    dispatch({
      type: GET_BLOG_DETAIL_FAILURE,
      payload: error.response?.data?.message || "Failed to fetch blog detail",
    });

    return {
      success: false,
      error: error.response?.data?.message || "Failed to fetch blog detail",
    };
  }
};

export const createComment = (postId, commentData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_COMMENT_REQUEST });

    const response = await axios.post(
      `/blogs/posts/${postId}/comments/create/`,
      commentData
    );

    if (response?.data) {
      dispatch({
        type: CREATE_COMMENT_SUCCESS,
        payload: response.data,
      });
      return { success: true, data: response.data };
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    console.error("Error creating comment:", error);
    dispatch({
      type: CREATE_COMMENT_FAILURE,
      payload: error.response?.data?.message || "Failed to create comment",
    });

    return {
      success: false,
      error: error.response?.data?.message || "Failed to create comment",
    };
  }
};

export const getComments = (postId) => async (dispatch) => {
  try {
    dispatch({ type: GET_COMMENTS_REQUEST });

    const response = await axios.get(`/blogs/posts/${postId}/comments/`);

    if (response?.data) {
      dispatch({
        type: GET_COMMENTS_SUCCESS,
        payload: response.data,
      });
      return { success: true, data: response.data };
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    console.error("Error fetching comments:", error);
    dispatch({
      type: GET_COMMENTS_FAILURE,
      payload: error.response?.data?.message || "Failed to fetch comments",
    });

    return {
      success: false,
      error: error.response?.data?.message || "Failed to fetch comments",
    };
  }
};

export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_COMMENT_REQUEST });

    await axios.delete(`/blogs/posts/${postId}/comment/${commentId}/`);

    dispatch({
      type: DELETE_COMMENT_SUCCESS,
      payload: { commentId, postId },
    });
    return { success: true };
  } catch (error) {
    console.error("Error deleting comment:", error);
    dispatch({
      type: DELETE_COMMENT_FAILURE,
      payload: error.response?.data?.message || "Failed to delete comment",
    });

    return {
      success: false,
      error: error.response?.data?.message || "Failed to delete comment",
    };
  }
};

export const updateComment =
  (postId, commentId, commentData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_COMMENT_REQUEST });

      const response = await axios.put(
        `/blogs/posts/${postId}/comment/${commentId}/`,
        commentData
      );

      if (response?.data) {
        dispatch({
          type: UPDATE_COMMENT_SUCCESS,
          payload: response.data,
        });
        return { success: true, data: response.data };
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Error updating comment:", error);
      dispatch({
        type: UPDATE_COMMENT_FAILURE,
        payload: error.response?.data?.message || "Failed to update comment",
      });

      return {
        success: false,
        error: error.response?.data?.message || "Failed to update comment",
      };
    }
  };

export const deleteBlog = (postId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BLOG_REQUEST });

    await axios.delete(`/blogs/posts/${postId}/`);

    dispatch({
      type: DELETE_BLOG_SUCCESS,
      payload: postId,
    });
    return { success: true };
  } catch (error) {
    console.error("Error deleting blog:", error);
    dispatch({
      type: DELETE_BLOG_FAILURE,
      payload: error.response?.data?.message || "Failed to delete blog",
    });

    return {
      success: false,
      error: error.response?.data?.message || "Failed to delete blog",
    };
  }
};

export const updateBlog = (postId, blogData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_BLOG_REQUEST });

    const response = await axios.put(`/blogs/posts/${postId}/`, blogData);
    console.log("Response:", response);
    if (response) {
      dispatch({
        type: UPDATE_BLOG_SUCCESS,
        payload: response,
      });
      return { success: true, data: response };
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    console.error("Error updating blog:", error);
    dispatch({
      type: UPDATE_BLOG_FAILURE,
      payload: error.response?.data?.message || "Failed to update blog post",
    });

    return {
      success: false,
      error: error.response?.data?.message || "Failed to update blog post",
    };
  }
};
