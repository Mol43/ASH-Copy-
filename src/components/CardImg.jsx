import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function CardImg() {
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const unitPrice = 360;  // Unit price per item

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = unitPrice * quantity;  // Calculate total price based on quantity

  return (
    <>
      <div className="border w-[244px] rounded-lg p-4 bg-white shadow-lg font-sans relative">
        {/* Like Icon */}
        <button 
          className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition"
          onClick={toggleLike}
        >
          {isLiked ? <AiFillHeart size={20} className="text-red-500" /> : <AiOutlineHeart size={20} />}
        </button>
        
        {/* Discount Badge */}
        <div className="bg-green-600 text-white text-sm font-bold rounded-md px-2 py-1 inline-block mb-2">-20%</div>

        {/* Product Image */}
        <img src="/cofe.png" alt="Cappuccino" className="w-full h-auto rounded-md mb-4" />

        {/* Pricing Section */}
        <div className="mb-2">
          <span className="text-green-600 text-lg font-bold mr-2">{totalPrice}₽</span> {/* Dynamic price */}
          <span className="text-gray-500 text-sm line-through">450,99₽</span>
        </div>

        {/* Product Description */}
        <p className="text-sm text-gray-700 mb-4">
          Растворимый кофе Капучино MacCoffee Cappuccino Di Torino, 20 пакетиков по 25,5 г.
        </p>

        {/* Combined Quantity and Add to Cart Button */}
        <button className="w-full flex items-center justify-between text-gray-600 bg-white border border-gray-300 px-4 py-2 rounded-md hover:bg-green-600 hover:text-white hover:border-green-600 transition">
          <span onClick={decrementQuantity} className="px-2 cursor-pointer">-</span>
          <span>{quantity} x {unitPrice} ₽</span>
          <span onClick={incrementQuantity} className="px-2 cursor-pointer">+</span>
        </button>
      </div>


      <div className="border w-[244px] rounded-lg p-4 bg-white shadow-lg font-sans relative">
      {/* Like Icon */}
      <button 
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition"
        onClick={toggleLike}
      >
        {isLiked ? <AiFillHeart size={20} className="text-red-500" /> : <AiOutlineHeart size={20} />}
      </button>
      
      {/* Discount Badge */}
      <div className="bg-green-600 text-white text-sm font-bold rounded-md px-2 py-1 inline-block mb-2">-20%</div>

      {/* Product Image */}
      <img src="/cofe.png" alt="Cappuccino" className="w-full h-auto rounded-md mb-4" />

      {/* Pricing Section */}
      <div className="mb-2">
        <span className="text-green-600 text-lg font-bold mr-2">129,99₽</span>
        <span className="text-gray-500 text-sm line-through">129,99₽</span>
      </div>

      {/* Product Description */}
      <p className="text-sm text-gray-700 mb-4">
        Растворимый кофе Капучино MacCoffee Cappuccino Di Torino, 20 пакетиков по 25,5 г.
      </p>

      {/* Add to Cart Button */}
      <button className="w-full  text-green-600 bg-slate-100 text-sm rounded-md px-4 py-2 hover:bg-green-600 transition ">
        В корзину
      </button>
    </div>
    </>
  );
}

export default CardImg;
