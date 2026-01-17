// App.jsx
import { useState } from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience"; // <-- Agregar esta línea
import Skills from "./components/Skills";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handleEnterPortfolio = () => {
    setShowPortfolio(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  if (!showPortfolio) {
    return <LandingPage onEnter={handleEnterPortfolio} />;
  }

  return (
    <>
      <Navbar />
      <main className="space-y-2 md:space-y-4">
        <Hero />
        <Experience /> {/* <-- Agregar esta línea */}
        <Skills />
        <About />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;