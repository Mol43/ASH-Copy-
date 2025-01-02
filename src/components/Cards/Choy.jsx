import { useStore } from '@/context/AddToCard';
import { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function Choy() {
  const [isLiked, setIsLiked] = useState(false);
  const unitPrice = 129;


  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const {card, count, totalPrice, addToCart, inc, dec, updateTotalPrice } = useStore();

  useEffect(() => {
    updateTotalPrice();
  }, [count, updateTotalPrice]);  


  return (
    <>
      <div className="border w-[234px] h-[450px] rounded-lg p-4 bg-white shadow-lg font-sans relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition"
          onClick={toggleLike}
        >
          {isLiked ? <AiFillHeart size={20} className="text-red-500" /> : <AiOutlineHeart size={20} />}
        </button>

        <div className="bg-green-600 text-white text-sm font-bold rounded-md px-2 py-1 inline-block mb-2">-20%</div>

        <img src="./choy.png" alt="Cappuccino" className="w-full h-auto rounded-md mb-7" />

        <div className="mb-2">
          <span className="text-green-600 text-lg font-bold mr-2">{totalPrice}₽</span>
          <span className="text-gray-500 text-sm line-through">450,99₽</span>
        </div>

        <p className="text-lg text-gray-700 mb-4 ">
        Полное название <br /> данного товара  
        </p>

        {card !== 0 || count > 1 ? (
          <div className="w-full flex items-center justify-between text-gray-600 bg-white border border-gray-300 px-4 py-2 rounded-md transition">
            <button onClick={dec} className="px-2 cursor-pointer">-</button>
            <span>{count} x {unitPrice} ₽</span>
            <button onClick={inc} className="px-2 cursor-pointer">+</button>
          </div>
        ) : (
          <button
            className="w-full text-green-600 bg-slate-100 text-sm rounded-md px-4 py-2 transition"
            onClick={addToCart}
          >
            В корзину
          </button>
        )}
      </div>
    </>
  );
}

export default Choy;