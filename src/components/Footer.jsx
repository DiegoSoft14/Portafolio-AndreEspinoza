// components/Footer.jsx
import { FaGithub, FaLinkedinIn, FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 pt-12 pb-16">

        {/* ===== MAIN CONTENT ===== */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-12">

          {/* ===== NAME + DESCRIPTION ===== */}
          <div className="text-center lg:text-left mt-6">
            <h2 className="text-2xl font-bold mb-3">
              <span className="text-white">Diego</span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {" "}Espinoza
              </span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xs mt-2 leading-relaxed">
              Cybersecurity & Web Development focused on secure and scalable solutions.
            </p>
          </div>

          {/* ===== NAVIGATION LINKS ===== */}
          <div className="flex gap-6 text-sm mt-2">
            <a href="#home" className="text-gray-400 hover:text-cyan-400 transition">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-cyan-400 transition">
              About
            </a>
            <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition">
              Skills
            </a>
            <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition">
              Contact
            </a>
          </div>

          {/* ===== SOCIAL MEDIA CON DISEÑO DEL HERO ===== */}
          <div className="flex items-center gap-4 mt-2">
            {/* GitHub */}
            <a 
              href="https://github.com/DiegoSoft14" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative focus:outline-none focus:ring-0 active:outline-none"
              aria-label="GitHub Profile"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaGithub className="relative w-8 h-8 text-gray-300 hover:text-white transition-colors duration-300 group-hover:scale-110 transform select-none" />
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/feed/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative focus:outline-none focus:ring-0 active:outline-none"
              aria-label="LinkedIn Profile"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaLinkedinIn className="relative w-8 h-8 text-gray-300 hover:text-white transition-colors duration-300 group-hover:scale-110 transform select-none" />
            </a>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/andre.espinoza.1690/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative focus:outline-none focus:ring-0 active:outline-none"
              aria-label="Facebook Profile"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaFacebookSquare className="relative w-8 h-8 text-gray-300 hover:text-white transition-colors duration-300 group-hover:scale-110 transform select-none" />
            </a>
          </div>

        </div>

        {/* ===== DIVIDER LINE ===== */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* ===== COPYRIGHT ===== */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-2">
            © {new Date().getFullYear()} Diego Espinoza. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Secure by design · Built with passion
          </p>
        </div>

      </div>
    </footer>
  );
}