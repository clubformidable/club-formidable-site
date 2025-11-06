import { Button } from "./ui/button";

export function Hero() {
  const scrollToServices = () => {
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-24 pt-28 pb-12 bg-formidable-dark-hero relative">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-formidable-gold opacity-100 text-[36px] md:text-[56px]" style={{ lineHeight: '1.1' }}>
          Formidable, lo eres cuando dejas de limitarte
        </h1>
        
        <p className="text-formidable-gold opacity-85 max-w-3xl mx-auto text-[18px] md:text-[22px]" style={{ lineHeight: '1.6' }}>
          Soy Mario y lidero una comunidad de padres formidables, que cada semana se esfuerzan por construir hogares sólidos, invertir en sus hijos y aún tienen fuerza para crear culturas positivas en el trabajo. 🌍✨
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button 
            className="bg-formidable-gold text-formidable-dark hover:bg-formidable-gold/90 transition-all duration-300 hover:scale-105"
            style={{ fontSize: '18px', padding: '24px 32px' }}
            asChild
          >
            <a href="#contacto">Descubre tu potencial</a>
          </Button>
          
          <Button 
            variant="outline" 
            className="border-formidable-gold text-formidable-gold hover:bg-formidable-gold/10 transition-all duration-300 hover:scale-105"
            style={{ fontSize: '18px', padding: '24px 32px' }}
            onClick={scrollToServices}
          >
            Explorar servicios
          </Button>
        </div>
      </div>
    </section>
  );
}
