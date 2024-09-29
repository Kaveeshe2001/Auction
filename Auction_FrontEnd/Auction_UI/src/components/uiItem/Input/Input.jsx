import React from 'react';

const Input = ({
  label,
  type,
  id,
  placeHolder,
  name,
  value,
  onChange,
  error,
  accept
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeHolder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        accept={accept}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;