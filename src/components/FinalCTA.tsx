import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

export function FinalCTA() {
  return (
    <section id="contacto" className="py-24 px-6 md:px-24 bg-formidable-olive">
      <motion.div 
        className="max-w-4xl mx-auto text-center space-y-10 bg-white/5 backdrop-blur-sm p-12 md:p-16 rounded-lg border border-formidable-gold/30 shadow-2xl shadow-formidable-gold/20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Badge className="bg-formidable-red text-white shadow-lg shadow-formidable-red/30">
          Da el primer paso
        </Badge>
        
        <h2 className="text-formidable-gold text-[36px] md:text-[56px]" style={{ lineHeight: '1.1' }}>
          ¿Qué necesitas?
        </h2>
        
        <p className="text-formidable-gold opacity-90 max-w-2xl mx-auto" style={{ fontSize: '22px', lineHeight: '1.6' }}>
          Si has llegado hasta aquí, ya sabes la respuesta. No necesitas pensar más. Necesitas empezar.
        </p>
        
        <Button 
          className="bg-formidable-gold text-formidable-dark hover:bg-formidable-gold/90 transition-all duration-300 hover:scale-105 px-6 py-6 md:px-12 md:py-7 text-[16px] md:text-[20px] w-full md:w-auto shadow-xl hover:shadow-2xl"
          asChild
        >
          <a href="https://cal.com/mario-acevedo-aguilar-biepq1/30min" target="_blank" rel="noopener noreferrer" className="whitespace-normal md:whitespace-nowrap">
            Agenda tu primera conversación
          </a>
        </Button>
        
        <p className="text-formidable-gold opacity-60" style={{ fontSize: '14px' }}>
          Primera sesión exploratoria • Sin compromiso • 100% honestidad
        </p>
      </motion.div>
    </section>
  );
}
