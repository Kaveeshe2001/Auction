import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const variantStyles = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
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
  const baseStyles = "relative font-medium -top-1 -left-1 hover:top-0 hover:left-0 transition-all bg-blue-900 py-2.5 px-5 uppercase text-white";
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const IconComponent = icon ? icon : ArrowRight;

  const buttonContent = (
    <>
      <span>{text}</span>
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
