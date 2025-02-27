import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { motion } from "framer-motion";
import { textVariants, containerVariants } from "~/data/animationConfig";
import { FaCameraRetro, FaRing, FaBirthdayCake, FaTv, FaLeaf, FaInstagram, FaHelicopter, FaCamera } from "react-icons/fa";

export const loader: LoaderFunction = async () => {
  return json([]);
};

export default function Services() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto my-0 w-full max-w-[90%] p-4 sm:p-6"
    >
      <motion.h1
        variants={textVariants}
        className="mb-12 text-2xl font-bold text-center leading-[1.3] sm:mb-20 sm:text-3xl md:text-4xl"
      >
        Our Photography Services
      </motion.h1>

      <section className="relative code-section">
        <div
          className="absolute inset-0 h-[30rem] w-full bg-cover bg-center brightness-[.65]"
          style={{
            backgroundImage: `url("https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/5b432c6d-dfe9-44cd-8abb-219654b6f500/publicContain")`,
          }}
        ></div>

        <div className="container relative mx-auto py-16 sm:py-24 xl:px-12 2xl:px-36">
          <div className="text-center text-white">
            <h3 className="pb-4 text-sm font-medium uppercase tracking-widest text-red-200 sm:text-base">
              We Provide Anything & Everything Related to Photography
            </h3>
            <h2 className="mx-auto mb-6 text-center text-2xl font-semibold sm:text-3xl md:text-4xl">
              Capturing Moments, Creating Memories
            </h2>
          </div>

          <div className="flex flex-wrap px-4 lg:mt-28 lg:grid lg:grid-cols-3 lg:gap-6">
            {/* Pre-Wedding & Post-Wedding Shots */}
            <div className="w-full p-4 sm:p-6 md:w-1/2 lg:w-auto lg:p-0 text-black">
              <div className="h-full p-4 sm:p-6 shadow-xl bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <FaRing className="text-3xl sm:text-5xl text-red-500 mb-4" />
                <h4 className="mb-4 text-xl sm:text-2xl font-semibold">Pre & Post Wedding Shots</h4>
                <p className="font-light text-sm sm:text-base">
                  Cherish the beauty of your wedding journey with our professional photography services.
                </p>
              </div>
            </div>

            {/* Religious & Traditional Shoots */}
            <div className="w-full p-4 sm:p-6 md:w-1/2 lg:w-auto lg:p-0">
              <div className="h-full p-4 sm:p-6 shadow-xl bg-red-600 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <FaCameraRetro className="text-3xl sm:text-5xl mb-4" />
                <h4 className="mb-4 text-xl sm:text-2xl font-semibold">Religious & Traditional Shoots</h4>
                <p className="font-light text-sm sm:text-base">
                  Covering all traditional ceremonies like roce, haldi, nika, and more.
                </p>
              </div>
            </div>

            {/* Small Functions */}
            <div className="w-full p-4 sm:p-6 md:w-1/2 lg:w-auto lg:p-0 text-black">
              <div className="h-full p-4 sm:p-6 shadow-xl bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <FaBirthdayCake className="text-3xl sm:text-5xl text-red-500 mb-4" />
                <h4 className="mb-4 text-xl sm:text-2xl font-semibold">Birthdays & Anniversaries</h4>
                <p className="font-light text-sm sm:text-base">
                  Capturing special moments at birthdays, anniversaries, and small gatherings.
                </p>
              </div>
            </div>

            {/* LED Screens & Live Streaming */}
            <div className="w-full p-4 sm:p-6 md:w-1/2 lg:w-auto lg:p-0">
              <div className="h-full p-4 sm:p-6 shadow-xl bg-white text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <FaTv className="text-3xl sm:text-5xl text-red-500 mb-4" />
                <h4 className="mb-4 text-xl sm:text-2xl font-semibold">LED Screens & Live Streaming</h4>
                <p className="font-light text-sm sm:text-base">
                  Professional live streaming and LED screen setups for seamless event coverage.
                </p>
              </div>
            </div>

            {/* Drone Shoots */}
            <div className="w-full p-4 sm:p-6 md:w-1/2 lg:w-auto lg:p-0">
              <div className="h-full p-4 sm:p-6 shadow-xl bg-red-600 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <FaCamera className="text-3xl sm:text-5xl mb-4" />
                <h4 className="mb-4 text-xl sm:text-2xl font-semibold">Drone Shoots</h4>
                <p className="font-light text-sm sm:text-base">
                  Stunning aerial photography and videography to capture breathtaking views.
                </p>
              </div>
            </div>

            {/* Funerals */}
            <div className="w-full p-4 sm:p-6 md:w-1/2 lg:w-auto lg:p-0">
              <div className="h-full p-4 sm:p-6 shadow-xl bg-white text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <FaLeaf className="text-3xl sm:text-5xl text-red-500 mb-4" />
                <h4 className="mb-4 text-xl sm:text-2xl font-semibold">Funeral Photography</h4>
                <p className="font-light text-sm sm:text-base">
                  Respectful and professional photography to commemorate loved ones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}