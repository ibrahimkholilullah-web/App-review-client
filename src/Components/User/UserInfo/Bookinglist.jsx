import React from "react";
import bookingImage from "../../../assets/icons/Group 1373.png"
import bookingImage2 from "../../../assets/icons/Group 1374.png"
const Bookinglist = () => {
  return (
    <div className="min-h-screen  p-6">
         <div className='flex items-center justify-between font-bold'>
                <h1>Booking List</h1>
                <h1>Pro Rasel</h1>
            </div>
     
      <div className="min-h-screen bg-slate-50 p-10">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
        {/* Card 1 */}
        <div className="bg-slate-50 shadow-lg rounded-lg p-4 flex items-start">
          <div className="mr-4">
            <div className=" p-2 rounded-full">
              <img
                src={bookingImage} // Replace with your icon path
                alt="Anti Age Icon"
                className=""
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Anti Age Face Treatment
            </h3>
            <p className="text-sm text-gray-500">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className="ml-auto">
            <span className="text-sm text-pink-600 bg-pink-100 px-2 py-1 rounded-full">
              Pending
            </span>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-4 flex items-start">
          <div className="mr-4">
            <div className=" p-2 rounded-full">
              <img
                src={bookingImage2} // Replace with your icon path
                alt="Skin Care Icon"
            
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Skin Care Treatment
            </h3>
            <p className="text-sm text-gray-500">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className="ml-auto">
            <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
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
