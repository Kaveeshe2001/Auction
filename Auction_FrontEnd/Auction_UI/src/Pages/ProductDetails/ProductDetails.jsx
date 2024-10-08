import React, { useEffect, useState } from 'react'
import ProductDetailsLeft from './ProductDetailsLeft'
import ProductDetailsRight from './ProductDetailsRight'
import ProductCard from '../../components/Cards/ProductCard';

const ProductDetails = () => {
    const [mainImage, setMainImage] = useState('');
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      // Simulating an API call to fetch product images
      const fetchImages = async () => {
        const imageUrls = [
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?auto=format&fit=crop&w=1080&q=80",
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
