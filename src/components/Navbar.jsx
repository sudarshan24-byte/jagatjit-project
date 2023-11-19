import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className='navbar bg-cover bg-neutral-950 h-full py-8'>
            <div className='flex justify-between items-center px-10'>
                <h1 className='text-2xl'>Our Story</h1>
                <div className='hidden lg:block'>
                    <div className='flex justify-between items-center w-[40rem] text-xl text-white/40'>
                        <div>
                            <Link>Home</Link>
                        </div>
                        <div>
                            <Link>Our Story</Link>
                        </div>
                        <div>
                            <Link>Brands</Link>
                        </div>
                        <div>
                            <Link>Infrastructure</Link>
                        </div>
                        <div>
                            <Link>White Papers</Link>
                        </div>
                        <div>
                            <AiOutlineMenu style={{ fontSize: '25px', color: 'white' }} />
                        </div>
                    </div>
                </div>
                <div className='block lg:hidden cursor-pointer'>
                    <AiOutlineMenu style={{ fontSize: '25px', color: 'white' }} />
                </div>
            </div>
        </div>
    )
}

export default Navbar