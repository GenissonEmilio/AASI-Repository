import NightSkyComponent from "@/components/NightSkyComponent";
import CardInfo from "@/components/CardInfo";
import NeonEffect from "@/components/NeonEffect";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center w-full h-full min-h-screen overflow-hidden">
        <NeonEffect />
        <div className="absolute inset-0 -z-10">
          <NightSkyComponent />
        </div>

        {/* Conteúdo centralizado */}
        <div className="relative bottom-10 flex flex-col items-center justify-center px-4">
          <h1
            style={{ fontFamily: "Nasalization" }}
            className="text-4xl bg-gradient-to-r from-[#6B2BDA] to-fuchsia-600 text-transparent bg-clip-text text-center font-bold"
          >
            Atletica Hashiras
          </h1>
          <p
            style={{ fontFamily: "Nasalization" }}
            className="text-sm text-center mb-8"
          >
            A Atlética Hashiras nasceu da vontade de tornar <br /> o curso de BSI mais unido, mais visível e mais engajado.
          </p>
          <CardInfo />
          <div className="mt-4">
            <p className="text-3xl bg-gradient-to-r from-[#6B2BDA] to-fuchsia-600 text-transparent bg-clip-text text-center font-bold" style={{ fontFamily: "Nasalization" }}>
              Vem ser Hashiras!
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-white opacity-80 animate-pulse mt-2">
            <span>Deslize o dedo para ver o efeito!</span>
          </div>

        </div>
      </div>
    </div>
  );
}
