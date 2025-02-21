import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import QRCode from "qrcode.react";

const ShotClaimPage = () => {
  // Control de estados para “seguir” y “reclamar”
  const [isFollowed, setIsFollowed] = useState(false);
  const [isClaimed, setIsClaimed] = useState(false);

  // Datos de los tres restaurantes
  const restaurants = [
    { name: "Restaurante 1", link: "https://www.instagram.com/restaurante1" },
    { name: "Restaurante 2", link: "https://www.instagram.com/restaurante2" },
    { name: "Restaurante 3", link: "https://www.instagram.com/restaurante3" },
  ];

  // Maneja la acción de “Seguir en Instagram” para cada restaurante
  const handleInstagramFollow = (link) => {
    window.open(link, "_blank"); // Abre el link en una nueva pestaña
    // Simulamos un pequeño retraso antes de marcar como "seguido"
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
      {/* Sección inicial: mostrar los 3 restaurantes con su QR y botón */}
      <h1 className="text-4xl md:text-5xl font-bold text-cream-100 mb-12">
        Selecciona tu restaurante
      </h1>

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

      {/* Sección de “Escanea y Gana” / “¿Quieres ganarte un chupito?” */}
      <div className="max-w-md w-full space-y-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-cream-100 mb-8 animate-fade-in">
          Escanea y Gana
        </h2>

        {/* Si todavía no ha seguido ninguna cuenta */}
        {!isFollowed && (
          <p className="text-white mb-6">
            Escanea el QR y síguenos en Instagram para obtener un chupito gratis.
          </p>
        )}

        {/* Si ya siguió y aún no reclama */}
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
              Reclamar
            </button>
          </div>
        )}

        {/* Si ya reclamó */}
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
