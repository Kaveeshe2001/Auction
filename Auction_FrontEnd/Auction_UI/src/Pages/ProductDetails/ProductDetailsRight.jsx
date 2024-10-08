import React, { useState, useEffect } from 'react';

const ProductDetailsRight = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 135, hours: 18, minutes: 37, seconds: 22 });
  const [currentBid, setCurrentBid] = useState(1914.00);
  const [bidAmount, setBidAmount] = useState('');

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

  const handleBidChange = (e) => {
    setBidAmount(e.target.value);
  };

  const handlePlaceBid = () => {
    if (parseFloat(bidAmount) >= 1915.00) {
      setCurrentBid(parseFloat(bidAmount));
      setBidAmount('');
    } else {
      alert('Bid must be at least $1,915.00');
    }
  };

  return (
    <div className="text-white p-6 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Civil Rights Movement Coin</h1>
      <p className="text-3xl text-blue-400 mb-4">Current bid: ${currentBid.toFixed(2)}</p>
      <div className="border-b border-gray-700 my-4"></div>
      <p className="text-gray-400 mb-4">Commemorate the struggle for civil rights with this auction</p>
      <div className="border-b border-gray-700 my-4"></div>
      <div className="mb-4">
        <span className="text-gray-400">Item condition: </span>
        <span className="bg-gray-700 px-2 py-1 rounded">Used</span>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-400 mb-2">Time Left:</p>
        <div className="flex space-x-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-gray-800 p-3 rounded text-center">
              <div className="text-3xl text-blue-400">{value}</div>
              <div className="text-xs text-gray-400">{unit.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>
      
      <p className="text-gray-400 mb-2">Ending On: February 21, 2025 5:03 am</p>
      <p className="text-gray-400 mb-4">Timezone: UTC 0</p>
      
      <p className="text-green-500 mb-4">Reserve price has been met.</p>
      
      <div className="mb-4">
        <input 
          type="number" 
          className="w-full bg-gray-800 text-white p-2 rounded mb-2"
          placeholder="Enter bid amount"
          value={bidAmount}
          onChange={handleBidChange}
        />
        <button 
          className="w-full bg-blue-600 text-white p-2 rounded mb-2"
          onClick={handlePlaceBid}
        >
          Place Bid
        </button>
        <p className="text-gray-400 text-sm">(Enter more than or equal to: $1,915.00)</p>
      </div>
      
      <button className="w-full bg-blue-600 text-white p-2 rounded">
        Buy Now $10,000.00
      </button>

      <div className="mt-4">
        <span className="text-gray-400 flex flex-cols mb-2">Category </span>
        <span className="bg-gray-700 px-4 py-1 rounded">Colonial</span>
      </div>
    </div>
  );
};

export default ProductDetailsRight;