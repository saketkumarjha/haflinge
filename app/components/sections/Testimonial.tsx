// app/components/sections/Testimonials.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../animations/FadeIn';

const testimonials = [
  {
    id: 1,
    quote: "i10Ai Tech's solutions have revolutionized our healthcare operations. Our patient satisfaction scores have increased by 28% since implementation.",
    author: "Dr. Sarah Johnson",
    position: "CTO, RegionalCare Hospital Network",
    image: "/api/placeholder/64/64",
  },
  {
    id: 2,
    quote: "The manufacturing solutions provided by i10Ai Tech reduced our downtime by 47%, resulting in significant cost savings and increased productivity.",
    author: "Michael Chen",
    position: "Operations Director, Auto Parts Manufacturing",
    image: "/api/placeholder/64/64",
  },
  {
    id: 3,
    quote: "Our digital banking transformation with i10Ai Tech led to a 156% increase in online transactions and dramatically improved customer satisfaction.",
    author: "Emma Rodriguez",
    position: "Innovation Lead, First Regional Bank",
    image: "/api/placeholder/64/64",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-primary text-white">
      <div className="container">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from the businesses we've helped transform.
            </p>
          </div>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-dark rounded-lg shadow-lg p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-primary-light">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <svg className="w-10 h-10 text-primary-light/30 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.722 6.342c-5.528 0-10.006 4.483-10.006 10.006 0 5.528 4.483 10.006 10.006 10.006 5.528 0 10.006-4.483 10.006-10.006 0-5.528-4.483-10.006-10.006-10.006zM8.179 21.385c-1.224 0-2.217-0.993-2.217-2.217s0.993-2.217 2.217-2.217c1.224 0 2.217 0.993 2.217 2.217s-0.993 2.217-2.217 2.217zM13.264 21.385c-1.224 0-2.217-0.993-2.217-2.217s0.993-2.217 2.217-2.217c1.224 0 2.217 0.993 2.217 2.217s-0.993 2.217-2.217 2.217z"></path>
                  </svg>
                  <p className="text-lg md:text-xl mb-6">{testimonials[currentIndex].quote}</p>
                  <div>
                    <h4 className="font-bold text-lg">{testimonials[currentIndex].author}</h4>
                    <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                  } transition-colors`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}