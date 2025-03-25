"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import hero from "../../assets/images/hero.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

// Define the interface for the props
interface HeroSectionProps {
  imgSrc: string | StaticImport; // Make imgSrc optional
  h1Content: string; // Make h1Content optional
  pContent?: string; // pContent is already optional
}

// Set default values for the props
const defaultProps: HeroSectionProps = {
  imgSrc: hero,
  h1Content: "Predict the future by <br /> creating it",
  pContent: "YOU DIDN'T COME THIS FAR TO STOP.",
};

// Use default parameter to merge defaultProps with incoming props
export default function HeroSection({
  imgSrc = defaultProps.imgSrc,
  h1Content = defaultProps.h1Content,
  pContent = defaultProps.pContent,
}: HeroSectionProps) {
  return (
    <div className="container relative w-full h-[60vh] sm:h-[60vh] md:h-[30vh] lg:h-[60vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src={imgSrc}
        alt="Technology background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Content Container */}
      <div className="absolute bottom-5 sm:bottom-5 md:bottom-10 lg:bottom-20 sm:top-auto top-5">
        <div className="px-4 sm:px-[0px] md:px-[200px] lg:px-[250px]">
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="text-black text-center sm:text-left"
          >
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 0 text-yellow-500"
              dangerouslySetInnerHTML={{ __html: h1Content }}
            />
            <p className="text-base sm:text-lg md:text-xl mb-8 text-yellow-500">
              {pContent}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
