import NightSkyComponent from "@/components/NightSkyComponent";
import GlitchImage from "@/components/GlitchImage";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative flex flex-col items-center justify-center w-full h-full min-h-screen overflow-hidden px-4">
        <div className="absolute inset-0 -z-10">
          <NightSkyComponent />
        </div>

        <h1
          style={{ fontFamily: "fonte" }}
          className="text-3xl bg-gradient-to-r from-[#6B2BDA] to-fuchsia-600 text-transparent bg-clip-text text-center"
        >
          Em breve
        </h1>

        <div className="absolute bottom-0 right-0 z-10 translate-y-1/4 translate-x-1/4">
          <GlitchImage
            src="/images/samurai.png"
            alt="Descrição da imagem"
            className="w-[180px] h-[300px] object-cover opacity-30 blur-xl"
          />
        </div>
      </div>
    </div>
  );
}
