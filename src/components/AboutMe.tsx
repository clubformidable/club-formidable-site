"use client";

import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Award, Briefcase, Users, Lightbulb } from "lucide-react";

export function AboutMe() {
  return (
    <div className="relative bg-formidable-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            className="text-formidable-gold mb-6"
            style={{ fontSize: '48px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Quién está detrás de Club Formidable
          </motion.h1>
          <motion.p 
            className="text-formidable-gold opacity-70 max-w-3xl mx-auto"
            style={{ fontSize: '18px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ingeniero que se convirtió en coach. Líder de producto que aprendió que las personas son el producto más importante.
          </motion.p>
        </div>
      </section>

      {/* Bloque 1: Mi Historia */}
      <section className="relative py-20 px-6 bg-formidable-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1609503842755-77f4a81d69ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb2FjaCUyMG1lbnRvcnxlbnwxfHx8fDE3NjI0Mzc1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mario Acevedo - Coach profesional"
                className="w-full rounded-lg shadow-2xl transition-all duration-500"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-formidable-gold/30 group-hover:ring-2 group-hover:ring-formidable-gold transition-all duration-300"></div>
              <div className="absolute top-4 right-4">
                <Badge className="bg-formidable-red text-white shadow-lg">
                  Coach ICF
                </Badge>
              </div>
            </motion.div>

            <motion.div
              className="text-formidable-gold"
              style={{ fontSize: '20px', lineHeight: '1.6' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4">
                Soy <strong>Mario Acevedo</strong>. Ingeniero electrónico, VP de Producto, padre, esposo y coach certificado.
              </p>
              <p className="mb-4">
                Durante años construí productos digitales que escalaron a millones de usuarios. Lideré equipos remotos en 3 zonas horarias. Llevé un producto de 0 a $1.3M ARR en 2 años. Hice todo lo que se supone que hace un "líder exitoso".
              </p>
              <p className="mb-4">
                Pero no era suficiente. Algo de mi esencia faltaba.
              </p>
              <p className="mb-4">
                Veía equipos brillantes atrapados en su propia mediocridad. Personas con talento increíble que no lo veían o tenían dificultades para balancear con su familia. Organizaciones que pedían resultados pero no invertían en las personas que los generaban.
              </p>
              <p className="mb-4">
                Entonces me di cuenta: <strong>la tecnología escala, pero las personas transforman.</strong>
              </p>
              <p className="mb-4">
                Estudié psicología. Me certifiqué como coach (ICF). Lideré procesos de transformación cultural en multinacionales. Y descubrí mi verdadera vocación: ayudar a personas y equipos a ver el potencial que sus puntos ciegos no les permiten ver.
              </p>
              <p className="mb-4">
                Hoy combino mis dos mundos: la mentalidad de producto (orientada a resultados, basada en datos, obsesionada con el usuario) con el coaching certificado (profundo, empático, transformacional).
              </p>
              <p>
                <strong>El resultado: coaching que no endulza la realidad, pero que confía en que puedes manejarla.</strong>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bloque 2: Lo Que Me Hace Diferente */}
      <section className="relative py-20 px-6 bg-formidable-gold">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-formidable-dark text-center mb-16"
            style={{ fontSize: '36px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Por qué trabajo así
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Ingeniero de fondo",
                copy: "No hago coaching \"místico\". Hago coaching basado en evidencia. Mido. Itero. Ajusto. Trato tu crecimiento como el producto más importante que vas a construir: tú mismo.",
                badge: "Basado en evidencia"
              },
              {
                icon: Users,
                title: "Líder de equipos remotos",
                copy: "Lideré equipos distribuidos en 3 continentes. Sé lo que significa construir confianza sin estar en la misma sala. Sé cómo funcionan los equipos de alto rendimiento. Y sé cuándo están fallando.",
                badge: "15+ años"
              },
              {
                icon: Award,
                title: "Coach certificado (ICF)",
                copy: "No soy un \"mentor\" con buenos consejos. Soy un profesional entrenado y certificado en coaching transformacional. La diferencia es enorme: no te digo qué hacer. Te ayudo a descubrir qué puedes hacer.",
                badge: "ICF Certificado"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/95 backdrop-blur-sm p-8 rounded-lg border border-formidable-dark/20 shadow-lg hover:shadow-2xl hover:shadow-formidable-dark/20 transition-all duration-500 hover:scale-105 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-formidable-gold/20 rounded-lg group-hover:bg-formidable-gold/30 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-formidable-dark" />
                  </div>
                  <Badge className={`${index === 1 ? 'bg-formidable-red text-white' : 'bg-formidable-olive text-formidable-gold'}`}>
                    {item.badge}
                  </Badge>
                </div>
                <h3 className="text-formidable-dark mb-4" style={{ fontSize: '24px' }}>
                  {item.title}
                </h3>
                <p className="text-formidable-dark opacity-80" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  {item.copy}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloque 3: Trayectoria en Números */}
      <section className="relative py-20 px-6 bg-formidable-dark">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-formidable-gold text-center mb-16"
            style={{ fontSize: '36px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Construyendo cosas que importan
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                number: "15+ años",
                description: "Liderando equipos y productos en startups y empresas internacionales",
                featured: false
              },
              {
                number: "$1.3M ARR",
                description: "Generados en 2 años con producto 0→1 en fintech con IA",
                featured: true
              },
              {
                number: "100K+ usuarios",
                description: "Impactados en plataformas digitales que construí",
                featured: false
              },
              {
                number: "3 continentes",
                description: "Liderando equipos remotos en Europa, América y MENA",
                featured: false
              }
            ].map((metric, index) => (
              <motion.div
                key={index}
                className={`text-center p-8 bg-white/5 backdrop-blur-sm rounded-lg border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  metric.featured 
                    ? 'border-formidable-red shadow-xl shadow-formidable-red/20 hover:shadow-formidable-red/30' 
                    : 'border-formidable-gold/20 hover:border-formidable-gold/40 hover:shadow-formidable-gold/20'
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {metric.featured && (
                  <Badge className="bg-formidable-red text-white mb-4">
                    Destacado
                  </Badge>
                )}
                <div className="text-formidable-gold mb-3" style={{ fontSize: '48px' }}>
                  {metric.number}
                </div>
                <p className="text-formidable-gold opacity-70" style={{ fontSize: '16px', lineHeight: '1.5' }}>
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloque 4: Formación y Experiencia */}
      <section className="relative py-20 px-6 bg-formidable-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Columna Izquierda: Formación */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-formidable-gold/20"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-8 h-8 text-formidable-gold" />
                <h3 className="text-formidable-gold" style={{ fontSize: '32px' }}>
                  Formación
                </h3>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: "Coach Certificado ICF",
                    subtitle: "Master Executive Coaching, EFIC (2024)",
                    highlight: true
                  },
                  {
                    title: "Psicología & Coaching",
                    subtitle: "Master en Psicología aplicada al coaching, TAGO Estudios",
                    highlight: false
                  },
                  {
                    title: "Ingeniería Electrónica y Automatización",
                    subtitle: "Universidad Carlos III de Madrid",
                    highlight: false
                  },
                  {
                    title: "Especialización en IA",
                    subtitle: "Implementación de sistemas IA para automatización, testing y comunicación",
                    highlight: false
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`border-l-2 pl-6 py-2 hover:bg-white/5 transition-all duration-300 rounded-r ${
                      item.highlight ? 'border-formidable-red' : 'border-formidable-gold/30'
                    }`}
                  >
                    <h4 className="text-formidable-gold flex items-center gap-2" style={{ fontSize: '20px' }}>
                      {item.title}
                      {item.highlight && (
                        <Badge className="bg-formidable-red text-white text-xs">ICF</Badge>
                      )}
                    </h4>
                    <p className="text-formidable-gold opacity-60 mt-1" style={{ fontSize: '16px' }}>
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Columna Derecha: Experiencia */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-formidable-gold/20"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-8 h-8 text-formidable-gold" />
                <h3 className="text-formidable-gold" style={{ fontSize: '32px' }}>
                  Experiencia clave
                </h3>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: "VP de Producto en Fintech con IA",
                    description: "Escalado de 0 a $1.3M ARR en 2 años. Liderazgo de equipo remoto 15+ personas en 3 zonas horarias. Producto tech con impacto real.",
                    highlight: true
                  },
                  {
                    title: "Coach de Transformación Cultural",
                    description: "Programas de cambio en organizaciones multinacionales. Inteligencia emocional, gestión de conflictos, adaptación al cambio.",
                    highlight: false
                  },
                  {
                    title: "Chief Product Officer",
                    description: "Detención de churn crítico, reducción de costes 20%, incremento de velocidad 30%. Resultados en 4 meses.",
                    highlight: false
                  },
                  {
                    title: "Líder de Producto B2B",
                    description: "Construcción de productos centrados en usuario con foco obsesivo en market fit y experiencia de cliente.",
                    highlight: false
                  },
                  {
                    title: "Fundador & Emprendedor Tech",
                    description: "Aprendizajes brutales sobre resiliencia, fracaso y adaptación. Donde aprendí que el éxito no es lineal.",
                    highlight: false
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`border-l-2 pl-6 py-2 hover:bg-white/5 transition-all duration-300 rounded-r ${
                      item.highlight ? 'border-formidable-red' : 'border-formidable-gold/30'
                    }`}
                  >
                    <h4 className="text-formidable-gold" style={{ fontSize: '20px' }}>
                      {item.title}
                    </h4>
                    <p className="text-formidable-gold opacity-70 mt-2" style={{ fontSize: '16px', lineHeight: '1.5' }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bloque 5: Quién Soy Más Allá del Trabajo */}
      <section className="relative py-20 px-6 bg-formidable-gold">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="bg-white/95 backdrop-blur-sm p-10 rounded-lg border border-formidable-dark/20 shadow-xl"
              style={{ fontSize: '18px', lineHeight: '1.7' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-formidable-red text-white mb-6">
                Más allá del trabajo
              </Badge>
              <p className="text-formidable-dark mb-4">
                Vivo en Valencia con mi familia. Me defino como esposo, padre, creyente, humilde, pragmático, resiliente y empático.
              </p>
              <p className="text-formidable-dark mb-4">
                Creo que aprender y adaptarse es la única ventaja competitiva real. Y que sin humildad, no hay crecimiento.
              </p>
              <p className="text-formidable-dark mb-4">
                Fuera del coaching y el producto, me encontrarás buceando, leyendo, viendo fútbol americano, o simplemente pasando tiempo con las personas que amo.
              </p>
              <p className="text-formidable-dark">
                <strong>Porque al final, todo se trata de personas. Siempre.</strong>
              </p>
            </motion.div>

            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1644027621533-633fe3de243a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3ViYSUyMGRpdmluZyUyMHVuZGVyd2F0ZXJ8ZW58MXx8fHwxNzYyMzQ3NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mario Acevedo - Pasión por el buceo"
                className="w-full rounded-lg shadow-2xl transition-all duration-500"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-formidable-dark/20 group-hover:ring-2 group-hover:ring-formidable-gold transition-all duration-300"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bloque de Cierre */}
      <section className="relative py-20 px-6 bg-formidable-dark">
        <motion.div
          className="max-w-3xl mx-auto text-center bg-white/5 backdrop-blur-sm p-12 rounded-lg border border-formidable-red shadow-2xl shadow-formidable-red/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="bg-formidable-red text-white mb-8">
            La transformación empieza aquí
          </Badge>
          <p className="text-formidable-gold mb-6" style={{ fontSize: '24px', lineHeight: '1.6' }}>
            <strong>He construido productos que escalaron a cientos de miles de usuarios.</strong>
          </p>
          <p className="text-formidable-gold mb-6" style={{ fontSize: '24px', lineHeight: '1.6' }}>
            <strong>Pero mi mejor trabajo es ayudar a personas a escalar su propia vida.</strong>
          </p>
          <p className="text-formidable-gold mb-8" style={{ fontSize: '20px', lineHeight: '1.6' }}>
            Si has llegado hasta aquí, probablemente veas algo en ti que todavía no te atreves a reclamar.
          </p>
          <p className="text-formidable-gold" style={{ fontSize: '28px' }}>
            <strong>Vamos juntos a por ello.</strong>
          </p>
        </motion.div>
      </section>
    </div>
  );
}
