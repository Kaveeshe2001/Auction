import React from 'react'

const ProductDetailsLeft = ({ mainImage, images, changeImage }) => {
    return (
      <div className='w-full md:w-1/2 p-6'>
        <img src={mainImage} alt="Product" className="w-full h-auto rounded-lg shadow-md mb-4 transition-all duration-300 ease-in-out" />
        <div className="flex gap-4 py-4 justify-center overflow-x-auto">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md cursor-pointer transition duration-300 ${mainImage === img ? 'ring-2 ring-indigo-500' : 'opacity-60 hover:opacity-100'}`}
              onClick={() => changeImage(img)}
            />
          ))}
        </div>
      </div>
    );
};

export default ProductDetailsLeft
