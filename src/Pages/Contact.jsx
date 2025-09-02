import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setResultMessage("");

    emailjs
      .sendForm(
        "service_2gc1has", // ✅ Your EmailJS service ID
        "template_c5mztbe", // ✅ Replace with your EmailJS template ID
        form.current,
        "F4gq5OHhLL-2uFTzY", // ✅ Replace with your EmailJS public key
        {
          time: new Date().toLocaleString(), // ✅ This will fill {{time}}
        }
      )
      .then(
        () => {
          setResultMessage("✅ Message sent successfully!");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setResultMessage("❌ Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full py-16 bg-gray-50 scroll-mt-24"
    >
      <div className="max-w-screen-2xl mx-auto px-6 flex flex-col gap-y-12">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-[#fccd0d] text-xl font-semibold">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Let’s Talk About Your Business
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have questions about our advertising solutions? Fill out the form or
            reach us directly — we’d love to hear from you.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Info */}
          <div className="bg-white shadow-lg rounded-2xl p-10 flex flex-col gap-6 h-full">
            <h3 className="text-2xl font-semibold text-gray-800">
              Contact Information
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Reach us via email, phone, or visit our office. We’re always ready
              to help your business grow.
            </p>
            <ul className="space-y-5 text-gray-700 text-base flex-1">
              <li className="flex items-center gap-3">
                📍{" "}
                <span>
                  RZ-68, Main Rajapuri road, Near Nirankari Bhawan, Uttam Nagar,
                  New Delhi-110059
                </span>
              </li>
              <li className="flex items-center gap-3">
                📧 <span>support@gpmercatus.com</span>
              </li>
              <li className="flex items-center gap-3">
                📞 <span>+91-8826906159</span>
              </li>
              <li className="flex items-center gap-3">
                ⏰ <span>Mon - Sat: 10:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white shadow-lg rounded-2xl p-10 flex flex-col gap-6 h-full"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              Send Us a Message
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Fill out the form below and our team will get back to you as soon
              as possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name" // ✅ matches {{name}}
                placeholder="Your Name"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="email"
                name="email" // ✅ matches {{email}}
                placeholder="Your Email"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            <input
              type="text"
              name="subject" // ✅ matches {{subject}}
              placeholder="Subject"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              name="message" // ✅ matches {{message}}
              rows="6"
              placeholder="Your Message"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 flex-1"
              required
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#fccd0d] hover:bg-[#d4a80a] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 self-start disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Success/Error message */}
            {resultMessage && (
              <p className="mt-3 text-sm text-gray-700">{resultMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
