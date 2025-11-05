import { Button } from "./ui/button";

export function FinalCTA() {
  return (
    <section id="contacto" className="py-24 px-6 md:px-24 bg-formidable-olive">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <h2 className="text-formidable-gold text-[36px] md:text-[56px]" style={{ lineHeight: '1.1' }}>
          ¿Qué necesitas?
        </h2>
        
        <p className="text-formidable-gold opacity-90 max-w-2xl mx-auto" style={{ fontSize: '22px', lineHeight: '1.6' }}>
          Si has llegado hasta aquí, ya sabes la respuesta. No necesitas pensar más. Necesitas empezar.
        </p>
        
        <Button 
          className="bg-formidable-gold text-formidable-dark hover:bg-formidable-gold/90 transition-all duration-300 hover:scale-105 px-6 py-6 md:px-12 md:py-7 text-[16px] md:text-[20px] w-full md:w-auto"
          asChild
        >
          <a href="mailto:contacto@clubformidable.com" className="whitespace-normal md:whitespace-nowrap">
            Agenda tu primera conversación
          </a>
        </Button>
        
        <p className="text-formidable-gold opacity-60" style={{ fontSize: '14px' }}>
          Primera sesión exploratoria • Sin compromiso • 100% honestidad
        </p>
      </div>
    </section>
  );
}
