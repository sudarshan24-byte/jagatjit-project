import React, { useEffect } from 'react'
import Heading from '../components/Home/Heading'
import { homeImages } from '../assets'
import rect27 from '/Home-Images/Rectangle27.png'

import Card from '../components/Home/Card'
import Brands from '../components/Home/Brands'
import Infrastructure from '../components/Home/Infrastructure'
import HomeNavbar from '../components/HomeNavbar'
import IconCards from '../components/Home/IconCards'
import Footer from '../components/Footer'

import { FaLocationDot } from "react-icons/fa6";
import { PiPrinterFill } from "react-icons/pi";
import Location from '../components/Location'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import AOS from 'aos'


const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.9,
            staggerChildren: 0.7,
            ease: "easeOut"
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

const Home = () => {
    return (
        <>
            <HomeNavbar />
            <div>
                {/* Hero Section Starts */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    className=''>
                    <div className='hero-bg w-screen bg-center md:bg-cover h-[calc(100vh-140px)] flex justify-start items-center px-10'>
                        <motion.div variants={textVariants} className='text-start'>
                            <p className='text-white text-5xl'>
                                Discover Our Exclusive Selection
                            </p>
                            <p className='w-[70%] text-[#F4DFB682] my-5'>
                                Embark on a Journey of Unparalleled Quality and Taste, Where Every Sip Transcends the Ordinary
                            </p>
                            <Link to='/brands'>
                                <motion.button className='hover:scale-105 duration-200'>
                                    <div className='border px-4 py-2 my-5 hover:scale-105 duration-200'>Explore Whiskies</div>
                                </motion.button>
                            </Link>
                        </motion.div>
                        {/* <img src={rect27} alt="" /> */}
                    </div>

                    <img src={rect27} alt="" className='absolute bottom-[8.5rem] lg:bottom-24' />

                    <div className='max-w-full px-5 md:px-10 py-12 relative flex justify-between items-center h-full bg-primary-bg'>
                        {/* Right Side */}
                        <motion.div variants={textVariants} className='grid grid-row-3 md:grid-cols-2 lg:grid-cols-3 place-items-start md:place-items-baseline lg:place-items-center w-[40%]'>
                            {/* Liqours */}
                            <Link to='/our-products'>
                                <motion.div variants={textVariants} className='flex items-center justify-start bg-stone-900 h-10 rounded-md rounded-s-2xl my-3 hover:-translate-y-2 duration-300'>
                                    <img src={homeImages.liqour} alt="liqour" width={50} className='mb-5' />
                                    <p className='px-3'>Liqours</p>
                                </motion.div>
                            </Link>
                            {/* Milk Food */}
                            <Link to='/our-products'>
                                <motion.div variants={textVariants} className='flex items-center justify-start bg-stone-900 h-10 w-40 rounded-md rounded-s-2xl my-3 hover:-translate-y-2 duration-300'>
                                    <img src={homeImages.milkfood} alt="liqour" width={70} className='mb-5' />
                                    <p className='px-3'>Milk Food</p>
                                </motion.div>
                            </Link>
                            {/* Ethanol */}
                            <Link to='/our-products'>
                                <motion.div variants={textVariants} className='flex items-center justify-start bg-stone-900 h-10 w-28 rounded-md rounded-s-2xl my-3 hover:-translate-y-2 duration-300'>
                                    <img src={homeImages.ethanol} alt="liqour" width={40} className='mb-6' />
                                    <p className='px-3'>Ethanol</p>
                                </motion.div>
                            </Link>
                        </motion.div>

                        {/* Left Side */}
                        <motion.div variants={textVariants} className='text-white grid grid-row-3 md:grid-cols-2 lg:grid-cols-3 place-items-start md:place-items-baseline lg:place-items-center w-[40%]'>
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
                        </motion.div>
                    </div>
                </motion.div>
                {/* Hero Section Ends */}

                {/* Our Story */}
                <div className='w-full h-full story-bg bg-cover'>
                    <div className='bg-black/70 py-20 px-6'>
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
                            <Brands img={homeImages.bottle1} text='WHISKY' />
                            <Brands img={homeImages.bottle1} text='RUM' />
                            <Brands img={homeImages.bottle1} text='GIN' />
                            <Brands img={homeImages.bottle1} text='VODKA' />
                            <Brands img={homeImages.bottle1} text='BRANDY' />
                            <Brands img={homeImages.bottle1} text='SCOTCH' />
                        </div>
                    </div>
                </div>

                {/* Infrastructure */}
                <div className='infrastructure-bg relative bg-cover bg-center'>
                    <div className='bg-black/60 py-5'>
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
                <div className='White-bg bg-cover bg-center'>
                    <div className=' bg-black/60'>
                        <div className='relative'>
                            <Heading name='White Papers' />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center'>
                            <IconCards imageSrc={homeImages.icons1} additionalText='Financial Reports' />
                            <IconCards imageSrc={homeImages.icons2} additionalText='Reports & Policies' />
                            <IconCards imageSrc={homeImages.icons3} additionalText='Deposit Schemes' />
                            <IconCards imageSrc={homeImages.icons4} additionalText='Code of Conduct' />
                        </div>


                        {/* Location */}
                        <Location />
                    </div>
                </div>

                {/* Location */}
                {/* <div>Location</div> */}
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default Home