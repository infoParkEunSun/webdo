import React from 'react'
import {motion, useScroll, useTransform, useSpring} from 'framer-motion'

const IntroAt = () => {

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
                    Atelier
            </motion.h1>
        </div>
        <div className='absolute md:top-[-20vh] md:left-20 top-[-20vh]'>
          <img src='https://parkeunsunbucket.s3.eu-west-3.amazonaws.com/Images/Home/DSC_6.png' className='h-[120vh]'/>
        </div>
    </div>
  )
}

export default IntroAt