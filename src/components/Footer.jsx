import React from 'react'
import { CiMail } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { footerImages, logoimg } from '../assets'

const Footer = () => {
    return (
        <footer className="dark:text-gray-100 footer-bg bg-cover bg-center z-10">
            <div className=' bg-[#040303B5]/70 pt-20'>
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="flex flex-col mb-4 lg:mb-0 items-center lg:items-start p-11">
                        <div className="flex items-center mb-2">
                            <img
                                src={logoimg.logo}
                                alt="Company Logo"
                                className=""
                            />
                        </div>
                        <p className="text-center lg:text-left">
                            123 Company Street, City, Country
                        </p>
                        <div className='flex items-center space-x-3'>
                            <IoMdMail className=' text-white' size={22} />
                            <p className="text-center lg:text-left text-lg text-gray-600"> info@company.com</p>
                        </div>
                    </div>


                    <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4 ">
                        <div className="space-y-3 pl-24 pt-12">
                            <h3 className="font-extrabold text-xl text-secondary">About Company</h3>
                            <ul className=" space-y-3 text-white/40 font-bold text-lg">
                                <li>
                                    <a rel="noopener noreferrer " href="#">Home</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Product</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Investor</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Code of Conduct</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Carrer Operrtunity</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Privecy and Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className=' pl-12'></div>
                        <div className='grid grid-cols-1 gap-4 place-items-stretch h-56 pl-24 pt-12 '>
                            <div className="space-y-3">
                                <h3 className=" text-xl text-secondary">News</h3>
                                <ul className="space-y-3 text-white/40 font-bold text-lg ">
                                    <li>
                                        <a rel="noopener noreferrer " href="#">Technology</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Research & Devolpment</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Eco Friendly</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3 pt-2">
                                <h3 className=" text-orange-400 text-xl">Follow</h3>
                                <div className=' flex items-stretch space-x-3'>
                                    <FaLinkedinIn className='text-gray-400' size={22} />
                                    <RiInstagramFill className='text-gray-400' size={22} />
                                    <RiFacebookFill className=' text-slate-400' size={22} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4 text-sm text-center dark:text-gray-400 text-white bg-black">© 2023 Jagatjit Industries. All Rights Reserved | Designed by STSARC</div>
            </div>
        </footer>
    )
}

export default Footer