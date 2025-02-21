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

  // Restaurante seleccionado (por defecto el primero)
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);

  // ¿Está seleccionado "Muy Bendito"?
  const isMuyBenditoSelected = selectedRestaurant.name === "Muy Bendito";

  // Maneja la acción de seguir en Instagram
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
    <div
      className={`min-h-screen px-6 py-12 transition-colors duration-700 
        ${
          isMuyBenditoSelected
            ? "bg-white text-black font-serif"
            : "bg-black text-white font-sans"
        }
      flex flex-col items-center justify-center`}
    >
      {/* Título principal */}
      <h1
        className={`text-4xl md:text-5xl font-bold tracking-wider mb-4 transition-colors duration-700
          ${
            isMuyBenditoSelected
              ? "text-black"
              : "text-yellow-200"
          }
        `}
      >
        ¿Quieres ganarte un chupito?
      </h1>

      {/* Subtítulo */}
      <p
        className={`mb-8 text-lg transition-colors duration-700
          ${
            isMuyBenditoSelected
              ? "text-gray-700"
              : "text-gray-300"
          }
        `}
      >
        Selecciona un restaurante y sigue las instrucciones
      </p>

      {/* Botones para seleccionar restaurante */}
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
              className={`
                px-5 py-2 rounded-full font-medium tracking-wide transition-colors duration-300
                ${
                  // Si en general está seleccionado "Muy Bendito"
                  isMuyBenditoSelected
                    ? // Modo "Muy Bendito" (blanco)
                      isSelected
                        ? // Botón seleccionado: negro con texto blanco
                          "bg-black text-white"
                        : // Botón no seleccionado: blanco con texto negro
                          "bg-white text-black hover:bg-gray-200"
                    : // Modo oscuro (restaurantes 2 y 3)
                    isSelected
                      ? // Botón seleccionado: amarillo con texto negro
                        "bg-yellow-500 text-black"
                      : // Botón no seleccionado: gris con texto blanco
                        "bg-gray-700 text-white hover:bg-yellow-500 hover:text-black"
                }
              `}
            >
              {rest.name}
            </button>
          );
        })}
      </div>

      {/* Tarjeta con QR y botones */}
      <div
        className={`rounded-lg p-6 shadow-2xl flex flex-col items-center w-full max-w-sm border transition-colors duration-700
          ${
            isMuyBenditoSelected
              ? "bg-gray-100 border-black"
              : "bg-gray-800 border-yellow-700"
          }
        `}
      >
        {/* QR del restaurante seleccionado */}
        <QRCodeCanvas
          value={selectedRestaurant.link}
          size={200}
          bgColor="#ffffff"
          fgColor="#000000"
          className="mb-6"
        />

        {/* Botón "Seguir en Instagram" si aún no ha seguido */}
        {!isFollowed && !isClaimed && (
          <button
            onClick={handleInstagramFollow}
            className={`
              mb-6 px-6 py-3 rounded-full font-medium transition-opacity
              ${
                isMuyBenditoSelected
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-200 text-black hover:opacity-90"
                  : "bg-gradient-to-r from-yellow-600 to-yellow-400 text-black hover:opacity-90"
              }
            `}
          >
            <FaInstagram className="inline-block mr-2" />
            Seguir en Instagram
          </button>
        )}

        {/* Mensaje para reclamar si ya siguió */}
        {isFollowed && !isClaimed && (
          <div className="text-center space-y-4 animate-fade-in">
            <div className="flex items-center justify-center text-green-400">
              <IoMdCheckmarkCircleOutline className="w-10 h-10" />
            </div>
            <p
              className={`
                text-lg 
                ${
                  isMuyBenditoSelected
                    ? "text-black"
                    : "text-gray-100"
                }
              `}
            >
              ¡Listo, ya puedes reclamar tu chupito!
            </p>
            <button
              onClick={handleClaim}
              className={`
                px-6 py-3 rounded-full font-medium transition-colors
                ${
                  isMuyBenditoSelected
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-yellow-500 text-black hover:bg-yellow-400"
                }
              `}
            >
              Reclamar chupito
            </button>
          </div>
        )}

        {/* Mensaje final si ya reclamó */}
        {isClaimed && (
          <div className="animate-fade-in text-center mt-4">
            <div
              className={`
                p-4 rounded-lg
                ${
                  isMuyBenditoSelected
                    ? "bg-green-100"
                    : "bg-green-900 bg-opacity-50"
                }
              `}
            >
              <h2
                className={`
                  text-xl font-bold mb-2
                  ${
                    isMuyBenditoSelected
                      ? "text-green-700"
                      : "text-green-400"
                  }
                `}
              >
                ¡Felicidades!
              </h2>
              <p
                className={`
                  ${
                    isMuyBenditoSelected
                      ? "text-black"
                      : "text-gray-100"
                  }
                `}
              >
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
