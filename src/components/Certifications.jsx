import { useState } from 'react';

// Import all certification images
import cyberopsassociate from '../assets/certificacionesimg/cyberopsassociate.png';
import cybersecurityessentials from '../assets/certificacionesimg/cybersecurityessentials.png';
import introduccionalaseguridadcibernetica from '../assets/certificacionesimg/introduccionalaseguridadcibernetica.png';
import ccnav7introduccionaredes from '../assets/certificacionesimg/ccnav7introduccionaredes.png';
import ccnav7switchingroutingandwirelessessentials from '../assets/certificacionesimg/ccnav7switchingroutingandwirelessessentials.png';
import programmingessentialinpython from '../assets/certificacionesimg/programmingessentialinpython.png';
import ndglinuxessentials from '../assets/certificacionesimg/ndglinuxessentials.png';
import introduccionaiot from '../assets/certificacionesimg/introduccionaiot.png';
import entrepreneurship from '../assets/certificacionesimg/entrepreneurship.png';

export default function Certifications() {
  const certifications = [
    {
      title: "CyberOps Associate",
      subtitle: "Cisco Cybersecurity",
      link: "https://drive.google.com/file/d/1CI4mFtSUaU9ZzOe3s9-LQkX5pwyDnYXE/view?usp=sharing",
      type: "cyber",
      icon: "🔐",
      date: "2024",
      organization: "Cisco",
      description: "Professional certification in Cisco cybersecurity operations, validating skills in security monitoring, threat detection, and incident response.",
      image: cyberopsassociate
    },
    {
      title: "Cybersecurity Essentials",
      subtitle: "Networking Academy",
      link: "https://drive.google.com/file/d/1OEToKzFXuuLccsk1a3gbrpKKgt-1X-0m/view?usp=drive_link",
      type: "cyber",
      icon: "🛡️",
      date: "2023",
      organization: "Cisco",
      description: "Essential cybersecurity fundamentals covering security principles, data protection, and digital defense best practices.",
      image: cybersecurityessentials
    },
    {
      title: "Intro to Cybersecurity",
      subtitle: "Fundamentals",
      link: "https://drive.google.com/file/d/1sgPKLZLoHCDBg2oCL285d2E7sUJhWGRM/view?usp=drive_link",
      type: "cyber",
      icon: "🔒",
      date: "2023",
      organization: "Cisco",
      description: "Introduction to basic cybersecurity concepts, common threats, and fundamental protection measures.",
      image: introduccionalaseguridadcibernetica
    },
    {
      title: "CCNA: Intro to Networks",
      subtitle: "Networking Associate",
      link: "https://drive.google.com/file/d/1yO7KJNnlibGtPNvsV4gk6a3qWtrkxHax/view?usp=drive_link",
      type: "cyber",
      icon: "🌐",
      date: "2023",
      organization: "Cisco",
      description: "Introduction to networking certification covering networking fundamentals, device configuration, and basic protocols.",
      image: ccnav7introduccionaredes
    },
    {
      title: "CCNA: Switching, Routing & Wireless",
      subtitle: "Advanced Networking",
      link: "https://drive.google.com/file/d/1qFZC-UI4iX1IEuEC_FCqjET4G_uo0Vp6/view?usp=sharing",
      type: "cyber",
      icon: "🔄",
      date: "2023",
      organization: "Cisco",
      description: "Advanced switching, routing, and wireless certification covering advanced Cisco device configurations.",
      image: ccnav7switchingroutingandwirelessessentials
    },
    {
      title: "PCAP: Python Programming",
      subtitle: "Programming Essentials",
      link: "https://drive.google.com/file/d/1UIUjb8c8HJPj624vON3nUtlfJhnik6S3/view?usp=sharing",
      type: "dev",
      icon: "🐍",
      date: "2024",
      organization: "Python Institute",
      description: "Certification validating fundamental Python programming skills, including syntax, data structures, and basic algorithms.",
      image: programmingessentialinpython
    },
    {
      title: "NDG Linux Essentials",
      subtitle: "Linux Fundamentals",
      link: "https://drive.google.com/file/d/1qr4fC-Q4k6-p0nc_4_Torb4gdW_Rp0jH/view?usp=sharing",
      type: "both",
      icon: "🐧",
      date: "2023",
      organization: "Linux Professional Institute",
      description: "Essential Linux operating system fundamentals including command line, basic administration, and system operations.",
      image: ndglinuxessentials
    },
    {
      title: "Intro to IoT",
      subtitle: "Internet of Things",
      link: "https://drive.google.com/file/d/1Ph_l3F1pLHmfujLOqkkNLaN7MmUc4rqO/view?usp=sharing",
      type: "both",
      icon: "📡",
      date: "2023",
      organization: "Cisco",
      description: "Introduction to Internet of Things (IoT), covering concepts, architectures, and connected device applications.",
      image: introduccionaiot
    },
    {
      title: "Entrepreneurship",
      subtitle: "Business Fundamentals",
      link: "https://drive.google.com/file/d/1owksUTZPg5JfQjwz1w_BiEnSrA2FwaiY/view?usp=sharing",
      type: "both",
      icon: "💼",
      date: "2023",
      organization: "Cisco",
      description: "Entrepreneurship fundamentals covering business planning, marketing, and basic business management.",
      image: entrepreneurship
    }
  ];

  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredCertifications = certifications.filter(cert => {
    if (activeFilter === "all") return true;
    return cert.type === activeFilter;
  });

  const stats = {
    total: certifications.length,
    cyber: certifications.filter(c => c.type === 'cyber').length,
    dev: certifications.filter(c => c.type === 'dev').length,
    both: certifications.filter(c => c.type === 'both').length
  };

  return (
    <section id="certifications" className="py-24 md:py-32 bg-gradient-to-b from-gray-950 via-black to-gray-950 relative overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        
        {/* Header - Elegant and minimal */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-600"></div>
            <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">Achievements</span>
            <div className="h-px w-12 bg-gradient-to-r from-gray-600 to-transparent"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-tight">
            <span className="text-white">My</span>
            <span className="mx-3 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 font-normal">Certifications</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Professional recognitions and certifications that validate my technical experience and academic achievements
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === "all" 
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
                : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700/50"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter("cyber")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              activeFilter === "cyber" 
                ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg shadow-red-500/25"
                : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700/50"
            }`}
          >
            <div className={`w-2 h-2 rounded-full ${activeFilter === "cyber" ? "bg-white" : "bg-red-500"}`}></div>
            Cybersecurity
          </button>
          <button
            onClick={() => setActiveFilter("dev")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              activeFilter === "dev" 
                ? "bg-gradient-to-r from-purple-600 to-violet-500 text-white shadow-lg shadow-purple-500/25"
                : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700/50"
            }`}
          >
            <div className={`w-2 h-2 rounded-full ${activeFilter === "dev" ? "bg-white" : "bg-purple-500"}`}></div>
            Development
          </button>
          <button
            onClick={() => setActiveFilter("both")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              activeFilter === "both" 
                ? "bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-lg shadow-orange-500/25"
                : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700/50"
            }`}
          >
            <div className={`w-2 h-2 rounded-full ${activeFilter === "both" ? "bg-white" : "bg-orange-500"}`}></div>
            IT & Business
          </button>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map((cert, index) => {
            const isActive = hoveredCard === index;

            return (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 transition-all duration-500 hover:border-gray-700 hover:shadow-2xl hover:shadow-gray-900/50">

                  {/* IMAGE */}
                  <div className="relative h-48 bg-gray-950">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className={`w-full h-full object-contain p-2 transition-transform duration-700 ${
                        isActive ? "scale-105" : "scale-100"
                      }`}
                    />

                    {/* OVERLAY */}
                    <div
                      className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />

                    {/* Type badge in top right corner */}
                    <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold ${
                      cert.type === 'cyber' 
                        ? 'bg-red-600/20 text-red-300 border border-red-500/30' 
                        : cert.type === 'dev'
                        ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                        : 'bg-orange-600/20 text-orange-300 border border-orange-500/30'
                    }`}>
                      {cert.type === 'cyber' ? ' CYBER' : 
                       cert.type === 'dev' ? ' DEV' : ' IT'}
                    </div>

                    {/* BUTTON */}
                    {isActive && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn relative inline-flex items-center gap-3 px-6 py-3.5 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition-all duration-300 transform hover:-translate-y-1 text-sm border-2 border-emerald-400/50 hover:border-emerald-300 shadow-lg shadow-emerald-900/30"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span>View Certificate</span>
                          <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* INFO */}
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <div className="text-sm font-semibold text-gray-300">{cert.organization}</div>
                        <div className="text-xs text-gray-500">Organization</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-gray-300">{cert.date}</div>
                        <div className="text-xs text-gray-500">Year</div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                      {cert.title}
                    </h3>

                    {/* Decorative line */}
                    <div className="h-px w-12 bg-gradient-to-r from-gray-700 to-transparent mb-2"></div>

                    {/* Description with animation */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      isActive ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-4 border-t border-gray-800/50">
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gray-700/50 rounded-tl"></div>
                  <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-gray-700/50 rounded-tr"></div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-center text-2xl font-light text-gray-300 mb-8 leading-snug">Certifications Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-900/20 rounded-xl border border-gray-800/50">
                <div className="text-4xl font-bold text-white mb-2">{stats.total}</div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">Total</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-red-900/20 to-red-900/5 rounded-xl border border-red-800/30">
                <div className="text-4xl font-bold text-red-400 mb-2">{stats.cyber}</div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">Cybersecurity</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-purple-900/5 rounded-xl border border-purple-800/30">
                <div className="text-4xl font-bold text-purple-400 mb-2">{stats.dev}</div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">Development</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-900/20 to-orange-900/5 rounded-xl border border-orange-800/30">
                <div className="text-4xl font-bold text-orange-400 mb-2">{stats.both}</div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">IT & Business</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}