"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion
import image from "../assets/images/productImg/Collection of metal pipes.jpg";
import image2 from "../assets/images/mediaPartner/partner.png";
import HeroSection from "../components/sections/Hero";
import RfqContactForm from "../components/ui/RfqContactForm";

// Define types for service cards
interface ServiceCardProps {
  title: string;
  description: string;
  extraDescription?: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
}

// Service Card Component
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  extraDescription,
  imageSrc,
  imageAlt,
}) => {
  const [isExpanded, setIsExpanded] = useState(false); // State to manage expanded text

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Initial animation state
      whileInView={{ opacity: 1, y: 0 }} // Animation when in view
      transition={{ duration: 0.5 }} // Animation duration
      viewport={{ once: true }} // Animate only once
      className="flex flex-col"
    >
      <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 bg-white rounded-b-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
        {/* Additional text that expands */}
        {isExpanded && <p className="text-gray-600 mt-3">{extraDescription}</p>}
        {/* Read More Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </motion.div>
  );
};

// Services Section Component
const ServicesSection: React.FC = () => {
  // Sample service data - replace with your actual content
  const services: ServiceCardProps[] = [
    {
      title: "Prompt quotation and reply",
      description:
        "Customers who contact us will be served by our professional and experienced sales staff. From the moment the customer receives the offer, we follow up until we finally reach an agreement.",
      extraDescription:
        "Customers who contact us will be served by our professional and experienced ....",
      imageSrc: image,
      imageAlt: "Person typing on keyboard with email icons",
    },
    {
      title: "Inspection package and delivery",
      description:
        "When processing the order, the order will be confirmed with you in detail; As our customers, we will carry out testing and packaging to ensure the quality of products.",
      extraDescription:
        "Customers who contact us will be served by our professional and experienced ....",
      imageSrc: image,
      imageAlt: "Delivery person handing package to customer",
    },
    {
      title: "Inspection package and delivery",
      description:
        "When processing the order, the order will be confirmed with you in detail; As our customers, we will carry out testing and packaging to ensure the quality of products.",
      extraDescription:
        "Customers who contact us will be served by our professional and experienced ....",
      imageSrc: image,
      imageAlt: "Delivery person handing package to customer",
    },
    {
      title: "Inspection package and delivery",
      description:
        "When processing the order, the order will be confirmed with you in detail; As our customers, we will carry out testing and packaging to ensure the quality of products.",
      extraDescription:
        "Customers who contact us will be served by our professional and experienced ....",
      imageSrc: image,
      imageAlt: "Delivery person handing package to customer",
    },
  ];

  return (
    <>
    
     <HeroSection
        imgSrc={image2}
        h1Content="Xnergy <br /> Universal Contactless Charger"
        pContent="The future of charging is here."
      />
      <section className="py-12 px-0 sm:px-4 bg-gray-50">
        <div className="container mx-auto px-0 sm:px-6 w-full sm:w-full md:w-full lg:w-[75vw] flex flex-col items-start">
          {/* Animated h1 */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }} // Initial state: hidden and off-screen to the left
            whileInView={{ opacity: 1, x: 0 }} // Animate to visible and move to the original position
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
            viewport={{ once: true }} // Animate only once
            className="text-4xl text-black mb-[5px]"
          >
            Our Services
          </motion.h1>

          {/* Animated p */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="md:text-lg text-gray-900 sm:text-base lg:text-lg mb-10"
          >
            Whether you have a fleet of robots that&apos;s been bought towards
            the end of the previous century, or robots from tomorrow&apos;s
            state-of-the-art technology, Xnergy&apos;s Universal Contactless
            charging technology works as one charger for all robots that run on
            any batteries. Along with its generous air gap tolerance and small
            foot print, it allows for non-precision docking and easy integration
            into both your legacy and modernised fleets. Coupled with its fast
            charging capability, Xnergy&apos;s Universal Contactless Charger
            significantly improves your robots uptime at a fraction of the cost.
            Your legacy made relevant today, for tomorrow.
          </motion.p>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-4">
            {services.map((service, index) => (
              <ServiceCard
                key={`service-${index}`}
                title={service.title}
                description={service.description}
                extraDescription={service.extraDescription}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="container relative w-full h-[70vh]  md:h-[50vh] lg:h-[80vh] overflow-hidden mb-7">
        {/* Text positioned at the top */}
        <h1 className="text-black text-2xl font-bold z-10 text-center mt-4 lg:text-4xl">
        PERFECT BRAND SYSTEM
        </h1>

        {/* Background Image covering the rest of the section */}
        <div className="absolute inset-0 top-18 ">

          <Image
            src={image2}
            alt="Technology background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>
      <section className="py-12 px-0 sm:px-4 bg-gray-50"><div className="container mx-auto px-0 sm:px-6 w-full sm:w-full md:w-full lg:w-[75vw] flex flex-col items-start"><RfqContactForm/></div></section>
      
    </>
  );
};

export default ServicesSection;
