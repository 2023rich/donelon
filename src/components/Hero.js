import React from 'react';
// import data
import { hero } from '../data';

const Hero = () => {
  // destructure hero data
  const { titleImg, subtitle, btnText, image } = hero;
  return (
    <section className='min-h-[900px] py-12'>
      <div className='container mx-auto min-h-[900px] flex justify-center items-center'>
        <div className='flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left'>
          {/* text */}
          <div className='flex-1'>
            <h3
              className='text-5xl text-white font-bold mb-2 lg:mb-5'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              <img className='w-96' src={titleImg} alt='' />
            </h3>
            <p
              className='lead mb-5 lg:mb-10'
              data-aos='fade-down'
              data-aos-delay='600'
            >
              {subtitle}
            </p>
            {/* btn & comp text */}
            <div
              className='flex flex-col max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6'
              data-aos='fade-down'
              data-aos-delay='700'
            >
              <h3
                className='text-3xl text-white font-bold mb-2 lg:mb-5'
                data-aos='fade-down'
                data-aos-delay='500'
              >
                LAUNCHPAD FAIRLAUNCH
              </h3>
              <div className='flex space-x-3'>
                <button className='btn btn-md lg:btn-lg border-2 flex justify-center items-center lg:gap-x-4'>
                  {btnText}
                </button>
                <button className='btn btn-md bg-white text-[#423AA0] lg:btn-lg border-2 flex justify-center items-center lg:gap-x-4'>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          {/* image */}
          <div className='flex-2 justify-end' data-aos='fade-up' data-aos-delay='800'>
            <img className='w-96' src={image} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
