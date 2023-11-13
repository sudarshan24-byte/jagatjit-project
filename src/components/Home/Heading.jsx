import React from 'react'

const Heading = ({ name }) => {
    return (
        <div className='w-full lg:h-full py-10'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 text-center'>
                <div className='text-5xl text-white py-5'>
                    {name}
                </div>
            </div>
        </div>
    )
}

export default Heading