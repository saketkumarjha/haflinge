"use client"; // Required for client-side animations in Next.js

import React from "react";
import { motion } from "framer-motion";
import ZigzagSection from "../components/sections/ZigzagSection";
import image from "../assets/images/productImg/Collection of metal pipes.jpg";
import HeroSection from "../components/sections/Hero";
import WaterElectrolysis from "../components/sections/WaterElectrolysis";
import hydrogenhero from "../assets/images/hydrogen/hydrogenhero.jpg";
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
  ],
};

function Hydrogen() {
  return (
    <>
      <HeroSection
        imgSrc={hydrogenhero}
        h1Content="Hydrogen Energy"
        pContent="Hydrogen is a light, odorless gas, which, given enough time, turns into people."
      />
      <section className="py-12 px-0 sm:px-4 bg-gray-50">
        <div className="container mx-auto px-0 sm:px-6 w-full sm:w-full md:w-full lg:w-[75vw] flex flex-col items-start">
          {/* Hero Section */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center w-full mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="md:w-5/12 mb-8 md:mb-0"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                We are Building a Sustainable Future
              </h1>
              <motion.ul
                className="list-disc pl-5 space-y-2 text-gray-700"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.3,
                    },
                  },
                }}
              >
                {[
                  "Energy Solutions",
                  "Global Expertise",
                  "End To End Services",
                  "Reliability & Performance",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              className="md:w-7/12"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative">
                <motion.div
                  className="text-center mb-4"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h2 className="text-lg sm:text-xl font-semibold">
                    <span className="text-green-500">GREEN HYDROGEN</span>
                    <span className="text-gray-300">
                      {" "}
                      - 100% RENEWABLE ENERGY
                    </span>
                  </h2>
                </motion.div>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {/* Renewable Electricity */}
                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="relative h-24 w-24 sm:h-32 sm:w-32 mb-2">
                      <motion.svg
                        viewBox="0 0 100 100"
                        className="w-full h-full"
                        initial={{ scale: 0.9, opacity: 0.5 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                      >
                        <g stroke="lightgray" strokeWidth="1" fill="none">
                          <rect
                            x="10"
                            y="50"
                            width="30"
                            height="30"
                            fill="#e7f6e7"
                          />
                          <motion.line
                            x1="25"
                            y1="10"
                            x2="25"
                            y2="50"
                            stroke="#9aca3c"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.2, delay: 1.2 }}
                          />
                          <motion.circle
                            cx="25"
                            cy="10"
                            r="8"
                            fill="none"
                            stroke="#9aca3c"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 1.4 }}
                          />
                          <motion.path
                            d="M15,20 C25,10 35,30 45,20"
                            stroke="#9aca3c"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 1.6 }}
                          />
                        </g>
                      </motion.svg>
                      <motion.div
                        className="absolute top-0 left-2 text-cyan-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.8 }}
                      >
                        O<sub>2</sub>
                      </motion.div>
                    </div>
                    <motion.p
                      className="text-xs sm:text-sm text-green-500 text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.9 }}
                    >
                      RENEWABLE ELECTRICITY
                    </motion.p>
                  </motion.div>

                  {/* Electrolysis */}
                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="relative h-24 w-24 sm:h-32 sm:w-32 mb-2">
                      <motion.svg
                        viewBox="0 0 100 100"
                        className="w-full h-full"
                        initial={{ scale: 0.9, opacity: 0.5 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                      >
                        <g stroke="lightgray" strokeWidth="1" fill="none">
                          <rect
                            x="30"
                            y="20"
                            width="40"
                            height="60"
                            rx="2"
                            fill="#eaf8fa"
                          />
                          <motion.circle
                            cx="50"
                            cy="40"
                            r="3"
                            fill="#00a3c7"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 1.5 }}
                          />
                          <motion.circle
                            cx="50"
                            cy="50"
                            r="3"
                            fill="#00a3c7"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 1.7 }}
                          />
                          <motion.circle
                            cx="50"
                            cy="60"
                            r="3"
                            fill="#00a3c7"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 1.9 }}
                          />
                        </g>
                      </motion.svg>
                      <motion.div
                        className="absolute -top-2 right-2 text-green-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2.0 }}
                      >
                        H<sub>2</sub>
                      </motion.div>
                    </div>
                    <motion.p
                      className="text-xs sm:text-sm text-green-500 text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2.1 }}
                    >
                      ELECTROLYSIS
                    </motion.p>
                  </motion.div>

                  {/* Renewable Hydrogen */}
                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="relative h-24 w-24 sm:h-32 sm:w-32 mb-2">
                      <motion.svg
                        viewBox="0 0 100 100"
                        className="w-full h-full"
                        initial={{ scale: 0.9, opacity: 0.5 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                      >
                        <g stroke="lightgray" strokeWidth="1" fill="none">
                          <motion.path
                            d="M50,10 C70,10 70,50 50,50 C30,50 30,10 50,10"
                            fill="#eaf8fa"
                            stroke="#00a3c7"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.2, delay: 1.6 }}
                          />
                          <motion.circle
                            cx="70"
                            cy="30"
                            r="15"
                            fill="#e7f6e7"
                            stroke="#9aca3c"
                            strokeWidth="1"
                            initial={{ pathLength: 0, fillOpacity: 0 }}
                            animate={{ pathLength: 1, fillOpacity: 1 }}
                            transition={{ duration: 1, delay: 1.8 }}
                          />
                          <motion.text
                            x="65"
                            y="35"
                            fill="#9aca3c"
                            fontSize="12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 2.0 }}
                          >
                            H
                            <tspan fontSize="8" dy="2">
                              2
                            </tspan>
                          </motion.text>
                        </g>
                      </motion.svg>
                    </div>
                    <motion.p
                      className="text-xs sm:text-sm text-green-500 text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2.2 }}
                    >
                      RENEWABLE HYDROGEN
                    </motion.p>
                  </motion.div>
                </div>

                {/* Arrows connecting the elements */}
                <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 -z-10 hidden sm:block">
                  <motion.svg
                    viewBox="0 0 100 50"
                    className="w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.4 }}
                  >
                    <g>
                      <motion.path
                        d="M20,25 H40"
                        stroke="#00a3c7"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 2.5 }}
                      />
                      <motion.path
                        d="M60,25 H80"
                        stroke="#00a3c7"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 2.7 }}
                      />
                      <motion.polygon
                        points="38,21 46,25 38,29"
                        fill="#00a3c7"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 2.6 }}
                      />
                      <motion.polygon
                        points="78,21 86,25 78,29"
                        fill="#9aca3c"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 2.8 }}
                      />
                    </g>
                  </motion.svg>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Quote Section */}
          <motion.div
            className="w-full mt-4 text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <motion.p
              className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.4 }}
            >
              "We believe that with our solutions we can provide affordable
              green hydrogen and with this locally produced green hydrogen we
              can make a significant contribution to reducing the CO2 footprint
              and accelerating the energy transition:
              <motion.span
                className="font-bold"
                initial={{ color: "#374151" }}
                animate={{ color: "#047857" }}
                transition={{ duration: 1, delay: 3.0 }}
              >
                {" "}
                The Future is Now!
              </motion.span>
              "
            </motion.p>
          </motion.div>
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
      <WaterElectrolysis />
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
}

export default Hydrogen;
