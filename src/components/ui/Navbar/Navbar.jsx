import { CiSearch } from "react-icons/ci";
import { TiLocationArrowOutline } from "react-icons/ti";
import { FaShoppingBag } from "react-icons/fa";
import { useState } from "react";
import Modal from 'react-modal';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { useStore1 } from "@/context/AddToCard";

const mapContainerStyle = {
  width: "740px",
  height: "300px",
  border: "1px solid #ccc",
  borderRadius: "10px",
};

const center = {
  lat: 42.0575,
  lng: 47.6361,
};

function Navbar() {
  const { card } = useStore1();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleMapClick = (e) => {
    setSelectedPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };

  return (
    <>
      <section>
        <div className="flex items-center justify-between p-4">
          <a href="#" className='flex items-center gap-2'>
            <img src="./logo.png" alt="Logo" className='w-[77px]' />
            <h1 className='w-[162px] text-[14px] text-center text-[#3A692F] font-bold'>
              Быстрая доставка еды для Вашего стола!
            </h1>
          </a>

          <header>
            <div className="flex items-center gap-4">
              <div className="relative">
                <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 w-[700px] border bg-white border-[#3A692F] rounded-2xl focus:outline-none"
                />
              </div>

              <button onClick={openModal} className="flex items-center gap-2 rounded-xl bg-[#E9F3E2] px-5 py-2 text-[#3A692F]">
                <TiLocationArrowOutline /> Укажите адрес доставки
              </button>

              <button className="relative flex items-center bg-gray-100 px-2 py-2 rounded-lg">
                <FaShoppingBag className="text-[#3A692F] text-2xl " />
                <span className="absolute -top-2 -right-3 bg-[#3A692F] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {card}
                </span>
              </button>
            </div>
          </header>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="w-[780px] mx-auto mt-24 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-2">Укажите ваш адрес</h1>
        <p className="text-gray-600 mb-4">
          Привезем товары в день заказа. Домой или в офис.
        </p>

        <div className="flex items-center mb-4 gap-4">
          <button className="flex items-center gap-2 rounded-xl bg-[#E9F3E2] px-36 py-2.5 text-[#3A692F] ">
            <TiLocationArrowOutline /> Укажите адрес доставки
          </button>
          <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
            Применить адрес
          </button>
        </div>

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
      </Modal>
    </>
  );
}

export default Navbar;
