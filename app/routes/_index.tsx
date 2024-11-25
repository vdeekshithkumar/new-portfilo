import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  textVariants,
  containerVariants,
  imageLoadAnimationProps,
} from "~/data/animationConfig";
import IconName from '../../public/assets/images/wedding1.jpg'; 
import IconName3 from '../../public/assets/images/wedding2.jpg';
import Engagement from '../../public/assets/images/enagagement.jpeg';
import Wedding from '../../public/assets/images/wedding1.jpg';
import Haldi from '../../public/assets/images/haldi.jpg';
import Reception from '../../public/assets/images/reception.jpeg';
import PreWedding from '../../public/assets/images/wedding2.jpg';

const images = [
  { src: Engagement, label: "Engagement" },
  { src: Wedding, label: "Wedding" },
  { src: Haldi, label: "Haldi" },
  { src: Reception, label: "Reception" },
  { src: PreWedding, label: "Pre-Wedding" },
];
import "./style.css";

const bgImages = [Wedding, PreWedding, Haldi, Engagement];

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

  const getImagePosition = (index:number) => {
    if (index === currentImageIndex - 1 || (currentImageIndex === 0 && index === images.length - 1)) {
      // Left image: tilted with the top left corner closer to the viewer
      return 'transform -rotate-y-20 rotate-x-10 translate-x-[-110%] z-10 opacity-70 scale-85';
    } else if (index === currentImageIndex) {
      // Center image: highlighted, slightly zoomed in
      return 'transform rotate-y-0 rotate-x-0 translate-x-0 z-20 scale-105 opacity-100';
    } else if (index === currentImageIndex + 1 || (currentImageIndex === images.length - 1 && index === 0)) {
      // Right image
      return 'transform rotate-y-20 rotate-x-10 translate-x-[110%] z-10 opacity-70 scale-85';
    } else {
      // Other images: hidden or reset position
      return 'hidden';
    }
  };  

  return (
    <div>
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

    <div
      className="relative h-screen w-screen flex items-center justify-center bg-cover bg-center transition duration-1000 ease-in-out"
      >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        <motion.h1
          variants={textVariants}
          className="mb-[0.5em] text-2xl font-bold leading-[1.3] md:text-4xl text-black dark:text-white" // Set dark text for dark mode
        >
          Welcome to Nikhil Photography
        </motion.h1>
        <motion.p variants={textVariants} className="text-lg md:text-xl text-black dark:text-white">
          some intro 
        </motion.p>
      </motion.div>
    </div>


    <div className="mx-0 my-[2em] flex min-h-[400px] flex-[1] items-center justify-center max-w-md:flex-col">
  <div className="relative w-full h-[500px] flex items-center justify-center">
    {/* Previous Button */}
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      onClick={prevImage}
      className="absolute left-5 p-2 bg-gray-200 rounded-full shadow-md focus:outline-none active:bg-gray-300 dark:bg-gray-700 dark:text-white"
    >
      &#8249;
    </motion.button>
    
    {/* Image Slideshow with Perspective */}
    <div className="relative flex justify-center items-center h-[500px]" style={{ perspective: '1000px' }}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`absolute w-[350px] h-[500px] transition-transform duration-500 ease-in-out ${getImagePosition(index)}`}
          
        >
          <img
            src={image.src}
            alt={image.label}
            className="object-cover w-full h-full shadow-lg"
          />
          {index === currentImageIndex && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute top-5 left-5 text-lg font-bold text-white bg-black bg-opacity-60 px-4 py-1 rounded-br-lg"
            >
              {image.label}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>

    {/* Next Button */}
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      onClick={nextImage}
      className="absolute right-5 p-2 bg-gray-200 rounded-full shadow-md focus:outline-none active:bg-gray-300 dark:bg-gray-700 dark:text-white"
    >
      &#8250;
    </motion.button>
  </div>
</div>
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 p-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Contact Us</h2>
      <p className="text-lg mb-2 text-gray-600 dark:text-gray-300">
        📞 Phone: (123) 456-7890
      </p>
      <p className="text-lg mb-2 text-gray-600 dark:text-gray-300">
        ✉️ Email: contact@nikhilphotography.com
      </p>
      <p className="text-lg mb-2 text-gray-600 dark:text-gray-300">
        📍 Address: 123 Photography Lane, Art City, CA
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Follow us on social media for updates and more!
      </p>
    </div>
    </div>
  );
}
