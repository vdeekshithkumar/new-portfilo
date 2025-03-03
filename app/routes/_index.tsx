import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  textVariants,
  containerVariants,
  imageLoadAnimationProps,
} from "~/data/animationConfig";
import { testimonials } from "~/data/testimonials";
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
import { Form, Link } from "@remix-run/react";
import { FaBox, FaCamera, FaCameraRetro, FaClock, FaEnvelope, FaHeart, FaLeaf, FaMapMarkerAlt, FaPhone, FaQuoteLeft, FaRing, FaTshirt, FaUsers } from "react-icons/fa";

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 1024 ? 1 : 3);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex1((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex1((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [currentIndex1]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const getPositionClass = (index: number) => {
    const total = testimonials.length;
    if (index === currentIndex) return "z-20 scale-100 opacity-100"; // Center card
    if (index === (currentIndex - 1 + total) % total)
      return "z-10 -translate-x-20 scale-90 opacity-50"; // Left card
    if (index === (currentIndex + 1) % total)
      return "z-10 translate-x-20 scale-90 opacity-50"; // Right card
    return "opacity-0 pointer-events-none"; // Hidden card
  };
  
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

<section className="py-4 md:py-8 bg-white">
      <div className="container mx-auto py-12 xl:px-12 2xl:px-36">
        <div className="flex flex-col items-stretch lg:flex-row">
          {/* Image Section */}
          <div className="relative flex-1 p-10 lg:w-1/2">
            <div className="absolute bottom-0 right-0 z-0 h-4/5 w-4/5 bg-gray-800"></div>
            <img
              className="relative bottom-10 right-10 aspect-square object-cover lg:absolute xl:relative xl:bottom-0 xl:right-0"
              src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/bd247912-69b3-4e2c-c479-926f3363ad00/public"
              alt="Wedding Photography"
            />
            <div className="absolute bottom-0 right-0 h-2/5 w-1/2 bg-white pl-3 pt-3">
              <div className="flex h-full w-full flex-col items-center justify-center bg-red-700 p-10 text-white">
                <div className="mb-2 text-6xl font-bold">20+</div>
                <div>Years in Photography</div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="px-14 pt-10 lg:w-1/2">
            <h3 className="pb-4 text-base font-medium uppercase tracking-widest text-red-600">
              Creating Lasting Memories
            </h3>
            <h1 className="mb-6 border-b-8 border-[#BF5959] text-3xl font-semibold text-gray-900 lg:text-5xl">
              Exceptional Wedding Photography Crafted for You
            </h1>
            <p className="mb-8 text-base font-normal tracking-wide text-gray-600">
              Every wedding tells a unique story, and our mission is to capture those precious moments with artistry and precision...
            </p>

            {/* Icons Section */}
            <div className="mb-8 flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
            <div className="mb-8 flex flex-row space-x-6">
              <div className="flex flex-1 flex-col">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-3xl text-white">
                  <FaCamera />
                </div>
                <div className="mb-1 text-base font-medium text-black sm:text-xl md:text-2xl">
                  Our Expertise
                </div>
                <div className="tracking-wide text-gray-500 text-xs sm:text-sm md:text-base">
                  Professional photography that captures the magic of your most important moments.
                </div>
              </div>
              <div className="flex flex-1 flex-col">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-3xl text-white">
                  <FaHeart />
                </div>
                <div className="mb-1 text-base font-medium text-black sm:text-xl md:text-2xl">
                  Our Passion
                </div>
                <div className="tracking-wide text-gray-600 text-xs sm:text-sm md:text-base">
                  We are dedicated to creating stunning visuals that celebrate love, joy, and beauty.
                </div>
              </div>
            </div>
            </div>      
          </div>
        </div>
      </div>
    </section>

    
<section className="relative code-section">
  {/* Background Image */}
  <div
    className="absolute inset-0 h-[20rem] sm:h-[25rem] md:h-[30rem] w-full bg-cover bg-center brightness-[.25]"
    style={{
      backgroundImage: `url("https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/5b432c6d-dfe9-44cd-8abb-219654b6f500/publicContain")`,
    }}
  ></div>

  <div className="container relative mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 2xl:px-36">
    {/* Header Section */}
    <div className="text-center text-white">
      <h3 className="pb-1 sm:pb-2 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-red-500">
        Your Moments, Perfectly Captured
      </h3>
      <h2 className="mx-auto mb-3 sm:mb-4 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
        Exceptional Photography for Life’s Most Beautiful Events
      </h2>
      <p className="mb-4 sm:mb-6 text-center text-sm sm:text-base md:text-lg lg:text-xl">
        Let us transform your cherished memories into stunning visual narratives. Whether it’s a grand wedding celebration, 
        an intimate pre-wedding session, or a stylish fashion shoot, our photography services are designed to encapsulate your unique story.
      </p>
    </div>
  </div>

  {/* Image Carousel Section */}
  <div className="mx-0 my-6 flex min-h-[350px] sm:min-h-[400px] flex-[1] items-center justify-center max-w-md:flex-col relative overflow-visible">
    <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] flex items-center justify-center">
      {/* Previous Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        onClick={prevImage}
        className="absolute left-3 sm:left-5 p-2 sm:p-3 bg-gray-200 rounded-full shadow-md focus:outline-none active:bg-gray-300 dark:bg-gray-700 dark:text-white"
      >
        &#8249;
      </motion.button>

      {/* Image Slideshow with Perspective */}
      <div className="relative flex justify-center items-center h-[400px] sm:h-[450px] md:h-[500px]" style={{ perspective: '1000px' }}>
  {images.map((image, index) => (
    <motion.div
      key={index}
      className={`absolute w-[280px] sm:w-[320px] md:w-[350px] h-[400px] sm:h-[450px] md:h-[500px] transition-transform duration-500 ease-in-out ${getImagePosition(index)}`}
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
          className="absolute top-3 sm:top-5 left-3 sm:leftx-5 text-xs sm:text-sm md:text-lg font-semibold text-white bg-opacity-60 px-3 sm:px-4 py-1 rounded-br-lg"
        >
          <span className="font-mono tracking-tight">{image.label}</span>
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
        className="absolute right-3 sm:right-5 p-2 sm:p-3 bg-gray-200 rounded-full shadow-md focus:outline-none active:bg-gray-300 dark:bg-gray-700 dark:text-white"
      >
        &#8250;
      </motion.button>
    </div>
  </div>
</section>

<section
  className="relative h-[100vh] overflow-hidden mt-20"
  style={{
    backgroundImage: `url(${Wedding})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
  }}
>
  <div
    className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
    style={{
      backgroundImage: `url(${Wedding})`,
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  >
    <div
      className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"
    ></div>
  </div>
  <div className="relative z-0 flex flex-col items-center justify-center h-full">
    <h2 className="text-4xl font-bold text-white mb-4">Special Moments</h2>
    <p className="text-lg text-white text-center max-w-2xl">
      Capturing the beauty of every moment
    </p>
  </div>
  {/* Media query for mobile screens */}
  <style>
    {`
      @media (max-width: 768px) {
        .relative h-[100vh] .overflow-hidden .mt-20 .absolute .top-0 .left-0 .w-full .h-full .bg-center .bg-cover {
          background-size: contain !important;
          background-attachment: scroll !important;
        }
      }
    `}
  </style>
</section>

  
  <section className="code-section">
  <div className="container relative mx-auto px-4 py-16 sm:py-20 md:py-24 xl:px-12 2xl:px-36">
    <h3 className="pb-2 text-center text-sm sm:text-base md:text-lg font-medium uppercase tracking-widest text-[var(--primary-color)]">
      Client Experiences
    </h3>
    <h2 className="mx-auto mb-8 sm:mb-12 text-center text-2xl sm:text-3xl md:text-4xl font-bold">
      <span className="border-b-4 border-[var(--primary-color)] [font-family:var(--font-family-heading)]">
        Cherished Moments through Our Lens
      </span>
    </h2>

    {/* Carousel Container */}
    <div className="relative flex items-center justify-center">
      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 flex h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-[var(--primary-color)] text-white shadow-md hover:opacity-80"
      >
        ❮
      </button>

      <div className="relative flex w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex1}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex w-full justify-center space-x-4 sm:space-x-6"
          >
            {testimonials
              .slice(currentIndex1 * itemsPerPage, (currentIndex1 + 1) * itemsPerPage)
              .map((testimonial, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center justify-center rounded-md bg-white p-6 sm:p-8 md:p-12 shadow-lg w-full sm:w-80 md:w-96"
                >
                  <div className="absolute right-2 sm:right-4 top-2 text-[var(--primary-color)]">
                    <FaQuoteLeft className="text-3xl sm:text-4xl md:text-5xl" />
                  </div>

                  <div className="mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star text-xs sm:text-sm md:text-base text-yellow-500" aria-hidden="true"></i>
                    ))}
                  </div>
                  <div className="mb-2 px-6 sm:px-8 md:px-10 text-center text-black font-light tracking-wide text-sm sm:text-base md:text-lg">
                    {testimonial.clientName}
                  </div>
                  <div className="font-light px-6 sm:px-8 md:px-10 text-black tracking-wide text-xs sm:text-sm md:text-base">
                    {testimonial.feedback}
                  </div>
                  <div className="font-medium tracking-wide text-[var(--primary-color)] mt-2 text-xs sm:text-sm md:text-base">
                    {testimonial.location}
                  </div>
                </div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 flex h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-[var(--primary-color)] text-white shadow-md hover:opacity-80"
      >
        ❯
      </button>
    </div>
  </div>
</section>


  
      

  <div
      style={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "1030px",
        backgroundColor: "#f7f7f7",
      }}
    >
    <div className="container relative mx-auto py-8 xl:px-12 2xl:px-36">
  <h3 className="pb-4 text-center text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-[var(--primary-color)]">
    Our Photography Portfolio
  </h3>
  <h2 className="mx-auto mb-6 text-center text-xl sm:text-2xl md:text-4xl font-bold">
    <span className="border-b-4 border-[var(--primary-color)] [font-family:var(--font-family-heading)] text-black">
      Discover Our Artistic Creations
    </span>
  </h2>
  <p className="mb-8 text-sm text-center sm:text-base md:text-lg font-normal tracking-wide text-[var(--gray-text-color)] text-black">
    Immerse yourself in our collection of stunning photographs that encapsulate life's most significant moments.
    From the enchanting details of weddings to the intimate emotions captured during pre-wedding sessions, each
    image tells a unique story. Our diverse portfolio also features striking fashion and product shoots, showcasing
    our versatility and commitment to excellence. Explore this gallery to envision your own memories brought to life
    through our lens.
  </p>
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
              width: "250px",
              height: "350px",
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
              width: "250px",
              height: "350px",
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

    </div>


    <section className="relative bg-white code-section">
  <div
    className="absolute inset-0 h-[20rem] sm:h-[25rem] md:h-[30rem] w-full bg-cover bg-center object-cover brightness-[.25]"
    style={{
      backgroundImage:
        "url(https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/69ffb621-5583-4f08-e7c5-1dea4ffa3000/public)",
    }}
  ></div>
  <div className="container relative mx-auto px-6 py-16 sm:py-20 md:py-24 xl:px-12 2xl:px-36">
    <div className="text-center text-white">
      <h3 className="pb-2 text-sm sm:text-base md:text-lg font-medium uppercase tracking-widest text-[var(--primary-color)]">
        Connect with Us
      </h3>
      <h2 className="mx-auto mb-4 text-xl sm:text-2xl md:text-3xl font-semibold">
        <span className="border-b-4 border-[var(--primary-color)] [font-family:var(--font-family-heading)]">
          Let's Capture Your Love Story
        </span>
      </h2>
      <p className="mb-6 text-sm sm:text-base md:text-lg text-center font-light">
        We’re here to turn your moments into timeless memories. Whether you're planning a wedding, a pre-wedding
        celebration, or a fashion shoot, our dedicated team is ready to help you create stunning visuals that reflect
        your unique narrative.
      </p>
    </div>
    <div className="flex flex-col bg-[#ffffff] p-2 shadow-2xl lg:flex-row">
      <div className="relative overflow-hidden lg:w-full">
        <div
          className="absolute inset-0 h-[20rem] sm:h-[25rem] md:h-[30rem] w-full bg-cover bg-center object-cover brightness-[.25]"
          style={{
            backgroundImage:
              "url(https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/610f3021-e4d8-466d-8918-e6f22b50d400/public)",
          }}
        ></div>
        <div className="relative p-4 sm:p-6 md:p-10 text-white">
          <h3 className="pb-2 text-sm sm:text-base md:text-lg font-medium uppercase tracking-widest">
            Get in Touch Anytime
          </h3>
          <h2 className="mx-auto mb-4 text-lg sm:text-xl md:text-2xl font-medium">
            <span className="border-b-4 border-[var(--primary-color)]">Contact Information</span>
          </h2>
          <div className="mb-2 flex items-center text-xs sm:text-sm md:text-base font-light tracking-wider text-light-text-color">
            <FaPhone className="mr-2 w-4 sm:w-5 md:w-6 flex-none text-primary-color" />
            <span>+91 9845203348</span>
          </div>
          <div className="mb-2 flex items-center text-xs sm:text-sm md:text-base font-light tracking-wider text-light-text-color">
            <FaEnvelope className="mr-2 w-4 sm:w-5 md:w-6 flex-none text-primary-color" />
            <span className="w-[90%] break-words">nikhilstudio1996@gmail.com</span>
          </div>
          <div className="mb-2 flex items-center text-xs sm:text-sm md:text-base font-light tracking-wider text-light-text-color">
            <FaMapMarkerAlt className="mr-2 w-4 sm:w-5 md:w-6 flex-none text-primary-color" />
            <span>Mangaluru</span>
          </div>
          <div className="mb-2 flex items-center text-xs sm:text-sm md:text-base font-light tracking-wider text-light-text-color">
            <FaClock className="mr-2 w-4 sm:w-5 md:w-6 flex-none text-primary-color" />
            <span>Mon - Fri: 9:00am - 5:00pm</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </div>
  );
}
