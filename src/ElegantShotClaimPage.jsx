import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { QRCodeCanvas } from "qrcode.react";

const ElegantShotClaimPage = () => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [isClaimed, setIsClaimed] = useState(false);

  // Lista de restaurantes
  const restaurants = [
    {
      name: "Muy Bendito",
      link: "https://www.instagram.com/muybenditomad/",
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

  // Restaurante seleccionado (por defecto el primero)
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);

  // Abrir Instagram y marcar como seguido
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
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-12">
      {/* TÍTULO (Cambia a blanco si se selecciona “Muy Bendito”) */}
      <h1
        className={`text-4xl md:text-5xl font-bold font-serif tracking-wider mb-4 
        transition-colors duration-700 
        ${
          selectedRestaurant.name === "Muy Bendito"
            ? "text-white"
            : "text-yellow-200"
        }`}
      >
        ¿Quieres ganarte un chupito?
      </h1>

      {/* TEXTO (También cambia a blanco con la misma animación) */}
      <p
        className={`mb-8 text-lg transition-colors duration-700 
        ${
          selectedRestaurant.name === "Muy Bendito"
            ? "text-white"
            : "text-gray-300"
        }`}
      >
        Selecciona un restaurante y sigue las instrucciones
      </p>

      {/* BOTONES para seleccionar restaurante */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {restaurants.map((rest) => (
          <button
            key={rest.name}
            onClick={() => {
              // Al cambiar de restaurante, reiniciamos estados
              setSelectedRestaurant(rest);
              setIsFollowed(false);
              setIsClaimed(false);
            }}
            className={`px-5 py-2 rounded-full font-medium tracking-wide transition-colors duration-300
              ${
                rest.name === selectedRestaurant.name
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-700 text-white hover:bg-yellow-500 hover:text-black"
              }
            `}
          >
            {rest.name}
          </button>
        ))}
      </div>

      {/* TARJETA con QR y botones */}
      <div
        className={`bg-gray-800 rounded-lg p-6 shadow-2xl flex flex-col items-center w-full max-w-sm 
        border transition-colors duration-700 
        ${
          selectedRestaurant.name === "Muy Bendito"
            ? "border-white"
            : "border-yellow-700"
        }`}
      >
        {/* QR del restaurante seleccionado */}
        <QRCodeCanvas
          value={selectedRestaurant.link}
          size={200}
          bgColor="#ffffff"
          fgColor="#000000"
          className="mb-6"
        />

        {/* BOTÓN "Seguir en Instagram" si aún no ha seguido */}
        {!isFollowed && !isClaimed && (
          <button
            onClick={handleInstagramFollow}
            className="mb-6 px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            <FaInstagram className="inline-block mr-2" />
            Seguir en Instagram
          </button>
        )}

        {/* MENSAJE para reclamar si ya siguió */}
        {isFollowed && !isClaimed && (
          <div className="text-center space-y-4 animate-fade-in">
            <div className="flex items-center justify-center text-green-400">
              <IoMdCheckmarkCircleOutline className="w-10 h-10" />
            </div>
            <p className="text-lg text-gray-100">
              ¡Listo, ya puedes reclamar tu chupito!
            </p>
            <button
              onClick={handleClaim}
              className="px-6 py-3 bg-yellow-500 text-black rounded-full font-medium hover:bg-yellow-400 transition-colors"
            >
              Reclamar chupito
            </button>
          </div>
        )}

        {/* MENSAJE final si ya reclamó */}
        {isClaimed && (
          <div className="animate-fade-in text-center mt-4">
            <div className="bg-green-900 bg-opacity-50 p-4 rounded-lg">
              <h2 className="text-xl font-bold text-green-400 mb-2">
                ¡Felicidades!
              </h2>
              <p className="text-gray-100">
                Tu chupito gratis ha sido reclamado. Muestra esta pantalla en la barra.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ElegantShotClaimPage;
