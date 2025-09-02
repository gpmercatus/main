import React from "react";
import tution from "../assets/real_estate/tution.png";
import small_business from "../assets/real_estate/smallbusiness.png";
import salon from "../assets/real_estate/salon.png";
import realestate from "../assets/real_estate/realestate.png";
import promotion from "../assets/real_estate/promotions.png";

function Ideal_section() {
  const services = [
    {
      title: "Tution & Coaching Centers",
      description:
        "Parents search for trusted coaching; ads make sure they find you first.",
      image: tution,
    },
    {
      title: "Startups & Small Businesses",
      description: "Advertising turns small brands into big names.",
      image: small_business,
    },
    {
      title: "Real Estate Projects",
      description: "Strong visibility means faster bookings and higher sales.",
      image: realestate,
    },
    {
      title: "Salons, Clinics, Fitness Studios",
      description: "Ads turn one-time visitors into loyal customers.",
      image: salon,
    },
    {
      title: "Event & Festival Promotions",
      description:
        "Events are temporary, but advertising creates lasting buzz.",
      image: promotion,
    },
  ];

  const reasons = [
    "Photography reports as proof-of-work",
    "Verified local partners and area mappers",
    "Affordable pricing & real-time tracking",
    "Transparent campaign reporting",
    "Focused on offline results that matter",
  ];

  const packages = [
    {
      name: "Magazine Feature",
      highlights: "1/2 or full-page ad in 500+ print copies",
      price: "₹1,999",
    },
    {
      name: "Starter Pack",
      highlights: "1,000 pamphlets + local distribution",
      price: "₹2,999",
    },
    {
      name: "Society Reach",
      highlights: "Margin area delivery in 3+ societies",
      price: "₹3,500",
    },
    {
      name: "Visibility Max",
      highlights: "5,000 pamphlets + posters + auto ads",
      price: "₹11,999",
    },
    {
      name: "Custom Campaign",
      highlights: "We design as per your goal",
      price: "On Request",
    },
  ];

  return (
    <section id="ideal-for" className="w-full py-20 bg-[#2f3542] text-white">
      <div className="max-w-screen-2xl mx-auto px-6 flex flex-col gap-y-8">
        {/* Section Label */}
        <p className="text-[#fccd0d] text-xl font-semibold text-center">
          IDEAL FOR
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Services We Offer
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#3b4252] to-[#2f3542] p-4 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300"
            >
              <div className="w-full h-40 flex items-center justify-center mb-4">
                <img
                  src={service.image}
                  alt={`${service.title} icon`}
                  className="h-full object-contain rounded-full"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg md:text-[18px] font-semibold mb-2 text-[#fccd0d]">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-[16px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose & Packages Section */}
      <div className="max-w-screen-2xl mx-auto px-6 mt-16 flex flex-col lg:flex-row gap-10">
        {/* Left Column */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#fccd0d]">
            Why Choose GP Mercatus?
          </h2>
          <ul className="space-y-4">
            {reasons.map((reason, index) => (
              <li
                key={index}
                className="flex gap-3 items-center bg-[#3b4252] p-4 rounded-xl shadow hover:shadow-2xl transition"
              >
                <span className="text-green-400 text-[24px] mt-1">✔</span>
                <p className="text-gray-200">{reason}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-[#fccd0d] mb-6">
            Sample Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-[#3b4252] rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300"
              >
                <h3 className="text-lg font-semibold mb-2 text-[#fccd0d]">
                  {pkg.name}
                </h3>
                <p className="text-gray-300 mb-4">{pkg.highlights}</p>
                <p className="text-xl font-bold text-green-400">{pkg.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ideal_section;
