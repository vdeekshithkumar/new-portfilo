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
import WeddingBg from '../../public/assets/images/wedding-bg.jpg';

const images = [
  { src: Engagement, label: "Engagement" },
  { src: Wedding, label: "Wedding" },
  { src: Haldi, label: "Haldi" },
  { src: Reception, label: "Reception" },
  { src: PreWedding, label: "Pre-Wedding" },
  { src: WeddingBg, lablel: "Background wedding image"}
];
const scrollingImages = [
  { src: Engagement, label: "Engagement" },
  { src: Wedding, label: "Wedding" },
  { src: Haldi, label: "Haldi" },
  { src: Reception, label: "Reception" },
  { src: PreWedding, label: "Pre-Wedding" },
  { src: WeddingBg, lablel: "Background wedding image"},
  { src: Engagement, label: "Engagement" },
  { src: Wedding, label: "Wedding" },
  { src: Haldi, label: "Haldi" },
  { src: Reception, label: "Reception" },
  { src: PreWedding, label: "Pre-Wedding" },
  { src: WeddingBg, lablel: "Background wedding image"}
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

  const [animationPaused, setAnimationPaused] = useState(false);

  useEffect(() => {
    // Animation cycle: Move for 4s, then pause for 2s
    const interval = setInterval(() => {
      setAnimationPaused((prev) => !prev);
    }, 1000); // Total cycle duration: 4s animation + 2s pause

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const firstRowImages = scrollingImages.slice(0, 3); // First half of images
  const secondRowImages = scrollingImages.slice(3); // Second half of images
  
  return (
    <div>
    <div
        className="relative h-screen w-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImages[currentBgImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
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


    <div className="mx-0 my-[2em] flex min-h-[400px] flex-[1] items-center justify-center max-w-md:flex-col relative overflow-visible">
  <div className="relative w-full h-[500px] flex items-center justify-center">
    {/* Previous Button */}
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      onClick={prevImage}
      className="absolute left-5 z-10 p-2 bg-gray-200 rounded-full shadow-md focus:outline-none active:bg-gray-300 dark:bg-gray-700 dark:text-white"
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
      className="absolute right-5 z-10 p-2 bg-gray-200 rounded-full shadow-md focus:outline-none active:bg-gray-300 dark:bg-gray-700 dark:text-white"
    >
      &#8250;
    </motion.button>
  </div>
</div>
  <section className="relative h-screen flex items-center justify-center bg-black dark:bg-white mt-16">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-4 text-white dark:text-black">WHY CHOOSE US</h3>
        <p className="text-lg max-w-2xl mx-auto text-white dark:text-black">
          We provide professional photography services for all your memorable occasions.
        </p>
      </div>
    </section>
<section className="relative h-[100vh] overflow-hidden mt-20">
    <div
      className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
      style={{
        backgroundImage: `url(${WeddingBg})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
    </div>
    <div className="relative z-0 flex flex-col items-center justify-center h-full">
      <h2 className="text-4xl font-bold text-white mb-4">Special Moments</h2>
      <p className="text-lg text-white text-center max-w-2xl">
        Capturing the beauty of every moment
      </p>
    </div>
  </section>
  <div
      style={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "400px",
        backgroundColor: "#f7f7f7",
      }}
    >
      {/* First Row - Scroll Left */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          animation: "scrollLeft 20s linear infinite",
          whiteSpace: "nowrap",
          marginTop: "39px"
        }}
      >
        {[...scrollingImages, ...scrollingImages].map((image, index) => (
          <div
            key={`row1-${index}`}
            style={{
              flex: "0 0 auto",
              width: "200px",
              height: "150px",
              borderRadius: "8px",
              overflow: "hidden",
              margin: "0 10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={image.src}
              alt={image.label}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      {/* Second Row - Scroll Right */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          animation: "scrollLeft 20s linear infinite reverse",
          whiteSpace: "nowrap",
          marginTop: "20px",
        }}
      >
        {[...scrollingImages, ...scrollingImages].map((image, index) => (
          <div
            key={`row2-${index}`}
            style={{
              flex: "0 0 auto",
              width: "200px",
              height: "150px",
              borderRadius: "8px",
              overflow: "hidden",
              margin: "0 10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={image.src}
              alt={image.label}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      {/* Add Keyframes CSS */}
      <style>
        {`
          @keyframes scrollLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>

  <div
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black dark:bg-slate-500 bg-opacity-50"></div>

  <div className="relative z-0 container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-y-6 lg:gap-y-0">
  {/* Left Section */}
  <div className="w-full lg:w-1/2 text-white space-y-4">
  {/* <div className="w-full lg:w-1/2 text-white text-center lg:text-right space-x-4 mt-6 lg:mt-0"> */}
    <p className="text-3xl lg:text-5xl font-bold ml-10">Contact Us</p>
    <p className="text-base lg:text-lg ml-10"> Email:{" "} nikhilstudio@gmail.com</p>
    <p className="text-sm lg:text-lg italic ml-10">
      Embark on Timeless Journeys,
      <br />
      Mangalore 575022
    </p>
  </div>
  

  {/* Right Section */}
  <div className="w-full lg:w-1/2 text-white text-center lg:text-right space-y-4 mt-6 lg:mt-0">
    <p className="text-3xl lg:text-5xl font-bold mr-10">+91 123456789</p>
    <p className="text-base lg:text-lg mr-10">Reach us at the number above</p>
    <p className="text-sm lg:text-lg italic mr-10">
      Embark on Timeless Journeys,
      <br />
      Reach Out and Make Your Moments Last Forever.
    </p>
  </div>
</div>

    </div>
    
    </div>
  );
}
