import React, { useState } from 'react';
import ProductForm from './ProductForm';

const AddProducts = () => {

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-6 px-8">
          <h1 className="text-3xl font-bold text-white">Add New Product</h1>
        </div>
        <ProductForm />
      </div>
    </div>
  );
};

export default AddProducts;