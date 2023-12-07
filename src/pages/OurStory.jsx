import React from 'react'
import Navbar from '../components/Navbar'
import { ourStroyImages } from '../assets'
import Card from '../components/OurStory/cards'
import Heading from '../components/Home/Heading'

const OurStory = () => {
    return (
        <div>
            <Navbar
                pageName='Our Story'
                links={['Heritage', 'About Us', 'Core Values']}
                width='30'
            />
            <div className='OurStory-bg bg-cover pt-36'>
                <div>
                    <div className="flex flex-col md:flex-row items-center h-screen">
                        <div className="w-full md:w-[1000px] h-[550px] mb-4 md:mb-0 md:static ml-auto">
                            <img
                                src={ourStroyImages.wine}
                                alt="About Us"
                                className="w-full h-full md:w-full object-cover"
                            />
                        </div>
                        <div className=" bg-[#1C1C1C] p-8 md:h-[500px] md:w-[500px] md:absolute left-[200px] sm:h-full w-full">
                            <h2 className="text-3xl font-bold mb-4 text-white">Heritage</h2>
                            <p className="text-gray-300 py-4">
                                JIL has the unique distinction of being one of the largest integrated distilleries manufacturing potable alcohol in Asia, and the first in India with in-house facilities for producing molasses and non-molasses based potable alcohol from fully automated distillation plants.
                            </p>
                            <p className="text-gray-300 py-1">
                                Jagatjit Industries Limited’s guiding philosophy – “A Heritage of Quality” – finds expression at all levels of its activities: quality in , manufacturing, technology and in its relationships with its employees, dealers and customers. In 2015, Roshini Sanah Jaiswal took over as Promoter and
                            </p>
                            <p className=" py-4">
                                read More
                            </p>
                            {/* Add more information as needed */}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center h-screen">
                    <div className=" w-full md:w-[1000px] h-[550px] mb-4 md:mb-0 md:static">
                        <img
                            src={ourStroyImages.onwer}
                            alt="About Us"
                            className="w-full h-full md:w-full object-cover"
                        />
                    </div>
                    <div className=" bg-[#1C1C1C] p-8 md:h-[500px] md:w-[500px] md:absolute left-[900px] sm:h-full w-full">
                        <h2 className="text-3xl font-bold mb-4 text-white">About Us</h2>
                        <p className="text-gray-300 py-4">
                            JIL has the unique distinction of being one of the largest integrated distilleries manufacturing potable alcohol in Asia, and the first in India with in-house facilities for producing molasses and non-molasses based potable alcohol from fully automated distillation plants.
                        </p>
                        <p className="text-gray-300 py-1">
                            Jagatjit Industries Limited’s guiding philosophy – “A Heritage of Quality” – finds expression at all levels of its activities: quality in , manufacturing, technology and in its relationships with its employees, dealers and customers. In 2015, Roshini Sanah Jaiswal took over as Promoter and
                        </p>
                        <p className=" py-4">
                            Read More
                        </p>


                    </div>
                </div>
                <div className=' pl-9 py-5'>
                    <div className=' text-left justify-start  pr-10'>
                        <div className='text-5xl text-white'>
                            Core Values
                        </div>
                    </div>
                </div>
                <div className=" p-4">

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7">
                        <Card cardNumber={'01'} content={'We take ownership for the work we do'} />
                        <Card cardNumber={'02'} content={'We work collaboratively as a team to ensure success'} />
                        <Card cardNumber={'03'} content={'We respect and trust each other'} />
                        <Card cardNumber={'04'} content={'We ae not afraid to treat women as equals'} />
                        <Card cardNumber={'05'} content={'We encourage creativity and out of the box thinking'} />
                        <Card cardNumber={'06'} content={'We are never too old to learn'} />
                        <Card cardNumber={'07'} content={'We do more with less'} />
                        <Card cardNumber={'08'} content={'We do not cheat'} />

                    </div>
                </div>
            </div>
            <div className=''>Our Story</div>
        </div>
    )
}

export default OurStory