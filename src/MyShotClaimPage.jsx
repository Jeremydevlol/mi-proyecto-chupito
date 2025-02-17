import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react"; // Librería para generar el QR

function MyShotClaimPage() {
  // URL de Instagram
  const instagramUrl = "https://www.instagram.com/muybenditomad?igsh=c2hqMWp2b3BxbHgz";

  const [followed, setFollowed] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Escanea el QR para ir a nuestra cuenta de Instagram
      </h1>

      {!followed && (
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-md mb-6">
            <QRCodeSVG
              value={instagramUrl}
              size={200}
              bgColor="#FFFFFF"
              fgColor="#000000"
              level="L"
            />
          </div>
          <p className="mb-4 text-center">
            Escanea el código con tu teléfono y síguenos en Instagram.
          </p>
          <button
            onClick={() => setFollowed(true)}
            className="mt-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full font-semibold text-white"
          >
            Ya la seguí
          </button>
        </div>
      )}

      {followed && (
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-green-400">
            ¡Gracias por seguirme!
          </h2>
          <p className="text-lg">
            Muestra esta pantalla en la barra y reclama tu chupito gratis.
          </p>
        </div>
      )}
    </div>
  );
}

export default MyShotClaimPage;