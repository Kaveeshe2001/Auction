import React from 'react';
import homeBanner from '../../../assets/banner.jpg';
import HeroSub from '../../../assets/coinlg.png';
import { RiArrowRightDownLine } from '@remixicon/react';
import PrimaryButton from "../../uiItem/Buttons/PrimaryButton";

const Hero = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-center pt-20 lg:pt-[150px]" style={{ backgroundImage: `url(${homeBanner})` }}>
      <div className="overflow-hidden flex flex-col lg:flex-row">
        <div className="border-b lg:border-b-0 lg:border-r border-white/10 pt-10 lg:pt-[118px]">
          <div className="max-w-full lg:max-w-[810px] w-full mb-10 lg:mb-[150px] px-5 lg:ml-5">
            <span className="text-white font-dmsans text-xs font-medium inline-flex items-center gap-2 py-2 px-3 bg-white/10 rounded-full mb-4">
              Subtitle
            </span>
            <h1 className="text-white font-dmsans text-4xl lg:text-[70px] font-extrabold leading-tight mb-4 lg:mb-6">
              Civil Rights <span className="font-playfair font-semibold italic">Movement Coins</span>
            </h1>
            <p className="text-white/70 font-dmsans text-base lg:text-[17px] font-light leading-relaxed lg:leading-[30px] mb-6 lg:mb-10">
              Join us for an exceptional numismatic journey as we unveil a remarkable collection of rare and valuable coins from around the world.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-[30px]">
              <PrimaryButton
                text="start a bid"
                variant="secondary"
                icon={RiArrowRightDownLine}
                className="w-full sm:w-auto"
              />
              <PrimaryButton 
                text="view all auction" 
                variant="secondary" 
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
        <div className="h-full relative flex items-center justify-center mt-10 lg:mt-0 lg:ml-10">
          <div className="flex items-center justify-center h-full">
            <img src={HeroSub} alt="HeroSub" className='w-full max-w-[300px] lg:max-w-[500px] h-auto'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;