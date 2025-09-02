import React from "react";
import PartnerShip from "../assets/Partnership.png";
import { MdManageAccounts } from "react-icons/md";

const About = () => {
  const services = [
    {
      id: 1,
      title: "Best Quality Services",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
    },
    {
      id: 2,
      title: "Trusted Advertising Partner",
      desc: "Delivering transparent and reliable Advertising solutions tailored to your business needs.",
    },
    {
      id: 3,
      title: "Professional Guidance",
      desc: "Our team ensures expert advice to help you grow with confidence and security.",
    },
  ];

  return (
    <section id="about" className="bg-white text-black pt-12 pb-16">
      <div className="max-w-screen-2xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={PartnerShip}
            alt="Business Partnership Illustration"
            className="max-w-[90%] lg:max-w-full h-auto object-contain rounded-xl"
            loading="lazy"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-y-8 text-center lg:text-left">
          <div>
            <p className="text-lg md:text-xl uppercase text-[#fccd0d] font-semibold tracking-wide">
              Who We Are
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight capitalize mt-2 mb-6">
              GP Mercatus – Your Advertising Solution
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed text-justify">
              GP Mercatus is the offline and online marketing company. We specialize in high-impact, hyperlocal advertising campaigns through physical visibility channels that drive real results for small businesses, educational institutes, startups, and service providers.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex items-center gap-x-4 border-b border-gray-200 pb-4"
              >
                <MdManageAccounts className="text-4xl md:text-5xl text-[#fccd0d] flex-shrink-0" />
                <div>
                  <h4 className="text-xl md:text-2xl font-semibold capitalize text-left">
                    {service.title}
                  </h4>
                  {/* <p className="text-base md:text-[17px] text-gray-600 text-left">
                    {service.desc}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
