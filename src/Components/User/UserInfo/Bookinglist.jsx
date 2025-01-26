import React from "react";
import bookingImage from "../../../assets/icons/Group 1373.png";
import bookingImage2 from "../../../assets/icons/Group 1374.png";
import { Link } from "react-router-dom";

const Bookinglist = () => {
  return (
    <div className="min-h-screen  p-6">
      {/* Header */}
      <div className="flex bg-white items-center justify-between font-bold mb-6">
        <h1>
          Booking List /{" "}
          <Link to="/" className="text-pink-500 hover:underline">
            Home
          </Link>
        </h1>
        <h1>Pro Rasel</h1>
      </div>

      {/* Booking Cards */}
      <div className="bg-gray-50  min-h-screen p-4 md:p-10">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white  rounded-lg p-6 md:flex items-start">
            <div className="mr-4">
              <div className="p-2  rounded-full">
                <img
                  src={bookingImage}
                  alt="Anti Age Icon"
                  className="w-12 h-12"
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                Anti Age Face Treatment
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            <div className="ml-auto">
              <span className="text-sm text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
                Pending
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg p-6 md:flex items-start">
            <div className="mr-4">
              <div className="p-2 rounded-full">
                <img
                  src={bookingImage2}
                  alt="Skin Care Icon"
                  className="w-12 h-12"
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                Skin Care Treatment
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            <div className="ml-auto">
              <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full">
                Done
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookinglist;
