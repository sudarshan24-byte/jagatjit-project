import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ image, text, link }) => {
    return (
        <Link to={link} className="max-w-lg mx-auto ">
            <div className="relative bg-black">
                <div className='border border-secondary mb-8 md:mb-2 lg:mb-0 rounded-md'>
                    <img
                        src={image}
                        alt={text}
                        className="object-cover bg-cover w-[23rem] opacity-30 lg:w-[25rem] h-60  rounded-md lg:h-64"
                    />
                </div>
                <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
                    <div className="absolute top-0 left-0 text-white w-[50%] mx-auto right-0 h-[0.8px] bg-white"></div>
                    <p className="text-center text-white text-4xl font-semibold py-1">{text}</p>
                    <div className="absolute bottom-0 left-0 right-0 w-[50%] mx-auto text-white h-[0.8px] bg-white"></div>
                </div>
            </div>
        </Link>
    )
}

export default Card