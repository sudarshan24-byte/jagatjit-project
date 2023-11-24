import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/OurProducts/Cards'
import { ourProducts } from '../assets'

const OurProducts = () => {
    return (
        <div>
            <Navbar
                pageName='Our Products'
                links={['Liquors', 'Milk Products', 'Ethanol']}
                width='30'
            />

            {/* Liquors */}
            <div className='White-bg bg-cover bg-center'>
                <div className='bg-black/70 px-10 h-full py-20'>

                    <h1 className='text-white text-5xl'>
                        Liquors
                    </h1>

                    {/* Cards */}
                    <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-baseline'>
                        <Cards img={ourProducts.bottle1} text='Aristocrat Old Reserve' />
                        <Cards img={ourProducts.bottle1} text='Aristocrat Old Reserve' />
                        <Cards img={ourProducts.bottle1} text='Aristocrat Old Reserve' />
                        <Cards img={ourProducts.bottle1} text='Aristocrat Old Reserve' />
                    </div>

                    {/* Info */}
                    <div>
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
            </div>

            {/* Milk Food */}
            <div className='White-bg bg-cover bg-center'>
                <div className='bg-black/70 px-10 h-full py-20'>

                    <h1 className='text-white text-5xl'>
                        Milk Products
                    </h1>

                    {/* Cards */}
                    <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-baseline'>
                        <Cards img={ourProducts.milkproduct} text='Milk Powder' />
                        <Cards img={ourProducts.milkproduct} text='Milk Powder' />
                        <Cards img={ourProducts.milkproduct} text='Milk Powder' />
                        <Cards img={ourProducts.milkproduct} text='Milk Powder' />
                    </div>

                    {/* Info */}
                    <div>
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
            </div>

            {/* Ethanol */}
            <div className='White-bg bg-cover bg-center'>
                <div className='bg-black/70 px-10 h-full py-20'>

                    <h1 className='text-white text-5xl'>
                        Ethanol
                    </h1>

                    {/* Cards */}
                    <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-baseline'>
                        <Cards img={ourProducts.bottle1} text='Ethanol' />
                        <Cards img={ourProducts.bottle1} text='Ethanol' />
                    </div>

                    {/* Info */}
                    <div>
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
            </div>
        </div>
    )
}

export default OurProducts