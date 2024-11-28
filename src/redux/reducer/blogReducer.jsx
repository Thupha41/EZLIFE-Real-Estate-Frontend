import {
  CREATE_BLOG_REQUEST,
  CREATE_BLOG_SUCCESS,
  CREATE_BLOG_FAILURE,
  GET_BLOGS_REQUEST,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAILURE,
  UPLOAD_BLOG_IMAGE_REQUEST,
  UPLOAD_BLOG_IMAGE_SUCCESS,
  UPLOAD_BLOG_IMAGE_FAILURE,
  GET_BLOG_IMAGES_REQUEST,
  GET_BLOG_IMAGES_SUCCESS,
  GET_BLOG_IMAGES_FAILURE,
} from "../action/blogAction";

const initialState = {
  blogs: [],
  loading: false,
  error: null,
  createLoading: false,
  createError: null,
  uploadImageLoading: false,
  uploadImageError: null,
  blogImages: [],
  blogImagesLoading: false,
  blogImagesError: null,
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    // Create Blog
    case CREATE_BLOG_REQUEST:
      return {
        ...state,
        createLoading: true,
        createError: null,
      };
    case CREATE_BLOG_SUCCESS:
      return {
        ...state,
        createLoading: false,
        blogs: [action.payload, ...state.blogs],
        createError: null,
      };
    case CREATE_BLOG_FAILURE:
      return {
        ...state,
        createLoading: false,
        createError: action.payload,
      };

    // Get Blogs
    case GET_BLOGS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_BLOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs: Array.isArray(action.payload) ? action.payload : [],
        error: null,
      };
    case GET_BLOGS_FAILURE:
      return {
        ...state,
        loading: false,
        blogs: [],
        error: action.payload,
      };

    // Image Upload Cases
    case UPLOAD_BLOG_IMAGE_REQUEST:
      return {
        ...state,
        uploadImageLoading: true,
        uploadImageError: null,
      };
    case UPLOAD_BLOG_IMAGE_SUCCESS:
      return {
        ...state,
        uploadImageLoading: false,
        blogImages: {
          ...state.blogImages,
          [action.payload.post]: [
            ...(state.blogImages[action.payload.post] || []),
            action.payload,
          ],
        },
      };
    case UPLOAD_BLOG_IMAGE_FAILURE:
      return {
        ...state,
        uploadImageLoading: false,
        uploadImageError: action.payload,
      };

    case GET_BLOG_IMAGES_REQUEST:
      return {
        ...state,
        blogImagesLoading: true,
        blogImagesError: null,
      };

    case GET_BLOG_IMAGES_SUCCESS:
      return {
        ...state,
        blogImagesLoading: false,
        blogImages: [
          ...state.blogImages.filter(
            (img) => !action.payload.some((newImg) => newImg.id === img.id)
          ),
          ...action.payload,
        ],
        blogImagesError: null,
      };

    case GET_BLOG_IMAGES_FAILURE:
      return {
        ...state,
        blogImagesLoading: false,
        blogImagesError: action.payload,
      };

    default:
      return state;
  }
};

export default blogReducer;
