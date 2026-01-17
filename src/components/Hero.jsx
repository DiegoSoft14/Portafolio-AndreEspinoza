// components/Hero.jsx
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaFacebookSquare } from "react-icons/fa";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setLoaded(true);
    
    // Detectar si es móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[65vh] md:min-h-[70vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-950 py-8 md:py-4"
    >
      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">

            {/* ================= LEFT - ROBOT (SOLO EN DESKTOP) ================= */}
            {!isMobile && (
              <div className="lg:w-1/2 flex justify-center lg:justify-start order-2 lg:order-1">
                <div className="relative w-full max-w-[700px] h-[300px] md:h-[400px] lg:h-[540px] mx-auto lg:ml-8">
                  {/* ===== FONDO SUAVE ===== */}
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-radial from-cyan-900/20 via-blue-900/5 to-transparent"></div>
                    <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
                  </div>

                  {/* ===== HALO BLANCO SUAVE ===== */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                    <div className="w-[380px] h-[380px] md:w-[480px] md:h-[480px] rounded-full bg-white/5 blur-[160px]"></div>
                  </div>

                  {/* ===== ROBOT ===== */}
                  <div className="relative w-full h-full z-10">
                    <iframe
                      src="https://my.spline.design/robotfollowcursorforlandingpagemc-rDodM7Fm2vaI1CD4Bt8YufZn/?ui=off"
                      title="3D Robot"
                      frameBorder="0"
                      loading="eager"
                      className={`
                        absolute
                        left-1/2
                        -translate-x-1/2
                        -top-20 lg:-top-28
                        w-[160%] h-[160%] md:w-[150%] md:h-[155%]
                        transition-opacity duration-1000
                        ${loaded ? "opacity-100" : "opacity-0"}
                        drop-shadow-[0_0_32px_rgba(225,235,245,0.32)]
                      `}
                      allow="autoplay"
                    />
                  </div>

                  {/* SOMBRA INFERIOR */}
                  <div className="absolute -bottom-12 left-8 right-8 h-20 bg-gradient-to-t from-black/70 to-transparent blur-xl"></div>
                </div>
              </div>
            )}

            {/* ================= RIGHT - CONTENT (OCUPA TODO EL ANCHO EN MÓVIL) ================= */}
            <div className={`${isMobile ? 'w-full' : 'lg:w-1/2'} ${isMobile ? 'order-1' : 'lg:order-2 lg:pl-6'} pt-8 md:pt-12`}>
              
              {/* TITLE */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
                <span className="text-gray-300 text-lg block mb-1">
                  Hi 👋, I'm
                </span>
                <span className="text-white">Diego</span>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {" "}Espinoza
                </span>
              </h1>

              {/* SUBTITLE */}
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-300 leading-snug">
                Pentester & Web Developer
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light tracking-wide mb-6 max-w-lg">
                Cybersecurity-Focused Web Developer. Specialized in building secure and scalable applications with React and Django. I integrate security testing practices (Burp Suite, Nmap) from the development phase to create robust products. Seeking a professional internship where I can contribute my technical skills and learn in a collaborative environment.
              </p>

              <p className="text-blue-400 italic border-l-4 border-blue-500 pl-4 mb-6 leading-relaxed">
                Passionate about merging code with security.
              </p>

              {/* ===== SOCIAL + BUTTONS ===== */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

                {/* SOCIAL LINKS */}
                <div className="flex items-center gap-3">
                  {/* GitHub */}
                  <a 
                    href="https://github.com/DiegoSoft14" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-transparent hover:bg-gray-800/20 transition-all duration-300"
                    aria-label="GitHub Profile"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <FaGithub className="relative z-10 w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </a>

                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/in/diego123456/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-transparent hover:bg-gray-800/20 transition-all duration-300"
                    aria-label="LinkedIn Profile"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <FaLinkedinIn className="relative z-10 w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </a>

                  {/* Facebook */}
                  <a 
                    href="https://www.facebook.com/andre.espinoza.1690/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-transparent hover:bg-gray-800/20 transition-all duration-300"
                    aria-label="Facebook Profile"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <FaFacebookSquare className="relative z-10 w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </a>
                </div>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#contact"
                    className="px-4 py-2.5 md:px-5 md:py-2.5 rounded-lg font-medium text-sm bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white shadow-md transition hover:shadow-lg hover:shadow-blue-500/25 text-center"
                  >
                    Contact Me
                  </a>

                  <a
                    href="https://drive.google.com/file/d/1ic5XDcxNbixps9CcsGzDcQqHtwxHYWhd/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 md:px-5 md:py-2.5 rounded-lg font-medium text-sm border border-gray-700 hover:border-cyan-400 text-gray-300 hover:text-cyan-300 transition flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/10 text-center"
                  >
                    📄 Download CV
                  </a>
                </div>
              </div>

              {/* ===== INDICATORS ===== */}
              <div className="pt-4 border-t border-gray-800/50 mt-6">
                <div className="flex flex-wrap gap-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span>Secure Development</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                    <span>Web Pentesting</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                    <span>DevSecOps</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}