import React from 'react'
import { Link } from 'react-router-dom'

const Brands = ({ img, text }) => {
    return (
        <Link to='/brands'>
            <div className='w-fit bg-card-bg hover:bg-black shadow-md px-7 py-4 rounded-lg mb-3 lg:mb-0 group relative'>
                <div className='group-hover:opacity-30 duration-300'>
                    <img src={img} alt="Brand Image" className='' width={90} />
                </div>
                <div className='absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 w-full text-white text-3xl font-extrabold opacity-0 group-hover:opacity-100'>
                    {text}
                </div>
            </div>
        </Link>
    )
}

export default Brands