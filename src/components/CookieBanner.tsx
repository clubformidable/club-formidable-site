import { useState, useEffect } from "react";
import { Button } from "./ui/button";

interface CookieBannerProps {
  onNavigate: (page: "home" | "about" | "privacy", sectionId?: string) => void;
}

export function CookieBanner({ onNavigate }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  const loadHotjar = () => {
    // Cargar Contentsquare
    const csScript = document.createElement('script');
    csScript.src = 'https://t.contentsquare.net/uxa/8327179cb4436.js';
    csScript.async = true;
    document.head.appendChild(csScript);

    // Cargar Google Analytics
    const gaScript = document.createElement('script');
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-P941R64YDM';
    gaScript.async = true;
    document.head.appendChild(gaScript);

    // Configurar Google Analytics
    const gaConfigScript = document.createElement('script');
    gaConfigScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-P941R64YDM');
    `;
    document.head.appendChild(gaConfigScript);
  };

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    loadHotjar();
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
  };

  const handleMoreInfo = () => {
    onNavigate("privacy");
    // No ocultamos el banner, el usuario debe aceptar o rechazar después de leer
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 99999,
      padding: '24px',
      backgroundColor: 'rgba(26, 26, 26, 0.95)',
      backdropFilter: 'blur(12px)',
      borderTop: '1px solid rgba(212, 175, 55, 0.3)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ flex: 1, color: '#D4AF37' }}>
            <p style={{ fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
              Este sitio utiliza cookies analíticas (Google Analytics y Contentsquare) para mejorar tu experiencia. 
              No recopilamos información personal identificable. 
              Puedes aceptar, rechazar o leer más sobre nuestra política de privacidad.
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={handleAccept}
              style={{ 
                padding: '10px 24px', 
                backgroundColor: '#D4AF37', 
                color: '#1A1A1A', 
                border: 'none', 
                borderRadius: '6px',
                cursor: 'pointer', 
                fontSize: '15px',
                fontWeight: '500',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#C29D31'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#D4AF37'}
            >
              Aceptar
            </button>
            <button
              onClick={handleReject}
              style={{ 
                padding: '10px 24px', 
                backgroundColor: 'transparent', 
                color: '#D4AF37', 
                border: '1px solid #D4AF37', 
                borderRadius: '6px',
                cursor: 'pointer', 
                fontSize: '15px',
                fontWeight: '500',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Rechazar
            </button>
            <button
              onClick={handleMoreInfo}
              style={{ 
                padding: '10px 24px', 
                backgroundColor: 'transparent', 
                color: '#D4AF37', 
                border: 'none', 
                borderRadius: '6px',
                cursor: 'pointer', 
                fontSize: '15px',
                fontWeight: '500',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Más información
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
