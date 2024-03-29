import React, { useEffect, useRef } from 'react'
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
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

//Animation code starts
const imageAnimate = {
    scale: { scale: 0.8, opacity: 0 },
    scaleAnimation: {
        scale: 1,
        opacity: 1,
        // rotate: [0, 10, 0],
        transition: {
            type: "tween",
            staggerChildren: 0.2,
            duration: 1,
        }
    },
    right: {
        x: 100, opacity: 0
    },
    rightAnimate: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            // bounce: 0.4,
            duration: 1
        }
    },
    left: {
        x: -100, opacity: 0
    },
    leftAnimate: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            // bounce: 0.4,
            duration: 1
        }
    },

}


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
//Animation Code ends

const Counter = ({ from, to, duration }) => {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        const controls = animate(count, to, { duration: duration });
        return controls.stop;
    }, []);

    return <motion.p>{rounded}</motion.p>;
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

                    <img src={rect27} alt="" className='absolute bottom-[8.5rem] lg:bottom-20' />

                    <div className='max-w-full px-5 md:px-10 py-12 relative flex justify-between items-center h-full bg-primary-bg'>
                        {/* Right Side */}
                        <motion.div variants={textVariants} className='grid grid-row-3 md:grid-cols-2 lg:grid-cols-3 place-items-start md:place-items-baseline lg:place-items-center w-[40%]'>
                            {/* Liqours */}
                            <Link to='/brands'>
                                <motion.div className='flex items-center justify-start bg-stone-900 h-10 rounded-md rounded-s-2xl my-3 hover:-translate-y-2 duration-300'>
                                    <img src={homeImages.liqour} alt="liqour" width={50} className='mb-5' />
                                    <p className='px-3'>Liqours</p>
                                </motion.div>
                            </Link>
                            {/* Milk Food */}
                            <Link to='/our-products'>
                                <motion.div className='flex items-center justify-start bg-stone-900 h-10 w-40 rounded-md rounded-s-2xl my-3 hover:-translate-y-2 duration-300'>
                                    <img src={homeImages.milkfood} alt="liqour" width={70} className='mb-5' />
                                    <p className='px-3'>Milk Food</p>
                                </motion.div>
                            </Link>
                            {/* Ethanol */}
                            <Link to='/our-products'>
                                <motion.div className='flex items-center justify-start bg-stone-900 h-10 w-28 rounded-md rounded-s-2xl my-3 hover:-translate-y-2 duration-300'>
                                    <img src={homeImages.ethanol} alt="liqour" width={40} className='mb-6' />
                                    <p className='px-3'>Ethanol</p>
                                </motion.div>
                            </Link>
                        </motion.div>

                        {/* Left Side */}
                        <div className='text-white grid grid-row-3 md:grid-cols-2 lg:grid-cols-3 place-items-start md:place-items-baseline lg:place-items-center w-[40%]'>
                            <div className='flex items-center justify-start h-10 rounded-md rounded-s-2xl my-3'>
                                <div className='text-3xl'>
                                    <Counter from={0} to={3} duration={1} />
                                </div>
                                <p className='px-3 w-[100%] lg:w-[60%] text-xs'>Third largest producer of IMFL</p>
                            </div>
                            <div className='flex items-center justify-start h-10 rounded-md rounded-s-2xl my-3'>
                                <div className='text-3xl'>
                                    <Counter from={0} to={18} duration={1} />
                                </div>
                                <p className='px-3 w-[100%] lg:w-[60%] text-xs'>Manufacturing Units in India</p>
                            </div>
                            <div className='flex items-center justify-start h-10 rounded-md rounded-s-2xl my-3'>
                                <div className='text-lg lg:text-3xl'>
                                    <Counter from={0} to={1994} duration={1} />
                                </div>
                                <p className='px-3 w-[100%] lg:w-[60%] text-xs'>Since 1994. We've been crafting</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                {/* Hero Section Ends */}

                {/* Our Story */}
                <div className='w-full h-full story-bg bg-cover'>
                    <div className='bg-black/50 py-20 px-6'>
                        <Heading name='Our Story' />
                        <motion.div
                            // initial={"offscreen"}
                            // whileInView={"onscreen"}
                            // viewport={{ once: true }}
                            // transition={{ staggerChildren: 0.5 }}
                            // variants={imageAnimate}
                            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            <Card image={homeImages.heritage} text='Heritage' link='/our-story' variants={imageAnimate} initial='left' animation='leftAnimate' />
                            <Card image={homeImages.corevalues} text='Core Values' link='/our-story' variants={imageAnimate} initial='scale' animation='scaleAnimation' />
                            <Card image={homeImages.aboutus_bg} text='About Us' link='/our-story' variants={imageAnimate} initial='right' animation='rightAnimate' />
                        </motion.div>
                    </div>
                </div>


                {/* Brands */}
                <div className='brands-bg bg-cover bg-center'>
                    <div className='bg-black/30 py-28'>
                        <Heading name='Brands' />
                        <motion.div
                            initial={"scale"}
                            whileInView={"scaleAnimation"}
                            viewport={{ once: true }}
                            transition={{ staggerChildren: 0.5 }}
                            variants={imageAnimate}
                            className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 place-items-center'>
                            <motion.div variants={imageAnimate}>
                                <Brands img={homeImages.bottle1} text='WHISKY' />
                            </motion.div>
                            <motion.div variants={imageAnimate}>
                                <Brands img={homeImages.bottle1} text='RUM' />
                            </motion.div>
                            <motion.div variants={imageAnimate}>
                                <Brands img={homeImages.bottle1} text='GIN' />
                            </motion.div>
                            <motion.div variants={imageAnimate}>
                                <Brands img={homeImages.bottle1} text='VODKA' />
                            </motion.div>
                            <motion.div variants={imageAnimate}>
                                <Brands img={homeImages.bottle1} text='BRANDY' />
                            </motion.div>
                            <motion.div variants={imageAnimate}>
                                <Brands img={homeImages.bottle1} text='SCOTCH' />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Infrastructure */}
                <motion.div className='infrastructure-bg relative bg-cover bg-center'>
                    <div className='bg-black/30 py-5'>
                        <Heading name='Infrastructure' />
                        <motion.div className='grid grid-cols-1 lg:grid-cols-2 place-items-center py-6'>
                            <Infrastructure
                                title='Global Presence'
                                description='6500 kilometers away from Scotland, Jagatjit Industries Limited has created the perfect production facility for making...'
                                img={homeImages.rect55}
                                variants={imageAnimate}
                                initial='scale'
                                animation='scaleAnimation'
                            />
                            <Infrastructure
                                title='Technology & Quality'
                                description='6500 kilometers away from Scotland, Jagatjit Industries Limited has created the perfect production facility for making...'
                                img={homeImages.rect520}
                                variants={imageAnimate}
                                initial='scale'
                                animation='scaleAnimation'
                            />
                            <Infrastructure
                                title='Research & Development'
                                description='6500 kilometers away from Scotland, Jagatjit Industries Limited has created the perfect production facility for making...'
                                img={homeImages.rect521}
                                variants={imageAnimate}
                                initial='scale'
                                animation='scaleAnimation'
                            />
                            <Infrastructure
                                title='Plants & Units'
                                description='6500 kilometers away from Scotland, Jagatjit Industries Limited has created the perfect production facility for making...'
                                img={homeImages.rect522}
                                variants={imageAnimate}
                                initial='scale'
                                animation='scaleAnimation'
                            />
                        </motion.div>
                    </div>
                </motion.div>

                {/* White Papers */}
                <div className='White-bg bg-cover bg-center'>
                    <div className=' bg-black/30'>
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