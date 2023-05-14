/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// import aos
import Aos from 'aos';
// import aos css
import 'aos/dist/aos.css';

// import components
import AboutImg from './assets/images/elon2.jpg';
import Elon3 from './assets/images/elon3.jpg';
import Tele from './assets/images/telegram.png';
import Twitter from './assets/images/twitter.png';
import TokenomicImg from './assets/images/tokenomics.png';
import Cta from './components/Cta';
import Header from './components/Header';
import RoadMap from './components/Roadmap';
import { hero } from './data';

const App = () => {

  const { subtitle, image } = hero;

  // initialize aos
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  return (
    <div className='overflow-hidden'>
      <Header />
      <section className='min-h-[950px] py-12'>
        <div className='container mx-auto sm:min-h-[950px] md:min-h-[800px] flex justify-center items-center'>
          <div className='flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left'>
            <div className='flex-1'>
              <h3
                className='text-5xl text-white font-bold mb-2 lg:mb-5'
                data-aos='fade-down'
                data-aos-delay='500'
              >
                $DONELON
              </h3>
              <div
                className='lead mb-5 lg:mb-10'
                data-aos='fade-down'
                data-aos-delay='600'
              >
                {subtitle}
              </div>

              <div
                className='flex flex-col max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6'
                data-aos='fade-down'
                data-aos-delay='700'
              >

                <div className='mt-5 grid md:grid-cols-2 sm:grid-cols-1 gap-8' data-aos='fade-down' data-aos-delay='100'>
                  <a target='_blank' href='https://t.me/DonElonBSC' className="social">
                    <div className='social_title'>TELEGRAM</div>
                    <img className='w-12' src={Tele} alt='' />
                  </a>
                  <a target='_blank' href='https://twitter.com/DonElon_BSC' className="social">
                    <div className='social_title'>TWITTER</div>
                    <img className='w-12' src={Twitter} alt='' />
                  </a>
                </div>

              </div>
            </div>

            <div className='flex-2 justify-end' data-aos='fade-up' data-aos-delay='800'>
              <img className='w-96 rounded-full' src={image} alt='' />
            </div>
          </div>

        </div>



        <div className='container mx-auto'>
          <h2
            className='h2 text-white font-bold mb-[3rem] lg:mb-[5-rem] text-center'
            data-aos='fade-down'
            data-aos-delay='100'
          >PARTNER</h2>
          <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-8' data-aos='fade-down' data-aos-delay='100'>
            <a target='_blank' href='https://www.pinksale.finance/' className="social">
              <div className='social_title'>PinkSale</div>
              <img className='w-12' src='https://www.pinksale.finance/static/media/pinkswap.a95de4f3.png' alt='' />
            </a>
            <a target='_blank' href='https://www.dextools.io/app/en/bnb/pair-explorer/0xb39ab1a70c3d83465936cad208c5b75e48127169' className="social">
              <div className='social_title'>DexView</div>
              <img className='w-12' src='https://www.dexview.com/dexview-cat.svg' alt='' />
            </a>
            <a target='_blank' href='https://pancakeswap.finance/swap?outputCurrency=0xA3c1abC0d0Bde46F715129706BB22eD5dFd158Ec' className="social">
              <div className='social_title'>pancakeswap</div>
              <img className='w-12' src='https://pancakeswap.finance/favicon.ico' alt='' />
            </a>
            <a target='_blank' href='#' className="social">
              <div className='social_title'>CoinMarketCap</div>
              <img className='w-12' src='https://static.wixstatic.com/media/1f3f2b_37292076c0c94e06b15b9fb0a3ad81b2~mv2.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/download__18_-removebg-preview.png' alt='' />
            </a>
            <a target='_blank' href='#' className="social">
              <div className='social_title'>CoinGecKo</div>
              <img className='w-12' src='https://static.wixstatic.com/media/1f3f2b_1ee2f1687f4f485aa87f5500b420a919~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/download__19_-removebg-preview.png' alt='' />
            </a>
          </div>
        </div>
      </section>

      <section id='about' className='lg:min-h-[712px] pt-[3rem] lg:py-[10rem]'>
        <div className='container mx-auto'>

          <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>

            <div className='flex-1' data-aos='fade-right' data-aos-offset='100'>
              <img className='rounded-2xl' src={AboutImg} alt='' />
            </div>

            <div className='flex-1' data-aos='fade-left' data-aos-offset='100'>
              <div className='text-center h2 mb-4 font-bold' data-aos='fade-up' data-aos-offset='100'>ABOUT</div>

              <div>
                <li>At its core, $DONELON is a token powered by an impassioned community, unified by a shared vision and a resolute belief in decentralization. This innovative digital asset breaks free from the clutches of control, evading the grip of any individual or entity. With $DONELON, you become part of a revolutionary movement that empowers and enriches its holders.</li>
                <li>Drawing inspiration from the legendary Elon Musk, $DONELON encapsulates the audacity, ambition, and limitless potential that define the man himself. As you delve into the world of Don Elon, prepare to embrace a dynamic ecosystem where imagination and creativity intertwine with the immense power of blockchain technology.</li>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='howtobuy' className='lg:min-h-[712px] pt-[1.5rem] lg:py-[8rem] pb-10'>
        <div className='container mx-auto'>
          <div className='text-center h2 mb-4 font-bold' data-aos='fade-up' data-aos-offset='100'>HOW TO BUY</div>
          <div className='grid grid-cols-1 gap-10' data-aos='fade-up' data-aos-offset='200'>
            <div className='howto' data-aos='fade-left' data-aos-offset='300'>
              <div>
                <div className='social_title'>Create A Wallet</div>
                <div>download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.</div>
              </div>
            </div>
            <div className='howto' data-aos='fade-right' data-aos-offset='300'>
              <div>
                <div className='social_title'>Get Some BNB TOKEN</div>
                <div>have BNB in your wallet to switch to $DONELON. If you don’t have any BNB, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.</div>
              </div>
            </div>
            <div className='howto' data-aos='fade-left' data-aos-offset='300'>
              <div>
                <div className='social_title'>Go to pancakeswap</div>
                <div>connect to PANCAKESWAP. Go to <a className='text-red-500' href='https://pancakeswap.finance/#/swap'>pancakeswap.finance</a> in google chrome or on the browser. Connect your wallet. Paste the $DONELON token address into PANCAKESWAP, select $DONELON, and confirm. When PANCAKESWAP prompts you for a wallet signature, sign.</div>
              </div>
            </div>
            <div className='howto' data-aos='fade-right' data-aos-offset='300'>
              <div>
                <div className='social_title'>Switch BNB for $DONELON</div>
                <div>switch BNB for $DONELON. We have small taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='tokenomics' className='lg:min-h-[712px] pt-[1.5rem] lg:py-[8rem]'>
        <div className='container mx-auto'>

          <div className='text-center h2 mb-4 font-bold' data-aos='fade-up' data-aos-offset='100'>TOKENOMICS</div>

          <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>

            <div className='flex-2' data-aos='fade-right' data-aos-offset='100'>
              <div className='text-3xl'>Total supply</div>
              <div className='text-4xl font-bold mb-3'>1,000,000,000 $DONELON</div>
              <div className='border-2 border-white bg-white p-5 rounded-lg'>
                <img src={TokenomicImg} alt='' />
              </div>
            </div>

            <div className='flex-1' data-aos='fade-left' data-aos-offset='100'>
              <img className='rounded-2xl' src={Elon3} alt='' />
            </div>
          </div>
        </div>
      </section>

      <RoadMap />

      <Cta />

    </div>
  );
};

export default App;
