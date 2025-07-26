import GlitchImage from "@/components/GlitchImage";

export default function CardInfo() {
  return (
    <div
      className="font-bold text-start flex items-center justify-center flex-col gap-4 p-4 w-[300px] h-[410px]
      bg-gradient-to-r from-[#6B2BDA] to-fuchsia-600 rounded border-6 border-fuchsia-200"
    >
      <div className="max-w-max bg-gradient-to-r from-[#6B2BDA] to-fuchsia-600 p-2 shadow-lg/40 rounded">
        <p className="whitespace-nowrap">A nossa história começa aqui!</p>
      </div>

      <div
        className="flex items-center justify-center 
                  w-[200px] h-[300px] 
                  bg-gradient-to-r from-[#6B2BDA] to-fuchsia-600 
                  rounded-full border-4 border-fuchsia-200 overflow-hidden"
      >
        <GlitchImage
          src="/images/test2.png"
          alt="Logo Hashiras"
          className="w-full h-full object-cover object-center rounded-full"
        />
      </div>

      <div
        className="w-full
      bg-gradient-to-r from-[#6B2BDA] to-fuchsia-600 p-2 shadow-lg/40 rounded"
      >
        <p className="text-sm">
          Um espaço pra todo mundo se conectar, competir, se divertir e crescer
          junto. Vamos promover esporte, cultura e interação.
        </p>
      </div>
    </div>
  );
}
