import React from 'react';
import Hero from '../components/Home/Hero/Hero';
import ProductCard from '../components/Cards/ProductCard';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className='p-4 min-h-screen border-2 border-purple-950'>
        <h1 className='p-4 font-bold text-[2rem]'>Live Bidding</h1>
        <div className="p-4 min-h-screen">
           <ProductCard/>
        </div>
      </div>
    </div>
  );
};

export default Home;