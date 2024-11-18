import { useState } from "react";
import { IoIosSend } from "react-icons/io";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email submitted:", email);
  };

  return (
    <div className="bg-secondary py-12 px-4 sm:px-6 lg:px-8">
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
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-3 bg-tertiary text-white rounded-lg hover:bg-opacity-90 transition-colors"
          >
            <span className="mr-2">Subscribe</span>
            <IoIosSend className="text-xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
