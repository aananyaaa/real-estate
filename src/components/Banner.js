import React from 'react';
import Image from '../assets/img/Imagehi.png';
import Search from '../components/Search'


const Banner = () => {
  return( 
  <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml=[135px] flex flex-col items-center
      lg:items-start text-center lg:text-left justify-center
      flex-1 px-4 lg:px-0'>
        <h1 className='text-4x1 lg:text-[54px] font-semibold
        leading-nonemb=6'>
          <span className='text-violet-900'>Find </span>Your Next Dream Home With Us.
        </h1>
        <p>
        if you don't own a home, buy one. If you
        own a home, buy another one. If you own two
         homes buy a third. And lend your relatives
          the money to buy a home.
        </p>
      </div>
      <div className='hidden flex-1 lg:flex justify-end items-end'>
        <img src ={ Image} alt="House Image"/>
      </div>
    </div>
    <Search/>


  </section>
  );
};

export default Banner;
