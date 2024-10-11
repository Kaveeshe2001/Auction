import React, { useState, useEffect } from 'react';
import { RiAuctionFill } from '@remixicon/react';
import { useNavigate } from 'react-router-dom';
import CardImg from '../../assets/banner.jpg';
import PrimaryButton from '../uiItem/Buttons/PrimaryButton';

const ProductCard = ({ coin }) => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 148,
    hours: 11,
    minutes: 44,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else if (prevTime.days > 0) {
          return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleBidClick = () => {
    // Navigate to the product details page with the coin's ID
    navigate(`/productDetails/${coin?.id}`);
  };

  return (
    <div className="w-64 rounded-lg overflow-hidden bg-gray-800 shadow-lg hover:shadow-[0_4px_20px_rgba(0,119,182,0.7)] transition-transform transform hover:scale-105 duration-300">
      <div className="relative">
        <a href="" className="card-image block">
          <img
            src={CardImg}
            alt="auction"
            className="w-full h-48 object-cover"
          />
        </a>
        <div className="batch absolute top-2 left-2 space-y-1.5">
          <span className="live inline-flex items-center gap-1 bg-red-600 text-white text-xs font-bold px-2.5 py-1.5 rounded">
            <RiAuctionFill size={16} /> Live
          </span>
          <div className="code-no">
            <span className="code bg-gray-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              LOT #{coin?.lot}
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
          <ul className="flex justify-between items-center text-center">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <li key={unit}>
                <span className="block text-lg font-bold">{value.toString().padStart(2, '0')}</span>
                <span className="block text-xs">{unit.toUpperCase()}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="p-4">
        <h6 className="text-gray-400 text-sm mb-1">
          {coin?.category || "Colonial Coins, Historical Coins..."}
        </h6>
        <h2 className="text-white text-lg font-semibold mb-2">
          {coin?.title || "Banknote and Coin"}
        </h2>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="block text-gray-400 text-xs">
              Current bid:
            </span>
            <strong className="text-blue-400 text-lg font-bold">
              ${coin?.currentMarketPrice || "1,406.00"}
            </strong>
          </div>
        </div>
        <div className='mt-2' >
          <PrimaryButton text="Bid Now" variant="secondary" onClick={handleBidClick} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;