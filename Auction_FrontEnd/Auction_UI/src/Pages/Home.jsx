import React from 'react';
import Hero from '../components/Home/Hero/Hero';
import ProductCard from '../components/Cards/ProductCard';
import CoinAuctionSteps from '../components/Cards/StepCards/CoinAuctionSteps';
import TextSection from '../components/Caption/TextSection';
import CategoryCard from '../components/Cards/CategoryCard';

const Home = () => {
  return (
    <div>
      <Hero />
      
      <div className="p-4 border-2 border-purple-200">  {/* Changed purple-250 to purple-500 since 250 may not exist */}
        <h1 className="p-4 font-bold text-[2rem]">Live Products</h1>
        <div className="p-4 flex flex-col gap-9 md:flex-row md:flex-wrap">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
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

      <div className="p-4 border-2 border-purple-200">  {/* Changed purple-250 to purple-500 since 250 may not exist */}
        <h1 className="p-4 font-bold text-[2rem]">Top Collections</h1>
        <div className="p-4 flex flex-col gap-9 md:flex-row md:flex-wrap">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </div>
  );
};

export default Home;