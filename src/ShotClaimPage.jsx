import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// Importamos la librería para generar códigos QR
import QRCode from "qrcode.react";

const ShotClaimPage = () => {
  // Estado para el restaurante seleccionado
  const [selectedRestaurant, setSelectedRestaurant] = useState("rest1");

  // Estados existentes
  const [isFollowed, setIsFollowed] = useState(false);
  const [isClaimed, setIsClaimed] = useState(false);

  // URLs de Instagram para cada restaurante
  const restaurantLinks = {
    rest1: "https://www.instagram.com/restaurante1",
    rest2: "https://www.instagram.com/restaurante2",
    rest3: "https://www.instagram.com/restaurante3",
  };

  // Función para abrir la cuenta de Instagram según el restaurante elegido
  const handleInstagramFollow = () => {
    window.open(restaurantLinks[selectedRestaurant], "_blank");
    // Simulamos un pequeño retraso antes de marcar como "seguido"
    setTimeout(() => {
      setIsFollowed(true);
    }, 2000);
  };

  // Función para reclamar el chupito
  const handleClaim = () => {
    setIsClaimed(true);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-cream-100 mb-12 animate-fade-in">
          ¿Quieres ganarte un chupito?
        </h1>

        {/* Sección de botones para seleccionar el restaurante */}
        <div className="flex space-x-2 justify-center mb-6">
          <button
            onClick={() => setSelectedRestaurant("rest1")}
            className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 focus:outline-none 
              ${
                selectedRestaurant === "rest1"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }
            `}
          >
            Restaurante 1
          </button>
          <button
            onClick={() => setSelectedRestaurant("rest2")}
            className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 focus:outline-none 
              ${
                selectedRestaurant === "rest2"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }
            `}
          >
            Restaurante 2
          </button>
          <button
            onClick={() => setSelectedRestaurant("rest3")}
            className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 focus:outline-none 
              ${
                selectedRestaurant === "rest3"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }
            `}
          >
            Restaurante 3
          </button>
        </div>

        {/* Mostramos el QR del restaurante seleccionado */}
        <div className="flex justify-center mb-6">
          <QRCode
            value={restaurantLinks[selectedRestaurant]}
            size={200}
            bgColor="#FFFFFF"
            fgColor="#000000"
            className="p-2 bg-white rounded-md shadow-md"
          />
        </div>

        {/* Si aún no ha seguido en Instagram */}
        {!isFollowed && (
          <div className="space-y-6">
            <button
              onClick={handleInstagramFollow}
              className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              aria-label="Síguenos en Instagram"
            >
              <FaInstagram className="w-6 h-6 mr-2" />
              Síguenos en Instagram
            </button>
          </div>
        )}

        {/* Si ya siguió en Instagram pero no ha reclamado el chupito */}
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
              aria-label="Ganar chupito"
            >
              Ganar
            </button>
          </div>
        )}

        {/* Si ya reclamó el chupito */}
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
