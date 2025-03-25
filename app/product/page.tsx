"use client";

import ZigzagSection from "../components/sections/ZigzagSection";
import image2 from "../assets/images/solar-plates.jpg";
import image from "../assets/images/productImg/mcb.png";
import prdctImg1 from "../assets/images/productImg/Collection of metal pipes.jpg";
import prdctImg2 from "../assets/images/productImg/electric-power-adapter-isolated-white-background.jpg";
import prdctImg3 from "../assets/images/productImg/electrical-cable-energy-technology-equipment-isolated-white.jpg";
import aboutprdct from "../assets/images/productImg/aboutprdct.jpg";
import HeroSection from "../components/sections/Hero";
import ImageSlider from "../components/sections/SliderSection";
import AnimatedProductGrid from "../components/animations/AnimatedProductGrid";

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

const productImages = [
  prdctImg1,
  prdctImg2,
  prdctImg3,
  prdctImg2,
  prdctImg1,
  image,
];

const sliderItems = [
  {
    id: 1,
    image: image,
    heading: "Welcome to Our Platform",
    subheading: "Discover amazing features and services tailored just for you",
  },
  {
    id: 2,
    image: image,
    heading: "Innovative Solutions",
    subheading: "Empowering businesses with cutting-edge technology",
  },
  {
    id: 3,
    image: image,
    heading: "Dedicated Support",
    subheading: "Our team is here to help you every step of the way",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <HeroSection
        imgSrc={aboutprdct}
        h1Content="our innovative product"
        pContent="Embark on your Industrial Revolution journey with our cutting-edge AI solutions"
      />
      <section className="py-12 px-0 sm:px-4 bg-gray-50">
        <div className="container mx-auto px-0 sm:px-6 w-full sm:w-full md:w-full lg:w-[75vw] flex flex-col items-start">
          <h1 className="text-5xl text-black self-center mb-[50px]">
            Our Products
          </h1>
          <h1 className="text-2xl text-black mb-[5px]">
            Xnergy wireless charger for AGV / AMR
          </h1>
          <p className="md:text-lg text-gray-900 sm:text-base lg:text-xl">
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
          </p>
        </div>
      </section>
      <AnimatedProductGrid productImages={productImages} />
      <ZigzagSection
        title={featuresData.title}
        description={featuresData.description}
        items={featuresData.items}
        layout="alternating"
        showMoreButton={true}
        backgroundColor="bg-gray-50"
      />
      <section className="py-12 px-0 sm:px-4 bg-gray50">
        <div className="container mx-auto px-0 sm:px-6 w-full sm:w-full md:w-full lg:w-[75vw] flex flex-col items-start">
          <h1 className="text-5xl text-black self-center mb-[20px]">
            Automotive Connector{" "}
          </h1>
          <p className="md:text-lg text-gray-900 sm:text-base lg:text-xl">
            Whether you have a fleet of robots that&apos;s been bought towards
            the end of the previous century, or robots from tomorrow&apos;s
            state-of-the-art technology, Xnergy&apos;s Universal Contactless
            charging technology works as one charger for all robots that run on
            any batteries.
          </p>
          <AnimatedProductGrid productImages={productImages} />
        </div>
      </section>
      <ImageSlider items={sliderItems} autoPlayInterval={2000} />
    </>
  );
}
