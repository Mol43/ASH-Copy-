import React, { useState } from 'react';
import Navbar from '../ui/Navbar/Navbar';
import Footer from '../ui/Footer/Footer';
import { CiCircleInfo } from 'react-icons/ci';
import Coffe from '../Coffe';
import SinginModal from '../SinginModal';
import GoogleMap from '../GoogleMap';


function Home() {
  const buttons = [
    {
      id: 1,
      title: 'Овощи и фрукты',
      imgSrc: './blagar.png',
      imgStyle: { width: '2.5rem', borderRadius: '0.375rem' },
      links: ['Овощи, грибы и зелень', 'Овощи, грибы и зелень'],
    },
    {
      id: 2,
      title: 'Молочные продукты',
      imgSrc: './blagar2.png',
      imgStyle: { width: '2.5rem', borderRadius: '0.375rem' },
      links: ['Овощи, грибы и зелень', 'Овощи, грибы и зелень'],
    },
    {
      id: 3,
      title: 'Мясо и рыба',
      imgSrc: './blagar3.png',
      imgStyle: { width: '1.5rem', borderRadius: '0.375rem' },
      links: ['Link 1 for Button 3', 'Link 2 for Button 3'],
    },
    {
      id: 4,
      title: 'Бакалея',
      imgSrc: './blagar4.png',
      imgStyle: { width: '2rem', borderRadius: '0.375rem' },
      links: ['Овощи, грибы и зелень', 'Овощи, грибы и зелень'],
    },
    {
      id: 5,
      title: 'Замороженные продукты',
      imgSrc: './blagar5.png',
      imgStyle: { width: '1.5rem', borderRadius: '0.375rem' },
      links: ['Овощи, грибы и зелень', 'Овощи, грибы и зелень'],
    },
    {
      id: 6,
      title: 'Напитки',
      imgSrc: './blagar6.png',
      imgStyle: { width: '2.5rem', borderRadius: '0.375rem' },
      links: ['Овощи, грибы и зелень', 'Овощи, грибы и зелень'],
    },
    {
      id: 7,
      title: 'Кондитерские изделия',
      imgSrc: './blagar7.png',
      imgStyle: { width: '2.5rem', borderRadius: '0.375rem' },
      links: ['Овощи, грибы и зелень', 'Овощи, грибы и зелень'],
    },
    {
      id: 8,
      title: 'Кулинария',
      imgSrc: './blagar8.png',
      imgStyle: { width: '2.5rem', borderRadius: '0.375rem' },
      links: ['Link 1 for Button 8', 'Link 2 for Button 8'],
    },
    {
      id: 9,
      title: 'Косметика и бытовая химия',
      imgSrc: './blagar9.png',
      imgStyle: { width: '3rem', borderRadius: '0.375rem' },
      links: ['Link 1 for Button 9', 'Link 2 for Button 9'],
    },
    {
      id: 10,
      title: 'Детские товары',
      imgSrc: './blagar10.png',
      imgStyle: { width: '2.5rem', borderRadius: '0.375rem' },
      links: ['Link 1 for Button 10', 'Link 2 for Button 10'],
    }
  ];

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (id) => {
    setActiveButton(prevState => (prevState === id ? null : id));
  };


  return (
    <>
    <SinginModal />
      <Navbar />
      <div className='w-full h-auto grid grid-cols-1 md:grid-cols-12 gap-3 p-5'>
        <div className="h-auto rounded-md px-1 py-4 col-span-3">
          <div className="flex items-end gap-3">
            <h1 className='text-2xl text-[#1D1E1D] font-semibold'>Каталог</h1>
            <p className='flex items-center gap-2 text-[#3A692F] font-bold'>Черкесск
              <a href="#" className='flex items-center font-normal'>Радиус ~ 10 км.
                <CiCircleInfo />
              </a>
            </p>
          </div>

          {buttons.map(button => (
            <div key={button.id}>
              <button
                className={`flex items-center p-2 w-full rounded-xl mt-4 
                ${activeButton === button.id ? 'bg-[#E3F1D0]' : ''}`}
                onClick={() => handleButtonClick(button.id)}
              >
                <div className="px-1 py-1 bg-white rounded-lg">
                  <img
                    src={button.imgSrc}
                    style={button.imgStyle}
                    alt={button.title}
                  />
                </div>
                <h1 className='font-bold text-[#1D1E1D]'>{button.title}</h1>
              </button>

              {activeButton === button.id && (
                <div className="mt-4">
                  {button.links.map((link, index) => (
                    <a href="#" key={index} className="block text-blue-600">{link}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="h-auto rounded-md px-2 py-5 col-span-9 flex flex-col gap-5">
          <Coffe />
          <Coffe />
          <Coffe />
          <Coffe />
        </div>
      </div>
      <GoogleMap/>
      <Footer />

    </>
  );
}

export default Home;