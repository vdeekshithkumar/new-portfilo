import { NavLink } from "@remix-run/react";
import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin,FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaYoutube, FaMailBulk } from "react-icons/fa";
const activeClassName = "selected navlink";
const activeStyleCallback = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "mb-2 block font-light text-light-text-color no-underline"
    : "mb-2 block font-light text-light-text-color no-underline hover:text-light-text-colr";

export const Footer = () => {
  return (
    <footer className="bg-dark-background-color code-section">
  <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-12 2xl:px-36">
    <div className="grid grid-cols-1 pt-4 md:grid-cols-3 lg:grid-cols-4 lg:space-x-24">
      <div className="mb-8">
        <a
          href="/"
          className="mb-4 block text-2xl sm:text-3xl font-semibold tracking-wider text-light-text-color font-family-heading"
        >
          Nikhil Studio
        </a>
        <p className="text-left text-sm sm:text-base font-light tracking-wider text-light-text-color">
          Capturing the essence of your special day with elegance and artistry. Explore our wedding, pre-wedding, fashion, and product photography services designed to create timeless memories.
        </p>
        <div className="my-6 flex justify-center md:justify-start space-x-3">
          <a href="https://www.instagram.com/nikhil_studio_?utm_source=qr&igsh=Nnc0bDcxYW94OGVq" className="hover:opacity-75" aria-label="Visit our Instagram">
            <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white">
              <FaInstagram className="text-black" />
            </div>
          </a>
          <a href="https://www.facebook.com/share/18SXz66aJ2/" className="hover:opacity-75" aria-label="Visit our Facebook">
            <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white">
              <FaFacebook className="text-black" />
            </div>
          </a>
          <a href="https://youtube.com/@nikhilstudiomangalore8184?feature=shared" className="hover:opacity-75" aria-label="Visit our Twitter">
            <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white">
              <FaYoutube className="text-black" />
            </div>
          </a>
        </div>

      </div>
      <div className="mb-8">
        <div className="mb-6 border-b-2 border-primary-color pb-2 text-lg sm:text-xl tracking-wide text-light-text-color">
          Helpful Links
        </div>
        <ul className="space-y-2 text-sm sm:text-base">
          <li>
            <NavLink to="/" className={activeStyleCallback}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={activeStyleCallback}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className={activeStyleCallback}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={activeStyleCallback}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={activeStyleCallback}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="mb-8 lg:col-span-2">
        <div className="mb-6 border-b-2 border-primary-color pb-2 text-lg sm:text-xl tracking-wide text-light-text-color">
          Reach Us
        </div>
        <div className="mb-2 flex items-center text-sm sm:text-base font-light tracking-wider text-light-text-color">
          <FaPhone className="mr-2 w-5 sm:w-6 flex-none text-primary-color" />
          <span>+91 9845203348</span>
        </div>
        <div className="mb-2 flex items-center text-sm sm:text-base font-light tracking-wider text-light-text-color">
          <FaEnvelope className="mr-2 w-5 sm:w-6 flex-none text-primary-color" />
          <span className="w-[90%] break-words">nikhilstudio1996@gmail.com</span>
        </div>
        <div className="mb-2 flex items-center text-sm sm:text-base font-light tracking-wider text-light-text-color">
          <FaMapMarkerAlt className="mr-2 w-5 sm:w-6 flex-none text-primary-color" />
          <span>Mangaluru</span>
        </div>
        <div className="mb-2 flex items-center text-sm sm:text-base font-light tracking-wider text-light-text-color">
          <FaClock className="mr-2 w-5 sm:w-6 flex-none text-primary-color" />
          <span>Mon - Fri: 9:00am - 5:00pm</span>
        </div>
      </div>
    </div>
    <p className="border-t-2 border-dark-border-color pt-6 text-center text-xs sm:text-sm text-gray-text-color">
      © 2025 Nikhil Studio, All Rights Reserved
    </p>
  </div>
</footer>
  );
};

export default Footer;
