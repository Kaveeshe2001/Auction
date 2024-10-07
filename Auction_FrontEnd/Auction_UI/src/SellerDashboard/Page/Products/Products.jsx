import React from 'react'
import { Link } from 'react-router-dom'
import ProductTable from './ProductTable'
import ProductPage from './ProductPage'

const Product = () => {
  return (
    <div className='flex flex-col gap-4'>
      <ProductPage />
      <ProductTable />
    </div>
  )
}

export default Product