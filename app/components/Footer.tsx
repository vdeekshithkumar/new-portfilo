import { NavLink } from "@remix-run/react";
import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
const activeClassName = "selected navlink";
const activeStyleCallback = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-primary font-bold" : "text-gray-700 hover:text-primary";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      {/* Desktop Layout */}
      <div className="container mx-auto px-6 lg:px-16 grid gap-10 lg:grid-cols-4 hidden lg:grid">
        {/* About Section */}
        <div className="space-y-4 lg:col-span-1">
          {/* <img src="/path-to-your-logo.png" alt="Logo" className="h-12" /> */}
          <p className="text-lg font-bold text-gray-900">
          Best Wedding Photography <br />
          <p className="text-sm mt-2">
          We specialize in capturing your special moments with creativity and passion.</p>
          </p>
          <div>
      <h5 className="font-bold text-gray-900">Social Links</h5>
      <div className="flex hover:no-underline mt-3 space-x-6">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-gray-700 hover:text-gray-900 text-2xl transition-colors"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-gray-700 hover:text-gray-900 text-2xl"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-gray-700 hover:text-gray-900 text-2xl"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-700 hover:text-gray-900 text-2xl"
        >
          <FaLinkedin />
        </a>
        </div>
</div>

        </div>

        {/* Photography Services */}
        <div className="space-y-4 lg:col-span-1">
          <h5 className="font-bold text-gray-900 mb-4">Photography Services</h5>
          <ul className="space-y-2 text-sm">
            <li>Weddings & Receptions</li>
            <li>Engagement Shoots</li>
            <li>Couple Portraits</li>
            <li>Pre-Wedding Shoots</li>
            <li>Destination Weddings</li>
            <li>Bridal & Groom Photography</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 lg:col-span-1">
      <h5 className="font-bold text-gray-900 mb-4">Quick Links</h5>
      <ul className="space-y-2 text-sm">
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

        {/* Contact Us */}
        <div className="space-y-4 lg:col-span-1">
          <h5 className="font-bold text-gray-900 mb-4">Contact Us</h5>
          <ul className="space-y-2 text-sm">
            <li>Email: nikhilstudio@example.com</li>
            <li>Phone 1: +91 1234512123</li>
            <li>Timing: 9:30 am–5:30 pm (All days)</li>
            <li>
              Address: Valencia, Mangalore 655023
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden ml-4">
        <div className="grid gap-6">
          {/* Row 1: About */}
          <div className="space-y-4">
            {/* <img src="/path-to-your-logo.png" alt="Logo" className="h-12" /> */}
            <p className="text-lg p-2 font-bold text-gray-900">
              Best Wedding Photography <br />
            <p className="text-sm mt-1">We specialize in capturing your special moments with creativity and passion.</p>  
            </p>
          </div>

          {/* Row 2: Events We Host & Quick Links */}
          <div className="flex justify-between">
          <div className="flex justify-between space-x-14 p-2">
            {/* Events We Host */}
            <div className="space-y-4">
              <h5 className="font-bold text-gray-900">Events We Host</h5>
              <ul className="space-y-2 text-sm">
                <li>Weddings & Receptions</li>
                <li>Corporate Events</li>
                <li>Lifestyle Occasions</li>
                <li>Photoshoots</li>
                <li>Exhibitions</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
            <div className="space-y-4 lg:col-span-1">
      <h5 className="font-bold text-gray-900 mb-4 content-ce">Quick Links</h5>
      <ul className="space-y-2 text-sm">
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
            </div>
          </div>
          </div>
          {/* Row 3: Contact Us */}
          <div className="space-y-4 p-2">
            <h5 className="font-bold text-gray-900">Contact Us</h5>
            <ul className="space-y-2 text-sm">
              <li>Email: nikhilstudio@gmail.com</li>
              <li>Phone 1: +91 9888399994</li>
              <li>Phone 2: +91 8069451080</li>
              <li>Timing: 9:30 am–5:30 pm (All days)</li>
              <li>
                Address: 88, Avalahalli, Anjanapura Post, JP Nagar 9th Phase,
                Kanakapura Road, Bengaluru, KA 560108
              </li>
            </ul>
          </div>
          <div>
          <h5 className="font-bold text-gray-900 text-center">Social Links</h5>
      <div className="flex hover:no-underline mt-3 space-x-6 justify-center">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-gray-700 hover:text-gray-900 text-2xl transition-colors"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-gray-700 hover:text-gray-900 text-2xl"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-gray-700 hover:text-gray-900 text-2xl"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-700 hover:text-gray-900 text-2xl"
        >
          <FaLinkedin />
        </a>
        </div>
</div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm">
        <p className="text-gray-600">
          Nikhil Studio Copyright © {new Date().getFullYear()} All Rights
          Reserved
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <div>
            Privacy Policy
          </div>
          <span>|</span>
          <div>
            Terms and Conditions
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
