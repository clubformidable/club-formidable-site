export function Privacy() {
  return (
    <section id="privacidad" className="py-24 px-6 md:px-24 bg-formidable-dark relative">
      <div className="relative z-10 max-w-4xl mx-auto text-formidable-gold">
        <h2 className="text-[36px] md:text-[48px] mb-8">Aviso Legal y Política de Privacidad</h2>
        
        <div className="space-y-2 mb-8 opacity-80">
          <p><strong>Titular del sitio web:</strong> Mario Acevedo</p>
          <p><strong>Correo de contacto:</strong> mario@clubformidable.com</p>
          <p><strong>Domicilio:</strong> Valencia, España</p>
          <p><strong>Sitio web:</strong> https://www.clubformidable.com</p>
        </div>

        <p className="opacity-80 mb-8" style={{ lineHeight: 1.7 }}>
          El presente aviso regula el uso del sitio web propiedad de Mario Acevedo (en adelante, "el Titular"). El acceso y uso de esta página web implican la aceptación de las condiciones descritas a continuación.
        </p>

        <hr className="border-formidable-gold/30 my-8" />

        <h3 className="text-2xl font-semibold mt-8 mb-4">1. Finalidad del sitio web</h3>
        <p className="opacity-80 mb-4" style={{ lineHeight: 1.7 }}>
          Este sitio tiene como finalidad compartir información profesional y ofrecer enlaces a servicios externos (por ejemplo, para agendar llamadas o acceder a contenidos en Substack).
        </p>
        <p className="opacity-80 mb-8" style={{ lineHeight: 1.7 }}>
          No se ofrece asesoramiento financiero, médico ni profesional formal a través de esta web.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">2. Limitación de responsabilidad</h3>
        <p className="opacity-80 mb-4" style={{ lineHeight: 1.7 }}>
          El Titular no se hace responsable de:
        </p>
        <ul className="opacity-80 mb-8 list-disc list-inside space-y-2" style={{ lineHeight: 1.7 }}>
          <li>Los daños o perjuicios derivados del uso de la información contenida en el sitio web.</li>
          <li>Los contenidos, políticas o prácticas de sitios externos enlazados (como Substack, Calendly, etc.).</li>
          <li>El uso que terceros hagan de los datos personales recabados en dichos servicios externos.</li>
        </ul>
        <p className="opacity-80 mb-8" style={{ lineHeight: 1.7 }}>
          El usuario navega y utiliza los enlaces bajo su propia responsabilidad.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">3. Uso de cookies</h3>
        <p className="opacity-80 mb-4" style={{ lineHeight: 1.7 }}>
          Este sitio utiliza cookies propias y de terceros con fines exclusivamente analíticos mediante Contentsquare, para comprender cómo interactúan los visitantes con la página y mejorar la experiencia de navegación.
        </p>
        <ul className="opacity-80 mb-8 list-disc list-inside space-y-2" style={{ lineHeight: 1.7 }}>
          <li>Las cookies no recopilan información personal identificable.</li>
          <li>El usuario puede aceptar, rechazar o configurar el uso de cookies mediante el banner correspondiente, o bien gestionarlas desde la configuración de su navegador.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-4">4. Protección de datos personales</h3>
        <p className="opacity-80 mb-4" style={{ lineHeight: 1.7 }}>
          Este sitio no recopila datos personales de forma directa ni mantiene bases de datos de usuarios.
        </p>
        <p className="opacity-80 mb-4" style={{ lineHeight: 1.7 }}>
          Cualquier información facilitada por el usuario al agendar una llamada o suscribirse en plataformas externas (como Substack o Calendly) se gestiona bajo las políticas de privacidad de dichas plataformas, no siendo responsabilidad del Titular.
        </p>
        <p className="opacity-80 mb-8" style={{ lineHeight: 1.7 }}>
          El Titular únicamente accede, en su caso, a información estadística agregada y anónima proporcionada por Contentsquare o por los servicios externos utilizados.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">5. Derechos de propiedad intelectual</h3>
        <p className="opacity-80 mb-4" style={{ lineHeight: 1.7 }}>
          Todos los contenidos de este sitio (textos, imágenes, código y logotipos) son propiedad de Mario Acevedo, salvo indicación expresa.
        </p>
        <p className="opacity-80 mb-8" style={{ lineHeight: 1.7 }}>
          Queda prohibida su reproducción, distribución o modificación sin autorización previa por escrito.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">6. Legislación aplicable</h3>
        <p className="opacity-80 mb-4" style={{ lineHeight: 1.7 }}>
          El presente aviso legal se rige por la legislación vigente en España, especialmente el Reglamento General de Protección de Datos (UE 2016/679) y la Ley 34/2002 (LSSI-CE).
        </p>
        <p className="opacity-80" style={{ lineHeight: 1.7 }}>
          Para cualquier controversia derivada del acceso o uso de este sitio web, ambas partes se someterán a los juzgados y tribunales de Valencia, España.
        </p>
      </div>
    </section>
  );
}
