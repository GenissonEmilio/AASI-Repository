// components/NeonEffect.tsx
'use client';

import { useEffect } from 'react';

export default function NeonEffect() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const neon = document.createElement('div');
      neon.className = 'neon';
      neon.style.left = `${e.clientX}px`;
      neon.style.top = `${e.clientY}px`;

      document.body.appendChild(neon);

      // Remover o neon depois de 1s
      setTimeout(() => {
        neon.remove();
      }, 1000);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
