import React from 'react'
import ProductDetailsLeft from './ProductDetailsLeft'

const ProductDetails = () => {
  return (
    <div className="bg-gray-900 pt-[150px]">
      <div className='bg-gray-100'>
        <div className='container mx-auto px-4'>
            <div className='flex flex-wrap -mx-4'>
                <ProductDetailsLeft />
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
