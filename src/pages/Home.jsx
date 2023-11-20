import React from 'react'
import Heading from '../components/Home/Heading'
import { homeImages } from '../assets'
import rect27 from '/Home-Images/Rectangle27.png'

import Card from '../components/Home/Card'
import Brands from '../components/Home/Brands'
import Infrastructure from '../components/Home/Infrastructure'
import HomeNavbar from '../components/HomeNavbar'
import IconCards from '../components/Home/IconCards'


const Home = () => {
    return (
        <>
            <HomeNavbar />
            <div>
                {/* Hero Section Starts */}
                <div className=''>
                    <div className='hero-bg w-screen bg-center md:bg-cover h-[calc(100vh-140px)] flex justify-start items-center px-10'>
                        <div className='text-start'>
                            <p className='text-white text-5xl'>
                                Discover Our Exclusive Selection
                            </p>
                            <p className='w-[70%] text-[#F4DFB682] my-5'>
                                Embark on a Journey of Unparalleled Quality and Taste, Where Every Sip Transcends the Ordinary
                            </p>
                            <button>
                                <div className='border px-4 py-2 my-5'>Explore Whiskies</div>
                            </button>
                        </div>
                        {/* <img src={rect27} alt="" /> */}
                    </div>

                    <img src={rect27} alt="" className='absolute bottom-[8.5rem] lg:bottom-24' />

                    <div className='max-w-full px-5 md:px-10 py-12 relative flex justify-between items-center h-full bg-primary-bg'>
                        {/* Right Side */}
                        <div className='grid grid-row-3 md:grid-cols-2 lg:grid-cols-3 place-items-start md:place-items-baseline lg:place-items-center w-[40%]'>
                            {/* Liqours */}
                            <div className='flex items-center justify-start bg-stone-900 h-10 rounded-md rounded-s-2xl my-3'>
                                <img src={homeImages.liqour} alt="liqour" width={50} className='mb-5' />
                                <p className='px-3'>Liqours</p>
                            </div>
                            {/* Milk Food */}
                            <div className='flex items-center justify-start bg-stone-900 h-10 w-40 rounded-md rounded-s-2xl my-3'>
                                <img src={homeImages.milkfood} alt="liqour" width={70} className='mb-5' />
                                <p className='px-3'>Milk Food</p>
                            </div>
                            {/* Ethanol */}
                            <div className='flex items-center justify-start bg-stone-900 h-10 w-28 rounded-md rounded-s-2xl my-3'>
                                <img src={homeImages.ethanol} alt="liqour" width={40} className='mb-6' />
                                <p className='px-3'>Ethanol</p>
                            </div>
                        </div>

                        {/* Left Side */}
                        <div className='text-white grid grid-row-3 md:grid-cols-2 lg:grid-cols-3 place-items-start md:place-items-baseline lg:place-items-center w-[40%]'>
                            <div className='flex items-center justify-start h-10 rounded-md rounded-s-2xl my-3'>
                                <div className='text-3xl'>3</div>
                                <p className='px-3 w-[100%] lg:w-[60%] text-xs'>Third largest producer of IMFL</p>
                            </div>
                            <div className='flex items-center justify-start h-10 rounded-md rounded-s-2xl my-3'>
                                <div className='text-3xl'>18</div>
                                <p className='px-3 w-[100%] lg:w-[60%] text-xs'>Manufacturing Units in India</p>
                            </div>
                            <div className='flex items-center justify-start h-10 rounded-md rounded-s-2xl my-3'>
                                <div className='text-lg lg:text-3xl'>1994</div>
                                <p className='px-3 w-[100%] lg:w-[60%] text-xs'>Since 1994. We've been crafting</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Section Ends */}

                {/* Our Story */}
                <div className='w-full h-full story-bg bg-cover'>
                    <div className='bg-black/80 py-20 px-6'>
                        <Heading name='Our Story' />
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            <Card image={homeImages.heritage} text='Heritage' link='/our-story' />
                            <Card image={homeImages.corevalues} text='Core Values' link='/our-story' />
                            <Card image={homeImages.aboutus_bg} text='About Us' link='/our-story' />
                        </div>
                    </div>
                </div>


                {/* Brands */}
                <div className='brands-bg bg-cover bg-center'>
                    <div className='py-28'>
                        <Heading name='Brands' />
                        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 place-items-center'>
                            <Brands img={homeImages.bottle1} />
                            <Brands img={homeImages.bottle1} />
                            <Brands img={homeImages.bottle1} />
                            <Brands img={homeImages.bottle1} />
                            <Brands img={homeImages.bottle1} />
                            <Brands img={homeImages.bottle1} />
                        </div>
                    </div>
                </div>

                {/* Infrastructure */}
                <div className='infrastructure-bg relative bg-cover bg-center'>
                    <div className='bg-black/80 py-5'>
                        <Heading name='Infrastructure' />
                        <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center py-6'>
                            <Infrastructure
                                title='Global Presence'
                                description='6500 kilometers away from Scotland, Jagatjit Industries Limited has created the perfect production facility for making...'
                                img={homeImages.rect55}
                            />
                            <Infrastructure
                                title='Technology & Quality'
                                description='6500 kilometers away from Scotland, Jagatjit Industries Limited has created the perfect production facility for making...'
                                img={homeImages.rect520}
                            />
                            <Infrastructure
                                title='Research & Development'
                                description='6500 kilometers away from Scotland, Jagatjit Industries Limited has created the perfect production facility for making...'
                                img={homeImages.rect521}
                            />
                            <Infrastructure
                                title='Plants & Units'
                                description='6500 kilometers away from Scotland, Jagatjit Industries Limited has created the perfect production facility for making...'
                                img={homeImages.rect522}
                            />
                        </div>
                    </div>
                </div>

                {/* White Papers */}
                <div className='White-bg bg-cover'>
                    <div className=' bg-black/80'>
                        <div className='relative'>
                            <Heading name='White Papers' />
                        </div>
                        <div className='flex flex-wrap md:gap-12 justify-center'>
                            <IconCards imageSrc={homeImages.icons1} additionalText='Financial Reports' />
                            <IconCards imageSrc={homeImages.icons2} additionalText='Reports & Policies' />
                            <IconCards imageSrc={homeImages.icons3} additionalText='Deposit Schemes' />
                            <IconCards imageSrc={homeImages.icons4} additionalText='Code of Conduct' />
                        </div>
                    </div>
                </div>

                {/* Location */}
                <div>Location</div>
            </div>
        </>
    )
}

export default Home