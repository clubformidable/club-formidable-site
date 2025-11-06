import logo from "figma:asset/8fd4cb936a9604fd3e15d482484a61621a1f3cdb.png";

interface HeaderProps {
  currentPage: "home" | "about";
  onNavigate: (page: "home" | "about") => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const handleNavigation = (page: "home" | "about", sectionId?: string) => {
    onNavigate(page);
    if (sectionId && page === "home") {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-formidable-dark/80 backdrop-blur-md border-b border-formidable-olive/20">
      <div className="max-w-7xl mx-auto px-6 md:px-24 py-4 flex justify-between items-center">
        <button 
          onClick={() => handleNavigation("home")}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <img 
            src={logo} 
            alt="Club Formidable" 
            className="h-12 w-12 object-contain"
          />
          <span className="text-formidable-gold" style={{ fontSize: '20px' }}>
            Club Formidable
          </span>
        </button>
        
        <nav className="hidden md:flex gap-8">
          <button 
            onClick={() => handleNavigation("about")}
            className={`text-formidable-gold transition-all duration-300 ${
              currentPage === "about" ? "opacity-100" : "opacity-70 hover:opacity-100"
            }`}
          >
            Sobre mí
          </button>
          <button 
            onClick={() => handleNavigation("home", "servicios")}
            className="text-formidable-gold opacity-70 hover:opacity-100 transition-all duration-300"
          >
            Servicios
          </button>
          <button 
            onClick={() => handleNavigation("home", "testimonios")}
            className="text-formidable-gold opacity-70 hover:opacity-100 transition-all duration-300"
          >
            Testimonios
          </button>
          <button 
            onClick={() => handleNavigation("home", "contacto")}
            className="text-formidable-gold opacity-70 hover:opacity-100 transition-all duration-300"
          >
            Contacto
          </button>
        </nav>
      </div>
    </header>
  );
}
