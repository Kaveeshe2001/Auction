import React from 'react';
import homeBanner from '../../../assets/banner.jpg';
import HeroSub from '../../../assets/coinlg.png';
import { RiArrowRightDownLine } from '@remixicon/react';
import PrimaryButton from "../../uiItem/Buttons/PrimaryButton";

const Hero = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-center pt-[150px]" style={{ backgroundImage: `url(${homeBanner})` }}>
      <div className="overflow-hidden flex">
        <div className="border-r border-white/10 pt-[118px]">
          <div className="max-w-[810px] w-full mb-[150px] ml-5">
            <span className="text-white font-dmsans text-xs font-medium inline-flex items-center gap-2 py-2.5 px-3 bg-white/10 rounded-full mb-4">
              Subtitle
            </span>
            <h1 className="text-white font-dmsans text-[70px] font-extrabold leading-tight mb-6">
              Civil Rights <span className="font-playfair font-semibold italic">Movement Coins</span>
            </h1>
            <p className="text-white/70 font-dmsans text-[17px] font-light leading-[30px] mb-10">
            Join us for an exceptional numismatic journey as we unveil a remarkable collection of rare and valuable <br/> coins from around the world.
            </p>
            <div className="flex items-center gap-[30px]">
              <PrimaryButton
                text="start a bid"
                variant="secondary"
                icon={RiArrowRightDownLine} 
              />
              <PrimaryButton text="view all auction" variant="secondary" /> 
            </div>
          </div>
        </div>
        <div className="h-full relative flex items-center justify-center ml-10">
          <div className="flex items-center justify-center h-full">
            <img src={HeroSub} alt="HeroSub" className='w-[500px] h-[500px]'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
