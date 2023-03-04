import Link from "next/link";
import {React, useState, useEffect } from 'react'
import {motion, useScroll, useTransform, useSpring} from 'framer-motion'
import axios from "axios";

const Homesec = () => {

    const { scrollYProgress } = useScroll();
    const spScroll = useSpring(scrollYProgress, { stiffness: 400, damping: 200 })

    const y = useTransform(spScroll, [0, 1], [500, 0])
    
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    const [post, setPosts] = useState([])
    const apiEndPoint = 'https://parkeunsunbucket.s3.eu-west-3.amazonaws.com/JsonFiles/homedata.json'

    useEffect(() => {

        const getPosts = async () => {
            const { data : res } = await axios.get(apiEndPoint)
            setPosts(res);
        };
        getPosts();
    },[]);
  return (
    <motion.div style={{y}} >

        <div className='flex w-screen h-[auto] bg-gray-100 z-[50] rounded-xl'>

            <div>

                <div className='grid grid-cols-3 mx-10 md:mt-[10vh] mt-5 md:mx-20'>

                    <div className="col-span-1"/>
                    <div className=' col-span-2 text-right md:mt-[1vh]'>
                        <span className='text-sm md:text-[35px] text-black  md:leading-tight '>
                            <a className="underline hover:decoration-pink-500 decoration-sky-500">Eun-Sun Park.</a> bellezza, armonie, equilibri e storie da ascoltare
                        </span>
                        <div className='text-right italic text-sm md:text-base text-gray-700 md:mt-10'>
                            Luciano Caramel
                        </div>
                    </div>

                </div>



                <div className='grid grid-cols-3 md:mt-[5vh] mt-5 md:mx-24 justify-items-center place-items-end'>
                    
                    <div className="md:m-10 m-2 md:col-span-2 col-span-3">
                        <div className='rounded-sm h-[30vh] md:h-[65vh] overflow-clip'>
                            <motion.img style={{y:useTransform(spScroll, [.45, .65], [15, -15])}}
                                src='https://parkeunsunbucket.s3.eu-west-3.amazonaws.com/Images/Home/7L9A0054.jpg' className='object-cover w-[110%] h-[110%]'/>                        
                        </div>
                        <p className='md:mt-3 text-gray-600' >Pietrasanta - 2018</p>
                    </div>


                    {/* <div className='md:m-10 col-span-1'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}>
                    { isHovering ? (
                        <img src='/media/home/7L9A3572.jpg' className=' sticky rounded-xl h-[60vh] w-auto'/>
                        ) : (
                        <img src='/media/home/7L9A3571.jpg' className=' sticky rounded-xl h-[60vh] w-auto'/>   
                        )}
                        <p className='md:mt-3 text-gray-600'>Colonna - 24 x 57</p>
                    </div> */}

                    <div className="m-2 md:m-10 col-span-3 md:col-span-1 md:ml-0">
                        <div className='flex w-full justify-center'>
                            <h1 className='text-[70px] md:text-[170px] font-extralight leading-tight'>The Atelier</h1>
                        </div>
                    </div>



                </div>


                <div className='grid grid-flow-row md:mt-[5vh] md:mx-24 justify-items-center place-items-end'>
                    


                    <div className='grid grid-flow-col md:gap-8 gap-2 md:mx-10 mx-5'>

                        {post.map((content) => (
                               <div className='group '>

                                    <div className='rounded-xl h-[23vh] md:h-[45vh] w-auto overflow-clip group-hover:opacity-60 duration-300 ease-in-out'>
                                        <img src={'https://parkeunsunbucket.s3.eu-west-3.amazonaws.com/Images/Home/'+(content.imgurl)} className='object-cover w-auto h-full '/>                                    
                                    </div>

                                    <div className="absolute mt-[-43vh] ml-5 opacity-0 group-hover:opacity-100  duration-300 ease-in-out">
                                        <div className='md:text-[20px] text-black font-semibold'>{content.name}</div>
                                        <div className='md:text-[12px]'>{content.dim}</div>
                                    </div>

                                </div>
                        ))}


                    </div>

                    <div className='md:mt-14 mt-10 md:mb-5 mb-5'>
                        <Link href="/atelier">
                            <p  className='text-gray-500 hover:text-gray-800 underline-offset-1 underline md:text-[18px] hover:cursor-pointer'>see all</p>
                        </Link>
                    </div>

                </div>
        
                
                <div className=' grid grid-flow-row md:mt-[10vh] mx-6 md:mx-24 md:mb-10 mb-10 justify-items-center place-items-end'>

                    <div className='grid grid-flow-col md:gap-8 gap-2'>
                        
                        <div className='rounded-sm md:h-[80vh] md:w-[40vw] overflow-clip'>
                            <motion.img style={{y:useTransform(spScroll, [.9, 1], [25, -25])}} src='https://parkeunsunbucket.s3.eu-west-3.amazonaws.com/Images/Home/EUN_SUN_PARK-87.jpg' className='object-cover w-[110%] h-[110%]'/> 
                            <div className="absolute mt-[-10vh] md:mt-[-30vh] ml-[3vw] rounded-md bg-gray-100/90 md:h-36 md:w-56 w-32 h-10 hover:scale-105 duration-300 ease-in-out">
                                <div className="m-2 md:m-5 text-black">
                                    <Link href="/exhibition">
                                        <h1 className="font-bold md:text-[20px]">Exhibitions</h1>
                                     </Link>
                                    <span className="opacity-0 md:opacity-100 md:text-[14px]">scopri tutte le esposizioni passate</span>
                                    <Link href="/exhibition">
                                        <p className="opacity-0 md:opacity-100 md:text-[13px] text-gray-600 hover:underline hover:cursor-pointer text-right md:mt-2 ">Scopri di più</p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='rounded-sm md:h-[80vh] md:w-[40vw] overflow-clip'>
                            <motion.img style={{y:useTransform(spScroll, [.9, 1], [25, -25])}} src='https://parkeunsunbucket.s3.eu-west-3.amazonaws.com/Images/Home/EUN_SUN_PARK-108.jpg' className='object-cover w-[110%] h-[110%]'/> 
                            <div className="absolute mt-[-10vh] md:mt-[-30vh] ml-[3vw] rounded-md bg-gray-100/90 md:h-36 md:w-56 w-32 h-10 hover:scale-105  duration-300 ease-in-out">
                                <div className="m-2 md:m-5 text-black">
                                    <Link href="/bio">
                                        <h1 className="font-bold md:text-[20px]">Biography</h1>
                                    </Link>
                                    <span className="opacity-0 md:opacity-100 md:text-[14px]">scopri la mia storia</span>
                                    <Link href="/bio">
                                        <p className="opacity-0 md:opacity-100 md:text-[13px] text-gray-600 hover:underline hover:cursor-pointer text-right md:mt-8 ">Scopri di più</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                           
                    </div>

                </div>

            </div>

        </div>

    </motion.div>
  )
}

export default Homesec