import React from 'react';

const CardComponent = ({ imageUrl, text1, text2, text3 }) => {
  return (
    <div className="MediaDocument-bg bg-cover rounded-xl overflow-hidden shadow-md flex w-auto h-32 ">
      <div className="w-1/3 p-4">
        <img src={imageUrl} alt="Card" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="w-2/3 p-6">
        <div className="font-bold text-xl mb-2">{text1}</div>
        <p className="text-gray-700 text-base mb-2 ">{text2}</p>
        <p className="text-gray-700 text-base">{text3}</p>
      </div>
    </div>
  );
};

export default CardComponent;
