import NightSkyComponent from "@/components/NightSkyComponent";
import CardInfo from "@/components/CardInfo";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center w-full h-full min-h-screen overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <NightSkyComponent />
        </div>

        {/* Conteúdo centralizado */}
        <div className="relative bottom-10 flex flex-col items-center justify-center px-4">
          <h1
            style={{ fontFamily: "fonte" }}
            className="text-3xl bg-gradient-to-r from-[#6B2BDA] to-fuchsia-600 text-transparent bg-clip-text text-center"
          >
            Aguarde...
          </h1>
          <p
            style={{ fontFamily: "Nasalization" }}
            className="text-sm text-center mb-8"
          >
            O primeiro card está na embalagem. <br /> O destino começa aqui...
          </p>
          <CardInfo />
          <div className="mt-4">
            <p className="text-md bg-gradient-to-r from-[#6B2BDA] to-fuchsia-600 text-transparent bg-clip-text text-center">
              Colecione. Descubra. Conquiste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
