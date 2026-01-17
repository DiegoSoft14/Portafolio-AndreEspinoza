// components/GlobalRobot.jsx
import { useState, useEffect } from "react";

export default function GlobalRobot() {
  const [loaded, setLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setLoaded(true);
    
    // Track mouse movement globally
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Calcular posición del cursor relativa al centro de la pantalla
  // y ajustar para que el robot tenga más rango
  const calculateAdjustedPosition = () => {
    if (typeof window === 'undefined') return { x: 0, y: 0 };
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Ajustar la sensibilidad: hacer que movimientos pequeños del cursor
    // resulten en movimientos más grandes para el robot
    const sensitivity = 1.5;
    
    const relativeX = (mousePosition.x - centerX) * sensitivity;
    const relativeY = (mousePosition.y - centerY) * sensitivity;
    
    return { x: relativeX, y: relativeY };
  };

  const adjustedPos = calculateAdjustedPosition();

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-40 overflow-visible">
      {/* Contenedor principal que mantiene el tamaño original */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[540px]"
      >
        {/* Contenedor interno que actúa como "ventana" más pequeña */}
        <div 
          className="relative w-full h-full overflow-visible"
          style={{
            // Crear un área más pequeña donde el cursor se mueve
            // pero el robot se escala para llenar el contenedor
          }}
        >
          {/* IFRAME con transformación que amplía el rango efectivo */}
          <iframe
            src="https://my.spline.design/robotfollowcursorforlandingpagemc-rDodM7Fm2vaI1CD4Bt8YufZn/"
            title="3D Robot"
            frameBorder="0"
            loading="lazy"
            className={`
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[200%]    /* ¡MÁS GRANDE! */
              h-[200%]    /* ¡MÁS GRANDE! */
              transition-opacity duration-1000
              ${loaded ? 'opacity-100' : 'opacity-0'}
              pointer-events-auto
            `}
            style={{
              // Escalar más grande pero recortar para mantener tamaño visual
              minWidth: '1400px',
              minHeight: '1080px',
              // Forzar que se vea completo
              overflow: 'visible',
              clipPath: 'none',
              // Crear la ilusión de que el robot está en un espacio más grande
              // pero solo mostramos el centro
              transform: `translate(-50%, -50%) scale(0.8)`,
              transformOrigin: 'center center',
            }}
          />
          
          {/* Overlay que simula una "ventana" más pequeña */}
          <div 
            className="absolute inset-0 border-2 border-transparent"
            style={{
              // Esta capa ayuda al robot a "pensar" que está en un espacio más pequeño
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* SHADOW ajustada */}
        <div className="absolute -bottom-6 left-1/4 right-1/4 h-16 bg-gradient-to-t from-black/60 to-transparent blur-xl"></div>
      </div>

      {/* Script para inyectar en el iframe y modificar el comportamiento de Spline */}
      <script 
        dangerouslySetInnerHTML={{
          __html: `
            // Este script se ejecutará en el contexto principal
            // No podemos modificar directamente el contenido del iframe por seguridad
            // Pero podemos intentar ajustar cómo se comporta
            
            // Intentar modificar el iframe después de cargar
            window.addEventListener('load', function() {
              setTimeout(function() {
                const iframe = document.querySelector('iframe[title="3D Robot"]');
                if (iframe && iframe.contentWindow) {
                  try {
                    // Inyectar un script en el iframe para modificar el comportamiento
                    const script = \`
                      // Intentar acceder al objeto Spline y modificar parámetros
                      setTimeout(function() {
                        // Buscar el objeto del robot y ajustar límites de rotación
                        if (window.splineRuntime && window.splineRuntime.objects) {
                          Object.values(window.splineRuntime.objects).forEach(obj => {
                            if (obj.name && obj.name.toLowerCase().includes('eye') || 
                                obj.name && obj.name.toLowerCase().includes('head')) {
                              // Intentar ajustar límites de rotación
                              if (obj.rotationLimits) {
                                obj.rotationLimits.x = [-Math.PI/4, Math.PI/4];  // 45 grados
                                obj.rotationLimits.y = [-Math.PI/3, Math.PI/3];  // 60 grados
                              }
                            }
                          });
                        }
                      }, 2000);
                    \`;
                    
                    // Crear un blob e inyectar el script
                    const blob = new Blob([script], { type: 'application/javascript' });
                    const url = URL.createObjectURL(blob);
                    
                    // Crear un script en el iframe
                    const scriptEl = iframe.contentDocument.createElement('script');
                    scriptEl.src = url;
                    iframe.contentDocument.head.appendChild(scriptEl);
                    
                  } catch (e) {
                    console.log('No se pudo modificar el iframe por políticas de seguridad');
                  }
                }
              }, 3000);
            });
          `
        }}
      />
    </div>
  );
}