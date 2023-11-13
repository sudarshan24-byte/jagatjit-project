import React from 'react'
import Heading from '../components/Home/Heading'

const Home = () => {
    return (
        <div>
            <div>Hero</div>
            <Heading name='Our Story' />
            <Heading name='Brands' />
            <Heading name='Infrastructure' />
            <Heading name='White Papers' />
            <div>Location</div>
            {/* <div>
                <Heading name='Our Story' />
            </div> */}
        </div>
    )
}

export default Home