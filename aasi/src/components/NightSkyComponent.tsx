"use client"
import { useEffect } from "react";
import React from 'react';

const NightSkyComponent = () => {
  useEffect(() => {
    if (document.getElementById("night-sky-script")) return;

    const script = document.createElement("script");
    script.src = "https://unpkg.com/@h0rn0chse/night-sky/dist/bundle.min.js";
    script.id = "night-sky-script";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {React.createElement('night-sky', {
        id: 'nightSky',
        layers: 1,
        density: 30,
        'velocity-x': 60,
        'velocity-y': 60,
        'star-color': '#FFF',
        'background-color': 'transparent',
      })}
    </div>
  );
};

export default NightSkyComponent;
