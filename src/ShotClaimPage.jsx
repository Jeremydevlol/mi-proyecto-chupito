import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const ShotClaimPage = () => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [isClaimed, setIsClaimed] = useState(false);

  const handleInstagramFollow = () => {
    window.open("https://www.instagram.com/youraccount", "_blank");
    setTimeout(() => {
      setIsFollowed(true);
    }, 2000);
  };

  const handleClaim = () => {
    setIsClaimed(true);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-cream-100 mb-12 animate-fade-in">
          ¿Quieres ganarte un chupito?
        </h1>

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