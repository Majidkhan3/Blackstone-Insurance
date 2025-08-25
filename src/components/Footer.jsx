import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B0F0E] text-gray-300 pt-16 pb-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Contact Section */}
          <div className="flex flex-col space-y-2">
            <h3
              className="text-white font-semibold mb-2"
              style={{ color: "#00A1FC"                                                             }}
            >
              CONTACT US
            </h3>
            <p>
              Phone:{" "}
              <a
                href="tel:+1 917-487-9110"
                className="hover:text-blue-400 transition"
              >
                +1 917-487-9110
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                                                                                                                    href="mailto:Info@                   es.com
"
                className="hover:text-blue-400 transition"
              >
                Info@blackstonemultiservices.com
              </a>
            </p>
            Business hours form 10am - 6pm Mon-Fri                                                                                                                                                     
          </div>

          {/* Insurance Pages Section */}
          <div className="flex flex-col space-y-2">
            <h3
              className="text-white font-semibold mb-2"
              style={{ color: "#00A1FC" }}
            >
              INSURANCE PAGES
            </h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="/business-insurance"
                  className="hover:text-blue-400 transition"
                >
                  Business Insurance
                </a>
              </li>
              <li>
                <a
                  href="/car-insurance"
                  className="hover:text-blue-400 transition"
                >
                  Car Rental Insurance
                </a>
              </li>
              <li>
                <a
                  href="/home-insurance"
                  className="hover:text-blue-400 transition"
                >
                  Home Insurance
                </a>
              </li>
              <li>
                <a
                  href="/rental-insurance"
                  className="hover:text-blue-400 transition"
                >
                  Rental Insurance
                </a>
              </li>
            </ul>
          </div>

          {/* Quote Section */}
          {/* Quote Section */}
          <div className="flex flex-col space-y-1">
            <h3
              className="text-white font-semibold mb-2"
              style={{ color: "#00A1FC" }}
            >
              GET A QUOTE
            </h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="/Businessquote"
                  className="hover:text-blue-400 transition"
                >
                  Get Business Quote
                </a>
              </li>
              <li>
                <a href="/Carquote" className="hover:text-blue-400 transition">
                  Get Car Rental Quote
                </a>
              </li>
              <li>
                <a href="/Homequote" className="hover:text-blue-400 transition">
                  Get Home Quote
                </a>
              </li>
              <li>
                <a
                  href="/Rentalquote"
                  className="hover:text-blue-400 transition"
                >
                  Get Rental Quote
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Socials & Logo */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 mb-6">
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 rounded-full border border-gray-500 hover:border-blue-400 hover:text-blue-400 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-500 hover:border-blue-400 hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-500 hover:border-blue-400 hover:text-blue-400 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-500 hover:border-blue-400 hover:text-blue-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
          <div>
            <img
              src="/logo.png"
              alt="Blackstone Logo"
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© Copyright BlackStone Insurance Services.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
