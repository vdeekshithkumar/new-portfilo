import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { BlogList } from "~/data/blogList.server";
import { blogList } from "~/data/blogList.server";
import { motion } from "framer-motion";
import { textVariants, containerVariants } from "~/data/animationConfig";
import { FaBox, FaCameraRetro, FaLeaf, FaRing, FaTshirt, FaUsers } from "react-icons/fa";

export const loader: LoaderFunction = async () => {
  return json(blogList);
};

export default function Services() {
  const services = useLoaderData<BlogList[]>();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto my-0 w-full max-w-[90%] p-6"
    >
      <motion.h1
        variants={textVariants}
        className="mb-20 text-3xl font-bold text-center leading-[1.3] md:text-4xl"
      >
        Our Photography Services
      </motion.h1>

      {/* Grid Layout for Service Cards */}
      <section className="relative code-section">
      {/* Background Image */}
      <div
        className="absolute inset-0 h-[30rem] w-full bg-cover bg-center brightness-[.25]"
        style={{
          backgroundImage: `url("https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/5b432c6d-dfe9-44cd-8abb-219654b6f500/publicContain")`,
        }}
      ></div>

      <div className="container relative z-10 mx-auto py-24 xl:px-12 2xl:px-36">
        {/* Header Section */}
        <div className="text-center text-white">
          <h3 className="pb-4 text-base font-medium uppercase tracking-widest text-red-500">
            Your Moments, Perfectly Captured
          </h3>
          <h2 className="mx-auto mb-6 text-center text-3xl font-semibold md:text-4xl">
            Exceptional Photography for Life’s Most Beautiful Events
          </h2>
          <p className="mb-8 text-center text-xl">
            Let us transform your cherished memories into stunning visual narratives. Whether it’s a grand wedding celebration, an intimate pre-wedding session, or a stylish fashion shoot, our photography services are designed to encapsulate your unique story.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap px-4 lg:mt-28 lg:grid lg:grid-cols-3 lg:gap-6">
          {/* Wedding Photography */}
          <div className="w-full p-6 md:w-1/2 lg:w-auto lg:p-0">
            <div className="h-full p-6 shadow-xl bg-white">
              <div className="mb-12 mt-2 flex h-6 w-6 items-center justify-center bg-gray-800 text-red-500">
                <FaRing className="relative left-5 top-4 text-5xl" />
              </div>
              <h4 className="mb-6 text-2xl font-semibold">Wedding Photography</h4>
              <p className="mb-6 font-light">
                Our wedding photography captures the essence of your love story, ensuring every moment is immortalized beautifully.
              </p>
            </div>
          </div>

          {/* Pre-Wedding Sessions */}
          <div className="w-full p-6 md:w-1/2 lg:w-auto lg:p-0 lg:-top-12">
            <div className="h-full p-6 shadow-xl bg-red-600 text-white">
              <div className="mb-12 mt-2 flex h-6 w-6 items-center justify-center bg-white text-red-600">
                <FaCameraRetro className="relative left-5 top-4 text-5xl" />
              </div>
              <h4 className="mb-6 text-2xl font-semibold">Pre-Wedding Sessions</h4>
              <p className="mb-6 font-light">
                Capture the excitement and anticipation before your big day with our pre-wedding photography.
              </p>
            </div>
          </div>

          {/* Fashion Photography */}
          <div className="w-full p-6 md:w-1/2 lg:w-auto lg:p-0">
            <div className="h-full p-6 shadow-xl bg-white">
              <div className="mb-12 mt-2 flex h-6 w-6 items-center justify-center bg-gray-800 text-red-500">
                <FaTshirt className="relative left-5 top-4 text-5xl" />
              </div>
              <h4 className="mb-6 text-2xl font-semibold">Fashion Photography</h4>
              <p className="mb-6 font-light">
                Showcase your collection or personal style with our fashion photography services, capturing the essence of your brand.
              </p>
            </div>
          </div>

          {/* Product Photography */}
          <div className="w-full p-6 md:w-1/2 lg:w-auto lg:p-0">
            <div className="h-full p-6 shadow-xl bg-white">
              <div className="mb-12 mt-2 flex h-6 w-6 items-center justify-center bg-gray-800 text-red-500">
                <FaBox className="relative left-5 top-4 text-5xl" />
              </div>
              <h4 className="mb-6 text-2xl font-semibold">Product Photography</h4>
              <p className="mb-6 font-light">
                Elevate your brand with high-quality product photography that highlights your merchandise in the best light.
              </p>
            </div>
          </div>

          {/* Building Relationships */}
          <div className="w-full p-6 md:w-1/2 lg:w-auto lg:p-0 lg:-top-12">
            <div className="h-full p-6 shadow-xl bg-red-600 text-white">
              <div className="mb-12 mt-2 flex h-6 w-6 items-center justify-center bg-white text-red-600">
                <FaUsers className="relative left-5 top-4 text-5xl" />
              </div>
              <h4 className="mb-6 text-2xl font-semibold">Building Relationships</h4>
              <p className="mb-6 font-light">
                We believe in connecting with our clients to understand their vision, ensuring a personalized experience.
              </p>
            </div>
          </div>

          {/* Creative Vision */}
          <div className="w-full p-6 md:w-1/2 lg:w-auto lg:p-0">
            <div className="h-full p-6 shadow-xl bg-white">
              <div className="mb-12 mt-2 flex h-6 w-6 items-center justify-center bg-gray-800 text-red-500">
                <FaLeaf className="relative left-5 top-4 text-5xl" />
              </div>
              <h4 className="mb-6 text-2xl font-semibold">Creative Vision</h4>
              <p className="mb-6 font-light">
                Our imaginative approach to photography combines technical skill with artistic expression, resulting in beautiful images.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </motion.div>
  );
}
