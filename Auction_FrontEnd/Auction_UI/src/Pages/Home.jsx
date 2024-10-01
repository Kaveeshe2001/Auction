import React from 'react';
import Hero from '../components/Home/Hero/Hero';
import ProductCard from '../components/Cards/ProductCard';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="p-4 min-h-screen">
      <ProductCard/>
    </div>
    </div>
  );
};

export default Home;