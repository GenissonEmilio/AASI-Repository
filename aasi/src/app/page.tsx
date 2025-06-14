"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "https://www.instagram.com/atleticahashiras/";
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <span className="text-xl md:text-4xl font-bold">
        Redirecionando para o Instagram...
      </span>
    </div>
  );
}
