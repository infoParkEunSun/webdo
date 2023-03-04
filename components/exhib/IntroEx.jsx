import React from 'react'
import {motion, useScroll, useTransform, useSpring} from 'framer-motion'

const IntroEx = () => {

    const { scrollYProgress } = useScroll();
    const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 100 })

  return (
    <div>
        <div className='relative overflow-hidden w-full h-screen flex items-center justify-center z-[2]'>
            <motion.h1
                style={{scale:useTransform(springscroll, [0, 0.2], [1.5, 0])}} 
                className='text-transparent text-[40px] md:text-[80px] font-bold
                bg-clip-text background-animate
                bg-gradient-to-r from-black to-black via-gray-500'>
                    Exhibitions
            </motion.h1>
        </div>
        {/* <div className='fixed top-[-50vh] md:top-[30vh] left-[-160vw] md:left-[calc(100%-140%)] '>
          <img src='/media/P_Green.png'/>
        </div> */}
        {/* <div className='fixed top-[-50vh] md:top-[30vh] left-[-160vw] md:left-[calc(100%-130%)] '>
          <img src='https://parkeunsunbucket.s3.eu-west-3.amazonaws.com/Images/Home/P_Green.png'/>
        </div> */}
        <motion.div className='absolute bottom-[-12vh] md:bottom-[-20vh] md:right-0 right-0'>
          <div>
            <div className='flex justify-center md:ml-[calc(100%-10vw)] ml-[calc(100%-15vw)] mb-[4vh]'>
                <h1 className='text-center text-xs sm:text-base md:text-lg bg-park-gray text-black rotate-90'>
                    scroll for more
                </h1>
            </div>
            <div className='flex justify-end mr-[6vw]'>
              <div className='relative border-r h-[30vh] border-black'>
                
              </div>
            </div>  
          </div>
        </motion.div>
    </div>
  )
}

export default IntroEx