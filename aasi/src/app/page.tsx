"use client";

import { useEffect, useState } from "react";
import NightSkyComponent from "@/components/NightSkyComponent";
import CardInfo from "@/components/CardInfo";
import NeonEffect from "@/components/NeonEffect";

export default function Home() {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowAlert(false), 5000); // 5 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {showAlert && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto px-4 py-2 bg-gradient-to-r from-purple-700 to-fuchsia-400 text-white font-semibold rounded-md shadow-lg animate-fade-in-out transition-all duration-300 whitespace-nowrap">
          Deslize o dedo na tela para ver o efeito!
        </div>
      )}

      <div className="relative flex items-center justify-center w-full h-full min-h-screen overflow-hidden">
        <NeonEffect />
        <div className="absolute inset-0 -z-10">
          <NightSkyComponent />
        </div>

        <div className="relative bottom-10 flex flex-col items-center justify-center px-4">
          <h1
            style={{ fontFamily: "gang" }}
            className="text-4xl bg-gradient-to-r from-[#6B2BDA] to-fuchsia-600 text-transparent bg-clip-text text-center font-bold"
          >
            Atletica Hashiras
          </h1>
          <p className="text-sm text-center mb-8 font-bold">
            A Atlética Hashiras nasceu da vontade de tornar <br /> o curso de
            BSI mais unido, mais visível e mais engajado.
          </p>
          <CardInfo />
          <div className="mt-4">
            <p
              className="text-3xl bg-gradient-to-r from-[#6B2BDA] to-fuchsia-600 text-transparent bg-clip-text text-center font-bold"
              style={{ fontFamily: "gang" }}
            >
              Vem ser Hashiras!
            </p>
          </div>
        </div>
      </div>

      <a
        href="https://www.instagram.com/atleticahashiras/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-200"
      >
        Instagram
      </a>
    </div>
  );
}
