import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function CardImg() {
  const [cardStates, setCardStates] = useState([
    { id: 1, isLiked: false, quantity: 0, inCart: false },
    { id: 2, isLiked: false, quantity: 0, inCart: false },
    { id: 3, isLiked: false, quantity: 0, inCart: false },
    { id: 4, isLiked: false, quantity: 0, inCart: false },
  ]);

  const unitPrice = 360;

  const toggleLike = (id) => {
    setCardStates((prevState) =>
      prevState.map((card) =>
        card.id === id ? { ...card, isLiked: !card.isLiked } : card
      )
    );
  };

  const incrementQuantity = (id) => {
    setCardStates((prevState) =>
      prevState.map((card) =>
        card.id === id
          ? { ...card, quantity: card.quantity + 1 }
          : card
      )
    );
  };

  const decrementQuantity = (id) => {
    setCardStates((prevState) =>
      prevState.map((card) =>
        card.id === id && card.quantity > 1
          ? { ...card, quantity: card.quantity - 1 }
          : card.id === id && card.quantity === 1
          ? { ...card, quantity: 0, inCart: false }
          : card
      )
    );
  };

  const setInCart = (id) => {
    setCardStates((prevState) =>
      prevState.map((card) =>
        card.id === id
          ? { ...card, inCart: true, quantity: 1 }
          : card
      )
    );
  };

  return (
    <section className='flex gap-9 justify-center'>
      {cardStates.map((card) => {
        const totalPrice = unitPrice * card.quantity;
        return (
          <div key={card.id} className="border w-[244px] rounded-lg p-4 bg-white shadow-lg font-sans relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-green-600 transition"
              onClick={() => toggleLike(card.id)}
            >
              {card.isLiked ? (
                <AiFillHeart size={20} className="text-green-600" />
              ) : (
                <AiOutlineHeart size={20} />
              )}
            </button>

            <div className="bg-green-600 text-white text-sm font-bold rounded-md px-2 py-1 inline-block mb-2">
              -20%
            </div>

            <img src="/cofe.png" alt="Cappuccino" className="w-full h-auto rounded-md mb-4" />

            <div className="mb-2">
              <span className="text-green-600 text-lg font-bold mr-2">{totalPrice}₽</span>
              <span className="text-gray-500 text-sm line-through">450,99₽</span>
            </div>

            <p className="text-sm text-gray-700 mb-4">
              Растворимый кофе Капучино MacCoffee Cappuccino Di Torino, 20 пакетиков по 25,5 г.
            </p>

            {card.inCart ? (
              <div className="w-full flex items-center justify-between text-gray-600 bg-white border border-gray-300 px-4 py-2 rounded-md transition">
                <button onClick={() => decrementQuantity(card.id)} className="px-2 cursor-pointer">-</button>
                <span>{card.quantity} x {unitPrice} ₽</span>
                <button onClick={() => incrementQuantity(card.id)} className="px-2 cursor-pointer">+</button>
              </div>
            ) : (
              <button
                className="w-full text-green-600 bg-slate-100 text-sm rounded-md px-4 py-2 transition"
                onClick={() => setInCart(card.id)}
              >
                В корзину
              </button>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default CardImg;
