import { Linkedin } from "lucide-react";
import { Badge } from "./ui/badge";

interface FooterProps {
  onNavigate?: (page: "home" | "about" | "privacy", sectionId?: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-formidable-dark py-12 px-6 md:px-24 border-t border-formidable-olive/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <h3 className="text-formidable-gold" style={{ fontSize: '24px' }}>
              Club Formidable
            </h3>
          </div>
          
          <nav className="flex flex-wrap gap-6 justify-center">
            <button
              onClick={() => onNavigate ? onNavigate("about") : window.location.hash = "#sobre-mi"}
              className="text-formidable-gold opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105"
            >
              Sobre mí
            </button>
            <button
              onClick={() => onNavigate ? onNavigate("home", "contacto") : window.location.hash = "#contacto"}
              className="text-formidable-gold opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105"
            >
              Contacto
            </button>
            <button
              onClick={() => onNavigate && onNavigate("privacy")}
              className="text-formidable-gold opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105"
            >
              Política de privacidad
            </button>
          </nav>
          
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/marioacevedoaguilar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-formidable-gold opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-formidable-olive/30 text-center">
          <p className="text-formidable-gold opacity-60" style={{ fontSize: '14px' }}>
            © 2025 Club Formidable. Coaching certificado.
          </p>
        </div>
      </div>
    </footer>
  );
}
