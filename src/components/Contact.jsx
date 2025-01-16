import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      await axios.post("https://getform.io/f/raeqjora", userInfo);
      toast.success("Your message has been sent successfully!");
      reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send the message. Please try again later.");
    }
  };

  return (
    <div
      name="Contact"
      className="relative w-full py-20 px-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white"
    >
      {/* Wave Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-30"></div>

      <div className="relative max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-6">
            Let’s <span className="text-yellow-300">Talk</span>
          </h1>
          <p className="text-lg mb-10">
            Reach out for collaborations, opportunities, or just to say hi!
            I'll respond as soon as possible.
          </p>
          <div className="space-y-6">
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <span className="w-12 h-12 flex items-center justify-center bg-pink-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 2H8a4 4 0 00-4 4v12a4 4 0 004 4h8a4 4 0 004-4V6a4 4 0 00-4-4z"
                  />
                </svg>
              </span>
              <p className="text-lg font-medium">+91 88069 66873</p>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <span className="w-12 h-12 flex items-center justify-center bg-pink-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 5v2a4 4 0 01-8 0V5m12 11a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <p className="text-lg font-medium">anargattevaishnavi72@gmail.com</p>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <span className="w-12 h-12 flex items-center justify-center bg-pink-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6M9 16h6M5 8h14M5 12h.01M19 12h.01"
                  />
                </svg>
              </span>
              <p className="text-lg font-medium">Kharadi Pune, Maharashtra</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white shadow-lg rounded-3xl p-8 text-gray-800">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Contact Form
          </h2>

          {/* Name */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Full Name
            </label>
            <input
              {...register("name", { required: "Full name is required" })}
              id="name"
              type="text"
              placeholder="Your full name"
              className={`w-full p-4 rounded-lg border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-indigo-500`}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name.message}</span>
            )}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              id="email"
              type="email"
              placeholder="Your email address"
              className={`w-full p-4 rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-indigo-500`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Message */}
          <div className="mb-8">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              id="message"
              rows="5"
              placeholder="Your message"
              className={`w-full p-4 rounded-lg border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-indigo-500`}
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gradient-to-r from--500 to-purple-500 text-white font-bold rounded-lg hover:scale-105 transition duration-300"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
