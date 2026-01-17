export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      description: "Building modern, responsive web interfaces with React, JavaScript, and modern frameworks.",
      icon: "💻",
      color: "border-cyan-500",
      items: ["React.js", "JavaScript ES6+", "HTML5/CSS3", "Tailwind CSS", "Responsive Design"]
    },
    {
      title: "Web Security",
      description: "Pentesting, vulnerability assessment, and security implementation for web applications.",
      icon: "🔒",
      color: "border-green-500",
      items: ["Pentesting", "Vulnerability Assessment", "Security Audits", "OWASP Top 10", "Network Security"]
    },
    {
      title: "Backend & APIs",
      description: "Developing secure APIs and server-side logic with Python and databases.",
      icon: "⚙️",
      color: "border-purple-500",
      items: ["Python", "PostgreSQL", "SQLite", "API Development", "Database Design"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 cyber-title">
            <span className="text-cyan-400">My</span>{" "}
            <span className="text-white">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Combining development expertise with cybersecurity knowledge to deliver comprehensive web solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-black/50 backdrop-blur-sm p-8 rounded-2xl border ${service.color}/30 hover:${service.color}/70 transition-all duration-300 hover:translate-y-[-5px]`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}