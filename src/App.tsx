import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { HowIWork } from "./components/HowIWork";
import { Testimonials } from "./components/Testimonials";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { BackgroundArt } from "./components/BackgroundArt";

export default function App() {
  return (
    <div className="bg-formidable-dark min-h-screen relative">
      <BackgroundArt />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Services />
        <HowIWork />
        <Testimonials />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}
