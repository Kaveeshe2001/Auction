import React, { useState, useEffect } from 'react';
import { Calendar, DollarSign } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={product.image || "/api/placeholder/300/200"} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <div className="mt-2 flex items-center text-gray-600">
          <DollarSign className="h-4 w-4 mr-1" />
          <span>{product.price}</span>
        </div>
        <div className="mt-2 text-sm text-gray-500">{product.category}</div>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{product.startDate} - {product.expireDate}</span>
        </div>
      </div>
    </div>
  );
};

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulating data fetch from an API
    const fetchProducts = async () => {
      // Replace this with actual API call
      const data = [
        {
          id: 1,
          name: "Smartphone X",
          price: "599.99",
          startDate: "2024-06-01",
          expireDate: "2025-05-31",
          category: "Electronics",
          image: "/api/placeholder/300/200"
        },
        {
          id: 2,
          name: "Classic T-Shirt",
          price: "24.99",
          startDate: "2024-05-15",
          expireDate: "2024-12-31",
          category: "Clothing",
          image: "/api/placeholder/300/200"
        },
        // Add more product data as needed
      ];
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;