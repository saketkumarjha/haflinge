import HeroSection from "../components/sections/Hero";
import aboutImg from "../assets/images/about/about.jpg";

export default function AboutPage() {
  return (
    <>
      <HeroSection
        imgSrc={aboutImg}
        h1Content="About i10AI"
        pContent="Embark on your Industrial Revolution journey with our cutting-edge AI solutions"
      />
      <section className="py-12 px-0 sm:px-4 bg-gray-50 flex flex-col gap-5">
        <div className="container mx-auto px-0 sm:px-6 w-full sm:w-full md:w-full lg:w-[75vw]">
          <div className="px-4 sm:px-0">
            <h1 className="text-3xl text-black font-nunito font-semibold">
              About i10Ai Technologies
            </h1>

            <p className="text-gray-700 text-1xl w-full mt-7 mx-auto ">
              i10Ai Technologies Pvt Ltd. is a leading provider of innovative
              solutions in the fields of Electrical and electronics engineering,
              Industrial Automation & Renewable energy. Established in 2020
              i10Ai Technologies has a strong reputation for delivering
              high-quality products and services to its customers in various
              industries, including Power Transmission & Distribution,
              Industrial Automation, Oil & Gas, telecommunications, renewable
              energy, transportation, Automotive, Pharma, and consumer
              electronics.
            </p>
            <p className="text-gray-700 text-1xl w-full mt-7 mx-auto  ">
              i10Ai Technologies core competencies lie in the areas of
              Industrial Automation, Electrical connector, Renewable Energy, EV
              Charger, power electronics, electrical systems design, and control
              systems engineering. The company&apos;s team of highly skilled
              engineers and technicians use cutting-edge technologies and tools
              to design, develop, and manufacture custom solutions that meet the
              specific requirements of each customer.
            </p>
            <p className="text-gray-700 text-1xl w-full mt-7 mx-auto  ">
              In the power electronics sector, i10Ai Technologies offers a wide
              range of products and services, including DC-DC converters, AC-DC
              power supplies, and inverters. The company&apos;s products are
              renowned for their high efficiency, reliability, and durability,
              making them ideal for use in a variety of applications. i10Ai
              Technologies is committed to providing its customers with the
              highest level of quality and service. The company operates a
              state-of-the-art manufacturing facility, equipped with the latest
              technologies and equipment, to ensure that all products and
              services meet the highest standards of quality and performance.
            </p>
            <p className="text-gray-700 text-1xl w-full mt-7 mx-auto  ">
              In conclusion, i10Ai Technologies Company is a trusted provider of
              electrical and electronics solutions for a wide range of
              industries. With its commitment to innovation, quality, and
              customer service, i10Ai Technologies is well-positioned to
              continue its success and growth in the years to come...
            </p>
          </div>
        </div>
        <div className="container mx-auto px-0 sm:px-6 w-full sm:w-full md:w-full lg:w-[75vw]">
          <div className="px-4 sm:px-0">
            <h1 className="text-3xl text-black font-nunito ">Our Mission</h1>

            <p className="text-gray-700 text-1xl w-full mt-7 mx-auto  ">
              i10Ai Technologies Pvt Ltd. is a leading provider of innovative
              solutions in the fields of Electrical and electronics engineering,
              Industrial Automation & Renewable energy. Established in 2020
              i10Ai Technologies has a strong reputation for delivering
              high-quality products and services to its customers in various
              industries, including Power Transmission & Distribution,
              Industrial Automation, Oil & Gas, telecommunications, renewable
              energy, transportation, Automotive, Pharma, and consumer
              electronics.
            </p>
            <p className="text-gray-700 text-1xl w-full mt-7 mx-auto  ">
              i10Ai Technologies core competencies lie in the areas of
              Industrial Automation, Electrical connector, Renewable Energy, EV
              Charger, power electronics, electrical systems design, and control
              systems engineering. The company&apos;s team of highly skilled
              engineers and technicians use cutting-edge technologies and tools
              to design, develop, and manufacture custom solutions that meet the
              specific requirements of each customer.
            </p>
            <p className="text-gray-700 text-1xl w-full mt-7 mx-auto  ">
              In the power electronics sector, i10Ai Technologies offers a wide
              range of products and services, including DC-DC converters, AC-DC
              power supplies, and inverters. The company&apos;s products are
              renowned for their high efficiency, reliability, and durability,
              making them ideal for use in a variety of applications. i10Ai
              Technologies is committed to providing its customers with the
              highest level of quality and service. The company operates a
              state-of-the-art manufacturing facility, equipped with the latest
              technologies and equipment, to ensure that all products and
              services meet the highest standards of quality and performance.
            </p>
            <p className="text-gray-700 text-1xl w-full mt-7 mx-auto  ">
              In conclusion, i10Ai Technologies Company is a trusted provider of
              electrical and electronics solutions for a wide range of
              industries. With its commitment to innovation, quality, and
              customer service, i10Ai Technologies is well-positioned to
              continue its success and growth in the years to come...
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
