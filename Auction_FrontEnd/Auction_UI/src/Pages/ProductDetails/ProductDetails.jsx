import React, { useEffect, useState } from 'react'
import ProductDetailsLeft from './ProductDetailsLeft'
import ProductDetailsRight from './ProductDetailsRight'
import ProductCard from '../../components/Cards/ProductCard';
import AuctionDetailsProduct from './AuctionDetailsProduct';

const ProductDetails = () => {
    const [mainImage, setMainImage] = useState('');
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      // Simulating an API call to fetch product images
      const fetchImages = async () => {
        const imageUrls = [
          "https://images.unsplash.com/photo-1642388755321-d6665f3ac3b6?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1641179680040-1647297c6bbd?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1641524737119-dd5a3cdc5bec?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1641802803693-92566395aacb?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ];
        setImages(imageUrls);
        setMainImage(imageUrls[0]);
      };
  
      fetchImages();
    }, []);
  
    const changeImage = (src) => {
      setMainImage(src);
    };
  
    return (
      <div className="bg-gray-900 pt-[120px]">
        <div className="container mx-auto px-4 py-16">
          <div className="bg-gray-950 rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <ProductDetailsLeft mainImage={mainImage} images={images} changeImage={changeImage} />
              <ProductDetailsRight />
            </div>
          </div>
          <AuctionDetailsProduct />
          <div className="p-4 border-2 border-purple-200">  {/* Changed purple-250 to purple-500 since 250 may not exist */}
            <h1 className="p-4 text-white text-center font-bold text-[2rem]">Related Products</h1>
            <div className="p-4 flex flex-col gap-5 items-center justify-center md:flex-row md:flex-wrap">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails
