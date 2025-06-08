import GlitchImage from "@/components/GlitchImage";

export default function CardInfo() {
  return (
    <div
      style={{ fontFamily: "Nasalization" }}
      className="text-start flex items-center justify-center flex-col gap-4 p-4 w-[300px] h-[410px]
      bg-gradient-to-r from-[#6B2BDA] to-fuchsia-600 rounded border-6 border-fuchsia-200"
    >
      <div
        className="w-full
      bg-gradient-to-r from-[#6B2BDA] to-fuchsia-600 p-2 shadow-lg/40 rounded"
      >
        <p>Guerreiro do Futuro</p>
      </div>

      <div
        className="flex items-center justify-center w-[90%] 
      bg-gradient-to-r from-[#6B2BDA] to-fuchsia-600 p-2 shadow-lg/40 rounded"
      >
        <GlitchImage
          src="/images/samurai.png"
          alt="Descrição da imagem"
          className="w-[120px] h-[180px] object-cover opacity-0 blur-xl"
        />
      </div>

      <div
        className="w-full
      bg-gradient-to-r from-[#6B2BDA] to-fuchsia-600 p-2 shadow-lg/40 rounded"
      >
        <p className="text-sm">
          Este guerreiro surgiu da sombra de um futuro distante, onde a
          tecnologia e a tradição se entrelaçam.
        </p>
      </div>
    </div>
  );
}
