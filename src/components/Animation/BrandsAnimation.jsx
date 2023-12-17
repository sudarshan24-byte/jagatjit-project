import React from 'react';
import { motion } from 'framer-motion';

const AnimationWrapper = ({ children, animation }) => {
  return (
    <motion.div
      initial={animation.initial}
      animate={animation.animate}
      exit={animation.exit}
      transition={animation.transition}
      whileTap={animation.whileTap}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
