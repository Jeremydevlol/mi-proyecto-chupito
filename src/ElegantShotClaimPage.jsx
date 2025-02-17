import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

function ElegantShotClaimPage() {
  // URL de tu Instagram
  const instagramUrl = "https://www.instagram.com/muybenditomad?igsh=c2hqMWp2b3BxbHgz";
  const [followed, setFollowed] = useState(false);

  return (
    <div className="relative min-h-screen bg-black font-serif text-white">
      {/* Capa degradada para dar un fondo más elegante */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-80" />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8 min-h-screen">
        {!followed && (
          <div className="flex flex-col items-center text-center space-y-6 max-w-md">
            <h1 className="text-5xl md:text-6xl font-bold text-[#d4af37] tracking-wide">
              Escanea y Gana
            </h1>
            <p className="text-lg text-gray-100">
              Escanea el QR y síguenos en Instagram para obtener un chupito gratis.
            </p>

            {/* Marco con borde dorado para el QR */}
            <div className="bg-white p-4 rounded-md border-4 border-[#d4af37]">
              <QRCodeSVG
                value={instagramUrl}
                size={200}
                bgColor="#FFFFFF"
                fgColor="#000000"
              />
            </div>

            <p className="text-base text-gray-300">
              Después de seguirnos, presiona el botón:
            </p>
            <button
              onClick={() => setFollowed(true)}
              className="px-6 py-3 rounded-full border border-[#d4af37] text-[#d4af37]
                         hover:bg-[#d4af37] hover:text-black transition-colors duration-300
                         font-semibold"
            >
              Ya la seguí
            </button>
          </div>
        )}

        {followed && (
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-4xl font-bold text-[#d4af37]">
              ¡Gracias por seguirnos!
            </h2>
            <p className="text-xl text-gray-200">
              Muestra esta pantalla en la barra y canjea tu chupito gratis.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ElegantShotClaimPage;
