import React, { useEffect, useState } from 'react'
import ProductDetailsLeft from './ProductDetailsLeft'
import ProductDetailsRight from './ProductDetailsRight'

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
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <ProductDetailsLeft mainImage={mainImage} images={images} changeImage={changeImage} />
              <ProductDetailsRight />
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails
