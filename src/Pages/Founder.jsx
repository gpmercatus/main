import React from "react";
import founder from "../assets/founder.jpeg";

function Founder() {
  return (
    <section className="w-full py-20 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-6 flex md:flex-nowrap flex-wrap gap-8 lg:gap-16 items-center justify-center">
        {/* Founder Details */}
        <div>
          <p className="text-[#fccd0d] text-lg font-semibold mb-3">
            Our Founder
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Meet the Visionary Behind GP Mercatus
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-justify">
            With over 2 years of experience in advertising Services, our founder
            has built GP Mercatus with a mission to help businesses thrive with
            transparency, accuracy, and smart strategies.
          </p>
          <p className="text-gray-600 leading-relaxed text-justify">
            Prashant is the driving force behind GP Mercatus, blending
            creativity with strategy to help brands grow in the digital age.
            With a strong vision for impactful marketing and innovation, he has
            built GP Mercatus into a trusted partner for businesses seeking
            powerful branding and measurable results.
          </p>
        </div>

        {/* Founder Image */}
        <div className="flex flex-col justify-center lg:justify-end">
          <img
            src={founder}
            alt="Founder"
            className="w-72 h-72 md:w-full md:h-full object-cover rounded-2xl shadow-lg"
          />
          <div className="my-4 text-center">
            <p className="text-2xl font-semibold">Prashant Kumar</p>
            <p>Founder & CEO</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;
