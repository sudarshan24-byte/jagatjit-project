import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Infrastructure = ({ title, description, img, variants, initial, animation }) => {
    return (
        <motion.div
            variants={variants}
            initial={initial}
            whileInView={animation}
            viewport={{ once: true }}
            className=''>
            <Link to='/infrastructure'>
                <div className='w-[23rem] md:w-[33rem] my-10 hover:-translate-y-4 duration-300 hover:shadow-2xl backdrop-blur-2xl rounded-lg'>
                    <img src={img} alt="image" className='w-full' />
                    <div className='text-center'>
                        <div className='text-white text-3xl md:text-5xl my-2'>{title}</div>
                        <div className='text-white text-md md:text-lg px-10 my-2'>{description}</div>
                        <button>
                            <div className='border border-secondary bg-black px-3 py-1 my-5 hover:scale-105 duration-200'>Read More</div>
                        </button>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

export default Infrastructure