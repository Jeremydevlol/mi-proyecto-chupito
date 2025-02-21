import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// Importamos la versión que prefieras, en este caso, QRCodeCanvas
import { QRCodeCanvas } from "qrcode.react";

const ElegantShotClaimPage = () => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [isClaimed, setIsClaimed] = useState(false);

  // Lista de restaurantes
  const restaurants = [
    {
      name: "Restaurante 1",
      link: "https://www.instagram.com/restaurante1",
    },
    {
      name: "Restaurante 2",
      link: "https://www.instagram.com/restaurante2",
    },
    {
      name: "Restaurante 3",
      link: "https://www.instagram.com/restaurante3",
    },
  ];

  // Restaurante seleccionado
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);

  // Manejo del "seguir en Instagram"
  const handleInstagramFollow = () => {
    window.open(selectedRestaurant.link, "_blank");
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
      <h1 className="text-4xl md:text-5xl font-bold text-cream-100 mb-8">
        ¿Quieres ganarte un chupito?
      </h1>

      {/* Botones para seleccionar restaurante */}
      <p className="text-white mb-4">Selecciona un restaurante:</p>
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {restaurants.map((rest) => (
          <button
            key={rest.name}
            onClick={() => {
              setSelectedRestaurant(rest);
              setIsFollowed(false);
              setIsClaimed(false);
            }}
            className={`px-4 py-2 rounded-full font-medium transition-colors
              ${
                rest.name === selectedRestaurant.name
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }
            `}
          >
            {rest.name}
          </button>
        ))}
      </div>

      {/* Código QR para el restaurante seleccionado */}
      <div className="bg-white p-2 rounded-md mb-8">
        <QRCodeCanvas
          value={selectedRestaurant.link}
          size={180}
          bgColor="#FFFFFF"
          fgColor="#000000"
        />
      </div>

      {/* Botón "Seguir en Instagram" si aún no ha seguido */}
      {!isFollowed && !isClaimed && (
        <button
          onClick={handleInstagramFollow}
          className="mb-6 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          <FaInstagram className="inline-block mr-2" />
          Seguir en Instagram
        </button>
      )}

      {/* Si ya siguió, pero no reclamó */}
      {isFollowed && !isClaimed && (
        <div className="text-center space-y-6 animate-fade-in">
          <div className="flex items-center justify-center text-green-400 mb-4">
            <IoMdCheckmarkCircleOutline className="w-12 h-12" />
          </div>
          <p className="text-xl text-white mb-6">
            ¡Listo, ya puedes reclamar tu chupito gratis!
          </p>
          <button
            onClick={handleClaim}
            className="px-6 py-3 bg-brown-600 text-cream-100 rounded-full font-medium hover:bg-brown-700 transition-colors duration-300"
          >
            Reclamar chupito
          </button>
        </div>
      )}

      {/* Si ya reclamó */}
      {isClaimed && (
        <div className="animate-fade-in text-center">
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
  );
};

export default ElegantShotClaimPage;
