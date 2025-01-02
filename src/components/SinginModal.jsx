import React from 'react'

const SinginModal = ({ isOpen, closeModal }) => {
    if (!isOpen) return null;
    
    return (
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="">
            <button className="close-btn" onClick={closeModal}>X</button>
            <h2>Modal Title</h2>
            <p>This is a modal.</p>
          </div>
        </div>
      );
    };


export default SinginModal;