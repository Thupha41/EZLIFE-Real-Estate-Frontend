import axios from "axios";
export const SUBSCRIBE_NEWSLETTER_REQUEST = "SUBSCRIBE_NEWSLETTER_REQUEST";
export const SUBSCRIBE_NEWSLETTER_SUCCESS = "SUBSCRIBE_NEWSLETTER_SUCCESS";
export const SUBSCRIBE_NEWSLETTER_FAILURE = "SUBSCRIBE_NEWSLETTER_FAILURE";

export const subscribeNewsletter = (email) => async (dispatch) => {
  try {
    dispatch({ type: SUBSCRIBE_NEWSLETTER_REQUEST });

    const response = await axios.post(
      `${
        import.meta.env.VITE_BACKEND_SERVICE_URL_SUBSCRIPTION
      }/subscribers?sub_email=${email}`,
      ""
    );

    if (response.status === 200) {
      dispatch({
        type: SUBSCRIBE_NEWSLETTER_SUCCESS,
        payload: "Successfully subscribed to newsletter",
      });
      return {
        success: true,
        message: "Successfully subscribed to newsletter",
      };
    } else {
      dispatch({
        type: SUBSCRIBE_NEWSLETTER_FAILURE,
        payload: response.data.detail,
      });
      return {
        success: false,
        message: response.data.detail,
      };
    }
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    dispatch({
      type: SUBSCRIBE_NEWSLETTER_FAILURE,
      payload: error.response?.data?.detail || "Subscription failed",
    });
    return {
      success: false,
      message: error.response?.data?.detail || "Subscription failed",
    };
  }
};
