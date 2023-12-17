import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar';
import { ourStroyImages } from '../assets';
import Card from '../components/OurStory/cards';

const AnimatedCard = ({ cardNumber, content }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="col-span-1"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      ref={ref}
    >
      <Card cardNumber={cardNumber} content={content} />
    </motion.div>
  );
};

const OurStory = () => {
  const controlsHeritage = useAnimation();
  const controlsAboutUs = useAnimation();
  const controlsCoreValues = useAnimation();

  const [refHeritage, inViewHeritage] = useInView({
    triggerOnce: true,
  });
  const [refAboutUs, inViewAboutUs] = useInView({
    triggerOnce: true,
  });
  const [refCoreValues, inViewCoreValues] = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inViewHeritage) {
      controlsHeritage.start({ opacity: 1, x: 0 });
    }
    if (inViewAboutUs) {
      controlsAboutUs.start({ opacity: 1, x: 0 });
    }
    if (inViewCoreValues) {
      controlsCoreValues.start({ opacity: 1, staggerChildren: 0.1 });
    }
  }, [controlsHeritage, controlsAboutUs, controlsCoreValues, inViewHeritage, inViewAboutUs, inViewCoreValues]);

  return (
    <div>
      <Navbar
        pageName='Our Story'
        links={['Heritage', 'About Us', 'Core Values']}
        width='30'
      />
      <div className='OurStory-bg bg-cover pt-36'>
        {/* Heritage Section */}
        <div className='flex flex-col md:flex-row items-center h-screen' ref={refHeritage}>
          {/* Image Animation */}
          <motion.div
            className='w-full md:w-[1000px] h-[550px] mb-4 md:mb-0 md:static ml-auto'
            initial={{ opacity: 0, x: -50 }}
            animate={controlsHeritage}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 },
            }}
            transition={{ duration: 0.9 }}
          >
            <img
              src={ourStroyImages.wine}
              alt='About Us'
              className='w-full h-full md:w-full object-cover'
            />
          </motion.div>

          {/* Text Animation */}
          <motion.div
            className='bg-[#1C1C1C] p-8 md:h-[500px] md:w-[500px] md:absolute left-[200px] sm:h-full w-full'
            initial={{ opacity: 0, x: 50 }}
            animate={controlsHeritage}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
            transition={{ duration: 0.9 }}
          >
            <h2 className='text-3xl font-bold mb-4 text-white'>Heritage</h2>
            <p className='text-gray-300 py-4'>
              JIL has the unique distinction of being one of the largest
              integrated distilleries manufacturing potable alcohol in Asia, and
              the first in India with in-house facilities for producing molasses
              and non-molasses based potable alcohol from fully automated
              distillation plants.
            </p>
            <p className='text-gray-300 py-1'>
              Jagatjit Industries Limited’s guiding philosophy – “A Heritage of
              Quality” – finds expression at all levels of its activities:
              quality in, manufacturing, technology and in its relationships
              with its employees, dealers and customers. In 2015, Roshini Sanah
              Jaiswal took over as Promoter and
            </p>
            <p className=' py-4'>Read More</p>
          </motion.div>
        </div>

        {/* About Us Section */}
        <div className='flex flex-col md:flex-row items-center h-screen' ref={refAboutUs}>
          {/* Image Animation */}
          <motion.div
            className='w-full md:w-[1000px] h-[550px] mb-4 md:mb-0 md:static'
            initial={{ opacity: 0, x: 50 }}
            animate={controlsAboutUs}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
            transition={{ duration: 0.9 }}
          >
            <img
              src={ourStroyImages.onwer}
              alt='About Us'
              className='w-full h-full md:w-full object-cover'
            />
          </motion.div>

          {/* Text Animation */}
          <motion.div
            className='bg-[#1C1C1C] p-8 md:h-[500px] md:w-[500px] md:absolute left-[900px] sm:h-full w-full'
            initial={{ opacity: 0, x: -50 }}
            animate={controlsAboutUs}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 },
            }}
            transition={{ duration: 0.9 }}
          >
            <h2 className='text-3xl font-bold mb-4 text-white'>About Us</h2>
            <p className='text-gray-300 py-4'>
              JIL has the unique distinction of being one of the largest
              integrated distilleries manufacturing potable alcohol in Asia, and
              the first in India with in-house facilities for producing molasses
              and non-molasses based potable alcohol from fully automated
              distillation plants.
            </p>
            <p className='text-gray-300 py-1'>
              Jagatjit Industries Limited’s guiding philosophy – “A Heritage of
              Quality” – finds expression at all levels of its activities:
              quality in, manufacturing, technology and in its relationships
              with its employees, dealers and customers. In 2015, Roshini Sanah
              Jaiswal took over as Promoter and
            </p>
            <p className=' py-4'>Read More</p>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div className='pl-9 py-5' ref={refCoreValues}>
          <div className='text-left justify-start pr-10'>
            <div className='text-5xl text-white'>Core Values</div>
          </div>
        </div>

        <div className='p-4'>
          <motion.div
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7'
            initial={{ opacity: 0, y: 50 }}
            animate={controlsCoreValues}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            <AnimatedCard cardNumber={'01'} content={'We take ownership for the work we do'} />
            <AnimatedCard cardNumber={'02'} content={'We work collaboratively as a team to ensure success'} />
            <AnimatedCard cardNumber={'03'} content={'We respect and trust each other'} />
            <AnimatedCard cardNumber={'04'} content={'We are not afraid to treat women as equals'} />
            <AnimatedCard cardNumber={'05'} content={'We encourage creativity and out of the box thinking'} />
            <AnimatedCard cardNumber={'06'} content={'We are never too old to learn'} />
            <AnimatedCard cardNumber={'07'} content={'We do more with less'} />
            <AnimatedCard cardNumber={'08'} content={'We do not cheat'} />
          </motion.div>
        </div>
      </div>
      <div className=''>Our Story</div>
    </div>
  );
};

export default OurStory;
