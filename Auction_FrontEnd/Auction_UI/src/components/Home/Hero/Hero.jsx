import React from 'react';
import homeBanner from '../../../assets/banner.jpg';
import { RiArrowRightDownLine } from '@remixicon/react';

const Hero = () => {
  return (
    <div className="bg-[url('/banner.png')] bg-cover bg-no-repeat bg-center pt-[150px] mb-[120px]">
      <div className="overflow-hidden">
        <div className="border-r border-white/10 pt-[118px]">
          <div className="max-w-[810px] w-full mb-[150px]">
            <span className="text-white font-dmsans text-xs font-medium inline-flex items-center gap-2 py-2.5 px-3 bg-white/10 rounded-full mb-4">
              <svg className="fill-white" />
              Subtitle
            </span>
            <h1 className="text-white font-dmsans text-[70px] font-extrabold leading-tight mb-6">
              Title with <span className="font-playfair font-semibold italic">Emphasis</span>
            </h1>
            <p className="text-white/70 font-dmsans text-[17px] font-light leading-[30px] mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex items-center gap-[30px]">
                    <PrimaryButton
                      text='start a bid'
                      variant='white'
                      icon={<RiArrowRightDownLine size={16} />}
                    />
                    <PrimaryButton text='view all auction' variant='default' />
            </div>
          </div>
        </div>
        <div className="h-full relative">
          <div className="flex items-center justify-center h-full">
          <img src={homeBanner} alt='homeBanner' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;