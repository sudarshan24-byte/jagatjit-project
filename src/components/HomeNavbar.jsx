import React, { useState } from 'react'
import logo from '/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'

import UpperNav from './UpperNav';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
    initial: {
        opacity: 0,
        y: -5,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        }
    }
}


const HomeNavbar = () => {
    const [nav, setNav] = useState(false)
    const handleNavbar = () => {
        setNav(!nav)
    }

    const [nav2, setNav2] = useState(false)
    const toggleUppernav = () => {
        setNav2(!nav2);
    };

    return (
        <motion.div variants={variants} initial='initial' animate='animate'>
            <AnimatePresence>
                {nav2 && <UpperNav onClose={toggleUppernav} nav={nav2} />}
            </AnimatePresence>


            <motion.nav variants={variants} className='w-full fixed top-0 z-20 bg-primary-bg/90 text-white h-[80px] font-arya shadow-xl'>
                <div className='max-w-full px-6 py-2 relative flex justify-between items-center h-full'>
                    <div className='flex items-center'>
                        <img src={logo} alt="" width={80} className='' />
                        <div className='hidden lg:block'>
                            <div className='mx-10 flex justify-between w-[40rem] text-white/40 text-xl'>
                                <div>
                                    <NavLink to='/'>Home</NavLink>
                                </div>
                                <div>
                                    <NavLink to='/our-story'>Our Story</NavLink>
                                </div>
                                <div>
                                    <NavLink to='/brands'>Brands</NavLink>
                                </div>
                                <div>
                                    <NavLink to='/infrastructure'>Infrastructure</NavLink>
                                </div>
                                <div>
                                    <NavLink to='/investor'>White Papers</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div onClick={toggleUppernav} className='block lg:hidden cursor-pointer'>
                        {nav2 ? <AiOutlineClose size={25} className='text-secondary' /> : <AiOutlineMenu size={25} className='text-secondary' />}
                    </div>
                    {/* <div className={nav ? 'w-1/2 h-screen duration-700 text-secondary absolute top-[0px] bg-primary-bg left-[-1%] flex-row justify-start text-left' : 'absolute left-[-100%] top-[0px] flex-row justify-center text-left w-full h-screen bg-primary-bg duration-1000'}>
                        <img src={logo} alt="" width={20} className='w-1/2 ml-2 mt-2' />
                        <ul className='py-10 pl-7'>
                            <li className='text-xl py-1'>
                                <Link>Home</Link>
                            </li>
                            <li className='text-xl py-1'>
                                <Link>Our Story</Link>
                            </li>
                            <li className='text-xl py-1'>
                                <Link>Brands</Link>
                            </li>
                            <li className='text-xl py-1'>
                                <Link>Infrastructure</Link>
                            </li>
                            <li className='text-xl py-1'>
                                <Link>White Papers</Link>
                            </li>
                            <li className='text-xl py-1'>
                                <Link>Home</Link>
                            </li>
                            <button className='m-7 px-7'>Start Trading</button>
                        </ul>
                    </div> */}

                    {/* Right */}
                    <div className='hidden lg:block'>
                        <div className='flex items-center justify-between'>
                            {/* <div className='border px-2 py-1 w-full flex items-center rounded-md'>
                                <input type="text" placeholder='Search' className='bg-transparent focus:outline-none w-[163px]' />
                                <div>
                                    <AiOutlineSearch />
                                </div>
                            </div> */}
                            <div className='mx-2 cursor-pointer' onClick={toggleUppernav}>
                                <AiOutlineMenu style={{ fontSize: '25px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.nav>
        </motion.div>
    )
}

export default HomeNavbar