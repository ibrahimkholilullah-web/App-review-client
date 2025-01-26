import React from "react";
import bookingImage from "../../../../assets/icons/Group 1373.png";
import bookingImage2 from "../../../../assets/icons/Group 1374.png";
import { Link } from "react-router-dom";

const ManageServices = () => {
  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between font-bold mb-6">
        <h1 className="text-lg md:text-xl">
          Manage Services /{" "}
          <Link to="/" className="text-[#F73E7B]">
            Home
          </Link>
        </h1>
        <h1 className="text-lg md:text-xl">Pro Rasel</h1>
      </div>

      {/* Service Cards Section */}
      <div className="min-h-screen bg-slate-50 p-6 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white  rounded-lg p-4 flex flex-col">
            <div className="md:flex ">
              {/* Icon Section */}
              <div className="mr-4">
                <div className="p-2 rounded-full">
                  <img
                    src={bookingImage} // Replace with your icon path
                    alt="Anti Age Icon"
                    className="w-12 h-12"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Anti Age Face Treatment
                </h3>
                <p className="text-sm text-gray-500">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>

              {/* Status Section */}
              <div className="ml-auto">
                <span className="text-sm text-pink-600 bg-pink-100 px-2 py-1 rounded-full">
                  Pending
                </span>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="mt-4 bg-white flex justify-end gap-2">
              <button className="text-green-600 bg-green-100 px-4 py-2 rounded-lg hover:bg-green-200 transition">
                Update
              </button>
              <button className="text-pink-600 bg-pink-100 px-4 py-2 rounded-lg hover:bg-pink-200 transition">
                Delete
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className=" bg-white border rounded-lg p-4 flex flex-col">
            <div className="md:flex items-start">
              {/* Icon Section */}
              <div className="mr-4">
                <div className="p-2 rounded-full">
                  <img
                    src={bookingImage2} // Replace with your icon path
                    alt="Skin Care Icon"
                    className="w-12 h-12"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Skin Care Treatment
                </h3>
                <p className="text-sm text-gray-500">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>

              {/* Status Section */}
              <div className="ml-auto">
                <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  Done
                </span>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="mt-4 flex justify-end gap-2">
              <button className="text-green-600 bg-green-100 px-4 py-2 rounded-lg hover:bg-green-200 transition">
                Update
              </button>
              <button className="text-pink-600 bg-pink-100 px-4 py-2 rounded-lg hover:bg-pink-200 transition">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
