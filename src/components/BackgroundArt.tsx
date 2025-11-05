export function BackgroundArt() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large decorative circles with blur */}
      <div 
        className="absolute rounded-full opacity-30 blur-3xl animate-pulse"
        style={{
          top: '10%',
          left: '5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(230, 0, 18, 0.3) 0%, transparent 70%)',
          animationDuration: '8s'
        }}
      />
      
      <div 
        className="absolute rounded-full opacity-25 blur-3xl animate-pulse"
        style={{
          top: '40%',
          right: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(192, 168, 129, 0.4) 0%, transparent 70%)',
          animationDuration: '6s',
          animationDelay: '2s'
        }}
      />

      <div 
        className="absolute rounded-full opacity-20 blur-3xl animate-pulse"
        style={{
          bottom: '20%',
          left: '15%',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(230, 0, 18, 0.25) 0%, transparent 70%)',
          animationDuration: '10s',
          animationDelay: '1s'
        }}
      />

      <div 
        className="absolute rounded-full opacity-25 blur-3xl"
        style={{
          top: '70%',
          right: '30%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(192, 168, 129, 0.3) 0%, transparent 70%)'
        }}
      />

      <div 
        className="absolute rounded-full opacity-20 blur-3xl animate-pulse"
        style={{
          top: '50%',
          left: '50%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(230, 0, 18, 0.2) 0%, transparent 70%)',
          animationDuration: '12s',
          animationDelay: '3s'
        }}
      />

      {/* Geometric shapes */}
      <div 
        className="absolute border-2 border-formidable-red/30 rounded-lg rotate-12"
        style={{
          top: '15%',
          right: '20%',
          width: '300px',
          height: '300px',
          boxShadow: '0 0 40px rgba(230, 0, 18, 0.15)'
        }}
      />

      <div 
        className="absolute border-2 border-formidable-gold/30 rounded-full"
        style={{
          bottom: '30%',
          right: '5%',
          width: '200px',
          height: '200px',
          boxShadow: '0 0 30px rgba(192, 168, 129, 0.15)'
        }}
      />

      <div 
        className="absolute border-2 border-formidable-red/25 rounded-lg -rotate-12"
        style={{
          top: '60%',
          left: '5%',
          width: '250px',
          height: '250px',
          boxShadow: '0 0 35px rgba(230, 0, 18, 0.12)'
        }}
      />

      {/* Additional decorative shapes */}
      <div 
        className="absolute border-2 border-formidable-red/20 rounded-full"
        style={{
          top: '25%',
          left: '40%',
          width: '150px',
          height: '150px',
          boxShadow: '0 0 25px rgba(230, 0, 18, 0.1)'
        }}
      />

      <div 
        className="absolute bg-formidable-gold/5 rounded-lg rotate-45 border border-formidable-red/15"
        style={{
          bottom: '15%',
          right: '35%',
          width: '180px',
          height: '180px',
          boxShadow: '0 0 50px rgba(230, 0, 18, 0.08)'
        }}
      />

      {/* Decorative lines and patterns */}
      <svg 
        className="absolute opacity-20"
        style={{ top: '20%', left: '30%', width: '400px', height: '400px' }}
        viewBox="0 0 400 400"
        fill="none"
      >
        <path 
          d="M 50 50 Q 200 100 350 50" 
          stroke="#E60012" 
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path 
          d="M 50 150 Q 200 200 350 150" 
          stroke="#c0a881" 
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="200" cy="200" r="80" stroke="#E60012" strokeWidth="2" fill="none" opacity="0.5" />
        <circle cx="200" cy="200" r="60" stroke="#c0a881" strokeWidth="1" fill="none" opacity="0.3" />
      </svg>

      <svg 
        className="absolute opacity-20"
        style={{ bottom: '10%', right: '25%', width: '350px', height: '350px' }}
        viewBox="0 0 350 350"
        fill="none"
      >
        <path 
          d="M 50 300 Q 175 250 300 300" 
          stroke="#c0a881" 
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <rect 
          x="100" 
          y="100" 
          width="150" 
          height="150" 
          stroke="#E60012" 
          strokeWidth="2" 
          fill="none"
          transform="rotate(20 175 175)"
        />
        <circle cx="175" cy="175" r="100" stroke="#c0a881" strokeWidth="1" fill="none" opacity="0.4" />
      </svg>

      <svg 
        className="absolute opacity-20"
        style={{ top: '50%', right: '10%', width: '300px', height: '300px' }}
        viewBox="0 0 300 300"
        fill="none"
      >
        <line x1="50" y1="150" x2="250" y2="150" stroke="#E60012" strokeWidth="2" />
        <line x1="150" y1="50" x2="150" y2="250" stroke="#c0a881" strokeWidth="2" />
        <polygon 
          points="150,80 200,150 150,220 100,150" 
          stroke="#E60012" 
          strokeWidth="2" 
          fill="none"
        />
      </svg>

      {/* Dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: 'radial-gradient(circle, #c0a881 1.5px, transparent 1.5px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, #c0a881 1px, transparent 1px),
            linear-gradient(to bottom, #c0a881 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Subtle gradient overlays for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(192, 168, 129, 0.15) 0%, transparent 50%)'
        }}
      />
      
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 70% 80%, rgba(74, 78, 61, 0.2) 0%, transparent 50%)'
        }}
      />

      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(192, 168, 129, 0.05) 0%, transparent 50%, rgba(74, 78, 61, 0.08) 100%)'
        }}
      />
    </div>
  );
}
