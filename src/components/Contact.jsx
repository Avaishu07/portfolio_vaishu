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
      className="max-w-screen-xl container mx-auto px-6 py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white"
    >
      <h1 className="text-5xl font-bold text-center mb-8">Get in Touch</h1>
      <p className="text-center text-lg mb-12">
        Have questions or want to work together? Fill out the form below, and I'll get back to you promptly.
      </p>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white text-gray-800 shadow-2xl rounded-xl w-full max-w-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-center mb-6">Contact Form</h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              {...register("name", { required: "Full name is required" })}
              id="name"
              type="text"
              placeholder="Your full name"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
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
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              id="message"
              rows="5"
              placeholder="Your message"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-400 transition duration-300"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
  
}

export default Contact;
