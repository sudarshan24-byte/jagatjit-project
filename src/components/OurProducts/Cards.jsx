import React from 'react'
import { ourProducts } from '../../assets'

const Cards = ({ img, text }) => {
    return (
        <div className='border border-secondary/40 bg-white/5 mb-4 lg:mb-0 rounded-lg w-[90%]'>
            <div className='px-10 flex flex-col justify-center items-center'>
                <img src={img} alt="" width={100} className='mt-2 pt-4' />
                <div className='bg-white/20 text-white px-10 py-1 my-5 rounded-md'>
                    {text}
                </div>
            </div>
        </div>
    )
}

export default Cards