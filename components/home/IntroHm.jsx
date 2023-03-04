import React, {useState, useEffect} from 'react';
import {motion, useScroll, useMotionValue, useSpring} from 'framer-motion'

const IntroHm = () => {
  const { scrollYProgress } = useScroll();
  const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 100 })

  // const cursorX = useMotionValue(-100);
  // const cursorY = useMotionValue(-100);

  // const springConfig = { damping: 30, stiffness: 500 };
  // const cursorXSpring = useSpring(cursorX, springConfig);
  // const cursorYSpring = useSpring(cursorY, springConfig);

  // useEffect(() => {
  //   const moveCursor = (e) => {
  //     cursorX.set(e.clientX - 36);
  //     cursorY.set(e.clientY - 36);
  //   };

  //   window.addEventListener("mousemove", moveCursor);

  //   return () => {
  //     window.removeEventListener("mousemove", moveCursor);
  //   };
  // }, []);

  const draw = {
    hidden:{
      pathLength:0,
      opacity:0
    },
    visible:{
      pathLength:1,
      opacity:1,
      transition: {
        pathLength: {type: "spring", duration: 2.5, bounce: 0 }}
    }
  }

  return (
    <div>
      <motion.div
        className="cursor"
        style={{
          // translateX: cursorXSpring,
          // translateY: cursorYSpring,
        }}/>
      <div id='scene' className='absolute mt-[-52vh] md:mt-[0vh] overflow-hidden w-full h-screen flex items-end justify-end -z-10'>
        
      <motion.svg 
        initial={"hidden"}
        whileInView={"visible"}
        width="450"viewBox="0 0 280 92" fill="none" xmlns="http://www.w3.org/2000/svg"
        className="h-14 md:h-32 md:m-20 z-[99]">
        <motion.path   
        variants={draw} id="Vector 1" d="M1.5 58.5C9.5 50.8333 25.4 32.5 25 20.5" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        <motion.path   
        variants={draw} id="Vector 2" d="M31 28C45.6667 19.8333 69.5 13.5 40.5 41.5C17 61.5 8.00001 54.5 30 34.5C47.6 18.5 67.6667 10.8333 75 8.5C79.1667 6.83334 85 6.5 73.5 19.5C67.5 26.2826 65.2566 31.1815 74 27.5C83.5 23.5 91.5 23 78 35C63.5 47 54 57.5 34.5 69.5C45.8334 63.6667 70 56.5 56.5 72.5C52.1667 77.3333 41.7 87.8 34.5 91L43 81" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        <motion.path   
        variants={draw} id="Vector 3" d="M113 16C119.5 14 136 1 117.5 20C99 39 90 44 117 34C146 22 159 7 120 27.5C84.5 49.5 60 78.5 103.5 59C139.5 44.5 139.5 42 136 43C115.333 59.5 85.5 85 130 63.5C149.5 52 191.8 26 201 16C212.5 3.49997 217 -3 192.5 14C175.3 28 161 47.6667 155.5 56C164.333 44.3333 183.5 24 199 23C210.5 23 182.167 53.5 171.5 63C188.667 51 224.1 26.3 228.5 23.5C234 20 307 -29 238 31.5C210.628 55.5 175 82 238 67C246.833 64.6667 270.1 55.7 278.5 48.5" stroke="black" strokeWidth="2" strokeLinecap="round"/>
      </motion.svg>

      </div>
      

      <div className='absolute overflow-hidden w-full h-screen flex items-center md:justify-end justify-center z-20'>
        <p className='text-black text-center md:text-right text-[22px] md:text-[40px] mt-[-30vh] md:mt-40 md:ml-20 md:m-20 md:mr-[10vh] ml-14'>
          "La mia storia attraverso le mie mani"
        </p>
      </div>

    </div>
  )
}

export default IntroHm