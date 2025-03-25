import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WaterElectrolysisSection=() => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    },
  };

  const reasonsList = [
    {
      title: "Clean Hydrogen Production:",
      content: "Water electrolysis is a process that uses electricity to split water molecules into hydrogen and oxygen gases. This enables the production of hydrogen gas without any carbon emissions or air pollution, making it a clean and sustainable method of hydrogen generation. As the world seeks to transition away from fossil fuels and reduce greenhouse gas emissions, water electrolysis plays a crucial role in producing clean hydrogen for various applications."
    },
    {
      title: "Energy Storage:",
      content: "Water electrolysis offers a practical solution for energy storage. Excess renewable energy, such as from wind or solar power, can be used during periods of low demand to produce hydrogen through electrolysis. The generated hydrogen can then be stored and later utilized as a fuel source when energy demand is high or renewable energy sources are unavailable. This capability of water electrolysis helps to address the intermittent nature of renewable energy and contributes to a more stable and reliable energy system."
    },
    {
      title: "Sector Decarbonization:",
      content: "Water electrolysis facilitates the decarbonization of various sectors. Hydrogen produced through electrolysis can be used as a clean fuel for transportation, replacing conventional fossil fuel-based vehicles and reducing carbon emissions. It can also be utilized in industrial processes, such as chemical production and refining, where direct electrification may not be feasible. By integrating electrolysis-produced hydrogen into these sectors, significant progress can be made towards achieving climate goals and reducing overall greenhouse gas emissions."
    },
    {
      title: "Energy Grid Balancing:",
      content: "Water electrolysis provides a means to balance energy grids. Electrolyzers can be flexibly operated based on electricity demand and supply conditions. During times of excess renewable energy generation, electrolyzers can be activated to produce hydrogen, thus helping to stabilize the grid by absorbing surplus electricity. Conversely, during peak demand periods, stored hydrogen can be converted back to electricity through fuel cells or other conversion technologies, supplying power to the grid when needed."
    },
    {
      title: "Resource Availability:",
      content: "Water, the primary input for electrolysis, is an abundant and widely available resource. Unlike other methods of hydrogen production that rely on fossil fuels, water electrolysis allows for a sustainable and unlimited source of hydrogen. This accessibility to water ensures a long-term and reliable supply of hydrogen, promoting energy security and reducing dependency on finite fossil fuel resources."
    }
  ];

  return (
    <section className="py-12 px-0 sm:px-4 bg-gray-50">
      <div className="container mx-auto px-0 sm:px-6 w-full sm:w-full md:w-full lg:w-[75vw] flex flex-col items-start">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="w-full"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800"
          >
            Importance of Water electrolysis
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-700 mb-6"
          >
            Water electrolysis holds significant importance for several reasons:
          </motion.p>
          
          <motion.ol 
            variants={containerVariants}
            className="list-decimal pl-6 space-y-6"
          >
            {reasonsList.map((reason, index) => (
              <motion.li 
                key={index} 
                variants={itemVariants}
                className="text-gray-700"
              >
                <span className="font-semibold">{reason.title}</span> {reason.content}
              </motion.li>
            ))}
          </motion.ol>
          
          <motion.p 
            variants={itemVariants}
            className="mt-8 text-lg text-gray-700 border-t pt-6 border-gray-200"
          >
            In summary, water electrolysis is essential for clean hydrogen production, energy storage, sector decarbonization, energy grid balancing, and utilizing an abundant resource. It serves as a critical technology in the transition towards a sustainable and low-carbon energy future.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WaterElectrolysisSection;