import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#11001f] text-gray-300 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-white">YourBrand</h2>
            <p className="mt-2 text-gray-400">
              Empowering users with seamless solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#" className="hover:text-[#2a004a] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2a004a] transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2a004a] transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2a004a] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex justify-center md:justify-start mt-3 space-x-4">
              <a href="#" className="hover:text-[#2a004a] transition">
                Facebook
              </a>
              <a href="#" className="hover:text-[#2a004a] transition">
                Twitter
              </a>
              <a href="#" className="hover:text-[#2a004a] transition">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center text-gray-500">
          © {new Date().getFullYear()} YourBrand. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
