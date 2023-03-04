import {React, useState, useEffect} from 'react'
import axios from 'axios'

const Exhibit = () => {

    const [post, setPosts] = useState([])
    const apiEndPoint = 'https://parkeunsunbucket.s3.eu-west-3.amazonaws.com/JsonFiles/exhibdata.json'

    useEffect(() => {

        const getPosts = async () => {
            const { data : res } = await axios.get(apiEndPoint)
            setPosts(res);
        };
        getPosts();
    },[]);

    return (
    <div className='flex w-screen'>
    
        <div className='grid grid-cols-2 md:grid-cols-5 grid-flow-row-dense gap-5 w-full mx-5 md:mx-28'>
                    { post.map((data) => (

                            <div key={data.id} className='group relative hover:scale-105 ease-in-out duration-200'>

                                <div className='rounded-xl h-[25vh] md:h-[40vh] w-auto overflow-clip group-hover:opacity-30 duration-300 ease-in-out'>
                                    
                                    <img src={'https://parkeunsunbucket.s3.eu-west-3.amazonaws.com/Images/Exhib/'+(data.url)}  className='object-fit w-full h-full '/>       
                                                                 
                                </div>

                                <div className="absolute mt-[-35vh] opacity-0 group-hover:opacity-100  duration-300 ease-in-out">
                                 
                                    <div className='md:m-4'>
                                 
                                        <div className='md:text-[25px] text-black font-semibold'>{data.year} <br/> {data.title} </div>
                                        
                                    </div>
                                
                                </div>

                            </div>

                        ))}
            </div>

    </div>
  )
}

export default Exhibit