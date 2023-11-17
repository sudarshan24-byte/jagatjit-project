import React from 'react'

const Brands = ({ img }) => {
    return (
        <div className='w-fit bg-stone-900/75 px-7 py-4 rounded-md mb-3 lg:mb-0'>
            <img src={img} alt="Brand Image" className='' width={90} />
        </div>
    )
}

export default Brands