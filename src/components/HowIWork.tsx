"use client";

import { Target, Wifi, Sparkles, TrendingUp, Users, ChevronDown } from "lucide-react";
import coachImage from "figma:asset/92208e15259db93863f9a944977cfa36c8ca580a.png";
import { useState } from "react";
import { motion } from "motion/react";

interface HowIWorkProps {
  onNavigateToAbout?: () => void;
}

export function HowIWork({ onNavigateToAbout }: HowIWorkProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const blocks = [
    {
      icon: TrendingUp,
      title: "Empieza gratis, crece a tu ritmo",
      copy: "Únete al Club Formidable suscribiéndote gratis al newsletter. Cuando estés listo para más, Club Formidable PRO te da acceso a seminarios mensuales de soft skills + 17% de descuento en procesos de coaching 1:1. Cada nivel diseñado para que avances cuando estés preparado."
    },
    {
      icon: Users,
      title: "Del individual al colectivo",
      copy: "Trabajo contigo 1:1 en coaching personalizado. Y también con equipos y empresas que quieren transformación cultural real. Porque el crecimiento individual es poderoso, pero el crecimiento colectivo es imparable."
    },
    {
      icon: Target,
      title: "Compromiso sin excusas",
      copy: "No busco clientes que \"quieren intentarlo\". Busco personas que están listas para hacer el trabajo, incluso cuando es incómodo. La transformación no ocurre en tu zona de confort."
    },
    {
      icon: Wifi,
      title: "100% remoto, 100% presente",
      copy: "Trabajo desde donde estés. Lo que importa no es la ubicación, es la intensidad de la conversación. Sesiones online que van al grano, sin rodeos, con la presencia total que mereces."
    },
    {
      icon: Sparkles,
      title: "Tu potencial no es evidente (todavía)",
      copy: "Cada persona tiene algo único que el mundo necesita, pero que ellos mismos no ven. Mi trabajo es ayudarte a pulir eso que ya está ahí. No te convertiré en alguien que no eres. Te ayudaré a ser la versión más clara y potente de ti mismo."
    }
  ];

  const toggleBlock = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 md:px-24 bg-formidable-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-formidable-olive/5 to-transparent pointer-events-none"></div>
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-formidable-gold mb-4 text-[36px] md:text-[56px]" style={{ lineHeight: '1.1' }}>
            Cómo es trabajar conmigo
          </h2>
          <p className="text-formidable-gold opacity-70" style={{ fontSize: '18px' }}>
            Esto no es para todos. Y está bien.
          </p>
        </motion.div>

        {/* Two column layout: Text blocks + Image */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          {/* Text blocks column */}
          <div className="space-y-6">
            {blocks.map((block, index) => {
              const Icon = block.icon;
              const isExpanded = expandedIndex === index;
              
              return (
                <motion.div 
                  key={index} 
                  className="group relative p-6 rounded-lg glassmorphism hover:border-formidable-gold/30 transition-all duration-500 overflow-hidden cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-formidable-gold/20"
                  onClick={() => toggleBlock(index)}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex gap-4 items-center justify-between">
                    <div className="flex gap-4 items-center flex-1">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-formidable-gold/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-formidable-gold" />
                        </div>
                      </div>
                      <h3 className="text-formidable-gold" style={{ fontSize: '24px' }}>
                        {block.title}
                      </h3>
                    </div>
                    <ChevronDown 
                      className={`w-6 h-6 text-formidable-gold flex-shrink-0 transition-transform duration-500 ${
                        isExpanded ? 'rotate-180' : ''
                      } md:opacity-50 md:group-hover:opacity-100`}
                    />
                  </div>
                  <div 
                    className={`transition-all duration-500 overflow-hidden ${
                      isExpanded 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0 md:group-hover:max-h-96 md:group-hover:opacity-100'
                    }`}
                  >
                    <p className="text-formidable-gold opacity-85 mt-4 pl-16" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                      {block.copy}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Image column */}
          <div className="sticky top-32">
            <motion.div 
              className="relative cursor-pointer group"
              onClick={onNavigateToAbout}
              initial={{ y: 0 }}
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={coachImage} 
                alt="Coach speaking" 
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-formidable-gold/20"></div>
              
              {/* Destello con texto "¿Quién soy?" */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 4,
                  times: [0, 0.2, 0.7, 1],
                  repeat: Infinity,
                  repeatDelay: 8,
                  ease: "easeInOut"
                }}
              >
                <div className="bg-formidable-gold/95 backdrop-blur-sm px-8 py-4 rounded-lg shadow-2xl">
                  <p className="text-formidable-olive" style={{ fontSize: '24px' }}>
                    ¿Quién soy?
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Final statement - Full width */}
        <div className="p-8 rounded-lg glassmorphism border-2 border-formidable-gold/30">
          <p className="text-formidable-gold opacity-90 text-center max-w-4xl mx-auto" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            Porque sin un coach certificado, tu destino está marcado por lo que no ves. No necesitas más personas con consejos. Necesitas alguien entrenado para hacerte crecer.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
