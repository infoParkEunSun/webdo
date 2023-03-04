import React, {useState, useEffect} from 'react';
import Link from "next/link";
import {motion} from 'framer-motion'
import { useRouter } from "next/router";

const Navbar = () => {
    
    const router = useRouter();

  return (
    
    <div>
       <nav className="bg-transparent px-5 py-2.5 fixed w-full z-30 top-0 left-0">
            <a href="/" className="absolute w-5 flex items-center">
                <span 
                // style={{ color: `${textColor}`}} 
                className="font-semibold text-black text-justify ml-2 md:ml-5 text-xl md:text-4xl hover:text-gray-600">Park<br/> Eun<br/> Sun</span>
            </a>
            <div className="container flex flex-wrap justify-end md:justify-between items-center ml-[10vw] md:mx-auto md:ml-[0]">
            <a href="/" className="flex items-center mt-[12vh]">

            </a>
                <div className="flex md:order-2 ">
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-900 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col px-5 py-2.5 mt-0 bg-gray-300/70 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium md:border-0">
                        <li>
                            <Link href="/" className='active:text-blue-500'>
                                <a className={`block py-2 pr-4 pl-3 text-gray-500 rounded md:bg-transparent md:hover:bg-transparent md:hover:text-white md:p-0 
                                ${router.pathname == "/" ? "text-black" : "text-gray-500"}`} aria-current="page">Home</a>
                            </Link>
                            {/* ${router.pathname == "/user/signup" ? "text-indigo-600" : "text-brand-darkblue"}`} */}
                        </li>
                        <li>
                            <Link href="/atelier" className='active:text-blue-500'>
                                <a className={`block py-2 pr-4 pl-3 text-gray-500 rounded md:bg-transparent md:hover:bg-transparent md:hover:text-white md:p-0 
                                ${router.pathname == "/atelier" ? "text-black" : "text-gray-500"}`}>Atelier</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/exhibition" className='active:text-blue-500'>
                                <a className={`block py-2 pr-4 pl-3 text-gray-500 rounded md:bg-transparent md:hover:bg-transparent md:hover:text-white md:p-0 
                                ${router.pathname == "/exhibition" ? "text-black" : "text-gray-500"}`}>Exhibitions</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/bio" className='active:text-blue-500'>
                                <a className={`block py-2 pr-4 pl-3 text-gray-500 rounded md:bg-transparent md:hover:bg-transparent md:hover:text-white md:p-0 
                                ${router.pathname == "/bio" ? "text-black" : "text-gray-500"}`}>Bio</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className='active:text-blue-500'>
                                <a className={`block py-2 pr-4 pl-3 text-gray-500 rounded md:bg-transparent md:hover:bg-transparent md:hover:text-white md:p-0 
                                ${router.pathname == "/contact" ? "text-black" : "text-gray-500"}`}>Contact</a>
                            </Link>
                        </li>
                    </ul>
                    
                </div>
                
            </div>

        </nav>
        
    </div>
  )
}

export default Navbar