import React, { useState, useEffect } from 'react';

const AuctionDetailsProduct = () => {
  const [activeTab, setActiveTab] = useState('description'); 
  const [description, setDescription] = useState('');
  const [bids, setBids] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // Simulating data fetching
    setDescription(
      "Step back in time with our 'Ancient Treasures Unearthed' auction, where numismatic enthusiasts and history buffs alike can bid on a curated collection of rare Roman coins. These ancient artifacts offer a glimpse into the grandeur of the Roman Empire, featuring iconic emperors, intricate designs, and a fascinating journey through centuries of history."
    );
    setBids([
      { bidderName: 'Rainbow-Themes', biddingTime: 'October 3, 2023 11:31 pm', amount: 1914.0 },
      { bidderName: 'Rainbow-Themes', biddingTime: 'October 1, 2023 1:25 am', amount: 1908.0 },
    ]);
    setReviews([]); 
  }, []);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // Handle review submission logic here
    console.log('Review submitted');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div className="description mb-8">
            <h2 className="text-2xl font-bold mb-2">Description</h2>
            <p>{description}</p>
          </div>
        );
      case 'bids':
        return (
          <div className="bids mb-8">
            <h2 className="text-2xl font-bold mb-2">Bids</h2>
            <p className="mb-2">Total Bids Placed: {bids?.length || 0}</p>
            <table className="w-full border-collapse border border-gray-700">
              <thead>
                <tr className="bg-gray-800">
                  <th className="text-left p-3 border-b border-gray-600">Bidder Name</th>
                  <th className="text-left p-3 border-b border-gray-600">Bidding Time</th>
                  <th className="text-right p-3 border-b border-gray-600">Bid</th>
                </tr>
              </thead>
              <tbody>
                {bids?.map((bid, index) => (
                  <tr key={index} className="hover:bg-gray-800 transition-colors">
                    <td className="p-3 border-b border-gray-600">{bid.bidderName}</td>
                    <td className="p-3 border-b border-gray-600">{bid.biddingTime}</td>
                    <td className="p-3 text-right text-blue-400 border-b border-gray-600">${bid.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        );
      case 'reviews':
        return (
          <div className="reviews mb-8">
            <h2 className="text-2xl font-bold mb-2">Reviews ({reviews?.length || 0})</h2>
            {reviews?.length === 0 ? (
              <div>
                <p className="mb-4">Be the first to review "Civil Rights Movement Coin"</p>
                <form className="space-y-4" onSubmit={handleSubmitReview}>
                  <div>
                    <label htmlFor="rating" className="block mb-1">
                      Your Rating
                    </label>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={`text-2xl cursor-pointer ${star <= rating ? 'text-yellow-400' : 'text-gray-400'}`}
                          onClick={() => setRating(star)}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="review" className="block mb-1">
                      Your Review
                    </label>
                    <textarea id="review" rows="4" className="w-full bg-gray-800 rounded p-2" required></textarea>
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label htmlFor="name" className="block mb-1">
                        Name
                      </label>
                      <input type="text" id="name" className="w-full bg-gray-800 rounded p-2" required />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="email" className="block mb-1">
                        Email
                      </label>
                      <input type="email" id="email" className="w-full bg-gray-800 rounded p-2" required />
                    </div>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Save my name, email, and website in this browser for the next time I comment.</span>
                    </label>
                  </div>
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Submit
                  </button>
                </form>
              </div>
            ) : (
              <ul>
                {reviews?.map((review, index) => (
                  <li key={index}>{review}</li>
                ))}
              </ul>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-900 text-gray-300 p-4 rounded-lg">
      {/* Tabs */}
      <div className="tabs flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab('description')}
          className={`p-2 rounded-lg border-2 transition-colors duration-300 ${
            activeTab === 'description'
              ? 'bg-blue-500 border-blue-500 text-white'
              : 'bg-gray-700 border-gray-600 text-gray-300 hover:border-blue-400 hover:text-white'
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab('bids')}
          className={`p-2 rounded-lg border-2 transition-colors duration-300 ${
            activeTab === 'bids'
              ? 'bg-blue-500 border-blue-500 text-white'
              : 'bg-gray-700 border-gray-600 text-gray-300 hover:border-blue-400 hover:text-white'
          }`}
        >
          Bids
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`p-2 rounded-lg border-2 transition-colors duration-300 ${
            activeTab === 'reviews'
              ? 'bg-blue-500 border-blue-500 text-white'
              : 'bg-gray-700 border-gray-600 text-gray-300 hover:border-blue-400 hover:text-white'
          }`}
        >
          Reviews ({reviews?.length || 0})
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {renderContent()}
      </div>
    </div>

  );
};

export default AuctionDetailsProduct;
