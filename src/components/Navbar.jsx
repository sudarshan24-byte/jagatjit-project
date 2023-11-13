import React, { useState } from 'react'
import logo from '/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNavbar = () => {
        setNav(!nav)
    }
    return (
        <>
            <nav className='w-full sticky top-0 z-30 bg-primary-bg text-white h-[80px] font-arya shadow-xl'>
                <div className='max-w-full px-6 py-2 relative flex justify-between items-center h-full'>
                    <div className='flex items-center'>
                        <img src={logo} alt="" width={80} className='' />
                        <div className='hidden lg:block'>
                            <div className='mx-10 flex justify-between w-[50rem] text-gray-600 text-xl'>
                                <div>
                                    <NavLink to='/'>Home</NavLink>
                                </div>
                                <div>
                                    <NavLink to='/story'>Our Story</NavLink>
                                </div>
                                <div>
                                    <NavLink to='/brands'>Brands</NavLink>
                                </div>
                                <div>
                                    <NavLink to='/infrastructure'>Infrastructure</NavLink>
                                </div>
                                <div>
                                    <NavLink to='/white-papers'>White Papers</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div onClick={handleNavbar} className='block lg:hidden cursor-pointer'>
                        {nav ? <AiOutlineClose size={25} className='text-secondary' /> : <AiOutlineMenu size={25} className='text-secondary' />}
                    </div>
                    <div className={nav ? 'w-1/2 h-screen duration-700 text-secondary absolute top-[0px] bg-primary-bg left-[-1%] flex-row justify-start text-left' : 'absolute left-[-100%] top-[0px] flex-row justify-center text-left w-full h-screen bg-primary-bg duration-1000'}>
                        <img src={logo} alt="" width={20} className='w-1/2 ml-2 mt-2' />
                        <ul className='py-10 pl-7'>
                            <li className='text-xl py-1'>
                                <Link to='Home'>Home</Link>
                            </li>
                            <li className='text-xl py-1'>
                                <Link to='story'>Our Story</Link>
                            </li>
                            <li className='text-xl py-1'>
                                <Link to='/brands'>Brands</Link>
                            </li>
                            <li className='text-xl py-1'>
                                <Link to='/infrastructurends'>Infrastructure</Link>
                            </li>
                            <li className='text-xl py-1'>
                                <Link to='/white-papers'>White Papers</Link>
                            </li>
                            {/* <li className='text-xl py-1'>
                                <Link>Home</Link>
                            </li> */}
                            {/* <button className='m-7 px-7'>Start Trading</button> */}
                        </ul>
                    </div>

                    {/* Right */}
                    <div className='hidden lg:block'>
                        <div className='flex items-center justify-between'>
                            <div className='border px-2 py-1 w-full flex items-center rounded-md'>
                                <input type="text" placeholder='Search' className='bg-transparent focus:outline-none w-[163px]' />
                                <div>
                                    <AiOutlineSearch />
                                </div>
                            </div>
                            <div className='mx-2'>
                                <AiOutlineMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar