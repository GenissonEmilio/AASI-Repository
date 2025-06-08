import NightSkyComponent from "@/components/NightSkyComponent";
// import CardInfo from "@/components/CardInfo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center w-full h-full min-h-screen overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <NightSkyComponent />
        </div>

        {/* Conteúdo centralizado */}
        <div className="relative bottom-10 flex flex-col items-center justify-center px-4">
          <h1 className="text-3xl bg-gradient-to-r from-[#6B2BDA] to-fuchsia-600 text-transparent bg-clip-text text-center">
            Aguarde...
          </h1>
          <p
            style={{ fontFamily: "Nasalization" }}
            className="text-sm text-center mb-2"
          >
            O primeiro card está na embalagem. <br /> O destino começa aqui...
          </p>
          {/* <CardInfo /> */}
          <Image
            src="/images/card.png"
            alt="Mascote do jogo"
            width={300}
            height={450}
            className="object-cover"
          />
          <div className="absolute bottom-[57px] text-sm mt-2 text-center tracking-wide">
            Guerreiro do Futuro
          </div>
          <div className="mt-2">
            <p className="text-md bg-gradient-to-r from-[#6B2BDA] to-fuchsia-600 text-transparent bg-clip-text text-center">
              Colecione. Descubra. Conquiste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
