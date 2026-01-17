// components/Experience.jsx
export default function Experience() {
  const experiences = [
    {
      company: "APM INVERSIONES EIRL",
      position: "Software Developer",
      period: "July 2025 - November 2025",
      responsibilities: [
        "Participated in the development of a medical appointment web platform, contributing to design, logic, and functionalities",
        "Developed and implemented continuous improvements and new practices to optimize the product",
        "Proposed ideas and productivity improvements for the application",
        "Received company training in JavaScript, React, Python, and Django to strengthen frontend and backend development",
        "Used Figma for interface design and wireframing, and Trello for work organization and tracking",
        "Applied database knowledge to support logical analysis and data model structure",
        "Worked on both frontend and backend development using Python and Django for backend"
      ]
    }
  ];

  return (
    <section id="experience" className="bg-black py-8 md:py-0">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="space-y-6 md:space-y-8">

          {/* ===== HEADER SECTION ===== */}
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-4 tracking-tight">
              <span className="mx-3 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 font-normal">Experience</span>
            </h1>
          </div>

          {/* ===== EXPERIENCE CARD WITH COMET EFFECT ===== */}
          <div className="relative">
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 shadow-xl p-5 md:p-7 overflow-hidden">
              
              {/* Main comet - Faster but visible */}
              <div className="absolute -inset-0.5 rounded-3xl overflow-hidden pointer-events-none">
                <div className="absolute w-36 h-[3px] bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 animate-comet-fast shadow-[0_0_15px_#06b6d4] z-10"></div>
              </div>
              
              {/* Core glow */}
              <div className="absolute -inset-0.5 rounded-3xl overflow-hidden pointer-events-none">
                <div className="absolute w-8 h-[3px] bg-gradient-to-r from-white via-cyan-200 to-white animate-comet-core-fast shadow-[0_0_20px_#ffffff,0_0_30px_#06b6d4] z-20"></div>
              </div>
              
              {/* Soft trail */}
              <div className="absolute -inset-1 rounded-3xl overflow-hidden pointer-events-none">
                <div className="absolute w-40 h-[2px] bg-gradient-to-r from-transparent via-blue-300/50 to-transparent animate-comet-trail-fast blur-[1.5px] opacity-60"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* ===== COMPANY & DATE ===== */}
                <div className="mb-6 pb-5 border-b border-gray-800">
                  {/* Title and company */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">APM INVERSIONES EIRL</span> - Software Developer
                  </h3>
                  
                  {/* Date below title */}
                  <p className="text-gray-400 text-base md:text-lg">
                    July 2025 - November 2025
                  </p>
                </div>

                {/* ===== RESPONSIBILITIES ===== */}
                <div className="space-y-3">
                  {experiences[0].responsibilities.map((responsibility, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {/* Normal bullet point */}
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                      </div>
                      
                      {/* Responsibility text - ALL TEXT IN GRAY */}
                      <div className="flex-1">
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                          {responsibility}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ===== DURATION FOOTER ===== */}
                <div className="mt-6 pt-5 border-t border-gray-800/50">
                  <div className="flex items-center justify-between text-gray-500 text-sm">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-cyan-300">5 months</span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Styles for faster comet animation */}
      <style jsx global>{`
        @keyframes comet-fast {
          0% {
            left: -36px;
            top: 0;
            width: 36px;
            height: 3px;
            opacity: 0.8;
          }
          20% {
            opacity: 1;
          }
          25% {
            left: 100%;
            top: 0;
            width: 36px;
            height: 3px;
          }
          25.5% {
            left: 100%;
            top: 0;
            width: 3px;
            height: 36px;
          }
          50% {
            left: 100%;
            top: 100%;
            width: 3px;
            height: 36px;
            opacity: 0.9;
          }
          50.5% {
            left: 100%;
            top: 100%;
            width: 36px;
            height: 3px;
          }
          75% {
            left: 0;
            top: 100%;
            width: 36px;
            height: 3px;
            opacity: 0.8;
          }
          75.5% {
            left: 0;
            top: 100%;
            width: 3px;
            height: 36px;
          }
          100% {
            left: 0;
            top: 0;
            width: 3px;
            height: 36px;
            opacity: 0.7;
          }
        }

        @keyframes comet-core-fast {
          0% {
            left: -40px;
            top: 0;
            width: 8px;
            height: 3px;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          25% {
            left: 100%;
            top: 0;
            width: 8px;
            height: 3px;
            opacity: 0.9;
          }
          25.5% {
            left: 100%;
            top: 0;
            width: 3px;
            height: 8px;
          }
          50% {
            left: 100%;
            top: 100%;
            width: 3px;
            height: 8px;
            opacity: 1;
          }
          50.5% {
            left: 100%;
            top: 100%;
            width: 8px;
            height: 3px;
          }
          75% {
            left: 0;
            top: 100%;
            width: 8px;
            height: 3px;
            opacity: 0.9;
          }
          75.5% {
            left: 0;
            top: 100%;
            width: 3px;
            height: 8px;
          }
          85% {
            opacity: 0.8;
          }
          100% {
            left: 0;
            top: 0;
            width: 3px;
            height: 8px;
            opacity: 0;
          }
        }

        @keyframes comet-trail-fast {
          0% {
            left: -50px;
            top: 0;
            width: 40px;
            height: 2px;
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          25% {
            left: 100%;
            top: 0;
            width: 40px;
            height: 2px;
            opacity: 0.6;
          }
          25.5% {
            left: 100%;
            top: 0;
            width: 2px;
            height: 40px;
          }
          50% {
            left: 100%;
            top: 100%;
            width: 2px;
            height: 40px;
            opacity: 0.7;
          }
          50.5% {
            left: 100%;
            top: 100%;
            width: 40px;
            height: 2px;
          }
          75% {
            left: 0;
            top: 100%;
            width: 40px;
            height: 2px;
            opacity: 0.6;
          }
          75.5% {
            left: 0;
            top: 100%;
            width: 2px;
            height: 40px;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            left: 0;
            top: 0;
            width: 2px;
            height: 40px;
            opacity: 0;
          }
        }

        .animate-comet-fast {
          animation: comet-fast 4s linear infinite;
        }

        .animate-comet-core-fast {
          animation: comet-core-fast 4s linear infinite;
        }

        .animate-comet-trail-fast {
          animation: comet-trail-fast 4s linear infinite;
        }
      `}</style>
    </section>
  );
}