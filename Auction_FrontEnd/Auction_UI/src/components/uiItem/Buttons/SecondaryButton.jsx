import React from 'react';

const SecondaryButton = ({ text, onClick, link, type = 'button' }) => {
  const className = "px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors duration-200";

  return (
    <>
      {link ? (
        <a className={className} href={link}>
          {text}
        </a>
      ) : (
        <button className={className} onClick={onClick} type={type}>
          {text}
        </button>
      )}
    </>
  );
};

export default SecondaryButton;