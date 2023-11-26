import React from 'react';

const CityCard = ({ cityName }) => {
  return (
    <div className="bg-[#FFFFFF12] text-white p-4 flex items-center justify-between rounded-md">
      <span className="text-lg font-bold">{cityName}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

export default CityCard
