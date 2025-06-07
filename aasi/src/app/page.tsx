import NightSkyComponent from "@/components/NightSkyComponent";
import Image from "next/image";
import { PowerGlitch } from "powerglitch";
//import Script from "next/script";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center">
       <NightSkyComponent />
      <div className="absolute text-3xl text-[#6B2BDA] text-center">
        <h1 style={{ fontFamily: 'fonte' }} className="bg-gradient-to-r from-[#6B2BDA] to-fuchsia-600 text-transparent bg-clip-text">Em breve</h1>
        <div>
          <p style={{ fontFamily: 'nasalization' }} className="text-sm text-white">Obs. Guardem os cards para uma surpresa.</p>
        </div>
      </div>

      <Image src={'/images/samurai.png'} alt="samurai" width={150} height={250} className="absolute inset-y-130 bottom-0 right-0"/>
    </div>
  );
}
