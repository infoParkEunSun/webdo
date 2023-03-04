import { button } from '@material-tailwind/react';
import {React, useState} from 'react'

const Cont = () => {

    const [showModal, setShowModal] = useState(false);

  return (
    <div className='grid grid-cols-4 h-[95vh] justify-left items-center mx-10'>
        
        <div className='col-span-3 flex  mx-2 md:ml-20 mt-[15vh] overscroll-none'>
            <div className='container h-[62vh] bg-white bg-opacity-20 backdrop-blur-lg rounded-lg drop-shadow-lg z-10 md:w-[100%]'>
                <div className='mx-10 my-10 grid md:grid-cols-2 gap-6'>

                    <div className='absolute flex right-[22.5vw] top-44' >

                        <div type="button" onClick={() => setShowModal(true)} className="overflow-hidden relative w-14 h-14 md:mr-10 mr-[-30vw] mt-[-25vh] md:mt-[0vh] bg-gray-100 rounded-full dark:bg-gray-600 z-20 hover:cursor-pointer">
                            <img src='/media/tonappa.jpg'/>
                        </div>

                        {showModal ? (<>
                    
                            <div className="absolute -left-60 top-[-35vh] md:-top-8 flex w-56 h-24 text-sm font-light text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
                                
                                <button type="button" className="absolute right-0 text-gray-400 bg-transparent hover:text-black rounded-lg text-sm p-2 dark:hover:bg-gray-600 dark:hover:text-white ">
                                    <svg 
                                    onClick={() => setShowModal(false)}
                                    className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    <span className="sr-only">Close modal</span>
                                </button>

                                <div className="grid p-3 mt-6">
                                    <p className="text-base font-semibold leading-none text-gray-900 dark:text-white -mt-7">
                                        <a href="#">Do Won Park</a>
                                    </p>
                                    <p className="mb-4 text-sm font-light">Eun Sun Park public relation assistant</p>
                                </div>
                                {/* <div data-popper-arrow></div> */}
                                
                            </div>

                        </>):null}  
        
                    </div>

                    <div className='col-span-1'>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium ">Full Name</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-transparent focus:border-transparent block w-full p-2.5"
                        placeholder="name and surname" required/>
                    </div>
                    <div className='col-span-1'>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium ">Your email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-transparent focus:border-transparent block w-full p-2.5" placeholder="name@domain.com" required/>
                    </div>

                    <div className='col-span-1'>
                        <label htmlFor="countries" className="block mb-2 text-sm font-medium ">Purpose of the request</label>
                        <select id="countries" defaultValue={'DEFAULT'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-transparent focus:border-transparent block w-full p-2.5" >
                        <option value="DEFAULT" disabled>Choose a purpose</option>
                        <option value="1">Art galleries</option>
                        <option value="2">Art Fairs</option>
                        <option value="3">Museums Collaborations</option>
                        <option value="4">Artwork informations</option>
                        <option value="5">Journalism</option>
                        <option value="6">Other</option>
                        </select>           
                    </div>

                    <div className='col-span-1'>
                        <label htmlFor="countries" className="block mb-2 text-sm font-medium mt-[2.5vh] md:mt-[0vh]">Continent of origin</label>
                        <select id="countries" defaultValue={'DEFAULT'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-transparent focus:border-transparent block w-full p-2.5 ">
                        <option value="DEFAULT" disabled>Choose a continent</option>
                        <option value="1">Europe</option>
                        <option value="2">Asia</option>
                        <option value="3">Africa</option>
                        <option value="4">Oceania</option>
                        <option value="5">North America</option>
                        <option value="6">South America</option>
                        </select>           
                    </div>

                    <div className='mt-1 col-span-2'>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium ">Your message</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  focus:ring-transparent focus:border-transparent" placeholder="Share with us..."></textarea>
                    </div>

                    <div className='flex col-span-2 justify-center items-center md:mt-5'>
                        <button type="submit" className="text-black bg-gray-200 hover:bg-gray-400 font-medium rounded-lg
                        text-sm md:w-[20vw] h-[5vh]  px-10 py-2.5 lg:py-1 lg:text-lg text-center">Submit</button>
                    </div>

                </div> 
            </div>
        </div>

        <div className='col-span-1 md:mx-5'>
            <div className='grid grid-flow-row gap-1 '>

                    <div className=''>

                        <div className='text-[20px] font-semibold border-gray-800 border-b'>Contacts</div>
                        <div className='md:mt-1 font-light'>
                            <p>parkeunsun0408@gmail.com</p>
                            <p>+39 432 31 52 432</p>
                        </div>

                    </div>

            </div>
        </div>


    </div>
   
  )
}

export default Cont