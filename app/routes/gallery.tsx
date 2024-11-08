import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  textVariants,
  containerVariants,
  imageLoadAnimationProps,
} from "~/data/animationConfig";

import IconName from './testing-image.jpg';

export default function Gallery() {
  const images = [
    { src: IconName, alt: "Image 1" },
    { src: IconName, alt: "Image 2" },
    { src: IconName, alt: "Image 3" },
    { src: IconName, alt: "Image 4" },
    { src: IconName, alt: "Image 5" },
    { src: IconName, alt: "Image 6" },
    { src: IconName, alt: "Image 7" },
    { src: IconName, alt: "Image 8" },
  ];

  const getRandomHeight = () => {
    const heights = ["250px", "300px", "350px"];
    return heights[Math.floor(Math.random() * heights.length)];
  };

  return (
    <div className="relative min-h-screen w-screen flex items-center justify-center bg-cover bg-center transition duration-1000 ease-in-out">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto my-0 w-full max-w-[90%] p-6"
      >
        <motion.h1
          variants={textVariants}
          className="mb-10 text-3xl font-bold leading-[1.3] md:text-4xl"
        >
          Capturing emotions
        </motion.h1>

        {/* Grid Layout for Service Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg"
              style={{
                width: "100%", // Set to 100% of the grid column width
                height: getRandomHeight(), // Random height for variation
              }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
