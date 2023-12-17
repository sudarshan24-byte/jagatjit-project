import React, { useState } from 'react'
// import Navbar from '../components/Navbar'
import Cards from '../components/OurProducts/Cards'
import { ourProducts } from '../assets'
import Navbar from '../components/OurProducts/Navbar'
import { motion } from 'framer-motion'

const imageAnimate = {
    scale: { scale: 0.8, opacity: 0 },
    scaleAnimation: {
        scale: 1,
        opacity: 1,
        // rotate: [0, 10, 0],
        transition: {
            type: "tween",
            staggerChildren: 0.2,
            duration: 1,
        }
    },
    bottom: { y: 100, opacity: 0 },
    bottomAnimation: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'easeOut',
            duration: 1
        }
    }

}


const OurProducts = () => {
    const [activeSection, setActiveSection] = useState('Milk Products')
    const handleSectionChange = (sectionId) => {
        setActiveSection(sectionId);
    };

    return (
        <div>
            {/* <Navbar
                pageName='Our Products'
                links={['Liquors', 'Milk Products', 'Ethanol']}
                // width='30'
            /> */}
            <Navbar
                pageName='Our Products'
                link1='Liquors'
                link2='Milk Products'
                link3='Ethanol'
                handleSectionChange={handleSectionChange}
            />

            {/* Liquors */}
            {/* <div className='White-bg bg-cover bg-center'>
                <div className='bg-black/70 px-10 pt-36 h-full py-20'>

                    <h1 className='text-white text-5xl'>
                        Liquors
                    </h1> */}

            {/* Cards */}
            {/* <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-baseline'>
                        <Cards img={ourProducts.bottle1} text='Aristocrat Old Reserve' />
                        <Cards img={ourProducts.bottle1} text='Aristocrat Old Reserve' />
                        <Cards img={ourProducts.bottle1} text='Aristocrat Old Reserve' />
                        <Cards img={ourProducts.bottle1} text='Aristocrat Old Reserve' />
                    </div> */}

            {/* Info */}
            {/* <div>
                        <h1 className='text-secondary text-5xl'>Lorem ipsum dolor sit.</h1>

                        <div className='mt-5 text-lg'>
                            <div className='text-white/50'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                            </div>
                            <div className='text-white/50'>
                                uia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,uia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dol
                            </div>
                        </div>
                        <div className='mt-10 text-lg'>
                            <h1 className='text-secondary text-5xl'>Lorem ipsum dolor sit.</h1>
                            <div className='text-white/50'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Milk Food */}
            <motion.div
                className='White-bg bg-cover bg-center' style={{ display: activeSection === 'Milk Products' ? 'block' : 'none' }}>
                <div className='bg-black/70 px-10 pt-36 h-full py-20'>

                    <h1 className='text-white text-5xl'>
                        Milk Products
                    </h1>

                    {/* Cards */}
                    <motion.div
                        variants={imageAnimate}
                        initial={'scale'}
                        whileInView={'scaleAnimation'}
                        viewport={{ once: false }}
                        transition={{ staggerChildren: 0.5 }}
                        className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-baseline'>
                        <motion.div variants={imageAnimate} className='w-full'>
                            <Cards img={ourProducts.milkproduct} text='Milk Powder'
                            />
                        </motion.div>
                        <motion.div variants={imageAnimate} className='w-full'>
                            <Cards img={ourProducts.milkproduct} text='Milk Powder'
                            />
                        </motion.div>
                        <motion.div variants={imageAnimate} className='w-full'>
                            <Cards img={ourProducts.milkproduct} text='Milk Powder'
                            />
                        </motion.div>
                        <motion.div variants={imageAnimate} className='w-full'>
                            <Cards img={ourProducts.milkproduct} text='Milk Powder'
                            />
                        </motion.div>
                    </motion.div>

                    {/* Info */}
                    <motion.div
                        variants={imageAnimate}
                        initial={'bottom'}
                        whileInView={'bottomAnimation'}
                        viewport={{ once: false }}
                        transition={{ staggerChildren: 0.5 }}
                    >
                        <h1 className='text-secondary text-5xl'>Lorem ipsum dolor sit.</h1>

                        <motion.div variants={imageAnimate} className='mt-5 text-lg'>
                            <div className='text-white/50'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                            </div>
                            <div className='text-white/50'>
                                uia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,uia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dol
                            </div>
                        </motion.div>
                        <motion.div variants={imageAnimate} className='mt-10 text-lg'>
                            <h1 className='text-secondary text-5xl'>Lorem ipsum dolor sit.</h1>
                            <div className='text-white/50'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Ethanol */}
            <div className='White-bg bg-cover bg-center' style={{ display: activeSection === 'Ethanol' ? 'block' : 'none' }}>
                <div className='bg-black/70 px-10 pt-36 h-full py-20'>

                    <h1 className='text-white text-5xl'>
                        Ethanol
                    </h1>

                    {/* Cards */}
                    <motion.div
                        variants={imageAnimate}
                        initial={'scale'}
                        whileInView={'scaleAnimation'}
                        viewport={{ once: false }}
                        transition={{ staggerChildren: 0.5 }}
                        className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-baseline'>
                        <motion.div
                            variants={imageAnimate}
                            className='w-full'>
                            <Cards img={ourProducts.bottle1} text='Ethanol' />
                        </motion.div>
                        <motion.div
                            variants={imageAnimate}
                            className='w-full'>
                            <Cards img={ourProducts.bottle1} text='Ethanol' />
                        </motion.div>
                    </motion.div>

                    {/* Info */}
                    <motion.div
                        variants={imageAnimate}
                        initial={'bottom'}
                        whileInView={'bottomAnimation'}
                        viewport={{ once: false }}
                        transition={{ staggerChildren: 0.5 }}
                    >
                        <h1 className='text-secondary text-5xl'>Lorem ipsum dolor sit.</h1>

                        <motion.div className='mt-5 text-lg'>
                            <div className='text-white/50'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                            </div>
                            <div className='text-white/50'>
                                uia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,uia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dol
                            </div>
                        </motion.div>
                        <motion.div className='mt-10 text-lg'>
                            <h1 className='text-secondary text-5xl'>Lorem ipsum dolor sit.</h1>
                            <div className='text-white/50'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default OurProducts