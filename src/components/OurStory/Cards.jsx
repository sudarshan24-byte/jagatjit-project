// Card.js

import React from 'react';

const Card = ({ cardNumber, content }) => {
  const digit = cardNumber.charAt(0);

  return (
    <div className="flex items-start justify-start h-full bg-[#FFFFFF0F] py-3 bg-opacity-30 relative rounded-md">
      <div className="absolute -left-4 top-0 h-full flex items-center justify-center  text-white font-extrabold text-3xl">
        {digit}
      </div>
      <div className="   flex items-start justify-start  text-3xl font-extrabold text-white pr-11 pt-2">
        {cardNumber.substring(1)}
      </div>
      <div className="flex-1 text-center text-xl">
        {content}
      </div>
    </div>
  );
};

export default Card;
