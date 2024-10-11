import React from 'react'
import ProductCard from '../../components/Cards/ProductCard'
import CategoryCard from '../../components/Cards/CategoryCard'

const Productpage = () => {
  return (
    <div className="bg-gray-900 pt-[150px]">
      <div className="p-4">  {/* Changed purple-250 to purple-500 since 250 may not exist */}
        <h1 className="p-4 font-bold text-[2rem] text-white text-center">Live Products</h1>
        <div className="p-4 flex flex-col gap-9 md:flex-row md:flex-wrap justify-center items-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <div className="p-4">  {/* Changed purple-250 to purple-500 since 250 may not exist */}
        <h1 className="p-4 font-bold text-[2rem] text-white text-center">Top Collections</h1>
        <div className="p-4 flex flex-col gap-9 md:flex-row md:flex-wrap justify-center items-center">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </div>
  )
}

export default Productpage
