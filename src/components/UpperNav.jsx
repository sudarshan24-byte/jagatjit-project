import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const UpperNav = ({ onClose }) => {
    return (
        <div className='fixed top-0 z-40 text-black duration-700'>
            <div className='bg-white absolute w-screen'>
                <div className='flex justify-evenly items-baseline py-10'>
                    <div>
                        <h2 className='border-b border-b-black text-black font-bold'>Our Products</h2>
                        <div className='text-sm text-[#040303]/50 my-2'>
                            <div>
                                <Link to='/our-products'>Liquors</Link>
                            </div>
                            <div>
                                <Link to='/our-products'>Milk Food</Link>
                            </div>
                            <div>
                                <Link to='/our-products'>Ethanol</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='border-b border-b-black text-black font-bold'>Media & Awards</h2>
                        <div className='text-sm text-[#040303]/50 my-2'>
                            <div>Press & Awards</div>
                            <div>Blogs</div>
                            <div>Certifications</div>
                        </div>
                    </div>
                    <div>
                        <h2 className='border-b border-b-black text-black font-bold'>Ethanol Plant</h2>
                        <div className='text-sm text-[#040303]/50 my-2'>
                            <div>xxxxxxxxxxxxxx</div>
                            <div>xxxxxxxxxxxx</div>
                        </div>
                    </div>
                    <div>
                        <h2 className='border-b border-b-black text-black font-bold'>CSR Framework</h2>
                        <div className='text-sm text-[#040303]/50 my-2'>
                            <div>Eco Friendly</div>
                            <div>Environment</div>
                            <div>Responsible Drinking</div>
                        </div>
                    </div>
                    <div className='text-black font-bold'>
                        <p className='border-b border-b-black w-fit'>Promoters & Journey</p>
                        <p className='border-b border-b-black w-fit'>Investors</p>
                        <p className='border-b border-b-black w-fit'>Contact Us</p>
                    </div>
                    <div onClick={onClose} className='cursor-pointer'>
                        <RxCross2 style={{ fontWeight: 'bolder', fontSize: '25px' }} />
                    </div>
                </div>
                <div className='border-t border-black/20 w-[83%] mx-auto py-2 pb-5 flex justify-between items-center'>
                    <div className='flex justify-between w-[10%] text-secondary'>
                        <div><FaLinkedinIn /></div>
                        <div><FaInstagram /></div>
                        <div><FaFacebookF /></div>
                        <div><FaYoutube /></div>
                    </div>
                    <div className='flex items-center text-secondary'>
                        <IoMailSharp />
                        <div className='px-2 text-black/60'>jil@jagatjit.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpperNav