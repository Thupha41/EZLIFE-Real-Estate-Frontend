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

    if (response.status === 200 || response.status === 201) {
      dispatch({
        type: SUBSCRIBE_NEWSLETTER_SUCCESS,
        payload: "Successfully subscribed to newsletter",
      });
      return {
        success: true,
        message: "Successfully subscribed to newsletter",
      };
    }

    throw new Error("Failed to subscribe to newsletter");
  } catch (error) {
    console.error("Newsletter subscription error:", error);

    if (
      error.response?.status === 500 &&
      error.response?.data?.detail?.includes("Duplicate entry")
    ) {
      dispatch({
        type: SUBSCRIBE_NEWSLETTER_FAILURE,
        payload: "This email is already subscribed to our newsletter.",
      });
      return {
        success: false,
        message: "This email is already subscribed to our newsletter.",
      };
    }

    if (error.response?.status === 400) {
      const message =
        error.response?.data?.sub_email?.[0] || "Invalid email format.";
      dispatch({
        type: SUBSCRIBE_NEWSLETTER_FAILURE,
        payload: message,
      });
      return { success: false, message };
    }

    dispatch({
      type: SUBSCRIBE_NEWSLETTER_FAILURE,
      payload: "An error occurred while subscribing. Please try again later.",
    });
    return {
      success: false,
      message: "An error occurred while subscribing. Please try again later.",
    };
  }
};
