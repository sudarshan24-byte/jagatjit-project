import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const variants = {
    open: {
        opacity: 1,
        // clipPath: "circle(1500px at 50px 50px)",
        x: 0,
        duration: 0.9,
        transition: {
            opacity: { duration: .9 },
            x: { type: "tween", stiffness: 100, damping: 10 },
        },
    },
    closed: { x: '-100%', opacity: 0, transition: { opacity: { duration: 0.9 }, x: { type: "spring", stiffness: 100, damping: 30 }, } },
    // exit: { opacity: 0, x: '-100%', transition: { opacity: { duration: 0.5 }, x: { type: "spring", stiffness: 300, damping: 30 }, } },
};

const UpperNav = ({ onClose, nav }) => {
    const [isOpen, setIsOpen] = React.useState(nav);
    React.useEffect(() => {
        setIsOpen(nav);
    }, [nav]);
    return (
        <motion.div
            variants={variants}
            initial='closed'
            animate={nav ? 'open' : 'closed'}
            exit='closed'
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className='fixed top-0 z-40 text-black duration-700'>
            <div onClick={() => onClose()} className='cursor-pointer absolute lg:hidden z-40 w-[20%] border border-black md:w-fit'>
                <RxCross2 style={{ fontWeight: 'bolder', fontSize: '25px' }} className='absolute left-[20rem] md:left-[45rem] top-2' />
            </div>
            <motion.div variants={variants} className='bg-white absolute w-screen'>
                <motion.div variants={variants} className='grid grid-cols-2 place-items-center md:grid md:grid-cols-3 md:place-items-center lg:flex lg:justify-evenly lg:items-baseline py-10'>
                    <div className=''>
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
                            <div>
                                <Link to='/media'>Press & Awards</Link>
                            </div>
                            <div>
                                <Link to='/media'>Blog</Link>
                            </div>
                            <div>
                                <Link to='/media'>Certifications</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='border-b border-b-black text-black font-bold'>Ethanol Plant</h2>
                        <div className='text-sm text-[#040303]/50 my-2'>
                            <div>Ethanol Plant</div>
                            <div>IMFL</div>
                            <div>ENA</div>
                        </div>
                    </div>
                    <div>
                        <h2 className='border-b border-b-black text-black font-bold'>CSR Framework</h2>
                        <div className='text-sm text-[#040303]/50 my-2'>
                            <div>
                                <Link to='/csr-framework'>Eco Friendly</Link>
                            </div>
                            <div>
                                <Link to='/csr-framework'>Environment</Link>
                            </div>
                            <div>
                                <Link to='/csr-framework'>Responsible Drinking</Link>
                            </div>
                        </div>
                    </div>
                    <div className='text-black font-bold w-max ml-20 md:w-fit md:ml-0'>
                        <p className='border-b border-b-black w-fit'>Promoters & Journey</p>
                        <Link to='/investor' className='border-b border-b-black w-fit'>Investors</Link>
                        <p className='border-b border-b-black w-fit'>
                            <Link to='/contactus'>Contact Us</Link>
                        </p>
                    </div>
                    <div onClick={() => onClose()} className='cursor-pointer hidden lg:block w-[20%] md:w-fit'>
                        <RxCross2 style={{ fontWeight: 'bolder', fontSize: '25px' }} />
                    </div>
                </motion.div>
                <motion.div variants={variants} className='border-t border-black/20 w-[83%] mx-auto py-2 pb-5 flex justify-between items-center'>
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
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default UpperNav