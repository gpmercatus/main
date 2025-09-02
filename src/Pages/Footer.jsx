import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#fccd0d] transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#fccd0d] transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#fccd0d] transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#fccd0d] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#fccd0d] transition">
                Pamphlet Distribution
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#fccd0d] transition">
                Magazine Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#fccd0d] transition">
                Poster & Wall Advertisements
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#fccd0d] transition">
                Society Flyer Distribution
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              📍RZH-130 a, gali no. 5, near Kidzee school, part 2
                ,Palam Colony
              New Delhi-110077
            </li>
            <li>📧 support@gpmercatus.com</li>
            <li>📞 +91-8826906159 </li>
          </ul>
        </div>

        {/* Company Info (Moved to Right Side) */}
        <div>
          <h3 className="text-white text-2xl font-semibold mb-4">
            GP Mercatus
          </h3>
          <p className="text-sm leading-relaxed mb-6">
            Providing professional advertising solutions to help you grow with
            confidence.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 text-xl">
            <a
              href="https://www.instagram.com/gpmercatus"
              className="hover:text-[#fccd0d] transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/prashant-kumar-921803284/"
              className="hover:text-[#fccd0d] transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/GpMercatus"
              className="hover:text-[#fccd0d] transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            {/* <a
              href="#"
              className="hover:text-[#fccd0d] transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} GP Mercatus. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
