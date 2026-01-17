export default function Stats() {
  const stats = [
    { number: "8+", label: "Months of Experience" },
    { number: "10+", label: "Completed Projects" },
    { number: "4+", label: "Events" },
    { number: "6+", label: "Clients Worked With" }
  ];

  return (
    <section className="text-white py-16 bg-gradient-to-b from-transparent to-black/50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-[#0a0a0a] rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2 cyber-title">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}