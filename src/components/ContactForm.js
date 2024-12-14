import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder for form submission logic (connect to backend/API)
    console.log("Form Data Submitted:", formData);
    setIsSubmitted(true);

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Reset submission confirmation after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-6">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-8 text-white">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-yellow-500">
            Contact Me
          </h2>
          <p className="text-gray-400 text-lg">
            I’d love to hear from you. Let’s create something amazing together!
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm mb-2 font-semibold" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm mb-2 font-semibold" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              className="block text-sm mb-2 font-semibold"
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here"
              rows="5"
              required
              className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Submission Confirmation */}
        {isSubmitted && (
          <p className="mt-4 text-center text-green-400 font-semibold">
            Your message has been sent successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
