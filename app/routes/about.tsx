import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { textVariants, containerVariants } from "~/data/animationConfig";
import Wedding1 from "../../public/assets/images/wedding1.jpg";
import Haldi from "../../public/assets/images/haldi.jpg";
import Reception from "../../public/assets/images/reception.jpeg";

export default function About() {
  const bgImages = [Wedding1, Haldi, Reception];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 4000); // 4-second interval for a smoother effect
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  className="mx-auto my-0 w-full max-w-[90%] p-4 md:p-6 md:max-w-6xl"
>
  {/* Header Section */}
  <motion.h1
    variants={textVariants}
    className="mb-6 text-3xl font-extrabold text-center leading-tight sm:text-4xl md:text-5xl text-gray-50"
  >
    About Us
  </motion.h1>
  <motion.p
    variants={textVariants}
    className="mb-10 text-base text-center text-gray-300 sm:text-lg max-w-3xl mx-auto"
  >
    Capturing love, laughter, and timeless moments. We are passionate wedding
    photographers dedicated to turning your special day into cherished memories.
  </motion.p>

  {/* Our Story Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
    <motion.div variants={textVariants} className="space-y-4 sm:space-y-6">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-100">Our Story</h2>
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
        With over a decade of experience, we’ve photographed hundreds of weddings, 
        each one unique and beautiful. Our journey began with a love for storytelling 
        through the lens, and today, we’re honored to be part of your love story.
      </p>
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
        We believe in natural, candid shots that reflect the real emotions of your 
        day, blended with elegant portraits that stand the test of time.
      </p>
      <a
        href="/contact"
        className="inline-block px-5 py-2 text-base sm:text-lg bg-rose-600 text-white font-medium rounded-lg shadow-lg hover:bg-rose-700 transition-transform transform hover:scale-105"
      >
        Get in Touch
      </a>
    </motion.div>

    {/* Background Slideshow */}
    <motion.div
      key={currentImageIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full h-64 sm:h-80 md:h-[450px] bg-gray-200 rounded-xl overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url(${bgImages[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-500">
        <p className="text-white text-lg sm:text-xl font-medium tracking-wide">
          Wedding Moments
        </p>
      </div>
    </motion.div>
  </div>

  {/* Meet the Photographer Section */}
  <motion.div
    variants={containerVariants}
    className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
  >
    <motion.div
      variants={containerVariants}
      className="relative w-full h-64 sm:h-80 md:h-[450px] bg-gray-200 rounded-lg overflow-hidden shadow-lg"
    >
      <img
        src="/path-to-your-photo.jpg"
        alt="Meet Nikhil, Wedding Photographer"
        className="w-full h-full object-cover rounded-lg"
      />
    </motion.div>
    <motion.div variants={textVariants} className="space-y-4 sm:space-y-6">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-100">Meet Nikhil</h2>
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
        I’m Nikhil D'Souza, the lead photographer and founder of Nikhil Studio. My 
        passion for capturing love stories started{" "}
        <span className="text-rose-400 italic">when I picked up my first camera at 16</span>, 
        and I’ve been perfecting my craft ever since. When I’m not behind the lens, 
        you’ll find me{" "}
        <span className="text-rose-400 italic">exploring nature with my family</span>.
      </p>
    </motion.div>
  </motion.div>

  {/* Our Approach Section */}
  <motion.div
    variants={containerVariants}
    className="mt-16 md:mt-20 text-center space-y-4 sm:space-y-6"
  >
    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-100">Our Approach</h2>
    <p className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto">
      We blend creativity with professionalism, ensuring every detail—from the 
      first kiss to the last dance—is captured perfectly. Discreet yet attentive, 
      we work to make you feel comfortable in front of the camera.
    </p>
  </motion.div>
</motion.div>

  );
}
