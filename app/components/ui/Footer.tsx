"use client";

import Link from "next/link";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "../../config/siteConfig";
import { motion } from "framer-motion";

interface FooterProps {
  copyrightYear?: number;
}

const Footer: React.FC<FooterProps> = ({
  copyrightYear = new Date().getFullYear(),
}) => {
  // Animation variants for elements coming from behind
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Updated variants to create a "coming from behind" effect
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      z: -100,  // Start from behind
      scale: 0.7,  // Smaller when further away
      rotateX: 10, // Slight perspective tilt
    },
    visible: { 
      opacity: 1, 
      z: 0,     // Move to normal z position
      scale: 1, // Normal size
      rotateX: 0, // No tilt
      transition: { 
        type: "spring", 
        stiffness: 80,
        damping: 20
      }
    },
  };

  return (
    <footer className="bg-white py-8 border-t border-gray-200 relative overflow-hidden">
      <motion.div 
        className="container px-4 sm:px-6 w-full md:w-full lg:w-[75vw] mx-auto perspective-[1000px]" // Added perspective
        initial="hidden"
        whileInView="visible"
        viewport={{ once:false, amount: 0.2 }}
        variants={containerVariants}
        style={{ 
          transformStyle: "preserve-3d", // Helps maintain 3D effect for children
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-xl font-bold text-pink-500 mb-4">
              {siteConfig.name}
            </h2>
            <div className="mt-4">
              <h3 className="font-bold text-gray-800">Address</h3>
              <address className="not-italic text-gray-600 mt-2">
                <p>{siteConfig.footer.address.street},</p>
                <p>{siteConfig.footer.address.area},</p>
                <p>
                  {siteConfig.footer.address.city}{" "}
                  {siteConfig.footer.address.country} Pin
                </p>
                <p>{siteConfig.footer.address.pin}</p>
              </address>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-gray-800 mb-4">Contacts</h3>
            <div className="text-gray-600">
              {siteConfig.footer.contacts.email.map((email, index) => (
                <p key={`email-${index}`}>
                  Email -{" "}
                  <a href={`mailto:${email}`} className="hover:text-pink-500">
                    {email}
                  </a>
                </p>
              ))}
              {siteConfig.footer.contacts.phone.map((phone, index) => (
                <p key={`phone-${index}`}>
                  Ph -{" "}
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="hover:text-pink-500"
                  >
                    {phone}
                  </a>
                </p>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-gray-800 mb-4">
              Subscribe to our newsletter
            </h3>
            <form className="mt-2">
              <label htmlFor="email" className="block text-gray-600 mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <button
                type="submit"
                className="mt-3 px-6 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-500 transition duration-300"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>

        {/* Social Media and Copyright */}
        <motion.div 
          className="mt-8 pt-6 border-t border-gray-200"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link href="https://twitter.com/company" aria-label="Twitter">
                <span className="text-2xl text-gray-700 hover:text-pink-500">
                  <FaTwitter />
                </span>
              </Link>
              <Link href="https://facebook.com/company" aria-label="Facebook">
                <span className="text-2xl text-gray-700 hover:text-pink-500">
                  <FaFacebook />
                </span>
              </Link>
              <Link
                href="https://linkedin.com/company/company"
                aria-label="LinkedIn"
              >
                <span className="text-2xl text-gray-700 hover:text-pink-500">
                  <FaLinkedin />
                </span>
              </Link>
            </div>
            <div className="text-gray-600 text-sm">
              Copyright © {copyrightYear} {siteConfig.name} ®
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;