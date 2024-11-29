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
  GET_BLOG_DETAIL_REQUEST,
  GET_BLOG_DETAIL_SUCCESS,
  GET_BLOG_DETAIL_FAILURE,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
  UPDATE_COMMENT_REQUEST,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
  DELETE_BLOG_REQUEST,
  DELETE_BLOG_SUCCESS,
  DELETE_BLOG_FAILURE,
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
  blogDetail: null,
  blogDetailLoading: false,
  blogDetailError: null,
  comments: [],
  commentLoading: false,
  commentError: null,
  commentsLoading: false,
  commentsError: null,
  deleteCommentLoading: false,
  deleteCommentError: null,
  updateCommentLoading: false,
  updateCommentError: null,
  deleteBlogLoading: false,
  deleteBlogError: null,
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

    // Blog Detail Cases
    case GET_BLOG_DETAIL_REQUEST:
      return {
        ...state,
        blogDetailLoading: true,
        blogDetailError: null,
      };

    case GET_BLOG_DETAIL_SUCCESS:
      return {
        ...state,
        blogDetailLoading: false,
        blogDetail: action.payload,
        blogDetailError: null,
      };

    case GET_BLOG_DETAIL_FAILURE:
      return {
        ...state,
        blogDetailLoading: false,
        blogDetail: null,
        blogDetailError: action.payload,
      };

    // Comment Cases
    case CREATE_COMMENT_REQUEST:
      return {
        ...state,
        commentLoading: true,
        commentError: null,
      };

    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        commentLoading: false,
        comments: [...state.comments, action.payload],
        blogDetail:
          state.blogDetail?.id === action.payload.post
            ? {
                ...state.blogDetail,
                comments_count: (state.blogDetail.comments_count || 0) + 1,
              }
            : state.blogDetail,
        commentError: null,
      };

    case CREATE_COMMENT_FAILURE:
      return {
        ...state,
        commentLoading: false,
        commentError: action.payload,
      };

    // Get Comments Cases
    case GET_COMMENTS_REQUEST:
      return {
        ...state,
        commentsLoading: true,
        commentsError: null,
      };

    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        commentsLoading: false,
        comments: action.payload,
        commentsError: null,
      };

    case GET_COMMENTS_FAILURE:
      return {
        ...state,
        commentsLoading: false,
        comments: [],
        commentsError: action.payload,
      };

    case DELETE_COMMENT_REQUEST:
      return {
        ...state,
        deleteCommentLoading: true,
        deleteCommentError: null,
      };

    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        deleteCommentLoading: false,
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload.commentId
        ),
        blogDetail:
          state.blogDetail?.id === action.payload.postId
            ? {
                ...state.blogDetail,
                comments_count: Math.max(
                  (state.blogDetail.comments_count || 0) - 1,
                  0
                ),
              }
            : state.blogDetail,
        deleteCommentError: null,
      };

    case DELETE_COMMENT_FAILURE:
      return {
        ...state,
        deleteCommentLoading: false,
        deleteCommentError: action.payload,
      };

    case UPDATE_COMMENT_REQUEST:
      return {
        ...state,
        updateCommentLoading: true,
        updateCommentError: null,
      };

    case UPDATE_COMMENT_SUCCESS:
      return {
        ...state,
        updateCommentLoading: false,
        comments: state.comments.map((comment) =>
          comment.id === action.payload.id ? action.payload : comment
        ),
        updateCommentError: null,
      };

    case UPDATE_COMMENT_FAILURE:
      return {
        ...state,
        updateCommentLoading: false,
        updateCommentError: action.payload,
      };

    case DELETE_BLOG_REQUEST:
      return {
        ...state,
        deleteBlogLoading: true,
        deleteBlogError: null,
      };

    case DELETE_BLOG_SUCCESS:
      return {
        ...state,
        deleteBlogLoading: false,
        blogs: state.blogs.filter((blog) => blog.id !== action.payload),
        deleteBlogError: null,
      };

    case DELETE_BLOG_FAILURE:
      return {
        ...state,
        deleteBlogLoading: false,
        deleteBlogError: action.payload,
      };

    default:
      return state;
  }
};

export default blogReducer;
