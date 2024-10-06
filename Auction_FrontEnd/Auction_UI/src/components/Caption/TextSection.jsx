import React from 'react'

const TextSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col justify-center">
        <h3 className="text-4xl font-bold mb-4 leading-tight">
          Explore a selection of coins spanning centuries, each telling a unique story.
        </h3>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-lg text-gray-700">
          Coins have long been regarded as a stable and valuable investment. Discover investment-grade coins that not only enhance your collection but also offer potential financial growth.
        </p>
      </div>
    </div>
  )
}

export default TextSection
