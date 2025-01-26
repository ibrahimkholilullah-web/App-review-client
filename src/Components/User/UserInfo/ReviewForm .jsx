import React from "react";
import { Link } from "react-router-dom";

const ReviewForm = () => {
  return (
    <div className="min-h-screen  p-6">
         <div className='flex items-center justify-between font-bold'>
                <h1>Review / <Link to='/' className='text-[#F73E7B]'>Home</Link></h1>
                <h1>Pro Rasel</h1>
            </div>
     
      <div className="bg-blue-50 min-h-screen p-4 md:p-10">
      <div className="  rounded-lg  max-w-md ">
        <form>
          {/* Name Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border rounded-none border-gray-300  p-3 focus:outline-none focus:ring-2 focus:ring-[#F73E7B]"
            />
          </div>
          {/* Company Name and Designation Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Company's name, Designation"
              className="w-full border border-gray-300 rounded-none p-3 focus:outline-none focus:ring-2 focus:ring-[#F73E7B]"
            />
          </div>
          {/* Description Input */}
          <div className="mb-6">
            <textarea
              placeholder="Description"
              rows="4"
              className="w-full border border-gray-300 rounded-none p-3 focus:outline-none focus:ring-2 focus:ring-[#F73E7B]"
            ></textarea>
          </div>
          {/* Submit Button */}
          <div >
            <button
              type="submit"
              className="bg-[#F73E7B] rounded-none text-white px-6 py-2  hover:bg-pink-600 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default ReviewForm;
