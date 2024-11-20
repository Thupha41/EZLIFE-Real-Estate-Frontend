import {
  SUBSCRIBE_NEWSLETTER_REQUEST,
  SUBSCRIBE_NEWSLETTER_SUCCESS,
  SUBSCRIBE_NEWSLETTER_FAILURE,
} from "../action/newsletterAction";

const initialState = {
  loading: false,
  error: null,
  success: false,
};

const newsletterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBSCRIBE_NEWSLETTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
      };
    case SUBSCRIBE_NEWSLETTER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case SUBSCRIBE_NEWSLETTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};

export default newsletterReducer;
