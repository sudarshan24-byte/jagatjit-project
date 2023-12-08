import React from 'react';

const Image = ({ src, alt }) => {
  return (
    <div className="w-full p-5">
      <img src={src} alt={alt} className="w-full h-auto rounded-md shadow-md" />
    </div>
  );
};

export default Image;
