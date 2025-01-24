import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F63E7B] text-white py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Address Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <p>
              HH000 (6th Floor), Road #00, <br />
              New DOHS, Mohakhali, Dhaka, Bangladesh
            </p>
          </div>
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>About</li>
              <li>Project</li>
              <li>Our Team</li>
              <li>Terms & Conditions</li>
              <li>Submit Listing</li>
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>Quick Links</li>
              <li>Rentals</li>
              <li>Sales</li>
              <li>Contact</li>
              <li>Our Blog</li>
            </ul>
          </div>
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <FaFacebookF className="w-6 h-6 cursor-pointer hover:text-gray-200" />
              <FaInstagram className="w-6 h-6 cursor-pointer hover:text-gray-200" />
              <FaLinkedinIn className="w-6 h-6 cursor-pointer hover:text-gray-200" />
              <FaYoutube className="w-6 h-6 cursor-pointer hover:text-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
