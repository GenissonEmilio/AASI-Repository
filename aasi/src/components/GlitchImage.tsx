"use client"
import React, { useEffect, useRef } from 'react';
import { PowerGlitch } from 'powerglitch';

interface GlitchImageProps {
  src: string;
  alt: string;
  className?: string;
}

const GlitchImage: React.FC<GlitchImageProps> = ({ 
  src, 
  alt, 
  className = '',  
}) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      PowerGlitch.glitch(imgRef.current, {
        playMode: 'always',
        createContainers: true,
        hideOverflow: true,
        timing: {
          duration: 50, // mais curto = efeito mais frequente
          iterations: Infinity,
          easing: 'ease-in-out',
        },
        glitchTimeSpan: {
          start: 0.1,
          end: 1, // glitch ativo por quase todo o ciclo
        },
        shake: {
          velocity: 30,
          amplitudeX: 1.0,  // deslocamento horizontal forte
          amplitudeY: 0,  // deslocamento vertical forte
        },
        slice: {
          count: 150, // mais cortes
          velocity: 25,
          minHeight: 0.02,
          maxHeight: 1.0, // cortes mais altos
          hueRotate: true,
        },
        pulse: false,
      });
    }
  }, [src]);

  return (
    <div>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`${className} glitch-intense`}
      />
    </div>
  );
};

export default GlitchImage;
