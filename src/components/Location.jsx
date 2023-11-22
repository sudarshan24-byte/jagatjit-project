import React from 'react'
import { homeImages } from '../assets'
import { FaLocationDot } from 'react-icons/fa6'
import { PiPrinterFill } from 'react-icons/pi'

const Location = () => {
    return (
        <div className='flex justify-between items-center place-content-center relative pt-16 md:pt-5 lg:py-0'>
            <div className='h-20 md:h-64 lg:h-[28rem] my-20'>
                <img src={homeImages.location} alt="location" className='z-30 w-[90%]' />
            </div>

            <div className='absolute md:right-[10%] bottom-0 grid grid-cols-2 md:grid-cols-none md:grid-rows-3 place-items-center lg:w-[30%]'>
                <div className='bg-card-bg my-1 lg:my-5 py-2 lg:py-3 px-1 lg:px-4 text-md lg:text-2xl w-[90%] lg:h-30 rounded-md'>
                    <div className='flex items-center'>
                        <FaLocationDot className='mx-2 lg:mx-0' />
                        <div className='mx-1 lg:mx-4'>Production Plant</div>
                    </div>

                    <div className='text-white text-[0.5rem] lg:text-sm w-[70%] ml-9 lg:ml-10'>
                        Jagatjit Nagar, Hamira, Kapurthala Dist, 144802, Punjab, India.
                    </div>
                </div>

                <div className='bg-card-bg my-1 lg:my-5 py-2 lg:py-3 px-1 lg:px-4 text-md lg:text-2xl w-[90%] lg:h-30 rounded-md'>
                    <div className='flex items-center'>
                        <FaLocationDot className='mx-2 lg:mx-0' />
                        <div className='mx-1 lg:mx-4'>Head Office</div>
                    </div>

                    <div className='text-white text-[0.5rem] lg:text-sm w-[70%] ml-9 lg:ml-10'>
                        Jagatjit Nagar, Hamira, Kapurthala Dist, 144802, Punjab, India.
                    </div>
                </div>

                <div className='bg-card-bg my-1 lg:my-5 py-2 lg:py-3 px-3 lg:px-4 text-md lg:text-2xl w-[90%] lg:h-30 rounded-md'>
                    <div className='flex items-center'>
                        <PiPrinterFill />
                        <div className='mx-4'>Fax Number</div>
                    </div>

                    <div className='text-white text-[0.5rem] lg:text-sm w-[70%] ml-8 lg:ml-10'>
                        0181-2783118
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location