import React from 'react'
import Navbar from '../components/Navbar'
import Image from '../components/Media/Card'
import { Medai_Awards } from '../assets'
import BlogImage from '../components/Media/BlogCard'
import CardComponent from '../components/Media/Cards'

const Media = () => {
    return (
        <div>
            <Navbar
                pageName='Media & Awards'
                links={['Press & Awards', 'Blogs', 'Certifications']}
                width='30'
            />
            <div className='Media-bg bg-cover py-10'>
                <div className=''>
                    <h1 className='text-white font-bold text-4xl pl-16 pt-32'>
                        Press And Awards
                    </h1>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:px-11'>
                        <Image src={Medai_Awards.Media_1} alt={''} />
                        <Image src={Medai_Awards.Media_2} alt={''} />
                        <Image src={Medai_Awards.Media_3} alt={''} />
                        <Image src={Medai_Awards.Media_1} alt={''} />
                        <Image src={Medai_Awards.Media_2} alt={''} />
                        <Image src={Medai_Awards.Media_3} alt={''} />
                    </div>

                </div>
                <div className=''>
                    <h1 className='text-white font-bold text-4xl pl-16 pt-32'>
                        Blogs
                    </h1>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:px-11'>
                        <BlogImage src={Medai_Awards.Media_11} text={"The Whisky Connoisseur's Guide to Tasting Notes"} />
                        <BlogImage src={Medai_Awards.Media_22} text={"The Art of Wine and Whisky Pairing A Delight for the Senses"} />
                        <BlogImage src={Medai_Awards.Media_33} text={"The Whisky Explorer's Guide to Single Malts"} />
                        <BlogImage src={Medai_Awards.Media_11} text={"The Whisky Connoisseur's Guide to Tasting Notes"} />
                        <BlogImage src={Medai_Awards.Media_22} text={"The Art of Wine and Whisky Pairing A Delight for the Senses"} />
                        <BlogImage src={Medai_Awards.Media_33} text={"The Whisky Explorer's Guide to Single Malts"} />

                    </div>

                </div>
                <div className=''>
                    <h1 className='text-white font-bold text-4xl pl-16 pt-32'>
                        Certifications
                    </h1>
                    <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:px-11 gap-4'>
                        <CardComponent imageUrl={Medai_Awards.documentt} text1={'Lorem ipsum dolor sit amet ,consectetur'} text2={'Coursera'} text3={'Issued on 26 feb 2016'} />
                        <CardComponent imageUrl={Medai_Awards.documentt} text1={'Lorem ipsum dolor sit amet ,consectetur'} text2={'Coursera'} text3={'Issued on 26 feb 2016'} />
                        <CardComponent imageUrl={Medai_Awards.documentt} text1={'Lorem ipsum dolor sit amet ,consectetur'} text2={'Coursera'} text3={'Issued on 26 feb 2016'} />
                        <CardComponent imageUrl={Medai_Awards.documentt} text1={'Lorem ipsum dolor sit amet ,consectetur'} text2={'Coursera'} text3={'Issued on 26 feb 2016'} />
                        <CardComponent imageUrl={Medai_Awards.documentt} text1={'Lorem ipsum dolor sit amet ,consectetur'} text2={'Coursera'} text3={'Issued on 26 feb 2016'} />
                        <CardComponent imageUrl={Medai_Awards.documentt} text1={'Lorem ipsum dolor sit amet ,consectetur'} text2={'Coursera'} text3={'Issued on 26 feb 2016'} />

                    </div>

                </div>

            </div>


        </div>
    )
}

export default Media