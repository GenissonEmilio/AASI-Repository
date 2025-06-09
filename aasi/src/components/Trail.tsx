"use client";

import React, { useRef, useState } from "react";

type Point = { x: number; y: number; id: number };

export default function Trail() {
  const [points, setPoints] = useState<Point[]>([]);
  const idRef = useRef(0);

  const addPoint = (x: number, y: number) => {
    const id = idRef.current++;
    setPoints((pts) => [...pts, { x, y, id }]);
    setTimeout(() => {
      setPoints((pts) => pts.filter((p) => p.id !== id));
    }, 400);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons !== 1) return;
    addPoint(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (touch) addPoint(touch.clientX, touch.clientY);
  };

  return (
    <div
      className="fixed inset-0 z-50"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="trail-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6B2BDA" />
            <stop offset="100%" stopColor="#D946EF" /> {/* fuchsia-600 */}
          </linearGradient>
        </defs>
        {points.length > 1 && (
          <polyline
            points={points.map((p) => `${p.x},${p.y}`).join(" ")}
            fill="none"
            stroke="url(#trail-gradient)"
            strokeWidth={8}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.5}
            style={{
              filter: "drop-shadow(0 0 8px #a78bfa)",
              transition: "opacity 0.4s linear",
            }}
          />
        )}
      </svg>
    </div>
  );
}
