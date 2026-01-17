import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-3' : 'py-5'
    }`}>
      <div className="container px-4">
        {/* Elegant container with subtle borders */}
        <div className={`
          relative 
          ${scrolled ? 'bg-black/80 backdrop-blur-xl' : 'bg-black/60 backdrop-blur-lg'} 
          border ${scrolled ? 'border-gray-800/80' : 'border-gray-800/60'} 
          rounded-lg
          shadow-lg ${scrolled ? 'shadow-black/20' : 'shadow-black/10'}
          transition-all duration-500
        `}>
          
          {/* Subtle border glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-900/5 via-transparent to-blue-900/5 rounded-lg -z-10"></div>
          
          {/* Main content */}
          <div className="flex items-center justify-between px-5 py-3">
            
            {/* Logo - Elegant and minimalist */}
            <a 
              href="#home" 
              className="flex items-center space-x-2 group transition-all duration-300"
            >
              <div className="relative">
                {/* Subtle background for logo */}
                <div className="absolute -inset-2 bg-gradient-to-r from-red-900/10 to-blue-900/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Initials */}
                <div className="relative flex items-center">
                  <span className="text-lg font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                    DE
                  </span>
                  
                  {/* Separator dot */}
                  <div className="w-1 h-1 mx-2 rounded-full bg-gradient-to-r from-gray-600 to-gray-400"></div>
                  
                  {/* Specialties text */}
                  <div className="hidden sm:block">
                    <div className="flex items-center text-xs space-x-1">
                      <span className="text-gray-400 font-medium">Sec</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 font-medium">Dev</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Desktop Navigation - Professional design */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group/nav"
                >
                  {/* Subtle background effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/0 via-gray-800/0 to-gray-900/0 rounded-md group-hover/nav:from-gray-800/30 group-hover/nav:via-gray-700/20 group-hover/nav:to-gray-800/30 transition-all duration-500"></div>
                  
                  {/* Text */}
                  <span className="relative flex items-center">
                    {/* Current page indicator */}
                    {item.name === "Home" && (
                      <div className="w-1 h-1 rounded-full bg-gradient-to-r from-red-500 to-blue-500 mr-2"></div>
                    )}
                    {item.name}
                  </span>
                  
                  {/* Subtle bottom line */}
                  <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>

            {/* Mobile button - More discreet */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md border border-gray-800/50 hover:border-gray-700/50 bg-gray-900/30 hover:bg-gray-800/30 transition-all duration-300"
            >
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu - Elegantly integrated */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-800/50 mt-1">
              <div className="px-3 py-2 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-4 py-2.5 text-sm text-gray-300 hover:text-white rounded-md hover:bg-gray-800/30 transition-all duration-300 group/mobile"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {/* Hover indicator */}
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gray-600 to-gray-400 mr-3 group-hover/mobile:from-red-500 group-hover/mobile:to-blue-500 transition-all duration-300"></div>
                    
                    {item.name}
                    
                    {/* Subtle arrow */}
                    <svg 
                      className="w-3 h-3 ml-auto text-gray-600 opacity-0 group-hover/mobile:opacity-100 group-hover/mobile:text-gray-400 transition-all duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Subtle shadow below navbar */}
        <div className="absolute left-4 right-4 h-px bg-gradient-to-r from-transparent via-gray-900/50 to-transparent mt-1"></div>
      </div>
    </nav>
  );
}