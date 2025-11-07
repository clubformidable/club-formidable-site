import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { HowIWork } from "./components/HowIWork";
import { Testimonials } from "./components/Testimonials";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { BackgroundArt } from "./components/BackgroundArt";
import { AboutMe } from "./components/AboutMe";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "about">("home");

  return (
    <div className="bg-formidable-dark min-h-screen relative">
      <BackgroundArt />
      <div className="relative z-10">
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />
        
        {currentPage === "home" ? (
          <>
            <Hero />
            <Services />
            <HowIWork onNavigateToAbout={() => {
              setCurrentPage("about");
              window.scrollTo(0, 0); }} />
            <Testimonials />
            <FinalCTA />
            <Footer />
          </>
        ) : (
          <>
            <AboutMe />
            <FinalCTA />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}
