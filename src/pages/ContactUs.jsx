import React from 'react'
import Navbar from '../components/Navbar'
import { blog } from '../assets'
import Location from '../components/Location'


const ContactUs = () => {
    return (
        <div>
            <Navbar
                pageName='Contact Us'
                links={[]}
                width='30'
            />
            <div  className='ContactUS-bg bg-cover'>
                <div class="container px-6 py-12 mx-auto p-8 pt-32">
                    <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                        <div class="p-4 py-6 rounded-lg bg-[#FFFFFF17] dark:bg-[#FFFFFF17] md:p-8">
                            <form>   
                                <div class="mt-4">
                                    <label class="block mb-2 text-sm ">Name</label>
                                    <input type="email" placeholder="Enter Your Name" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-[#FFFFFF17] border border-gray-200 rounded-lg dark:placeholder-gray-600  dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div class="mt-4">
                                    <label class="block mb-2 text-sm ">Email address</label>
                                    <input type="email" placeholder="Enter your Email" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-[#FFFFFF17] border border-gray-200 rounded-lg dark:placeholder-gray-600  dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div class="mt-4">
                                    <label class="block mb-2 text-sm ">Subject</label>
                                    <input type="email" placeholder="Enter your Subject" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-[#FFFFFF17] border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div class="w-full mt-4">
                                    <label class="block mb-2 text-sm ">Message</label>
                                    <textarea class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-[#FFFFFF17] border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600  dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Enter Your Message"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Location />
            
            
        </div>
    )
}

export default ContactUs