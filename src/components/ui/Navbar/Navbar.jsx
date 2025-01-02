import { CiSearch } from "react-icons/ci";
import { TiLocationArrowOutline } from "react-icons/ti";
import { FaShoppingBag } from "react-icons/fa";
import { useState } from "react";
import { useStore } from "@/context/AddToCard";
import SinginModal from "@/components/SinginModal";

function Navbar() {
  const { card } = useStore();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
            <SinginModal isOpen={isModalOpen} closeModal={closeModal} />

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
    </>
  );
}

export default Navbar;
