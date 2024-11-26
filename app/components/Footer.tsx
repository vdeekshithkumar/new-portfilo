import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      {/* Desktop Layout */}
      <div className="container mx-auto px-6 lg:px-16 grid gap-10 lg:grid-cols-4 hidden lg:grid">
        {/* About Section */}
        <div className="space-y-4 lg:col-span-1">
          {/* <img src="/path-to-your-logo.png" alt="Logo" className="h-12" /> */}
          <p className="text-sm">
          Best Wedding Photography <br />
          We specialize in capturing your special moments with creativity and passion.
          </p>
          <div>
      <h5 className="font-bold text-gray-900">Social Links</h5>
      <div className="inline-flex">
        <div aria-label="Facebook">
      <svg
        className="e-font-icon-svg e-fab-facebook-f"
        viewBox="0 0 320 512"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '24px', height: '24px' }}  
      >
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
      </svg>
        </div>
        <div aria-label="Instagram">
      
          <svg style={{ width: '24px', height: '24px' }} className="e-font-icon-svg e-fab-instagram text-xl text-gray-600 hover:text-gray-900" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
          </svg>
        </div>
    
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
            <li>Home</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>About us</li>
            <li>Contact us</li>
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
      <div className="lg:hidden">
        <div className="grid gap-6">
          {/* Row 1: About */}
          <div className="space-y-4">
            {/* <img src="/path-to-your-logo.png" alt="Logo" className="h-12" /> */}
            <p className="text-sm p-2">
              Best Wedding Photography <br />
              We specialize in capturing your special moments with creativity and passion.
            </p>
          </div>

          {/* Row 2: Events We Host & Quick Links */}
          <div className="flex justify-between space-x-6 p-2">
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
              <h5 className="font-bold text-gray-900">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                  <li>Home</li>
                  <li>Services</li>
                  <li>Gallery</li>
                  <li>About us</li>
                  <li>Contact us</li>
              </ul>
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div aria-label="Facebook">
      <svg
        className="e-font-icon-svg e-fab-facebook-f"
        viewBox="0 0 320 512"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '24px', height: '24px' }}  
      >
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
      </svg>
        </div>
        <div aria-label="Instagram">
      
          <svg style={{ width: '24px', height: '24px' }} className="e-font-icon-svg e-fab-instagram text-xl text-gray-600 hover:text-gray-900" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
          </svg>
        </div>
    
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
