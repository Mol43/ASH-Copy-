import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { TiLocationArrowOutline } from "react-icons/ti";

// Xarita uchun stil va markaz
const mapContainerStyle = {
  width: "800px",
  height: "500px",
  border: "1px solid #ccc",
  borderRadius: "10px",
};

const center = {
  lat: 42.0575, // O'zingiz xohlagan joyning kenglik koordinatasi
  lng: 47.6361, // O'zingiz xohlagan joyning uzunlik koordinatasi
};

function GoogleMapComponent() {
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handleMapClick = (event) => {
    setSelectedPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  return (
    <section className=" border shadow-md w-[850px]  ml-80  rounded-lg">
    <div className="bg-white p-6 rounded-md shadow-md">
      {/* Title va matn */}
      <h1 className="text-3xl font-bold mb-2">Укажите ваш адрес</h1>
      <p className="text-gray-600 mb-4">
        Привезем товары в день заказа. Домой или в офис.
      </p>
      {/* Input qismi */}
      <div className="flex items-center mb-4 gap-4">
      <button className="flex items-center gap-2 rounded-xl bg-[#E9F3E2] px-36 py-2.5 text-[#3A692F] ">
              <TiLocationArrowOutline /> Укажите адрес доставки
            </button>

           <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
        Применить адрес
      </button>
      </div>

      {/* Xarita */}
      <div className="mb-4">
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={12}
            onClick={handleMapClick}
          >
            {selectedPosition && <Marker position={selectedPosition} />}
          </GoogleMap>
        </LoadScript>
      </div>

   
    </div>
    </section>
  );
}

export default GoogleMapComponent;
