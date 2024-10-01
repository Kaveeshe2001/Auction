import React from 'react';
import { RiAuctionFill } from '@remixicon/react';
import CardImg from '../../assets/banner.jpg';
import PrimaryButton from '../uiItem/Buttons/PrimaryButton';

const ProductCard = ({ coin }) => {
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
            <li>
              <span className="block text-lg font-bold">148</span>
              <span className="block text-xs">DAY</span>
            </li>
            <li>
              <span className="block text-lg font-bold">11</span>
              <span className="block text-xs">HR</span>
            </li>
            <li>
              <span className="block text-lg font-bold">44</span>
              <span className="block text-xs">MIN</span>
            </li>
            <li>
              <span className="block text-lg font-bold">59</span>
              <span className="block text-xs">SEC</span>
            </li>
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
        <PrimaryButton text="Bid Now" variant="secondary"/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;