"use client";
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image, {StaticImageData} from "next/image";

// Define the type for the productImages prop
interface AnimatedProductGridProps {
  productImages: StaticImageData[];
}

// The main component for the animated product grid
const AnimatedProductGrid: React.FC<AnimatedProductGridProps> = ({ productImages }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    // Store the current value of sectionRef in a variable
    const currentSectionRef = sectionRef.current;

    // Create an intersection observer to detect when the section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          // When the section comes into view for the first time
          setIsVisible(true);
          setHasAnimated(true);
          // We can stop observing after the first animation
          observer.disconnect();
        }
      },
      {
        // Start animation when 10% of the section is visible
        threshold: 0.1,
      }
    );
    
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }
    
    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, [hasAnimated]);
  
  // Staggered animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };
  
  // Animation variants for individual images
  const itemVariants = {
    hidden: { 
      y: 60, 
      opacity: 0, 
      scale: 0.8, 
      rotateX: 45 
    },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1, 
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    }
  };
  
  return (
    <section ref={sectionRef} className="py-2 px-0 sm:px-4 bg-gray-50">
      <div className="container mx-auto px-0 sm:px-6 w-full sm:w-full md:w-full lg:w-[75vw]">
        <div className="mt-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {productImages.map((image, index: number) => (
              <motion.div
                key={`product-image-${index}`}
                className="relative overflow-hidden rounded-lg shadow-md bg-white"
                variants={itemVariants}
              >
                <div className="aspect-[400/253] w-full">
                  <Image
                    src={image}
                    alt={"Xnergy wireless charger product image"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    quality={90}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedProductGrid;