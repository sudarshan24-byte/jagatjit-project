// Cards.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Cards = ({ img, text }) => {
  return (
    <motion.div
      className='border border-secondary/40 bg-white/5 mb-4 lg:mb-0 rounded-lg w-[90%]'
      whileTap={{ scale: 0.95 }}
    >
      <div className='px-10 flex flex-col justify-center items-center'>
        <motion.img
          src={img}
          alt=""
          width={100}
          className='mt-2 pt-4'
          whileHover={{ scale: 1.5 }}
        />
        <div className='bg-[#FFFFFF1A] text-white/50 px-10 py-1 my-5 rounded-md'>
          {text}
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;
