import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { subscribeNewsletter } from "../../redux/action/newsletterAction";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.newsletter);

  // Notification functions
  const [api, contextHolder] = notification.useNotification();

  const showNotification = (type, message) => {
    api[type]({
      message: type === "success" ? "Success" : "Error",
      description: message,
      placement: "topRight",
      duration: 3,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Dispatch returns a promise that resolves to the action
      const action = await dispatch(subscribeNewsletter(email));

      // Check the type of action to determine success/failure
      if (action?.type === "SUBSCRIBE_NEWSLETTER_SUCCESS") {
        showNotification("success", action.payload);
        setEmail("");
      } else if (action?.payload) {
        // Show error message from the action payload
        showNotification("error", action.payload);
      }
    } catch (error) {
      console.log(error);
      showNotification("error", "Failed to subscribe. Please try again.");
    }
  };

  return (
    <div className="bg-secondary py-12 px-4 sm:px-6 lg:px-8">
      {contextHolder}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 mb-8 text-base sm:text-lg">
          Stay updated with our latest news and properties
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 max-w-md px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-tertiary"
            disabled={loading}
          />
          <button
            type="submit"
            className={`inline-flex items-center justify-center px-6 py-3 bg-tertiary text-white rounded-lg hover:bg-opacity-90 transition-colors ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            <span className="mr-2">
              {loading ? "Subscribing..." : "Subscribe"}
            </span>
            <IoIosSend className="text-xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
