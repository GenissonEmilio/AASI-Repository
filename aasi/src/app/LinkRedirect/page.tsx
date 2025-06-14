import React from "react";
import Image from "next/image";

const links = [
  {
    label: "Site dos Cards",
    url: "/CardPage",
  },
  {
    label: "Formulário de Esportes",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdsTOxBzzRPqSLgXt-2e_TxW-tB9zky77eekeiU-8lSwaBNUw/viewform?fbclid=PAZXh0bgNhZW0CMTEAAad5HE0iPsjC4xWK26kFIcQ__IqGd-454Go6iK-xC8uGi2fqEmk8r852aTdgLg_aem_YcMOFUb-MJciElJ0hrjJOA",
  },
  {
    label: "Instagram da Atlética",
    url: "https://www.instagram.com/atleticahashiras/",
  },
];

export default function LinkRedirect() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-pink-700 px-4">
      <div className="flex flex-col items-center w-full max-w-md md:max-w-xl">
        {/* Avatar e título */}
        <div className="mb-8 text-center">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full mx-auto mb-4 border-4 border-pink-400 shadow-lg overflow-hidden relative">
            <Image
              src="/images/avatar.jpeg"
              alt="Avatar"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-pink-300 drop-shadow">
            A. A. A. S. I. - SI IFS
          </h1>
          <p className="text-purple-200 font-[nasalization] text-base md:text-2xl">
            Associação Atlética Acadêmica Sistema de informação.
          </p>
        </div>
        {/* Links */}
        <div className="w-full flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-black/90 rounded-xl shadow-lg px-6 py-4 md:px-10 md:py-6 text-center text-lg md:text-2xl font-semibold text-pink-200 hover:bg-white hover:text-purple-900 transition-all border border-purple-800 font-[nasalization] transform hover:scale-105 duration-200"
              style={{ fontFamily: "nasalization, Arial, sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
