/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
// import data
import { cta } from '../data';
import img1 from '../assets/images/pp1.avif';
import img2 from '../assets/images/pp2.avif';

const Cta = () => {
  // destructure cta data
  const { title, subtitle, btnText } = cta;
  return (
    <section className='section bg-left-top'>
      <div className='max-w-[1340px] mx-auto px-[25px]'>
        {/* text */}
        <div className='max-w-[920px] mx-auto text-center'>
          <h2
            className='h2 text-white mb-6'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            {title}
          </h2>
          <p
            className='text-2xl lg:text-4xl text-white'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            {subtitle}
          </p>
        </div>
        <div className='flex justify-center'>

          <div className='flex flex-col'>
            <a href='https://twitter.com/DonElonBSC' target='_blank'
              className='btn btn-md btn-white mt-[40px] lg:text-[22px] gap-x-[10px] mx-auto'
              data-aos='fade-up'
              data-aos-delay='400'
            >
              $DONELON ON TWITTER
            </a>
            <a href='https://t.me/DonElon_BSC' target='_blank'
              className='btn btn-md btn-white mt-[40px] lg:text-[22px] gap-x-[10px] mx-auto'
              data-aos='fade-up'
              data-aos-delay='400'
            >
              $DONELON ON TELEGRAM
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Cta;
