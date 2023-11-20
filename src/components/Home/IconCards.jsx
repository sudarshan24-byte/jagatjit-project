import React from 'react';

const IconCards = ({ imageSrc, additionalText }) => {
    return (
        <div className="bg-transparent p-4 border-none rounded-md shadow-md">
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
                    <p className=" text-md font-semibold text-secondary">More Details</p>
                </div>
            </div>
        </div>
    );
};

export default IconCards;