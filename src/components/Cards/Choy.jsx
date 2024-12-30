import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function ChoyCard({ product, toggleLike, incrementQuantity, decrementQuantity }) {
  const totalPrice = product.unitPrice * product.quantity;

  return (
    <div className="border w-[244px] h-[450px] rounded-lg p-4 bg-white shadow-lg font-sans relative">
      <button 
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition"
        onClick={toggleLike}
      >
        {product.isLiked ? <AiFillHeart size={20} className="text-red-500" /> : <AiOutlineHeart size={20} />}
      </button>
      
      <div className="bg-green-600 text-white text-sm font-bold rounded-md px-2 py-1 inline-block mb-2">-20%</div>

      <img src={product.image} alt={product.name} className="w-full h-auto rounded-md mb-4" />

      <div className="mb-2">
        <span className="text-green-600 text-lg font-bold mr-2">{totalPrice}₽</span>
        <span className="text-gray-500 text-sm line-through">450,99₽</span>
      </div>

      <p className="text-sm text-gray-700 mb-4">
        {product.description}
      </p>

      {product.inCart ? (
        <div className="w-full flex items-center justify-between text-gray-600 bg-white border border-gray-300 px-4 py-2 rounded-md transition">
          <button onClick={decrementQuantity} className="px-2 cursor-pointer">-</button>
          <span>{product.quantity} x {product.unitPrice} ₽</span>
          <button onClick={incrementQuantity} className="px-2 cursor-pointer">+</button>
        </div>
      ) : (
        <button 
          className="w-full text-green-600 bg-slate-100 text-sm rounded-md px-4 py-2 transition"
          onClick={() => incrementQuantity()}
        >
          В корзину
        </button>
      )}
    </div>
  );
}

function Choy() {
  const initialProducts = [
    {
      id: 1,
      isLiked: false,
      quantity: 0,
      inCart: false,
      unitPrice: 360,
      image: '/cofe.png',
      name: 'Cappuccino',
      description: 'Растворимый кофе Капучино MacCoffee Cappuccino Di Torino, 20 пакетиков по 25,5 г.'
    },
    {
      id: 2,
      isLiked: false,
      quantity: 0,
      inCart: false,
      unitPrice: 400,
      image: '/cofe.png',
      name: 'Latte',
      description: 'Латте MacCoffee, вкусный кофе с молоком, 15 пакетиков по 30 г.'
    },
    {
      id: 3,
      isLiked: false,
      quantity: 0,
      inCart: false,
      unitPrice: 380,
      image: '/cofe.png',
      name: 'Espresso',
      description: 'Эспрессо MacCoffee, насыщенный вкус, 10 пакетиков по 20 г.'
    },
    {
      id: 4,
      isLiked: false,
      quantity: 0,
      inCart: false,
      unitPrice: 450,
      image: '/cofe.png',
      name: 'Mocha',
      description: 'Мокка MacCoffee, шоколадный вкус, 12 пакетиков по 25 г.'
    }
  ];

  const [products, setProducts] = useState(initialProducts);

  const toggleLike = (id) => {
    setProducts((prev) => prev.map((item) => item.id === id ? { ...item, isLiked: !item.isLiked } : item));
  };

  const incrementQuantity = (id) => {
    setProducts((prev) => prev.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1, inCart: true } : item));
  };

  const decrementQuantity = (id) => {
    setProducts((prev) => prev.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity - 1;
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 0, inCart: newQuantity > 0 };
      }
      return item;
    }));
  };

  return (
    <div className="flex gap-1">
      {products.map((product) => (
        <ChoyCard
          key={product.id}
          product={product}
          toggleLike={() => toggleLike(product.id)}
          incrementQuantity={() => incrementQuantity(product.id)}
          decrementQuantity={() => decrementQuantity(product.id)}
        />
      ))}
    </div>
  );
}

export default Choy;
