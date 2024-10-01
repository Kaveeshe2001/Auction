import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const variantStyles = {
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
  outline: "bg-transparent hover:bg-gray-100 text-blue-600 border border-blue-600 before:content-[''] before:absolute before:top-1 before:left-1 before:hover:left-0 before:w-full before:h-full before:border-2 before:border-gray-700 before:-z-10 before:transition-all",
};

const PrimaryButton = ({ 
  type = "button", 
  variant = "primary", 
  link, 
  id, 
  onClick, 
  icon, 
  text,
  className = "",
  disabled = false
}) => {
  const baseStyles = "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800";
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const IconComponent = icon ? icon : ArrowRight;

  const buttonContent = (
    <>
      <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>{text}</span>
      {icon && <IconComponent className="ml-2 h-5 w-5" />}
    </>
  );

  if (link) {
    return (
      <Link to={link} className={styles} id={id}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      id={id}
      onClick={onClick}
      className={styles}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
};

export default PrimaryButton;
