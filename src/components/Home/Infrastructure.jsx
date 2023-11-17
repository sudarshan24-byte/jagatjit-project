import React from 'react'

const Infrastructure = ({ title, description, img }) => {
    return (
        // <div className='grid grid-cols-2 place-items-center'>
        <div className='w-[23rem] md:w-[33rem] my-10'>
            <img src={img} alt="image" className='w-full' />
            <div className='text-center'>
                <div className='text-white text-3xl md:text-5xl my-2'>{title}</div>
                <div className='text-white text-md md:text-lg px-10 my-2'>{description}</div>
                <button>
                    <div className='border border-secondary bg-black px-3 py-1 my-5'>Read More</div>
                </button>
            </div>
        </div>
        // </div>
    )
}

export default Infrastructure