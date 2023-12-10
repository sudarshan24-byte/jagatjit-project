import React from 'react';
import { Link } from 'react-router-dom';

const IconCards = ({ imageSrc, additionalText }) => {
    return (
        <div className="bg-transparent p-4 border-none rounded-md shadow-md hover:-translate-y-3 duration-300 hover:shadow-2xl">
            <div className="flex justify-center items-center">
                <img
                    src={imageSrc}
                    alt={additionalText}
                    className="w-32"
                />
                <div className="ml-4">
                    <p className='w-36 text-2xl text-slate-200 font-bold'>
                        {additionalText}
                    </p>
                    <Link to='/investor' className=" text-md font-semibold text-secondary">More Details</Link>
                </div>
            </div>
        </div>
    );
};

export default IconCards;