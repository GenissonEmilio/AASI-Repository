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
        // Configurações padrão do glitch
        playMode: 'always',
        createContainers: true,
        hideOverflow: true,
        timing: {
          duration: 1000,
          iterations: Infinity,
        },
        glitchTimeSpan: {
          start: 0.5,
          end: 0.9,
        },
        shake: {
          velocity: 30,
          amplitudeX: 1.0,
          amplitudeY: 0,
        },
        slice: {
          count: 20,
          velocity: 15,
          minHeight: 0.02,
          maxHeight: 0.15,
          hueRotate: true,
        },
        pulse: false,
        // Sobrescreve com opções personalizadas se fornecidas
        
      });
    }
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
    />
  );
};

export default GlitchImage;