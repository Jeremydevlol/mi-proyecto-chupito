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
      name: "Black Fig Restaurant",
      link: "https://www.instagram.com/blackfigrestaurant/",
    },
    {
      name: "THO CLUB",
      link: "https://www.instagram.com/thoclub/",
    },
  ];

  // Restaurante seleccionado
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);

  // Manejo de "Seguir en Instagram"
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

  // Clases para los botones en color blanco
  // Al estar seleccionado, mostramos un "anillo" (ring) de color teal
  const buttonSelectedClass =
    "bg-white text-black rounded-full px-5 py-2 font-medium ring-2 ring-offset-2 ring-teal-500 transition duration-200";
  const buttonUnselectedClass =
    "bg-white text-black rounded-full px-5 py-2 font-medium hover:ring-2 hover:ring-offset-2 hover:ring-teal-500 transition duration-200";

  // Botón "Seguir en Instagram" (también blanco, si quieres)
  const instagramBtnClass = "bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-medium transition-colors";

  return (
    <div className="min-h-screen bg-black text-white font-serif flex flex-col items-center justify-center px-6 py-12">
      {/* Título y subtítulo */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-4">
        ¿Quieres ganarte un chupito?
      </h1>
      <p className="mb-8 text-lg">
        Selecciona un restaurante y sigue las instrucciones
      </p>

      {/* Botones para seleccionar restaurante (todos blancos) */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {restaurants.map((rest) => {
          const isSelected = rest.name === selectedRestaurant.name;
          return (
            <button
              key={rest.name}
              onClick={() => {
                setSelectedRestaurant(rest);
                setIsFollowed(false);
                setIsClaimed(false);
              }}
              className={isSelected ? buttonSelectedClass : buttonUnselectedClass}
            >
              {rest.name}
            </button>
          );
        })}
      </div>

      {/* Contenedor con QR y botones */}
      <div
        key={selectedRestaurant.name}
        className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-2xl flex flex-col items-center w-full max-w-sm animate-fadeIn"
      >
        {/* Marco degradado y fondo para el QR */}
        <div className="relative p-1 mb-6 bg-gradient-to-r from-teal-500 via-green-400 to-teal-500 rounded-lg">
          <div className="bg-gray-900 p-4 rounded-lg">
            <QRCodeCanvas
              value={selectedRestaurant.link}
              size={200}
              bgColor="#ffffff"
              fgColor="#000000"
              includeMargin={true}
              className="rounded-lg shadow-lg"
              level="H"
            />
          </div>
        </div>

        {/* Botón "Seguir en Instagram" (blanco con texto negro) */}
        {!isFollowed && !isClaimed && (
          <button onClick={handleInstagramFollow} className={`mb-6 ${instagramBtnClass}`}>
            <FaInstagram className="inline-block mr-2" />
            Seguir en Instagram
          </button>
        )}

        {/* Mensaje para reclamar si ya siguió */}
        {isFollowed && !isClaimed && (
          <div className="text-center space-y-4 animate-fadeIn">
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

        {/* Mensaje final si ya reclamó */}
        {isClaimed && (
          <div className="animate-fadeIn text-center mt-4">
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
