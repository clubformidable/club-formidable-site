import { Button } from "./ui/button";

export function FinalCTA() {
  return (
    <section id="contacto" className="py-24 px-6 md:px-24 bg-formidable-olive">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <h2 className="text-formidable-gold" style={{ fontSize: '56px' }}>
          ¿Qué necesitas?
        </h2>
        
        <p className="text-formidable-gold opacity-90 max-w-2xl mx-auto" style={{ fontSize: '22px', lineHeight: '1.6' }}>
          Si has llegado hasta aquí, ya sabes la respuesta. No necesitas pensar más. Necesitas empezar.
        </p>
        
        <Button 
          className="bg-formidable-gold text-formidable-dark hover:bg-formidable-gold/90 transition-all duration-300 hover:scale-105"
          style={{ fontSize: '20px', padding: '28px 48px' }}
          asChild
        >
          <a href="mailto:contacto@clubformidable.com">Agenda tu primera conversación</a>
        </Button>
        
        <p className="text-formidable-gold opacity-60" style={{ fontSize: '14px' }}>
          Primera sesión exploratoria • Sin compromiso • 100% honestidad
        </p>
      </div>
    </section>
  );
}
