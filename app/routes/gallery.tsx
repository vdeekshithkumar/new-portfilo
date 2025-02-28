import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  textVariants,
  containerVariants,
  imageLoadAnimationProps,
} from "~/data/animationConfig";

import Engagement from '../../public/assets/images/enagagement.jpeg';
import Wedding from '../../public/assets/images/wedding1.jpg';
import Haldi from '../../public/assets/images/haldi.jpg';
import Reception from '../../public/assets/images/reception.jpeg';
import PreWedding from '../../public/assets/images/wedding2.jpg';

export default function Gallery() {
  const images = [
    { src: Wedding, alt: "Wedding", title: "Wedding Moments" },
    { src: Engagement, alt: "Engagement", title: "Engagement Bliss" },
    { src: PreWedding, alt: "Pre-Wedding", title: "Pre-Wedding Love" },
    { src: Haldi, alt: "Haldi", title: "Haldi Ceremony" },
    { src: Reception, alt: "Reception", title: "Reception Elegance" },
    { src: PreWedding, alt: "Pre-Wedding", title: "Romantic Capture" },
    { src: Wedding, alt: "Wedding", title: "Vows & Promises" },
    { src: Reception, alt: "Reception", title: "Celebration Night" },
    { src: Engagement, alt: "Engagement", title: "Engagement Bliss" },
    { src: Wedding, alt: "Wedding", title: "Wedding Moments" },
    
    { src: PreWedding, alt: "Pre-Wedding", title: "Timeless Love" },
    { src: PreWedding, alt: "Pre-Wedding", title: "Pre-Wedding Love" },
  ];

  const getRandomHeight = () => {
    const heights = ["360px", "400px", "440px"];
    return heights[Math.floor(Math.random() * heights.length)];
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-gray-200 to-gray-300 flex flex-col items-center justify-start">
      {/* Header Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-7xl px-4 sm:px-6 pt-16 pb-8 text-center"
      >
        <motion.h1
          variants={textVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight"
        >
          Capturing Emotions
        </motion.h1>
        <motion.p
          variants={textVariants}
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto "
        >
          Timeless moments preserved through the lens of passion and creativity.
        </motion.p>
      </motion.div>

      {/* Full-Width Marquee Section */}
      <div className="w-full overflow-hidden -mt-20">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            animation: "scrollLeft 20s linear infinite",
            whiteSpace: "nowrap",
          }}
          className="w-screen" // Ensures full screen width
        >
          {[...Array(4)].map((_, index) => (
            <span
              key={`contact-us-${index}`}
              className="text-[200px] sm:text-[220px] text-gray-600 opacity-10 tracking-wider mx-4 sm:mx-8"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "800" }}
            >
              GALLERY
            </span>
          ))}
        </div>
      </div>

      {/* Masonry Grid Layout */}
      <div className="w-full max-w-7xl px-4 sm:px-6 pb-16 -mt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg border border-gray-200 relative group"
              style={{ height: getRandomHeight() }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full rounded-2xl hover:opacity-90 transition duration-300"
                {...imageLoadAnimationProps}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <p className="text-white text-base sm:text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern Call-to-Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center pb-16"
      >
        <a
          href="/contact"
          className="relative inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm sm:text-lg font-semibold rounded-full overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
          <span className="relative z-10 flex items-center justify-center gap-2">
            Book Your Session
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </span>
        </a>
      </motion.div>

      {/* CSS Animation */}
      <style>{`
        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}