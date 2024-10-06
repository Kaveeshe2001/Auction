import React from 'react';
import { Gavel, Monitor, DollarSign, CreditCard } from 'lucide-react';

const steps = [
  {
    icon: <Gavel className="w-12 h-12 text-purple-400" />,
    title: "Placing your first bid",
    description: "Once you find an auction listing you're interested in, you're able to place bids against other buyers.",
  },
  {
    icon: <Monitor className="w-12 h-12 text-teal-400" />,
    title: "Registering an account",
    description: "If you want to participate in the auctions of our website, you must register and become a member.",
  },
  {
    icon: <DollarSign className="w-12 h-12 text-green-400" />,
    title: "Reserve auction",
    description: "In this type of auction, buyers bid until the auction ends. Bidding starts at $1 to the highest bidder.",
  },
  {
    icon: <CreditCard className="w-12 h-12 text-yellow-400" />,
    title: "There any hidden fees?",
    description: "There are no buyer's hidden fees. If you win, what you bid is what you pay.",
  },
];

const CoinAuctionSteps = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-950 via-purple-950 to-pink-950 text-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div className="w-70 p-5 rounded-lg overflow-hidden bg-gray-800 shadow-lg hover:shadow-[0_4px_20px_rgba(0,119,182,0.7)] transition-transform transform hover:scale-105 duration-300">
            <div key={index} className="flex flex-col items-start">
            <div className="mb-4">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">STEP-0{index + 1}</h3>
            <h4 className="text-xl font-bold mb-2">{step.title}</h4>
            <p className="text-gray-400 mb-4">{step.description}</p>
            <div className="mt-auto">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinAuctionSteps;