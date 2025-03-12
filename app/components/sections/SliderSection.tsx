import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Define types for slider items
interface SliderItem {
  id: number;
  image: string | StaticImageData;
  heading: string;
  subheading: string;
}

interface ImageSliderProps {
  items: SliderItem[];
  autoPlayInterval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ 
  items, 
  autoPlayInterval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Memoize nextSlide to prevent recreation on every render
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  }, [items.length]); // Add dependencies if needed

  // Memoize prevSlide for consistency
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  }, [items.length]);

  // Reset timer whenever the slide changes
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    timerRef.current = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentIndex, autoPlayInterval, nextSlide]); // Add nextSlide to dependencies

  // Handle pause on hover
  const pauseTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Handle resume on mouse leave
  const resumeTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }
  };

  return (
    <div 
      className="relative w-full overflow-hidden mb-7"
      onMouseEnter={pauseTimer}
      onMouseLeave={resumeTimer}
    >
      {/* Slider container */}
      <div 
        className="relative h-full" 
        style={{ 
          height: "400px", // Default height, will be responsive
        }}
      >
        {/* Map through slider items */}
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Image with responsive sizing */}
            <div className="relative w-full h-full">
              <Image
                src={item.image}
                alt={item.heading}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 360px, (max-width: 1024px) 1009px, 1316px"
                priority={index === 0}
              />
              
              {/* Text overlay */}
              <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-white p-4 md:p-8">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 text-black">{item.heading}</h2>
                <p className="text-sm md:text-lg text-center max-w-2xl text-black">{item.subheading}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all focus:outline-none"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all focus:outline-none"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full focus:outline-none ${
              index === currentIndex 
                ? 'bg-white' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;