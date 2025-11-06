import { Linkedin } from "lucide-react";
import { Badge } from "./ui/badge";

export function Footer() {
  return (
    <footer className="bg-formidable-dark py-12 px-6 md:px-24 border-t border-formidable-olive/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <h3 className="text-formidable-gold" style={{ fontSize: '24px' }}>
              Club Formidable
            </h3>
            <Badge className="bg-formidable-red text-white text-xs">
              ICF
            </Badge>
          </div>
          
          <nav className="flex flex-wrap gap-6 justify-center">
            <a 
              href="#sobre-mi" 
              className="text-formidable-gold opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105"
            >
              Sobre mí
            </a>
            <a 
              href="#contacto" 
              className="text-formidable-gold opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105"
            >
              Contacto
            </a>
            <a 
              href="#privacidad" 
              className="text-formidable-gold opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105"
            >
              Política de privacidad
            </a>
          </nav>
          
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com" 
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
