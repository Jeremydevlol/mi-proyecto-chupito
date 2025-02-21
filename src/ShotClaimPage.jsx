import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import QRCode from "qrcode.react";

const ShotClaimPage = () => {
  // Control de estados para seguir y reclamar
  const [isFollowed, setIsFollowed] = useState(false);
  const [isClaimed, setIsClaimed] = useState(false);

  // Datos de los restaurantes (puedes cambiar los nombres y links)
  const restaurants = [
    { name: "Restaurante 1", link: "https://www.instagram.com/restaurante1" },
    { name: "Restaurante 2", link: "https://www.instagram.com/restaurante2" },
    { name: "Restaurante 3", link: "https://www.instagram.com/restaurante3" },
  ];

  // Abre el link de Instagram y marca como seguido tras 2 segundos
  const handleInstagramFollow = (link) => {
    window.open(link, "_blank");
    setTimeout(() => {
      setIsFollowed(true);
    }, 2000);
  };

  // Reclamar chupito
  const handleClaim = () => {
    setIsClaimed(true);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-12">
      {/* Sección inicial: 3 botones/QR de restaurantes */}
      <h1 className="text-4xl md:text-5xl font-bold text-cream-100 mb-8 animate-fade-in">
        ¿Quieres ganarte un chupito?
      </h1>
      <p className="text-white mb-8">
        Selecciona uno de los restaurantes y síguelo en Instagram.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {restaurants.map((rest) => (
          <div key={rest.name} className="flex flex-col items-center">
            <h2 className="text-xl text-white mb-4">{rest.name}</h2>
            <div className="bg-white p-2 rounded-md">
              <QRCode value={rest.link} size={150} />
            </div>
            <button
              onClick={() => handleInstagramFollow(rest.link)}
              className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              <FaInstagram className="inline-block mr-2" />
              Seguir en Instagram
            </button>
          </div>
        ))}
      </div>

      {/* Sección de lógica para reclamar el chupito */}
      <div className="max-w-md w-full space-y-8 text-center">
        {/* 1. Antes de seguir en Instagram */}
        {!isFollowed && (
          <p className="text-white mb-6">
            Escanea el QR y síguenos en Instagram para obtener un chupito gratis.
          </p>
        )}

        {/* 2. Ya siguió, pero no reclamó */}
        {isFollowed && !isClaimed && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-center text-green-400 mb-4">
              <IoMdCheckmarkCircleOutline className="w-12 h-12" />
            </div>
            <p className="text-xl text-white mb-6">
              ¡Listo, ya puedes reclamar tu chupito gratis!
            </p>
            <button
              onClick={handleClaim}
              className="w-full px-8 py-4 bg-brown-600 text-cream-100 rounded-full font-medium hover:bg-brown-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-500"
            >
              Ganar
            </button>
          </div>
        )}

        {/* 3. Ya reclamó */}
        {isClaimed && (
          <div className="animate-fade-in">
            <div className="bg-green-900 bg-opacity-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-green-400 mb-2">
                ¡Felicidades!
              </h2>
              <p className="text-white">
                Tu chupito gratis ha sido reclamado. Muestra esta pantalla en la barra.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShotClaimPage;
