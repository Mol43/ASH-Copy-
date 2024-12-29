import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function CardImg() {
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [inCart, setInCart] = useState(false);
  const unitPrice = 360;

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setInCart(false);
      setQuantity(0);
    }
  };

  const totalPrice = unitPrice * quantity;

  return (
    <>
      <div className="border w-[244px] rounded-lg p-4 bg-white shadow-lg font-sans relative">
        <button 
          className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition"
          onClick={toggleLike}
        >
          {isLiked ? <AiFillHeart size={20} className="text-red-500" /> : <AiOutlineHeart size={20} />}
        </button>
        
        <div className="bg-green-600 text-white text-sm font-bold rounded-md px-2 py-1 inline-block mb-2">-20%</div>

        <img src="/cofe.png" alt="Cappuccino" className="w-full h-auto rounded-md mb-4" />

        <div className="mb-2">
          <span className="text-green-600 text-lg font-bold mr-2">{totalPrice}₽</span>
          <span className="text-gray-500 text-sm line-through">450,99₽</span>
        </div>

        <p className="text-sm text-gray-700 mb-4">
          Растворимый кофе Капучино MacCoffee Cappuccino Di Torino, 20 пакетиков по 25,5 г.
        </p>

        {inCart ? (
          <div className="w-full flex items-center justify-between text-gray-600 bg-white border border-gray-300 px-4 py-2 rounded-md transition">
            <button onClick={decrementQuantity} className="px-2 cursor-pointer">-</button>
            <span>{quantity} x {unitPrice} ₽</span>
            <button onClick={incrementQuantity} className="px-2 cursor-pointer">+</button>
          </div>
        ) : (
          <button 
            className="w-full text-green-600 bg-slate-100 text-sm rounded-md px-4 py-2 transition"
            onClick={() => {
              setInCart(true);
              setQuantity(1);
            }}
          >
            В корзину
          </button>
        )}
      </div>
    </>
  );
}

export default CardImg;
