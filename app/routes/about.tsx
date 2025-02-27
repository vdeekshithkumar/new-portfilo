import { motion } from "framer-motion";
import { textVariants, containerVariants } from "~/data/animationConfig";

export default function About() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto my-0 w-full max-w-[90%] p-6 md:max-w-5xl"
    >
      {/* Header Section */}
      <motion.h1
        variants={textVariants}
        className="mb-12 text-3xl font-bold text-center leading-[1.3] md:text-4xl text-gray-800"
      >
        About Us
      </motion.h1>
      <motion.p
        variants={textVariants}
        className="mb-16 text-lg text-center text-gray-600 max-w-2xl mx-auto"
      >
        Capturing love, laughter, and timeless moments. We are passionate wedding photographers dedicated to turning your special day into cherished memories.
      </motion.p>

      {/* Our Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div variants={textVariants} className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            With over a decade of experience, we’ve photographed hundreds of weddings, each one unique and beautiful. Our journey began with a love for storytelling through the lens, and today, we’re honored to be part of your love story.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We believe in natural, candid shots that reflect the real emotions of your day, blended with elegant portraits that stand the test of time.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-rose-600 text-white font-medium rounded-md hover:bg-rose-700 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
        <motion.div
          variants={containerVariants}
          className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            <p>Sample wedding photo placeholder</p>
          </div>
        </motion.div>
      </div>

      {/* Meet the Photographer Section */}
      <motion.div
        variants={containerVariants}
        className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <motion.div
          variants={containerVariants}
          className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden"
        >
          <img
            src="/path-to-your-photo.jpg" // Replace with your actual photo path
            alt="Meet [Your Name], Wedding Photographer"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
        <motion.div variants={textVariants} className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">Meet [Your Name]</h2>
          <p className="text-gray-600 leading-relaxed">
            I’m [Your Name], the lead photographer and founder of [Your Business Name]. My passion for capturing love stories started [insert personal detail, e.g., "when I picked up my first camera at 16"], and I’ve been perfecting my craft ever since. When I’m not behind the lens, you’ll find me [hobby or fun fact, e.g., "exploring nature with my family"].
          </p>
        </motion.div>
      </motion.div>

      {/* Our Approach Section */}
      <motion.div
        variants={containerVariants}
        className="mt-20 text-center space-y-6"
      >
        <h2 className="text-2xl font-semibold text-gray-700">Our Approach</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We blend creativity with professionalism, ensuring every detail—from the first kiss to the last dance—is captured perfectly. Discreet yet attentive, we work to make you feel comfortable in front of the camera.
        </p>
      </motion.div>
    </motion.div>
  );
}
