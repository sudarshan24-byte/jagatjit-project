// Brands.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Cards from '../components/Brands/Cards';
import { brandsI } from '../assets';
import AnimationWrapper from '../components/Animation/BrandsAnimation';

const Brands = () => {
  const sectionAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.8 },
    whileTap: { scale: 0.95 },
  };

  const scrollAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 1 },
  };

  return (
    <div>
      <Navbar
        pageName='Brands'
        links={['Whisky', 'Rum', 'Gin', 'Vodka', 'Brandy', 'Scotch']}
        width='30'
      />

      <div className=''>
      <AnimationWrapper animation={scrollAnimation}> 
        <div className='bg-black/70 px-10 h-full py-20 pt-36'>

          <AnimationWrapper animation={scrollAnimation}>
          <AnimationWrapper animation={sectionAnimation}>
            <h1 className='text-white/30 text-5xl'>Whisky</h1>
            <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-baseline'>
              <Cards img={brandsI.bottle1} text='Aristocrat Old Reserve' />
              <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
              <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
              <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
            </div>
          </AnimationWrapper>
          </AnimationWrapper>
          <AnimationWrapper animation={scrollAnimation}>
          <AnimationWrapper animation={sectionAnimation}>
            <h1 className='text-white/30 text-5xl'>Gin</h1>
            <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-baseline'>
              <Cards img={brandsI.bottle1} text='Aristocrat Old Reserve' />
              <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
              <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
              <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
            </div>
          </AnimationWrapper>
          </AnimationWrapper>
          <AnimationWrapper animation={scrollAnimation}>
          <AnimationWrapper animation={sectionAnimation}>
            <h1 className='text-white/30 text-5xl'>Vodka</h1>
            <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-baseline'>
              <Cards img={brandsI.bottle1} text='Aristocrat Old Reserve' />
              <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
              <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
              <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
            </div>
          </AnimationWrapper>
          </AnimationWrapper>
          <AnimationWrapper animation={scrollAnimation}>
          <AnimationWrapper animation={sectionAnimation}>
            <h1 className='text-white/30 text-5xl'>Brandy</h1>
            <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-baseline'>
              <Cards img={brandsI.bottle1} text='Aristocrat Old Reserve' />
              <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
              <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
              <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
            </div>
          </AnimationWrapper>
          </AnimationWrapper>
          <AnimationWrapper animation={scrollAnimation}>
          <AnimationWrapper animation={sectionAnimation}>
            <h1 className='text-white/30 text-5xl'>Scotch</h1>
            <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-baseline'>
              <Cards img={brandsI.bottle1} text='Aristocrat Old Reserve' />
              <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
              <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
              <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
            </div>
          </AnimationWrapper>
          </AnimationWrapper>
          <AnimationWrapper animation={scrollAnimation}>
          <AnimationWrapper animation={sectionAnimation}>
            <h1 className='text-white/30 text-5xl'>Whisky</h1>
            <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-baseline'>
              <Cards img={brandsI.bottle1} text='Aristocrat Old Reserve' />
              <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
              <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
              <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
            </div>
          </AnimationWrapper>
          </AnimationWrapper>
          
          

          

          {/* Continue with other sections... */}

        </div>
        </AnimationWrapper>
      </div>
    </div>
  );
}

export default Brands;
