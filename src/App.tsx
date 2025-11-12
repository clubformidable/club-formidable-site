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
import { Privacy } from "./components/Privacy";
import { CookieBanner } from "./components/CookieBanner";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "about" | "privacy">("home");

  const handleNavigation = (page: "home" | "about" | "privacy", sectionId?: string) => {
    setCurrentPage(page);
    // Always use setTimeout to ensure DOM has updated before scrolling
    setTimeout(() => {
      if (sectionId && page === "home") {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="bg-formidable-dark min-h-screen relative">
      <BackgroundArt />
      <div className="relative z-10">
        <Header currentPage={currentPage} onNavigate={handleNavigation} />
        
        {currentPage === "home" ? (
          <>
            <Hero />
            <Services />
            <HowIWork onNavigateToAbout={() => handleNavigation("about")} />
            <Testimonials />
            <FinalCTA />
            <Footer onNavigate={handleNavigation} />
          </>
        ) : currentPage === "about" ? (
          <>
            <AboutMe />
            <FinalCTA />
            <Footer onNavigate={handleNavigation} />
          </>
        ) : (
          <>
            {/* privacy */}
            <Privacy />
            <FinalCTA />
            <Footer onNavigate={handleNavigation} />
          </>
        )}
      </div>
      
      {/* Cookie banner fuera del contenedor z-10 para que esté por encima de todo */}
      <CookieBanner onNavigate={handleNavigation} />
    </div>
  );
}
