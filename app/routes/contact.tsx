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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black px-4 sm:px-6 py-8 sm:py-12">
      {/* Contact Form & Info Section */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 p-6 sm:p-8 bg-gray-900/80 backdrop-blur-lg rounded-xl shadow-lg"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight">
            Let’s Connect
          </h2>
          <p className="text-sm sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            Drop us a message, and we’ll get back to you in no time!
          </p>
  
          <form onSubmit={handleSubmit} method="post" className="space-y-5 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* First Name */}
              <div className="flex flex-col">
                <label htmlFor="firstname" className="text-gray-200 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  required
                  className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 placeholder-gray-500"
                  placeholder="First Name"
                />
              </div>
              {/* Last Name */}
              <div className="flex flex-col">
                <label htmlFor="lastname" className="text-gray-200 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  required
                  className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 placeholder-gray-500"
                  placeholder="Last Name"
                />
              </div>
            </div>
  
            {/* Phone Number */}
            <div className="flex flex-col">
              <label htmlFor="phonenumber" className="text-gray-200 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phonenumber"
                id="phonenumber"
                required
                pattern="\d{10}"
                title="Phone number must be exactly 10 digits"
                className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 placeholder-gray-500"
                placeholder="1234567890"
              />
            </div>
  
            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-200 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 placeholder-gray-500"
                placeholder="yourmail@example.com"
              />
            </div>
  
            {/* Description */}
            <div className="flex flex-col">
              <label htmlFor="description" className="text-gray-200 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                Your Message
              </label>
              <textarea
                name="description"
                id="description"
                required
                rows={4}
                className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 placeholder-gray-500 resize-y"
                placeholder="Tell us what’s on your mind..."
              />
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-indigo-600 text-white text-sm sm:text-lg font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </motion.div>
  
        {/* Location Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col space-y-4 sm:space-y-6 -mt-12 sm:-mt-24"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-4 text-center tracking-wide">
            Visit Us
          </h3>
          <div className="w-full h-72 sm:h-96 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6009459284305!2d74.84162837483952!3d12.869031287436988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c6dbe9167%3A0xd6cb5347316ccd8d!2sNikhil%20Digital%20Studio%20%26%20Video!5e0!3m2!1sen!2sus!4v1740672504010!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Shop Location"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}