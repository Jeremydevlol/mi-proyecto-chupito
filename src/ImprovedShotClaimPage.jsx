import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react"; // para el QR
import { FaInstagram } from "react-icons/fa";

const ImprovedShotClaimPage = () => {
  // Cambia la URL a la de tu propia cuenta de Instagram
  const instagramUrl = "https://www.instagram.com/youraccount";

  const [isFollowed, setIsFollowed] = useState(false);

  const handleInstagramFollow = () => {
    window.open(instagramUrl, "_blank");
    setTimeout(() => {
      setIsFollowed(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
        ¡Síguenos en Instagram y gana un chupito!
      </h1>

      {/* Sección del QR */}
      <div className="mb-8">
        <p className="text-lg mb-4 text-center">
          Escanea este QR para ir directamente a nuestra cuenta:
        </p>
        <div className="bg-white p-4 rounded-lg">
          <QRCodeSVG
            value={instagramUrl}
            size={200}
            bgColor="#FFFFFF"
            fgColor="#000000"
            level="L"
          />
        </div>
      </div>

      {!isFollowed ? (
        <button
          onClick={handleInstagramFollow}
          className="flex items-center justify-center px-10 py-4 rounded-full text-lg font-medium
                     bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500
                     hover:opacity-90 transition-opacity duration-300
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          aria-label="Síguenos en Instagram"
        >
          <FaInstagram className="w-6 h-6 mr-2" />
          Síguenos en Instagram
        </button>
      ) : (
        <div className="mt-6 text-center space-y-4">
          <p className="text-lg text-green-400 font-semibold">
            ¡Gracias por seguirnos!
          </p>
          <p className="text-md">
            Muestra esta pantalla en la barra y reclama tu chupito gratis.
          </p>
        </div>
      )}
    </div>
  );
};

export default ImprovedShotClaimPage;
