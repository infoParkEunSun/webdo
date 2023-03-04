import React from 'react'
import Link from "next/link";

const Footer = () => {
  return (
    <div>
        <div className='grid grid-flow-col gap-8 md:m-10 md:w-fit m-3 '>

                <div className='grid grid-flow-col gap-8 border-r border-gray-900 md:mx-10'>

                    <ul className='list-none list-inside md:mr-16 md:ml-16 mr-10'>
                      <Link href="/contact">
                        <li className='hover:underline cursor-pointer'>Instagram</li>
                      </Link>
                      <Link href="/bio">
                        <li className='hover:underline cursor-pointer'>Bio</li>
                      </Link>
                      <Link href="/atelier">
                        <li className='hover:underline cursor-pointer'>Atelier</li>
                      </Link>
                    


                    </ul>

                </div>

                <div className=''>

                        <div className='text-[20px] font-semibold'>Contacts</div>
                        <div className='md:mt-1'>
                            <p>parkeunsun0408@gmail.com</p>
                            <p>+39 432 31 52 432</p>
                        </div>

                </div>



        </div>
    </div>
  )
}

export default Footer