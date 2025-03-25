"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import image from "../assets/images/industries/wires.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import HeroSection from "../components/sections/Hero";
import heroindustry from "../assets/images/industry/heroindustry.jpeg";

interface IndustryCardProps {
  title: string;
  imageSrc: string | StaticImport;
  alt: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({
  title,
  imageSrc,
  alt,
}) => {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="overflow-hidden h-48 sm:h-56 md:h-64 lg:h-72 rounded-md shadow-md">
        <Image
          src={imageSrc}
          alt={alt}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <h3 className="text-center font-bold text-lg md:text-xl mt-4 text-black">
        {title}
      </h3>
    </motion.div>
  );
};

const IndustriesSection: React.FC = () => {
  // Industry data
  const industries = [
    {
      title: "RAILWAY INDUSTRIES",
      imageSrc: image, // Replace with your actual image path
      alt: "High-speed train on railway tracks",
    },
    {
      title: "POWER GENERATION",
      imageSrc: image, // Replace with your actual image path
      alt: "Power generation station with electrical equipment",
    },
    {
      title: "RENEWABLE ENERGY",
      imageSrc: image, // Replace with your actual image path
      alt: "Solar panels with sunset",
    },
    {
      title: "AUTOMATION SOLUTIONS",
      imageSrc: image, // Replace with your actual image path
      alt: "Industrial automation equipment",
    },
    {
      title: "AUTOMATION SOLUTIONS",
      imageSrc: image, // Replace with your actual image path
      alt: "Industrial automation equipment",
    },
  ];

  return (
    <>
      <HeroSection
        imgSrc={heroindustry}
        h1Content="Technology Change future"
        pContent="Our Technology Change future"
      />
      <section className="py-12 px-0 sm:px-4 bg-gray-50">
        <div className="container mx-auto px-0 sm:px-6 w-full sm:w-full md:w-full lg:w-[75vw]">
          {/* Header and Text Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              INDUSTRIES
            </h1>
            <p className="text-base md:text-lg text-gray-700 mx-auto max-w-4xl px-4 sm:px-6">
              As an electrical and electronics industrial solution provider, we
              are dedicated to delivering cutting-edge solutions that empower
              businesses in the ever-evolving technological landscape. Our
              expertise lies in providing comprehensive solutions tailored to
              meet the unique needs of our clients. We offer a wide range of
              services, including design, installation, and maintenance of
              electrical and electronics systems, as well as automation, control
              systems, and energy management solutions. With a team of highly
              skilled professionals and access to the latest technologies, we
              ensure that our clients receive innovative and efficient solutions
              that drive productivity and enhance operational efficiency.
              Whether it&apos;s optimizing manufacturing processes, improving
              energy efficiency, or implementing smart systems, we are committed
              to delivering reliable and sustainable solutions that exceed
              expectations. Partner with us and let us empower your business
              with the power of electrical and electronics innovation.
            </p>
          </motion.div>

          {/* Industry Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-0">
            {industries.map((industry, index) => (
              <IndustryCard
                key={index}
                title={industry.title}
                imageSrc={industry.imageSrc}
                alt={industry.alt}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustriesSection;
