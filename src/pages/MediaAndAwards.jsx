import React from 'react';
import Navbar from '../components/Navbar';
import Image from '../components/Media/Card';
import { Medai_Awards } from '../assets';
import BlogImage from '../components/Media/BlogCard';
import CardComponent from '../components/Media/Cards';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedImage = ({ src, alt }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
    >
      <Image src={src} alt={alt} />
    </motion.div>
  );
};

const AnimatedBlogImage = ({ src, text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
    >
      <BlogImage src={src} text={text} />
    </motion.div>
  );
};

const AnimatedCardComponent = ({ imageUrl, text1, text2, text3 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -50 },
      }}
      transition={{ duration: 0.5 }}
    >
      <CardComponent imageUrl={imageUrl} text1={text1} text2={text2} text3={text3} />
    </motion.div>
  );
};

const Media = () => {
  const controls = useAnimation();
  const [blogRef, blogInView] = useInView({ triggerOnce: true });

  const handleScrollToBlogs = async () => {
    if (blogInView) {
      await controls.start({
        y: -50,
        transition: { duration: 0.5 },
      });
    }
  };

  return (
    <div>
      <Navbar
        pageName='Media & Awards'
        links={['Press & Awards', 'Blogs', 'Certifications']}
        width='30'
      />
      <div className='Media-bg bg-cover py-10'>
        {/* Press and Awards Section */}
        <div>
          <h1
            className='text-white font-bold text-4xl pl-16 pt-32'
            initial="hidden"
          >
            Press And Awards
          </h1>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:px-11'>
            <AnimatedImage src={Medai_Awards.Media_1} alt={''} />
            <AnimatedImage src={Medai_Awards.Media_2} alt={''} />
            <AnimatedImage src={Medai_Awards.Media_3} alt={''} />
            <AnimatedImage src={Medai_Awards.Media_1} alt={''} />
            <AnimatedImage src={Medai_Awards.Media_2} alt={''} />
            <AnimatedImage src={Medai_Awards.Media_3} alt={''} />
          </div>
        </div>

        {/* Blogs Section */}
        <div ref={blogRef} className='lg:py-24' onScroll={handleScrollToBlogs}>
          <h1
            className='text-white font-bold text-4xl pl-16 pt-32'
            initial="hidden"
          >
            Blogs
          </h1>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:px-11'>
            <AnimatedBlogImage src={Medai_Awards.Media_11} text={"The Whisky Connoisseur's Guide to Tasting Notes"} />
            <AnimatedBlogImage src={Medai_Awards.Media_22} text={"The Art of Wine and Whisky Pairing A Delight for the Senses"} />
            <AnimatedBlogImage src={Medai_Awards.Media_33} text={"The Whisky Explorer's Guide to Single Malts"} />
            <AnimatedBlogImage src={Medai_Awards.Media_11} text={"The Whisky Connoisseur's Guide to Tasting Notes"} />
            <AnimatedBlogImage src={Medai_Awards.Media_22} text={"The Art of Wine and Whisky Pairing A Delight for the Senses"} />
            <AnimatedBlogImage src={Medai_Awards.Media_33} text={"The Whisky Explorer's Guide to Single Malts"} />
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h1
            className='text-white font-bold text-4xl pl-16 pt-32'
            initial="hidden"
          >
            Certifications
          </h1>
          <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:px-11 gap-4'>
            <AnimatedCardComponent imageUrl={Medai_Awards.documentt} text1={'Lorem ipsum dolor sit amet ,consectetur'} text2={'Coursera'} text3={'Issued on 26 feb 2016'} />
            <AnimatedCardComponent imageUrl={Medai_Awards.documentt} text1={'Lorem ipsum dolor sit amet ,consectetur'} text2={'Coursera'} text3={'Issued on 26 feb 2016'} />
            <AnimatedCardComponent imageUrl={Medai_Awards.documentt} text1={'Lorem ipsum dolor sit amet ,consectetur'} text2={'Coursera'} text3={'Issued on 26 feb 2016'} />
            <AnimatedCardComponent imageUrl={Medai_Awards.documentt} text1={'Lorem ipsum dolor sit amet ,consectetur'} text2={'Coursera'} text3={'Issued on 26 feb 2016'} />
            <AnimatedCardComponent imageUrl={Medai_Awards.documentt} text1={'Lorem ipsum dolor sit amet ,consectetur'} text2={'Coursera'} text3={'Issued on 26 feb 2016'} />
            <AnimatedCardComponent imageUrl={Medai_Awards.documentt} text1={'Lorem ipsum dolor sit amet ,consectetur'} text2={'Coursera'} text3={'Issued on 26 feb 2016'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
