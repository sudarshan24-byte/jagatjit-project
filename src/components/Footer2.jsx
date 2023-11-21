import React from 'react'
import { logoimg } from '../assets'
import { MdMail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";



const Footer2 = () => {
    return (
        <footer className='footer-bg bg-cover bg-center z-10'>
            <div className='bg-black/50 py-36'>
                <div className='grid grid-cols-2 lg:grid-cols-3 place-items-center px-10 lg:px-20'>
                    <div className='flex flex-col justify-start items-start lg:w-72'>
                        <img src={logoimg.logo} alt="" />
                        <div className='w-[100%] lg:w-full my-3 text-md lg:text-lg text-white'>
                            Jagatjit Nagar, Hamira, Kapurthala Dist, 144802, Punjab, India.
                        </div>
                        <div className='flex items-center text-white/60 my-3'>
                            <MdMail />
                            <div className='mx-2'>jil@jagatjit.com</div>
                        </div>
                    </div>
                    <div className='px-10 ml-20 lg:ml-0'>
                        <div className='text-lg lg:text-2xl w-36 lg:w-full font-extrabold'>About Company</div>

                        <div className='lg:text-xl text-md w-28 lg:w-full text-white/60 mt-5'>
                            <p className='my-1'>Home</p>
                            <p className='my-1'>Products</p>
                            <p className='my-1'>Investor</p>
                            <p className='my-1'>Code of Conduct</p>
                            <p className='my-1'>Career Opportunities</p>
                            <p className='my-1'>Privacy Policy</p>
                        </div>
                    </div>
                    <div className='mt-10 lg:mt-0 md:w-80'>
                        <div className='text-2xl font-extrabold'>News</div>

                        <div className='text-xl text-white/60 my-5'>
                            <p className='my-1'>Technology</p>
                            <p className='my-1'>Research & Development</p>
                            <p className='my-1'>Eco Friendly</p>
                        </div>

                        <div className='text-2xl'>
                            <div className='font-extrabold'>Follow</div>
                            <div className='text-md flex justify-between md:w-32 lg:w-[50%] mt-2'>
                                <FaLinkedinIn />
                                <FaInstagram />
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </div>
                    {/* <div>Footer</div> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer2