import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Brands/Cards'
import { brandsI } from '../assets'

const Brands = () => {
    return (
        <div>
            <Navbar
                pageName='Brands'
                links={['Whisky', 'Rum', 'Gin','Vodka','Brandy','Scotch']}
                width='30'
            />
            {/* Liquors */}
            <div className=''>
                <div className='bg-black/70 px-10 h-full py-20'>

                    <h1 className='text-white/30 text-5xl'>
                    Whisky
                    </h1>

                    {/* Cards */}
                    <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-baseline'>
                        <Cards img={brandsI.bottle1} text='Aristocrat Old Reserve' />
                        <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
                        <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
                        <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
                    </div>
                    <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-baseline'>
                        <Cards img={brandsI.thinker} text='Aristocrat Old Reserve' />
                        <Cards img={brandsI.vodka} text="Binnie'S Fine Whisky" />
                    </div>

                    <h1 className='text-white/30 text-5xl'>
                        Rum
                    </h1>

                    {/* Cards */}
                    <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-baseline'>
                        <Cards img={brandsI.bottle1} text='Aristocrat Old Reserve' />
                        <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
                        <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
                        <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
                    </div>

                    <h1 className='text-white/30 text-5xl'>
                        Gin
                    </h1>

                    {/* Cards */}
                    <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-baseline'>
                        <Cards img={brandsI.bottle1} text='Aristocrat Old Reserve' />
                        <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
                        <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
                        <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
                    </div>
                    <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-baseline'>
                        <Cards img={brandsI.thinker} text='Aristocrat Old Reserve' />
                        <Cards img={brandsI.vodka} text="Binnie'S Fine Whisky" />
                    </div>

                    <h1 className='text-white/30 text-5xl'>
                        Vodka
                    </h1>

                    {/* Cards */}
                    <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-baseline'>
                        <Cards img={brandsI.bottle1} text='Aristocrat Old Reserve' />
                        <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
                        <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
                        <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
                    </div>
                    <h1 className='text-white/30 text-5xl'>
                        Brandy 
                    </h1>

                    {/* Cards */}
                    <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-baseline'>
                        <Cards img={brandsI.bottle1} text='Aristocrat Old Reserve' />
                        <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
                        <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
                        <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
                    </div>
                    <h1 className='text-white/30 text-5xl'>
                    Scotch
                    </h1>

                    {/* Cards */}
                    <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-baseline'>
                        <Cards img={brandsI.bottle1} text='Aristocrat Old Reserve' />
                        <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
                        <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
                        <Cards img={brandsI.bottle1} text='BinnieS Fine Whisky' />
                    </div>


                </div>
            </div>

            
        </div>
    )
}

export default Brands