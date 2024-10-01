import React from 'react';

const SecondaryButton = ({ text, onClick, link, type = 'button' }) => {
  const className = "text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900";

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