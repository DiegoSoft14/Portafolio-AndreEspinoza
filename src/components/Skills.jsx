import { useEffect, useRef, useState } from "react";

// ===== IMPORTS =====
import burpSuite from "../assets/burp-suite.png";
import docker from "../assets/docker.png";
import foxyProxy from "../assets/foxyproxy.png";
import gitHub from "../assets/git hub.png";
import htmlCss from "../assets/htmlycss.png";
import javascript from "../assets/JavaScript.png";
import linux from "../assets/linux.png";
import kaliLinux from "../assets/kali Linux.png";
import metasploit from "../assets/metasploit.png";
import mysql from "../assets/mysql.png";
import nmap from "../assets/nmap.png";
import owaspZap from "../assets/owasp zap.png";
import postgresql from "../assets/postgredsql.png";
import postman from "../assets/postman.png";
import python from "../assets/python.png";
import react from "../assets/react.svg";
import vscode from "../assets/visualstudio.png";
import wireshark from "../assets/wireshrak.png";

export default function Skills() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const webCarouselRef = useRef(null);
  const cyberCarouselRef = useRef(null);

  const skills = [
    { name: "Python" },
    { name: "JavaScript" },
    { name: "HTML/CSS" },
    { name: "Figma" },
    { name: "React" },
    { name: "PostgreSQL" },
    { name: "mySQL" },
    { name: "Docker" },
    { name: "Spring Security" },
    { name: "Git" },
    { name: "Web Pentesting" },
    { name: "SQL Injection" },
    { name: "XSS Attacks" },
    { name: "Network Security" },
    { name: "OWASP Top 10" },
    { name: "Vulnerability Assessment" }
  ];

  // ===== DATA WITH SPECIFIC COLORS FOR EACH TOOL =====
  const webTools = [
    { img: docker, name: "Docker", color: "bg-blue-500", textColor: "text-blue-100", borderColor: "border-blue-500" },
    { img: postman, name: "Postman", color: "bg-orange-500", textColor: "text-orange-100", borderColor: "border-orange-500" },
    { img: gitHub, name: "GitHub", color: "bg-gray-800", textColor: "text-gray-100", borderColor: "border-gray-700" },
    { img: python, name: "Python", color: "bg-yellow-500", textColor: "text-yellow-100", borderColor: "border-yellow-500" },
    { img: postgresql, name: "PostgreSQL", color: "bg-blue-700", textColor: "text-blue-100", borderColor: "border-blue-700" },
    { img: react, name: "React", color: "bg-cyan-500", textColor: "text-cyan-100", borderColor: "border-cyan-500" },
    { img: htmlCss, name: "HTML/CSS", color: "bg-orange-600", textColor: "text-orange-100", borderColor: "border-orange-600" },
    { img: javascript, name: "JavaScript", color: "bg-yellow-400", textColor: "text-yellow-100", borderColor: "border-yellow-400" },
    { img: mysql, name: "MySQL", color: "bg-blue-600", textColor: "text-blue-100", borderColor: "border-blue-600" },
    { img: vscode, name: "VisualStudio", color: "bg-purple-600", textColor: "text-purple-100", borderColor: "border-purple-600" }
  ];

  const cyberTools = [
    { img: burpSuite, name: "Burp Suite", color: "bg-red-700", textColor: "text-red-100", borderColor: "border-red-700" },
    { img: nmap, name: "Nmap", color: "bg-gray-700", textColor: "text-gray-100", borderColor: "border-gray-700" },
    { img: wireshark, name: "Wireshark", color: "bg-blue-800", textColor: "text-blue-100", borderColor: "border-blue-800" },
    { img: kaliLinux, name: "Kali Linux", color: "bg-blue-900", textColor: "text-blue-100", borderColor: "border-blue-900" },
    { img: metasploit, name: "Metasploit", color: "bg-red-800", textColor: "text-red-100", borderColor: "border-red-800" },
    { img: owaspZap, name: "OWASP ZAP", color: "bg-orange-700", textColor: "text-orange-100", borderColor: "border-orange-700" },
    { img: foxyProxy, name: "FoxyProxy", color: "bg-purple-700", textColor: "text-purple-100", borderColor: "border-purple-700" },
    { img: linux, name: "Linux", color: "bg-yellow-700", textColor: "text-yellow-100", borderColor: "border-yellow-700" },
  ];

  // ===== OBSERVER =====
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const ITEM_WIDTH = 100;

  // ===== WEB CAROUSEL =====
  useEffect(() => {
    const track = webCarouselRef.current;
    if (!track) return;

    let pos = 0;
    const SPEED = 1.3;
    const WIDTH = ITEM_WIDTH * webTools.length;

    const animate = () => {
      pos -= SPEED;
      if (Math.abs(pos) >= WIDTH) pos = 0;
      track.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  // ===== CYBER CAROUSEL =====
  useEffect(() => {
    const track = cyberCarouselRef.current;
    if (!track) return;

    let pos = 0;
    const SPEED = 1.3;
    const WIDTH = ITEM_WIDTH * cyberTools.length;

    const animate = () => {
      pos -= SPEED;
      if (Math.abs(pos) >= WIDTH) pos = 0;
      track.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  // ===== TOOL CARD WITH VISIBLE EFFECTS WITHOUT HOVER =====
  const ToolCard = ({ tool }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    // Check if it's one of the images that needs to be larger
    const isLargeImage = tool.name === "Burp Suite" || 
                         tool.name === "HTML/CSS" || 
                         tool.name === "Wireshark" ||
                         tool.name === "JavaScript" ||
                         tool.name === "MySQL" ||
                         tool.name === "Nmap" ||
                         tool.name === "Kali Linux";

    return (
      <div 
        className="flex-shrink-0 px-10 flex items-center justify-center relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Square with tooltip that appears on hover - MORE VISIBLE TEXT */}
        {showTooltip && (
          <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-30">
            {/* Square with better text contrast */}
            <div className={`bg-gray-900 ${tool.borderColor} border px-3 py-2 rounded-md shadow-xl backdrop-blur-sm`}>
              <span className={`font-semibold text-sm ${tool.textColor} whitespace-nowrap`}>
                {tool.name}
              </span>
            </div>
          </div>
        )}

        {/* Image container (KEEPS ORIGINAL DESIGN) */}
        <div className="relative">
          {/* Color effect VISIBLE always (without hover) */}
          <div className={`absolute -inset-3 rounded-full opacity-30 blur-lg ${tool.color}`}></div>
          
          {/* Base color effect behind - VISIBLE always */}
          <div className={`absolute -inset-2 rounded-full opacity-15 blur-md ${tool.color}`}></div>
          
          {/* Image with different size for specific images */}
          <img 
            src={tool.img} 
            alt={tool.name} 
            className={`object-contain filter drop-shadow-lg relative z-10 ${
              isLargeImage ? "w-20 h-20" : "w-14 h-14"
            }`} 
          />
        </div>
      </div>
    );
  };

  // ===== RENDER CAROUSEL - SAME STYLE FOR BOTH =====
  const renderCarousel = (tools, ref, title, isCyber = false) => (
    <div className="mb-16">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-gray-600"></div>
          <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
            {isCyber ? "Cybersecurity" : "Development"}
          </span>
          <div className="h-px w-8 bg-gradient-to-r from-gray-600 to-transparent"></div>
        </div>
        
        <h3 className={`text-3xl md:text-4xl font-light mb-4 tracking-tight leading-snug ${
          isCyber ? "text-red-400" : "text-blue-400"
        }`}>
          {title}
        </h3>
        
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          {isCyber 
            ? "Specialized tools for penetration testing and security analysis"
            : "Modern technologies and tools for full-stack web development"}
        </p>
      </div>

      {/* CAROUSEL CONTAINER WITH MORE HEIGHT */}
      <div className="relative overflow-hidden py-16">
        <div className="relative">
          <div 
            ref={ref}
            className="flex items-center justify-center"
            style={{ willChange: "transform" }}
          >
            {[...Array(3)].map((_, copyIndex) => (
              tools.map((tool, index) => (
                <ToolCard 
                  key={`copy-${copyIndex}-${index}`}
                  tool={tool}
                />
              ))
            ))}
          </div>
          
          {/* Gradients on carousel edges - SAME FOR BOTH */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-950 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-950 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-gray-950 via-black to-gray-950 relative overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/5 via-transparent to-transparent"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        
        {/* Header - Elegant "Professional Certifications" style */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-600"></div>
            <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">Technical Proficiency</span>
            <div className="h-px w-12 bg-gradient-to-r from-gray-600 to-transparent"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight leading-tight">
            <span className="text-white">Skills &</span>
            <span className="mx-3 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 font-normal">Expertise</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Technical skills in <span className="text-red-400">Cybersecurity</span> and 
            <span className="text-blue-400"> Web Development</span>
          </p>
        </div>

        {/* Skills Grid - Elegant style */}
        <div className="mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-5 transition-all duration-300 group-hover:border-gray-700">
                  <div className="text-center">
                    <span className="text-white font-light text-base md:text-lg group-hover:text-gray-200 transition-colors leading-snug">
                      {skill.name}
                    </span>
                  </div>
                  
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-gray-800 via-transparent to-gray-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Elegant separator */}
          <div className="flex justify-center items-center gap-6 text-gray-500 text-sm mb-16">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-700"></div>
            <div className="flex items-center gap-6">
              <span className="text-gray-400">Development</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400">Security</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400">Tools</span>
            </div>
            <div className="h-px w-16 bg-gradient-to-r from-gray-700 to-transparent"></div>
          </div>
        </div>

        {/* Carousels - BOTH WITH SAME DESIGN */}
        {renderCarousel(webTools, webCarouselRef, "Web Development Tools", false)}
        {renderCarousel(cyberTools, cyberCarouselRef, "Cybersecurity Tools", true)}

      </div>
    </section>
  );
}