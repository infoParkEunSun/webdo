import {React, useState, useEffect} from 'react'
import axios from 'axios'

const Atelier = () => {

    const [post, setPosts] = useState([])
    const apiEndPoint = 'https://parkeunsunbucket.s3.eu-west-3.amazonaws.com/JsonFiles/atelierdata.json'

    useEffect(() => {

        const getPosts = async () => {
            const { data : res } = await axios.get(apiEndPoint)
            setPosts(res);
        };
        getPosts();
    },[]);

    return (
        <div className='h-auto z-10 mb-20'>
            <div className='flex w-screen'>

                <div className='grid grid-cols-2 md:grid-cols-5 grid-flow-row-dense gap-5 w-full mx-5 md:mx-28'>
                    { post.map((content) => (
                        
                        <div key={content.id} className='group '>

                            <div className='rounded-xl h-[35vh] md:h-[45vh] w-auto overflow-clip group-hover:opacity-60 duration-300 ease-in-out'>
                                <img src={'https://parkeunsunbucket.s3.eu-west-3.amazonaws.com/Images/Atelier/'+(content.imgurl)} className='object-cover w-full h-full '/>                                    
                            </div>

                            <div className="absolute mt-[-43vh] ml-5 opacity-0 group-hover:opacity-100  duration-300 ease-in-out">
                                <div className='md:text-[20px] text-black font-semibold'>{content.name}</div>
                                <div className='md:text-[12px]'>{content.dim}</div>
                            </div>

                        </div>
                    ))

                    }
                </div>

            </div>
        </div>
    )
}

export default Atelier