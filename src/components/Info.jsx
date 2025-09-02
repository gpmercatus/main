import React from "react";

function Info() {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-screen-2xl mx-auto px-6 flex flex-col gap-y-10">
        {/* Heading */}
        <div>
          <p className="text-[#fccd0d] text-xl font-semibold mb-4">
            Creative Advertising & Marketing Solutions
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold capitalize">
            Empowering Businesses with Smarter Advertising
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col text-[17px] gap-y-10 text-justify leading-relaxed">
          <p>
            At GP Mercatus, we craft powerful advertising strategies that help
            brands stand out in today’s competitive market. From digital
            campaigns and brand storytelling to social media management and
            creative design, we create impactful experiences that connect with
            your audience and build long-lasting brand loyalty.
          </p>
          <p>
            Whether you’re a startup looking to establish your identity or an
            established business seeking to scale, our team delivers customized
            marketing solutions to amplify your reach. We specialize in creative
            advertising, SEO, performance marketing, and innovative content
            strategies—all designed to elevate your brand presence and drive
            measurable growth.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Info;
