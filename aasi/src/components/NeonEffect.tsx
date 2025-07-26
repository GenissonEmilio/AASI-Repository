'use client';

import { useEffect, useRef } from 'react';

export default function NeonEffect() {
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const createStroke = (x: number, y: number) => {
      if (lastPos.current) {
        const line = document.createElement('div');
        line.className = 'stroke';
        
        // Calcular distância e ângulo entre o ponto anterior e atual
        const dx = x - lastPos.current.x;
        const dy = y - lastPos.current.y;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        // Posicionar e rotacionar o traço
        line.style.width = `${length}px`;
        line.style.height = '2px'; // espessura do traço
        line.style.position = 'absolute';
        line.style.left = `${lastPos.current.x}px`;
        line.style.top = `${lastPos.current.y}px`;
        line.style.background = 'cyan'; // cor do traço neon, pode mudar
        line.style.transformOrigin = '0 0';
        line.style.transform = `rotate(${angle}deg)`;
        line.style.pointerEvents = 'none';
        line.style.zIndex = '9999';
        line.style.opacity = '0.8';
        line.style.transition = 'opacity 0.5s ease-out';

        document.body.appendChild(line);

        // Desaparecer após 0.5s
        setTimeout(() => {
          line.style.opacity = '0';
          setTimeout(() => line.remove(), 500);
        }, 50);
      }

      lastPos.current = { x, y };
    };

    const handleMouseMove = (e: MouseEvent) => {
      createStroke(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        createStroke(touch.clientX, touch.clientY);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);

    // Resetar posição quando parar de mover para evitar linhas estranhas
    const resetLastPos = () => {
      lastPos.current = null;
    };

    document.addEventListener('mouseleave', resetLastPos);
    document.addEventListener('touchend', resetLastPos);
    document.addEventListener('touchcancel', resetLastPos);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseleave', resetLastPos);
      document.removeEventListener('touchend', resetLastPos);
      document.removeEventListener('touchcancel', resetLastPos);
    };
  }, []);

  return null;
}
