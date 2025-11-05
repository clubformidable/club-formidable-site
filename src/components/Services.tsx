"use client";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      badge: "Comienza aquí",
      badgeClass: "bg-formidable-olive text-formidable-gold",
      title: "Formidable Free",
      description: "Tu primer paso hacia la claridad. Contenido semanal, herramientas y reflexiones que desafían tu forma de pensar.",
      includes: [
        'Newsletter semanal con insights accionables',
        'Acceso a archivo completo de contenidos',
        'Frameworks y ejercicios de autoconocimiento',
        'Comunidad de profesionales en crecimiento'
      ],
      forWho: "Profesionales que buscan perspectivas nuevas y están listos para cuestionarse a sí mismos.",
      price: "Gratis",
      ctaText: "Únete gratis",
      ctaVariant: "outline" as const,
      featured: false
    },
    {
      badge: "Más popular",
      badgeClass: "bg-formidable-red text-white",
      title: "Formidable Pro",
      description: "Contenido premium + acompañamiento directo. Porque leer no es suficiente cuando necesitas transformación real.",
      includes: [
        'Todo lo de Free, más...',
        'Sesiones 1:1 de coaching certificado (mensuales)',
        'Planes de acción personalizados',
        'Seguimiento y accountability',
        'Acceso prioritario a recursos exclusivos',
        'Comunidad privada Pro'
      ],
      forWho: "Líderes y profesionales comprometidos con su crecimiento que necesitan alguien que vea lo que ellos no pueden ver.",
      price: "Consultar",
      ctaText: "Agenda tu primera sesión",
      ctaVariant: "default" as const,
      featured: true
    },
    {
      badge: "Para organizaciones",
      badgeClass: "bg-formidable-olive text-formidable-gold",
      title: "Formidable Teams",
      description: "Transformación cultural para empresas que saben que su mayor activo son las personas, pero no logran que brillen juntas.",
      includes: [
        'Diagnóstico organizacional completo',
        'Talleres de alto rendimiento',
        'Coaching ejecutivo para líderes',
        'Creación de cultura de feedback',
        'Programas de desarrollo personalizados',
        'Medición de impacto y seguimiento trimestral'
      ],
      forWho: "Empresas que quieren equipos que no solo funcionen, sino que se transformen en ventaja competitiva.",
      price: "Personalizado",
      ctaText: "Hablemos de tu equipo",
      ctaVariant: "outline" as const,
      featured: false
    }
  ];

  return (
    <section id="servicios" className="pt-12 pb-24 px-6 md:px-24 bg-formidable-olive-light relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-formidable-gold mb-4" style={{ fontSize: '48px' }}>
            Elige tu nivel de transformación
          </h2>
          <p className="text-formidable-gold opacity-70" style={{ fontSize: '18px' }}>
            Cada camino está diseñado para llevarte más allá de donde estás ahora
          </p>
        </div>

        {/* Mobile: Stack cards normally */}
        <div className="md:hidden space-y-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} isExpanded={true} />
          ))}
        </div>

        {/* Desktop: Expandable cards */}
        <div className="hidden md:flex gap-4 items-stretch">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;
            const flexValue = isHovered ? 2.5 : isAnyHovered ? 0.75 : 1;
            
            return (
              <div
                key={index}
                className="transition-all duration-500 ease-out"
                style={{ 
                  flex: flexValue,
                  minWidth: isHovered ? '600px' : '250px'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <ServiceCard 
                  service={service} 
                  isExpanded={isHovered || !isAnyHovered}
                  isCompressed={isAnyHovered && !isHovered}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: {
    badge: string;
    badgeClass: string;
    title: string;
    description: string;
    includes: string[];
    forWho: string;
    price: string;
    ctaText: string;
    ctaVariant: "default" | "outline";
    featured: boolean;
  };
  isExpanded: boolean;
  isCompressed?: boolean;
}

function ServiceCard({ service, isExpanded, isCompressed = false }: ServiceCardProps) {
  return (
    <div 
      className={`
        h-full rounded-lg border transition-all duration-500
        ${service.featured ? 'border-formidable-red shadow-2xl shadow-formidable-red/30 glassmorphism' : 'border-formidable-gold/30 glassmorphism'}
        overflow-hidden flex flex-col
      `}
    >
      <div className="p-6 flex flex-col h-full">
        <Badge className={`${service.badgeClass} w-fit mb-4 transition-opacity duration-300 ${isCompressed ? 'opacity-0' : 'opacity-100'}`}>
          {service.badge}
        </Badge>
        
        <h3 className="text-formidable-gold mb-3" style={{ fontSize: isCompressed ? '22px' : '28px', transition: 'font-size 0.5s' }}>
          {service.title}
        </h3>
        
        <p 
          className={`text-formidable-gold opacity-80 mb-6 transition-all duration-500 ${isCompressed ? 'opacity-0 h-0 overflow-hidden' : 'opacity-80'}`}
        >
          {service.description}
        </p>

        <div className={`flex-grow space-y-6 transition-all duration-500 ${isCompressed ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
          <div className="space-y-3">
            <p className="text-formidable-gold opacity-70">Incluye:</p>
            <ul className="space-y-2">
              {service.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-formidable-gold flex-shrink-0 mt-0.5" />
                  <span className="text-formidable-gold opacity-90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-formidable-gold opacity-70 mb-2">Para quién:</p>
            <p className="text-formidable-gold opacity-90">
              {service.forWho}
            </p>
          </div>

          <div>
            <p className="text-formidable-gold opacity-70">Precio:</p>
            <p className="text-formidable-gold" style={{ fontSize: '32px' }}>{service.price}</p>
          </div>
        </div>

        <div className={`mt-6 transition-all duration-500 ${isCompressed ? 'opacity-0' : 'opacity-100'}`}>
          {service.ctaVariant === "outline" ? (
            <Button 
              variant="outline" 
              className="w-full border-formidable-gold text-formidable-gold hover:bg-formidable-gold/10"
              asChild
            >
              <a href="#contacto">{service.ctaText}</a>
            </Button>
          ) : (
            <Button 
              className="w-full bg-formidable-gold text-formidable-dark hover:bg-formidable-gold/90"
              asChild
            >
              <a href="#contacto">{service.ctaText}</a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
