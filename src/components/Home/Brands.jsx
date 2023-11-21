import React from 'react'

const Brands = ({ img, text }) => {
    return (
        <div className='w-fit bg-card-bg hover:bg-black shadow-md px-7 py-4 rounded-lg mb-3 lg:mb-0 group relative'>
            <div className='group-hover:opacity-30 duration-300'>
                <img src={img} alt="Brand Image" className='' width={90} />
            </div>
            <div className='absolute top-[50%] left-[0%] text-white text-3xl font-extrabold opacity-0 group-hover:opacity-100'>
                {text}
            </div>
        </div>
    )
}

export default Brands