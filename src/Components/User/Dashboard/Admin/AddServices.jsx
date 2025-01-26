import React, { useState } from "react";
import { Link } from "react-router-dom";
import userAuth from "../../../AuthProvider/userAuth";

export default function AddServiceForm() {
    const {user} = userAuth()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="p-8 ">
        <div className='flex items-center justify-between font-bold'>
                <h1>
                    Add Service / <Link to='/' className='text-[#F73E7B]'>Home</Link>
                </h1>
                <h1>{user?.displayName}</h1>
            </div>
        <div className=" min-h-screen bg-slate-50  items-center md:p-10">
        
        <form
          onSubmit={handleSubmit}
          className=" bg-white p-4 shadow-md w-full"
        >
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Service Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter Designation"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <div className="mt-1 flex items-center">
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <label
                htmlFor="image"
                className="cursor-pointer bg-pink-100 text-pink-500 px-4 py-2 rounded-lg hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                Upload image
              </label>
              {formData.image && (
                <span className="ml-4 text-sm text-gray-500">
                  {formData.image.name}
                </span>
              )}
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#F73E7B] text-white px-6 py-2 rounded-lg shadow hover:bg-[#F73E7B] focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
