import React from 'react';
// import data
import { pricing } from '../data';
// import icons
import { HiCheck } from 'react-icons/hi';
import RobotPepe from '../assets/images/elon5.jpeg'

const Pricing = () => {
  // destructure pricing
  const { title, cards } = pricing;
  return (
    <section id='roadmap' className='section relative'>
      <div className='container mx-auto'>
        {/* title */}
        <h2
          className='h2 text-white mb-10 lg:mb-20 text-center'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          {title}
        </h2>
        {/* cards */}
        <div className='flex flex-col lg:flex-row lg:gap-x-[30px] gap-y-[30px] lg:gap-y-0 justify-center items-center'>
          {cards.map((card, cardIndex) => {
            // destructure card
            const { title, services, delay } =
              card;
            // card
            return (
              <div
                data-aos='fade-up'
                data-aos-delay={delay}
                data-aos-offset='300'
                key={cardIndex}
              >
                <div
                  className="border-2 border-grey w-[350px] h-[500px] rounded-[12px] p-[40px] cursor-pointer transition-all"
                >
                  {/* card title */}
                  <div className='text-[32px] font-semibold mb-8'>{title}</div>
                  {/* card services */}
                  <div className='flex flex-col gap-y-2 mb-6'>
                    {services.map((service, index) => {
                      // destructure service
                      const { name } = service;
                      return (
                        <div
                          className='flex items-center gap-x-[10px]'
                          key={index}
                        >
                          <HiCheck className='text-light' />
                          <div>{name}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <img className='md:absolute md:bottom-0 md:right-10' src={RobotPepe} alt='' /> */}
    </section>
  );
};

export default Pricing;
