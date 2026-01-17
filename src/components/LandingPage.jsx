import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import perfil from "../assets/perfil3.png";

export default function LandingPage({ onEnter }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 1200);
  };

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4"></div>
          <p className="text-white/80 text-sm">LOADING...</p>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="landing-page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-50 overflow-hidden bg-black"
        >
          <AnimatePresence>
            {isExiting && (
              <>
                <motion.div
                  initial={{ scale: 0, x: "-50%", y: "-50%" }}
                  animate={{ scale: 4 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-600/20 to-red-600/20 z-50"
                  style={{ opacity: 0.7 }}
                />
                
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ 
                      scale: 0,
                      x: "50%",
                      y: "50%",
                      opacity: 0.8
                    }}
                    animate={{ 
                      scale: 1,
                      x: `calc(50% + ${Math.cos(i * 0.314) * 200}px)`,
                      y: `calc(50% + ${Math.sin(i * 0.314) * 200}px)`,
                      opacity: 0
                    }}
                    transition={{ 
                      duration: 1.2,
                      ease: "easeOut",
                      delay: i * 0.02
                    }}
                    className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-red-400 z-40"
                  />
                ))}
              </>
            )}
          </AnimatePresence>

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0" style={{
              clipPath: 'inset(0 0 10px 0)'
            }}>
              <iframe
                src="https://my.spline.design/motiontrails-8LgmzxrZgpnp3hzJRe0SCRXv/?ui=off"
                title="Animated Paper Boat"
                frameBorder="0"
                className="absolute inset-0 w-full h-full"
                loading="eager"
                style={{
                  transform: 'translateY(60px) scale(1.1)',
                  transformOrigin: 'center'
                }}
                allowFullScreen={false}
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/700"></div>
          </div>

          <div className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center max-w-2xl w-full mt-16 md:mt-0"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                className="mb-8 md:mb-10"
              >
                <div className="relative inline-block">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden">
                    <img
                      src={perfil}
                      alt="Diego Espinoza"
                      className="absolute inset-0 w-full h-full object-contain shadow-2xl"
                    />
                  </div>
                  <div className="absolute -inset-4 md:-inset-6 border-2 border-white/20 rounded-lg animate-spin-slow"></div>
                </div>
              </motion.div>

              <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-wide leading-tight"
              >
                <span className="text-transparent bg-clip-text" style={{ 
                  background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  textShadow: '0 2px 15px rgba(0,0,0,0.3)'
                }}>
                  DIEGO ESPINOZA
                </span>
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "150px" }}
                transition={{ delay: 0.7, duration: 1 }}
                className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-6 md:mb-8"
              ></motion.div>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-xl md:text-2xl lg:text-3xl font-bold text-cyan-300 mb-3 md:mb-4 leading-snug px-4"
                style={{ textShadow: '0 0 20px rgba(103, 232, 249, 0.4)' }}
              >
                CYBERSECURITY ENGINEERING
              </motion.h2>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-300 mb-6 md:mb-8 leading-snug px-4"
                style={{ textShadow: '0 0 20px rgba(147, 197, 253, 0.4)' }}
              >
                WEB DEVELOPMENT
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="text-base md:text-lg text-gray-300 mb-8 md:mb-10 leading-relaxed max-w-lg mx-auto px-4 md:px-0"
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
              >
                Specialist in creating secure and efficient digital solutions,
                <br className="hidden md:block" />
                combining cybersecurity expertise with modern
                <br className="hidden md:block" />
                web development.
              </motion.p>

              <motion.button
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                onClick={handleEnter}
                className="group relative px-8 py-3 md:px-10 md:py-3 bg-white/10 backdrop-blur-lg 
                         border-2 border-white/30 hover:border-white/50 
                         text-white text-lg md:text-xl font-bold rounded-lg 
                         transition-all duration-300 mb-6 md:mb-8
                         hover:bg-white/15 overflow-hidden w-full max-w-xs"
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
                disabled={isExiting}
              >
                {isExiting && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0.8 }}
                    animate={{ scale: 10, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/30 to-red-500/30"
                  />
                )}
                
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-red-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span className="relative flex items-center justify-center gap-3 leading-snug">
                  {isExiting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 rounded-full border-2 border-white/50 border-t-white"
                      />
                      <motion.span
                        initial={{ opacity: 1 }}
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        ENTERING...
                      </motion.span>
                    </>
                  ) : (
                    <>
                      ENTER PORTFOLIO
                      <svg 
                        className="w-5 h-5 group-hover:translate-x-2 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </span>
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 1.3, duration: 1 }}
                className="text-white/70 text-sm animate-pulse leading-relaxed px-4"
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}
              >
                Click to explore my work
              </motion.p>

              <div className="h-16 md:h-0"></div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}