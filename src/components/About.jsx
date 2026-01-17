export default function About() {
  return (
    <section id="about" className="bg-black py-12 md:py-16 relative overflow-hidden">
      {/* Particle/Comet Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-purple-500/15 rounded-full animate-spin-slow-reverse"></div>
        
        {/* Floating Particles */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="space-y-8 md:space-y-10">

          {/* ===== MAIN BLOCK ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.5fr] gap-6 md:gap-8 items-start">

            {/* ========== LEFT COLUMN ========== */}
            <div className="flex flex-col space-y-4 md:space-y-6">

              {/* PROFILE WITH ROTATION EFFECT */}
              <div className="bg-gradient-to-br from-gray-900 to-black p-5 md:p-6 rounded-3xl border border-gray-800 shadow-xl relative overflow-hidden group hover:rotate-1 transition-transform duration-500">
                {/* Rotating Border Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                <div className="absolute inset-0 border-2 border-transparent rounded-3xl animate-spin-slow pointer-events-none">
                  <div className="absolute -top-1 -left-1 w-6 h-6 bg-cyan-400 rounded-full blur-sm"></div>
                </div>
                
                <div className="relative">
                  <div className="inline-block mb-3 px-4 py-2 rounded-2xl border border-gray-700 bg-black/40 backdrop-blur">
                    <p className="text-white font-semibold text-sm">
                      Diego Espinoza
                    </p>
                    <p className="text-gray-400 text-xs">
                      Web Developer & Cybersecurity
                    </p>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-cyan-400 mb-2 leading-snug">
                    Passionate learner in constant growth
                  </h3>

                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                    I'm taking my first steps in the world of development and 
                    cybersecurity, motivated to learn and contribute to real 
                    projects.
                  </p>
                </div>
              </div>

              {/* TECH STACK WITH ROTATION EFFECT */}
              <div className="bg-gradient-to-br from-gray-900 to-black p-4 md:p-5 rounded-3xl border border-gray-800 shadow-xl relative overflow-hidden group hover:-rotate-1 transition-transform duration-500">
                {/* Rotating Border Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                <div className="absolute inset-0 border-2 border-transparent rounded-3xl animate-spin-slow-reverse pointer-events-none">
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-400 rounded-full blur-sm"></div>
                </div>
                
                <div className="relative">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">
                    🚀 My Tech Stack
                  </h3>

                  <p className="text-gray-300 text-xs md:text-sm mb-3 leading-relaxed">
                    I develop modern, responsive, and secure interfaces,
                    constantly exploring new technologies.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "JavaScript", "Python", "Burp Suite"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full border border-cyan-500/30 text-cyan-300 bg-cyan-500/10 hover:scale-105 hover:rotate-2 transition-transform duration-300"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* ========== RIGHT COLUMN ========== */}
            <div className="space-y-4 md:space-y-6">
              {/* CODE & MOTIVATION BLOCK */}
              <div className="bg-gradient-to-br from-gray-900 to-black p-5 md:p-6 rounded-3xl border border-gray-800 shadow-xl relative overflow-hidden group hover:rotate-1 transition-transform duration-500">
                {/* Comet Effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-full animate-orbit-slow"></div>
                  <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-transparent rounded-full animate-orbit-slow-reverse"></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 md:gap-8 relative">

                  {/* CODE WITH COLORS - CORRECT STYLE */}
                  <div className="font-mono group/code">
                    <div className="flex items-center mb-2">
                      <div className="flex space-x-2 mr-3">
                        <span className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full animate-pulse"></span>
                        <span className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></span>
                        <span className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></span>
                      </div>
                      <span className="text-cyan-400 font-bold text-xs md:text-sm">
                        learner.js
                      </span>
                    </div>

                    <div className="bg-black/40 p-3 md:p-4 rounded-xl text-[12px] md:text-[14px] leading-relaxed border border-cyan-500/20 whitespace-pre-wrap hover:border-cyan-500/40 transition-colors duration-300">
                      <div className="text-blue-400">const <span className="text-cyan-300">learner</span> = <span className="text-yellow-400">{'{'}</span></div>
                      <div className="ml-4"><span className="text-emerald-400">name</span>: <span className="text-orange-300">"Diego_Espinoza"</span>,</div>
                      <div className="ml-4"><span className="text-emerald-400">level</span>: <span className="text-orange-300">"Committed_Beginner"</span>,</div>
                      <div className="ml-4"><span className="text-emerald-400">learning</span>: <span className="text-yellow-400">[</span><span className="text-orange-300">"JavaScript"</span>, <span className="text-orange-300">"Python"</span>, <span className="text-orange-300">"Web_Security"</span><span className="text-yellow-400">]</span>,</div>
                      <div className="ml-4"><span className="text-emerald-400">tools</span>: <span className="text-yellow-400">[</span><span className="text-orange-300">"Burp Suite"</span>, <span className="text-orange-300">"Git"</span>, <span className="text-orange-300">"Postman"</span><span className="text-yellow-400">]</span>,</div>
                      <div className="ml-4"><span className="text-emerald-400">attitude</span>: <span className="text-blue-400">()</span> <span className="text-blue-400">{'='}{'>'}</span> <span className="text-yellow-400">{'{'}</span></div>
                      <div className="ml-6 md:ml-8 text-gray-500 text-[11px] md:text-[13px]">// Ask();</div>
                      <div className="ml-6 md:ml-8 text-gray-500 text-[11px] md:text-[13px]">// Practice();</div>
                      <div className="ml-6 md:ml-8 text-gray-500 text-[11px] md:text-[13px]">// Try();</div>
                      <div className="ml-6 md:ml-8 text-gray-500 text-[11px] md:text-[13px]">// Correct();</div>
                      <div className="ml-6 md:ml-8 text-gray-500 text-[11px] md:text-[13px]">// Improve();</div>
                      <div className="ml-4"><span className="text-yellow-400">{'}'}</span></div>
                      <div className="text-yellow-400">{'}'}</div>
                    </div>
                  </div>

                  {/* MOTIVATION */}
                  <div className="relative group/motivation">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl blur opacity-0 group-hover/motivation:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative">
                      <h3 className="flex items-center gap-2 text-lg md:text-xl font-bold text-yellow-400 mb-3">
                        <span className="text-xl md:text-2xl animate-pulse">⚡</span> What Motivates Me
                      </h3>

                      <div className="space-y-2 md:space-y-3 text-gray-300 text-xs md:text-sm leading-relaxed">
                        <p className="hover:text-cyan-300 transition-colors duration-300">
                          I'm interested in combining basic development and security to create functional and protected applications.
                        </p>

                        <p className="hover:text-purple-300 transition-colors duration-300">
                          I maintain a continuous learning mindset focused on fundamentals.
                        </p>

                        <p className="hover:text-green-300 transition-colors duration-300">
                          I contribute attention to detail, curiosity, and constant effort.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM BLOCK */}
              <div className="bg-gradient-to-br from-gray-900 to-black p-5 md:p-6 rounded-3xl border border-gray-800 shadow-xl text-center relative overflow-hidden group hover:-rotate-1 transition-transform duration-500">
                {/* Circular Comet Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent animate-spin-slow pointer-events-none">
                  <div className="absolute top-0 left-1/2 w-4 h-4 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2 blur-sm"></div>
                  <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-purple-400 rounded-full -translate-x-1/2 translate-y-1/2 blur-sm"></div>
                </div>
                
                <div className="relative">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-snug">
                    Committed to collaboration and clear communication
                  </h3>

                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                    I learn, follow instructions, and collaborate with discipline and proactive attitude.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add these styles to your global.css or tailwind.config.js */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes orbit-slow {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(100%, 50%) rotate(90deg); }
          50% { transform: translate(50%, 100%) rotate(180deg); }
          75% { transform: translate(0, 50%) rotate(270deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        @keyframes orbit-slow-reverse {
          0% { transform: translate(0, 0) rotate(360deg); }
          25% { transform: translate(-100%, 50%) rotate(270deg); }
          50% { transform: translate(-50%, 100%) rotate(180deg); }
          75% { transform: translate(0, 50%) rotate(90deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(0) translateX(20px); }
          75% { transform: translateY(20px) translateX(10px); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
        .animate-orbit-slow {
          animation: orbit-slow 15s linear infinite;
        }
        .animate-orbit-slow-reverse {
          animation: orbit-slow-reverse 18s linear infinite;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}