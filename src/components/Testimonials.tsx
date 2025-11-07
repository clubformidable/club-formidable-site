import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function Testimonials() {
  const testimonials = [
    {
      miniTitle: "De fotógrafo a CPO",
      copy: "\"Adrián llegó viéndose solo como 'el fotógrafo'. Hoy es CPO de su empresa. ¿Qué cambió? No sus habilidades. Su forma de verse. Cuando confié en él más que él mismo, se dio permiso para liderar.\"",
      name: "Adrián",
      title: "Chief Product Officer"
    },
    {
      miniTitle: "Familia fortalecida en el caos",
      copy: "\"Fernando enfrentaba la aventura de mudarse al extranjero con su familia. El miedo era real. Pero construimos el puente entre la incertidumbre y la acción. Hoy su familia no solo sobrevive el cambio—crece con él.\"",
      name: "Fernando",
      title: "Líder de equipos internacionales"
    },
    {
      mindiTitle: "De la ansiedad al ascenso",
      copy: "\"Juan Carlos estaba atrapado en un ciclo de ansiedad en el trabajo. Identificamos las fuentes reales—no las obvias. Hoy disfruta de su familia, acaba de ser ascendido, y duerme bien por primera vez en años.\"",
      name: "Juan Carlos",
      title: "Director de Operaciones"
    },
    {
      miniTitle: "Iteración sobre perfección",
      copy: "\"El perfeccionismo de Paula era su mayor freno. Aprendió que avanzar rápido e iterar vale más que esperar el momento perfecto. Ahora lidera proyectos que antes habría pospuesto indefinidamente.\"",
      name: "Paula",
      title: "Product Manager"
    },
    {
      miniTitle: "Asertividad que vende",
      copy: "\"Alfonso sabía mucho de su producto, pero no sabía comunicarlo. Trabajamos su asertividad y técnicas de venta. Hoy cierra deals que antes perdía, no porque venda mejor—porque se comunica desde la confianza.\"",
      name: "Alfonso",
      title: "Founder & CEO"
    }
  ];

  return (
    <section id="testimonios" className="py-24 px-6 md:px-24 bg-formidable-gold-gradient relative">
      <div className="absolute inset-0 bg-formidable-dark/60"></div>
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-formidable-gold mb-4 text-[36px] md:text-[56px]" style={{ lineHeight: '1.1' }}>
            Transformaciones reales, personas reales
          </h2>
          <p className="text-formidable-gold opacity-70" style={{ fontSize: '18px' }}>
            Lo que cambia no es solo el resultado. Es la forma en que se ven a sí mismos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glassmorphism border-formidable-gold/30 hover:border-formidable-gold/50 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <Badge className="bg-formidable-red text-white hover:bg-formidable-red/90">
                  {testimonial.miniTitle}
                </Badge>
                <p className="text-formidable-gold opacity-90" style={{ fontSize: '17px', lineHeight: '1.7' }}>
                  {testimonial.copy}
                </p>
                <div className="pt-4 border-t border-formidable-gold/20">
                  <p className="text-formidable-gold">{testimonial.name}</p>
                  <p className="text-formidable-gold opacity-60">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
