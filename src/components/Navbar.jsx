import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import UpperNav from './UpperNav';

const Navbar = ({ pageName, links, width }) => {
    const [isUppernavVisible, setIsUppernavVisible] = useState(false);
    const toggleUppernav = () => {
        setIsUppernavVisible(!isUppernavVisible);
    };
    return (
        <div className=''>
            <div className='relative mb-2'>
                {isUppernavVisible ? <UpperNav onClose={toggleUppernav} /> : <div />}
                <nav className='navbar bg-cover bg-neutral-950 w-full py-4 sticky top-0 z-20'>
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
                        <div className='block lg:hidden cursor-pointer'>
                            <AiOutlineMenu style={{ fontSize: '25px', color: 'white' }} />
                        </div>
                    </div>
                </nav>
                <div className={`flex justify-between w-full lg:w-[${width}%] absolute -bottom-3 z-30 px-10 space-x-3`}>
                    {/* <div className='bg-primary-bg text-secondary px-2 py-1 border-b border-secondary'>Home</div> */}
                    {links.map((link, index) => (
                        <div key={index} className='bg-primary-bg text-secondary px-3 py-1 border-b border-secondary'>
                            {link}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar