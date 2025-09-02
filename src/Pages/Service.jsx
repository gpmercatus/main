import React from "react";

function Service() {
  const services = [
    {
      title: "Pamphlet Distribution",
      description:
        "Distribute your message straight to doors, hands, and homes with targeted area-specific delivery.",
      image:
        "https://api.iconify.design/mdi/newspaper-variant-multiple.svg?color=%23111827&width=56&height=56",
    },
    {
      title: "Auto Rickshaw Branding",
      description:
        "Turn local transport into moving billboards with rear stickers, panels, and full wraps.",
      image:
        "https://api.iconify.design/mdi/car-outline.svg?color=%23111827&width=56&height=56",
    },
    {
      title: "Poster & Wall Advertisements",
      description:
        "Build strong visibility in tuition centers, shops, markets, and high-footfall areas.",
      image:
        "https://api.iconify.design/mdi/post-outline.svg?color=%23111827&width=56&height=56",
    },
    {
      title: "Banner & Standee Placement",
      description:
        "Catch attention in malls, schools, events, gyms, and clinics with banners and standees.",
      image:
        "https://api.iconify.design/mdi/billboard.svg?color=%23111827&width=56&height=56",
    },
    {
      title: "Shop & Vendor Co-Branding",
      description:
        "Leverage kirana stores, pan counters, and vendors with counter branding and promotional tools.",
      image:
        "https://api.iconify.design/mdi/storefront-outline.svg?color=%23111827&width=56&height=56",
    },
    {
      title: "Society Flyer Distribution",
      description:
        "Target high-density societies with flyers, coupons, and gate/lift area promotions.",
      image:
        "https://api.iconify.design/mdi/home-group.svg?color=%23111827&width=56&height=56",
    },
    {
      title: "Magazine Features",
      description:
        "Advertise in magazines circulated across 500+ societies with half/full-page ads and stories.",
      image:
        "https://api.iconify.design/mdi/book-open-page-variant.svg?color=%23111827&width=56&height=56",
    },
    {
      title: "Add-On Digital Services",
      description:
        "Boost offline campaigns with SEO, QR codes, coupons, and online marketing support.",
      image:
        "https://api.iconify.design/mdi/monitor-cellphone-star.svg?color=%23111827&width=56&height=56",
    },
  ];

  return (
    <section  id="services" className="w-full py-16 bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-6 flex flex-col gap-y-8">
        {/* Section Label */}
        <p className="text-[#fccd0d] text-xl font-semibold text-center">
          Our Services
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
          Smart Advertising & Marketing Solutions
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 hover:-translate-y-1 hover:shadow-2xl transition duration-300 text-center"
            >
              <img
                src={service.image}
                alt={`${service.title} icon`}
                className="w-14 h-14 mx-auto mb-4"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://api.iconify.design/mdi/circle-outline.svg?color=%23111827&width=56&height=56";
                }}
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
