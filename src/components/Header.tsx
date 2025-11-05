import logo from "figma:asset/8fd4cb936a9604fd3e15d482484a61621a1f3cdb.png";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-formidable-dark/80 backdrop-blur-md border-b border-formidable-olive/20">
      <div className="max-w-7xl mx-auto px-6 md:px-24 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Club Formidable" 
            className="h-12 w-12 object-contain"
          />
          <span className="text-formidable-gold" style={{ fontSize: '20px' }}>
            Club Formidable
          </span>
        </div>
        
        <nav className="hidden md:flex gap-8">
          <a 
            href="#servicios" 
            className="text-formidable-gold opacity-70 hover:opacity-100 transition-all duration-300"
          >
            Servicios
          </a>
          <a 
            href="#testimonios" 
            className="text-formidable-gold opacity-70 hover:opacity-100 transition-all duration-300"
          >
            Testimonios
          </a>
          <a 
            href="#contacto" 
            className="text-formidable-gold opacity-70 hover:opacity-100 transition-all duration-300"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
