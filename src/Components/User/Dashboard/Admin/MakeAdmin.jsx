import React, { useState } from "react";

export default function MakeAdmin() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin Email:", email); // Add form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header Section */}
      <header className="flex justify-between items-center bg-white p-4 shadow-sm">
        <h1 className="text-lg md:text-xl font-semibold">Make Admin</h1>
        <span className="font-medium text-sm md:text-base">Sufi Ahmed</span>
      </header>

      {/* Form Section */}
      <div className="flex flex-1 justify-center items-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl  w-full max-w-md"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm md:text-base font-medium text-gray-700"
            >
              Email
            </label>
            <div className="md:flex  items-center mt-2">
              {/* Email Input */}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="jon@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg shadow-sm focus:ring-pink-500 my-2 focus:border-pink-500 text-sm md:text-base rounded-none"
              />
              {/* Submit Button */}
              <button
                type="submit"
                className="bg-pink-500 text-white px-4 md:px-6 py-2 rounded-r-lg shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm md:text-base"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
