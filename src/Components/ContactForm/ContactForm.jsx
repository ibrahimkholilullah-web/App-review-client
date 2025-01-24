import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#FFF8F5] py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-center text-xl md:text-3xl font-bold text-gray-800 mb-8">
          Let us handle your <br /> project, professionally.
        </h2>
        <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="col-span-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          {/* Last Name */}
          <input
            type="text"
            placeholder="Last Name"
            className="col-span-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          {/* Email Address */}
          <input
            type="email"
            placeholder="Email Address"
            className="col-span-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          {/* Phone Number */}
          <input
            type="text"
            placeholder="Phone Number"
            className="col-span-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          {/* Your Message */}
          <textarea
            placeholder="Your Message"
            className="col-span-1 md:col-span-2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 h-32 resize-none"
          />
          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-[#F63E7B] text-white rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
