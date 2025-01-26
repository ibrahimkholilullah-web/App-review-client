import React from "react";
import butiparlour from "../../../../assets/images/beautyparlors-surat.jpg"
const ContactUs = () => {
  return (
    <div className="bg-[#FFF8F5] min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-[#F73E7B] mb-6 text-center">CONTACT US</h1>
        <p className="text-gray-800 text-center mb-8">
          Set erat pellentesque dictum lorem id volutpat lacus laoreet accumsan.
        </p>

        <div className="md:flex  items-center  gap-10">
          {/* Illustration */}
          <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <img
              src={butiparlour}
              alt="Contact Illustration"
              className="w-3/4 border-2 border-[#F73E7B] rounded-xl p-1 lg:w-full"
            />
          </div>

          {/* Form */}
          <div className="lg:w-1/2 w-full">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F73E7B]"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F73E7B]"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F73E7B]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#F73E7B] text-white py-2 px-4 rounded-lg hover:bg-[#F73E7B] focus:outline-none focus:ring-2 focus:ring-[#F73E7B]"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
