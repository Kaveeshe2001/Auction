import React from 'react';
import Hero from '../components/Home/Hero/Hero';
import ProductCard from '../components/Cards/ProductCard';
import CoinAuctionSteps from '../components/Cards/StepCards/CoinAuctionSteps';
import TextSection from '../components/Caption/TextSection';

const Home = () => {
  return (
    <div>
      <Hero />
      
      <div className='p-4 border-2 border-purple-250'>
        <h1 className='p-4 font-bold text-[2rem]'>Live Bidding</h1>
        <div className="p-4">
           <ProductCard/>
        </div>
      </div>
      
      <div className='border-1 border-purple-250'>
        <h1 className='p-4 text-3xl font-bold'>Create and sell your Coins</h1>
        <div>
           <CoinAuctionSteps />
        </div>
      </div>
      
      <div className='p-4 border-2 border-purple-250'>
        <div className="p-4">
           <TextSection />
        </div>
      </div>
    </div>
  );
};

export default Home;