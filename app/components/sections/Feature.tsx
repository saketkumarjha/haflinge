"use client";

import ZigzagSection from "../sections/ZigzagSection";
import image from "../../assets/images/solar-plates.jpg";

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
      imageSrc: image,
      alt: "Energy storage battery system",
      description:
        "We develop cutting-edge energy storage solutions that help balance supply and demand, provide backup power, and enable greater renewable energy integration. Our energy storage systems utilize advanced battery technology to store excess power for use during peak demand periods or outages. These systems can be scaled to meet the needs of individual homes, commercial buildings, or utility-scale applications. We offer customized solutions that consider factors such as load profile, space constraints, and budget requirements.",
    },
  ],
};

export default function FeaturesPage() {
  return (
    <>
      <ZigzagSection
        title={featuresData.title}
        description={featuresData.description}
        items={featuresData.items}
        layout="alternating"
        showMoreButton={true}
        backgroundColor="bg-gray-50"
      />

      {/* About company section can be placed here */}
      <div className="container mx-auto px-4 sm:px-6 w-full sm:w-full md:w-full lg:w-[75vw] py-12 ">
        <h1 className="text-3xl text-black font-nunito font-semibold">
          About i10Ai Technologies
        </h1>

        <p className="text-gray-900 text-1xl w-full mt-7 mx-auto font-nunito font-semibold">
          i10Ai Technologies Pvt Ltd. is a company that provides
          high-quality solutions in the fields of Electrical - electronics
          engineering & Renewable energy. We are committed to delivering
          innovative products and services to our customers in various
          industries. Our team is dedicated to creating a sustainable future
          with our cutting-edge technologies.
        </p>
      </div>
    </>
  );
}
