"use client";
import React from "react";
import Image from "next/image";
// import { motion } from "framer-motion"; // Import Framer Motion
import image from "../assets/images/productImg/Collection of metal pipes.jpg";
import image2 from "../assets/images/mediaPartner/partner.png";
import HeroSection from "../components/sections/Hero";
import ZigzagSection from "../components/sections/ZigzagSection";
import solarhero from "../assets/images/solar/solarhero.jpeg";
// Features data example
const featuresData = {
  title: "Our Features",
  description:
    "Discover the innovative solutions we offer to help build a sustainable future. Our technologies combine cutting-edge engineering with environmental responsibility.",
  items: [
    {
      title: "Solar Energy Solutions",
      imageSrc: image,
      alt: "Solar energy panels installation",
      description:
        "Our innovative solar energy solutions provide clean, renewable power for residential and commercial applications. We offer comprehensive solar panel installation and maintenance services. At i10Ai Technologies, we design custom solar systems that maximize energy production while minimizing costs. Our team of experts handles everything from initial assessment to installation and ongoing maintenance. We use the latest solar technology to ensure optimal performance and longevity.Our innovative solar energy solutions provide clean, renewable power for residential and commercial applications. We offer comprehensive solar panel installation and maintenance services. At i10Ai Technologies, we design custom solar systems that maximize energy production while minimizing costs. Our team of experts handles everything from initial assessment to installation and ongoing maintenance. We use the latest solar technology to ensure optimal performance and longevity.",
    },
    {
      title: "Smart Grid Technology",
      imageSrc: image,
      alt: "Smart grid technology system",
      description:
        "Our smart grid solutions optimize electricity distribution networks, improving reliability and efficiency. We integrate advanced monitoring and control systems. Our smart grid technologies enable real-time monitoring of power flow, automated fault detection, and dynamic load balancing. This results in reduced outages, lower operational costs, and better integration of renewable energy sources. We provide end-to-end solutions including hardware installation, software implementation, and staff training.",
    },
    {
      title: "Energy Storage Systems",
      imageSrc: image2,
      alt: "Energy storage battery system",
      description:
        "We develop cutting-edge energy storage solutions that help balance supply and demand, provide backup power, and enable greater renewable energy integration. Our energy storage systems utilize advanced battery technology to store excess power for use during peak demand periods or outages. These systems can be scaled to meet the needs of individual homes, commercial buildings, or utility-scale applications. We offer customized solutions that consider factors such as load profile, space constraints, and budget requirements.",
    },
  ],
};
// Services Section Component
const ServicesSection: React.FC = () => {
  return (
    <>
      <HeroSection
        imgSrc={solarhero}
        h1Content="Solar Energy"
        pContent="You can save money by investing in solar energy."
      />
      <section className="py-12 px-0 sm:px-4 bg-gray-50">
        <div className="container mx-auto px-0 sm:px-6 w-full sm:w-full md:w-full lg:w-[75vw] flex flex-col items-start">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full mb-16">
            <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
              <h1 className="text-black text-4xl sm:text-5xl font-bold">
                Renewable Energy Solution
              </h1>
              <p className="text-black mt-4">
                Since 2020, we have led the effort to provide the best solar
                solutions to home owners and businesses. We live by our motto
                Always at your service
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <Image
                src={image}
                alt="Renewable Energy"
                height={400}
                width={400}
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* What We Offer Section */}
          <div className="w-full mt-16">
            <h2 className="text-black text-4xl sm:text-5xl font-bold mb-8">
              What We Offer
            </h2>

            <div className="flex flex-row md:flex-row gap-8">
              <div className="md:w-1/2">
                <p className="text-black">
                  i10Ai Technologies is what you&apos;d call a full-service
                  solar installation company. What does this mean? Well,
                  companies can exist as sales, installation, or service
                  companies. A solar panel service company might be one that
                  only repairs panels, or offers troubleshooting. A sales
                  company works to get you a decent deal and then would hand you
                  off to a separate installer, and an installer would not be the
                  company you made the deal with but would only be the one doing
                  the work.
                </p>
              </div>

              <div className="md:w-1/2">
                <p className="text-black">
                  i10Ai Technologies offer all three functions. We get you a
                  great deal on a custom-designed solar system, install that
                  solar system for you, and then take care of you with warranty
                  service, and troubleshooting throughout the time you run your
                  panels for Home & commercial / Industrial application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ZigzagSection
        title={featuresData.title}
        description={featuresData.description}
        items={featuresData.items}
        layout="alternating"
        showMoreButton={true}
        backgroundColor="bg-gray-50"
      />
    </>
  );
};

export default ServicesSection;
