import axios from "axios";
export const SUBSCRIBE_NEWSLETTER_REQUEST = "SUBSCRIBE_NEWSLETTER_REQUEST";
export const SUBSCRIBE_NEWSLETTER_SUCCESS = "SUBSCRIBE_NEWSLETTER_SUCCESS";
export const SUBSCRIBE_NEWSLETTER_FAILURE = "SUBSCRIBE_NEWSLETTER_FAILURE";

export const subscribeNewsletter = (email) => async (dispatch) => {
  try {
    dispatch({ type: SUBSCRIBE_NEWSLETTER_REQUEST });

    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_SERVICE_URL}/subscribe/`,
      {
        sub_email: email,
      }
    );

    if (response.status === 201) {
      return dispatch({
        type: SUBSCRIBE_NEWSLETTER_SUCCESS,
        payload: response.data.message,
      });
    }

    return dispatch({
      type: SUBSCRIBE_NEWSLETTER_FAILURE,
      payload: "Failed to subscribe to newsletter",
    });
  } catch (error) {
    if (error.response?.status === 400) {
      const message =
        error.response?.data?.sub_email?.[0] ||
        "Subscription with this email already exists.";

      return dispatch({
        type: SUBSCRIBE_NEWSLETTER_FAILURE,
        payload: message,
      });
    }

    return dispatch({
      type: SUBSCRIBE_NEWSLETTER_FAILURE,
      payload: "An error occurred while subscribing",
    });
  }
};
