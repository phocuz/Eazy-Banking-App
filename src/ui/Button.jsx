import React from 'react';

const Button = ({ text, onClick,type }) => {

    const base ="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold  rounded-full shadow-lg hover:opacity-90 transition-opacity duration-300 "

    const styles ={
        primary: base + 'hidden py-4 px-6 md:block',
        secondary: base + ' py-4 px-8 m-auto'
    }
  return (
    <button
      onClick={onClick}
      className ={ styles[type]}
    >
      {text}
    </button>
  );
};

export default Button;

