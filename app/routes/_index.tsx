import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  textVariants,
  containerVariants,
  imageLoadAnimationProps,
} from "~/data/animationConfig";
import IconName from './testing-image.jpg'; 
import IconName2 from '../../public/assets/images/testimage2.jpg';
import IconName3 from './testt3.jpg';

const images = [
  { src: IconName, label: "Engagement" },
  { src: IconName2, label: "Wedding" },
  { src: IconName, label: "Haldi" },
  { src: IconName2, label: "Reception" },
  { src: IconName, label: "Pre-Wedding" },
];

const bgImages = [IconName3, IconName, IconName3, IconName];

export default function Index() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentBgImageIndex, setCurrentBgImageIndex] = useState(0);
  // Automatically change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  useEffect(() => {
    const intervalBg = setInterval(() => {
      setCurrentBgImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(intervalBg); // Clean up the interval on unmount
  }, []);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative ">
    <div
        className="relative h-screen w-screen flex items-center justify-center bg-cover bg-center transition duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${bgImages[currentBgImageIndex]})`,
        }}
      >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        <motion.h1
          variants={textVariants}
          className="mb-[0.5em] text-2xl font-bold leading-[1.3] md:text-4xl text-white"
        >
          Welcome to Nikhil Photography
        </motion.h1>
        <motion.p variants={textVariants} className="text-lg md:text-xl text-white">
          Where we bring smiles with a small click
        </motion.p>
      </motion.div>
    </div>

    <div className="mx-0 my-[2em] flex min-h-[400px] flex-[1] items-center justify-center max-w-md:flex-col"> 

      <div className="mx-[1em] my-0 text-center flex items-center">
        {/* Previous button */}
        <motion.button
          whileTap={{ scale: 0.9 }} // Shrink slightly on click
          whileHover={{ scale: 1.1 }} // Slightly enlarge on hover
          onClick={prevImage}
          className="mr-[1em] text-2xl font-bold p-2 bg-gray-200 rounded-full shadow-md 
                    focus:outline-none active:bg-gray-300 dark:bg-gray-700 dark:text-white" // Light mode: black arrow, dark mode: white arrow
        >
          &#8249; {/* Left arrow icon */}
        </motion.button>

        <motion.div {...imageLoadAnimationProps}>
          <div className="relative block min-h-[250px]">
            <img 
              src={images[currentImageIndex].src} 
              alt={images[currentImageIndex].label} 
              className="w-[350px] h-[500px] object-cover rounded-lg" // Add border-radius here
            />
            {/* Overlay label on image with motion */}
            <motion.div
              key={currentImageIndex} // Key ensures a fresh animation on each image change
              initial={{ opacity: 0, y: -30 }} // Start invisible and slightly above
              animate={{ opacity: 1, y: 0 }} // Fade in and move into view
              transition={{ delay: 0.5, duration: 0.8 }} // 0.5-second delay and 0.8-second animation
              className="absolute top-10 left-0 text-lg font-bold text-white bg-black bg-opacity-60 px-4 py-1 rounded-br-lg" // Label at top-left
            >
              {images[currentImageIndex].label}
            </motion.div>
          </div>
        </motion.div>

        {/* Next button */}
        <motion.button
          whileTap={{ scale: 0.9 }} // Shrink slightly on click
          whileHover={{ scale: 1.1 }} // Slightly enlarge on hover
          onClick={nextImage}
          className="ml-[1em] text-2xl font-bold p-2 bg-gray-200 rounded-full shadow-md 
                    focus:outline-none active:bg-gray-300 dark:bg-gray-700 dark:text-white" // Light mode: black arrow, dark mode: white arrow
        >
          &#8250; {/* Right arrow icon */}
        </motion.button>
      </div>
    </div>
    </div>
  );
}
