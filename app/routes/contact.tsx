import { motion } from "framer-motion";
import { textVariants, containerVariants } from "~/data/animationConfig"; // Assuming this file exists
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import nodemailer from "nodemailer";
import { useState } from "react";

// Action function remains unchanged
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const firstname = formData.get("firstname") as string;
  const lastname = formData.get("lastname") as string;
  const phonenumber = formData.get("phonenumber") as string;
  const email = formData.get("email") as string;
  const description = formData.get("description") as string;

  if (!firstname || !lastname || !phonenumber || !email || !description) {
    return json({ error: "All fields are required" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vdeekshithkumar@gmail.com",
      pass: "uoeg mpse swye hlpa", 
    },
  });

  const mailOptions = {
    from: "vdeekshithkumar@gmail.com",
    to: "vdeekshithkumar@gmail.com",
    subject: `New Contact Form Submission from ${firstname} ${lastname}`,
    text: `
      Name: ${firstname} ${lastname}
      Phone: ${phonenumber}
      Email: ${email}
      Message: ${description}
    `,
    html: `
      <h2>New Contact Submission</h2>
      <p><strong>Name:</strong> ${firstname} ${lastname}</p>
      <p><strong>Phone:</strong> ${phonenumber}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${description}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return json({ success: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return json({ error: "Failed to send message. Please try again later." }, { status: 500 });
  }
};

// Updated Contact component
export default function Contact() {
  const actionData = useActionData<{ success?: string; error?: string }>();
  const navigation = useNavigation();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Simulating an API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Optionally, reset the form after submission
      event.target.reset();

      // Hide the success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 2000);
  };

  return (
    <>
      {/* First Section: Marquee Background with Map and Address */}
      <section className="relative min-h-[70vh] sm:min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-300 px-4 sm:px-6 py-6 sm:py-12">
        <div className="absolute inset-0 overflow-hidden z-0">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              animation: "scrollLeft 20s linear infinite",
              whiteSpace: "nowrap",
              marginTop: "0px",
            }}
          >
            {[...Array(4)].map((_, index) => (
              <span
                key={`contact-us-${index}`}
                className="text-[120px] sm:text-[220px] text-gray-500 opacity-10 tracking-wider mx-4 sm:mx-8"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "800" }}
              >
                CONTACT US
              </span>
            ))}
          </div>
        </div>

        <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 sm:gap-12 mt-24 sm:mt-32">
          <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-6 sm:gap-10">
            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-2/3 h-[300px] sm:h-[450px] rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
              style={{ background: "rgba(255, 255, 255, 0.1)" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6009459284305!2d74.84162837483952!3d12.869031287436988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c6dbe9167%3A0xd6cb5347316ccd8d!2sNikhil%20Digital%20Studio%20%26%20Video!5e0!3m2!1sen!2sus!4v1740672504010!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: "none", opacity: 0.8 }}
                allowFullScreen
                loading="lazy"
                title="Shop Location"
              />
            </motion.div>

            <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full md:w-1/2 p-4 sm:p-8 flex flex-col space-y-4 hover:shadow-lg transition-shadow duration-300"
    >
      <h3
        className="text-lg sm:text-3xl font-semibold text-gray-900 mb-4 tracking-wide"
        style={{ fontFamily: '"Taken by Vultures", Sans-serif' }}
      >
        Visit Our Studio
      </h3>
      <div className="space-y-3 text-gray-700">
        <p className="text-xs sm:text-base leading-relaxed">
          <strong>Location:</strong> Nikhil Digital Studio & Video
          <br />
          Ground Floor, Milagres Centre Building, Opp. Pinky Fashions,
          Hampankatta, Mangaluru, Karnataka 575001, India
        </p>
        <p className="text-xs sm:text-base leading-relaxed">
          <strong>Phone:</strong> +91 98452 03348
          <br />
          <strong>Email:</strong> nikhilstudio1996@gmail.com
        </p>
        <p className="text-xs sm:text-base text-gray-600 italic">
          We’re open Monday to Saturday, 9 AM - 6 PM. Walk-ins welcome, or book
          an appointment for a personalized consultation!
        </p>
      </div>
    </motion.div>
          </div>
        </div>
      </section>

{/* Second Section: Contact Info and Form */}
<section className="bg-gray-900 py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row gap-6 sm:gap-8">
          {/* Left Column: Contact Info with Reduced Mobile Font Sizes */}
          <div className="w-full md:w-1/2 text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 sm:mb-4 md:mb-6 tracking-tight">
              Let’s Connect
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-gray-300 mb-2 sm:mb-3 md:mb-4 leading-relaxed">
              Questions? Ideas? Reach out by form or phone!
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
              We’re here to answer your queries and work together to make your big
              day a timeless celebration.
            </p>
            {/* Additional Content with Reduced Mobile Font Sizes */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                At Nikhil Digital Studio & Video, we specialize in capturing the magic
                of your special moments—weddings, engagements, pre-weddings, and more.
                Our expert photographers and cinematographers use state-of-the-art
                equipment to deliver stunning, high-quality memories you’ll cherish
                forever.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                Whether you’re planning an intimate ceremony or a grand celebration,
                we offer customized packages to suit your needs. From candid shots to
                cinematic videos, we ensure every detail is preserved with passion and
                precision.
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full md:w-1/2">
            <Form
              onSubmit={handleSubmit}
              method="post"
              className="space-y-4 sm:space-y-6 bg-gray-800/80 backdrop-blur-lg p-4 sm:p-6 rounded-xl shadow-lg"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col">
                  <label htmlFor="firstname" className="text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    required
                    className="w-full p-2 sm:p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
                    placeholder="First Name"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastname" className="text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    required
                    className="w-full p-2 sm:p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="phonenumber" className="text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phonenumber"
                  id="phonenumber"
                  required
                  pattern="\d{10}"
                  title="Phone number must be exactly 10 digits"
                  className="w-full p-2 sm:p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
                  placeholder="1234567890"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full p-2 sm:p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
                  placeholder="yourmail@example.com"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="description" className="text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                  Your Message
                </label>
                <textarea
                  name="description"
                  id="description"
                  required
                  rows={4}
                  className="w-full p-2 sm:p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 placeholder-gray-400 resize-y text-sm sm:text-base"
                  placeholder="Tell us what’s on your mind..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-indigo-600 text-white text-sm sm:text-lg font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-4 sm:h-5 w-4 sm:w-5 mr-2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </Form>
          </div>
        </div>
      </section>

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
    </>
  );
}