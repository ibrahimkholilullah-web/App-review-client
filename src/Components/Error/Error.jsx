import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF8F5] text-center">
        <div className="p-8 bg-white rounded-2xl hover:shadow-xl hover:shadow-[#F6407D]">
          <h1 className="text-6xl font-bold text-red-500">404</h1>
          <p className="mt-4 text-lg text-gray-600">Oops! The page you're looking for doesn't exist.</p>
          <p className="text-sm text-gray-500">You might have mistyped the URL or the page has been moved.</p>
          <button
            onClick={handleGoHome}
            className="mt-6 px-6 py-2 text-white bg-[#F6407D] hover:bg-[#F6407D] rounded-lg transition duration-300"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
};

export default Error;