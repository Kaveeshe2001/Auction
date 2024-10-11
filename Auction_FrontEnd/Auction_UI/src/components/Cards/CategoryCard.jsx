import React, { useState, useEffect } from 'react';
import CategoryImg from "../../assets/l-bg.jpg";
import CategoryImg2 from "../../assets/reg-bg.jpg";
import CategoryImg3 from "../../assets/coin1.jpg";
import CategoryImg4 from "../../assets/coin3.jpg";

const CategoryCard = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      setIsLoading(true);
      setTimeout(() => {
        const mockCoins = [
          { id: 1, color: 'bg-purple-700', image: CategoryImg2 },
          { id: 2, color: 'bg-orange-600', image: CategoryImg3 },
          { id: 3, color: 'bg-gray-600', image: CategoryImg4 },
        ];
        setCoins(mockCoins);
        setIsLoading(false);
      }, 1500);
    };

    fetchCoins();
  }, []);

  return (
    <div className="w-64 bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_4px_20px_rgba(0,119,182,0.7)] transition-transform transform hover:scale-105 duration-300">
      <div className="relative">
        <img 
          src={CategoryImg}
          alt="Ancient Coins Collection"
          className="w-full h-40 object-cover"
        />
      </div>
      <div className="p-3">
        <div className="grid grid-cols-3 gap-2 mb-2">
          {isLoading ? (
            <div className="col-span-3 text-center text-white">Loading...</div>
          ) : (
            coins.map((coin) => (
              <div key={coin.id} className={`${coin.color} rounded-md overflow-hidden`}>
                <img src={coin.image} alt={`Coin ${coin.id}`} className="w-full h-full object-cover" />
              </div>
            ))
          )}
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-white text-lg font-bold">Ancient Coins</h3>
          <span className="text-white text-sm font-semibold bg-gray-800 px-2 py-1 rounded">
            {isLoading ? 'Loading...' : `${coins.length} Items`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;