import React from 'react'
import Heading from '../components/Home/Heading'
import { homeImages } from '../assets'

import Card from '../components/Home/Card'

const Home = () => {
    return (
        <div>
            <div className=''>
                <div className='hero-bg w-screen bg-center md:bg-cover h-screen flex justify-start items-center px-10'>
                    <div className='text-white text-5xl'>
                        Discover Our Exclusive Selection
                    </div>
                </div>
            </div>

            {/* Our Story */}
            <div className='w-full h-full story-bg bg-cover'>
                <div className='bg-black/80 py-20 px-6'>
                    <Heading name='Our Story' />
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        <Card image={homeImages.heritageImg} text='Heritage' link='/heritage' />
                        <Card image={homeImages.corevaluesImg} text='Core Values' link='/core-values' />
                        <Card image={homeImages.aboutus_bg} text='About Us' link='/aboutus' />
                    </div>
                </div>
            </div>


            {/* Brands */}
            <Heading name='Brands' />
            <Heading name='Infrastructure' />
            <Heading name='White Papers' />
            <div>Location</div>
            {/* <div>
                <Heading name='Our Story' />
            </div> */}
        </div>
    )
}

export default Home