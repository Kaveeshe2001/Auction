import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const variantStyles = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
  outline: "bg-transparent hover:bg-gray-100 text-blue-600 border border-blue-600",
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
  const baseStyles = "px-4 py-2 rounded-md font-semibold transition-colors duration-200 flex items-center justify-center";
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
