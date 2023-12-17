import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import UpperNav from '../UpperNav';
import { AnimatePresence } from 'framer-motion';

const Navbar = ({ pageName, link1, link2, link3, activeSection, setActiveSection, handleSectionChange }) => {
    const [isUppernavVisible, setIsUppernavVisible] = useState(false);
    const toggleUppernav = () => {
        setIsUppernavVisible(!isUppernavVisible);
    };
    return (
        <div className='fixed top-0 z-40'>
            <div className='relative mb-2'>
                <AnimatePresence>
                    {isUppernavVisible && <UpperNav onClose={toggleUppernav} nav={isUppernavVisible} />}
                </AnimatePresence>
                <nav className='navbar bg-cover bg-neutral-950 w-screen py-4 sticky top-0 z-20'>
                    <div className='flex justify-between items-center px-10 py-5'>
                        <h1 className='text-4xl'>{pageName}</h1>
                        <div className='hidden lg:block'>
                            <div className='flex justify-between items-center w-[40rem] text-xl text-white/40'>
                                <div className='hover:text-secondary duration-300'>
                                    <Link>Home</Link>
                                </div>
                                <div className='hover:text-secondary duration-300'>
                                    <Link>Our Story</Link>
                                </div>
                                <div className='hover:text-secondary duration-300'>
                                    <Link>Brands</Link>
                                </div>
                                <div className='hover:text-secondary duration-300'>
                                    <Link>Infrastructure</Link>
                                </div>
                                <div className='hover:text-secondary duration-300'>
                                    <Link>White Papers</Link>
                                </div>
                                <div onClick={toggleUppernav} className='cursor-pointer'>
                                    <AiOutlineMenu style={{ fontSize: '25px', color: 'white' }} />
                                </div>
                            </div>
                        </div>
                        <div onClick={toggleUppernav} className='block lg:hidden cursor-pointer'>
                            <AiOutlineMenu style={{ fontSize: '25px', color: 'white' }} />
                        </div>
                    </div>
                </nav>
                <div className='flex justify-between text-sm w-full md:w-96 cursor-pointer absolute -bottom-3 z-30 px-10 space-x-3'>
                    {/* <div className='bg-primary-bg text-secondary px-2 py-1 border-b border-secondary'>Home</div> */}
                    {/* {links.map((link, index) => (
                        <div key={index} className='bg-primary-bg text-secondary px-3 py-1 border-b border-secondary'>
                            {link}
                        </div>
                    ))} */}

                    <Link to='/brands' className='bg-primary-bg text-secondary px-3 py-1 border-b border-secondary'>
                        {link1}
                    </Link>
                    <button
                        onClick={() => handleSectionChange('Milk Products')}
                        className='bg-primary-bg text-secondary px-3 py-1 border-b border-secondary'>
                        {link2}
                    </button>
                    <button
                        onClick={() => handleSectionChange('Ethanol')}
                        className='bg-primary-bg text-secondary px-3 py-1 border-b border-secondary'>
                        {link3}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar