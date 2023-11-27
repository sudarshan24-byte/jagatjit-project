import React from 'react'
import Navbar from '../components/Navbar'
import { csr_framework } from '../assets'

const CSRFramework = () => {
    return (
        <div>
            <Navbar
                pageName='CSR Framework'
                links={['Eco Friendly', 'Environment', 'Responsible Drinking']}
                width='50'
            />
            <div className='csr-framework bg-cover'>
                <div className='bg-black/60 py-20 px-10'>

                    {/* Eco Friendly */}
                    <h1 className='text-white text-5xl'>
                        Eco Friendly
                    </h1>

                    <div className='bg-white/10 px-10 py-5 flex'>
                        <div>
                            <img src={csr_framework.eco_friendly} alt="" className='bg-white/5 p-3 rounded-lg' />
                        </div>
                        <div className='w-[80%] pl-4 text-xl'>
                            Jagatjit’s business activities directly affect the lives of millions of people across the country,
                            be it consumers, employees, investors or commercial partners. This brings a responsibility to be a good
                            corporate citizen and seek to ensure that all those with a stake in Jagatjit can benefit from the
                            relationship Jagatjit focuses its efforts on being socially responsible, where its impacts are greatest
                            and where it can make the most difference. The company is working hard to help create the right
                            conditions for an enduring, successful business – helping their employees reach their full potential and
                            build communities that are prosperous with a stable environment. Jagatjit’s business activities directly
                            affect the lives of millions of people across the country, be it consumers, employees, investors or
                            commercial partners. This brings a responsibility to be a good corporate citizen and seek to ensure that
                            all those with a stake in
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CSRFramework