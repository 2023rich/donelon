/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
// import icons
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi';
// import components
import MobileNav from '../components/MobileNav';
import Nav from '../components/Nav';

const Header = () => {

  const textToCopy = '0x0000000000000000000000000000000000';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert('Contract copied!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  // mobile nav state
  const [mobileNav, setMobileNav] = useState(false);
  // header state
  const [isActive, setIsActive] = useState(false);
  // destructure header data
  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${isActive ? 'lg:top-0' : 'lg:top-[0px]'
        } bg-[#000] shadow-2xl py-8 lg:py-6 fixed w-full transition-all z-10`}
    >
      <div className='container mx-auto flex justify-center items-center'>
        <div
          className='hidden lg:flex'
          data-aos='fade-down'
          data-aos-delay='1200'
        >
          <Nav />
        </div>
        {/* cta button - initially hidden - show on desktop mode */}
        {/* <button
          className='btn btn-sm btn-outline hidden lg:flex'
          data-aos='fade-down'
          data-aos-delay='1400'
        >
          {btnText}
        </button> */}
        {/* mobile nav trigger btn - hidden on desktop */}
        {/* <button className='lg:hidden' onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <HiOutlineX className='text-3xl text-[#423AA0]' />
          ) : (
            <HiMenuAlt4 className='text-3xl text-[#423AA0]' />
          )}
        </button> */}
        {/* mobile nav - hidden on desktop */}
        {/* <div
          className={`${mobileNav ? 'left-0' : '-left-full'
            }  fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}
        >
          <MobileNav />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
