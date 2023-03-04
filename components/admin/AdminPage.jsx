import {React, useEffect, useState} from 'react'
import axios from 'axios'
import Modjson from './Modjson'
import Modjson2 from './Modjson2'
import Modjson3 from './Modjson3'
import { signOut } from "next-auth/react"

const AdminPage = () => {

    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const [posts1, setPosts1] = useState([])
    const apiEndPoint1 = 'https://parkeunsunbucket.s3.eu-west-3.amazonaws.com/JsonFiles/exhibdata.json'

    const [posts2, setPosts2] = useState([])
    const apiEndPoint2 = 'https://parkeunsunbucket.s3.eu-west-3.amazonaws.com/JsonFiles/atelierdata.json'

    const [Home, setHome] = useState([])
    const apiEndPoint3 = 'https://parkeunsunbucket.s3.eu-west-3.amazonaws.com/JsonFiles/homedata.json'


    useEffect(() => {

        const getPosts1 = async () => {
            const { data : res } = await axios.get(apiEndPoint1)
            setPosts1(res);
        };
        getPosts1();
    },[]);

    useEffect(() => {

        const getPosts2 = async () => {
            const { data : res } = await axios.get(apiEndPoint2)
            setPosts2(res);
        };
        getPosts2();
    },[]);

    useEffect(() => {

        const getHome = async () => {
            const { data : res } = await axios.get(apiEndPoint3)
            setHome(res);
        };
        getHome();
    },[]);

    const handleDelete1 = async post => {
        setPosts1(posts1.filter((p) => p.id !== post.id));
        await axios.put(apiEndPoint1, posts1.filter((p) => p.id !== post.id));
        await axios.delete('https://parkeunsunbucket.s3.eu-west-3.amazonaws.com/Images/Exhib/'+(post.imgurl))
    }

    const handleDelete2 = async post => {
        setPosts2(posts2.filter((p) => p.id !== post.id));
        await axios.put(apiEndPoint2, posts2.filter((p) => p.id !== post.id));
        await axios.delete('https://parkeunsunbucket.s3.eu-west-3.amazonaws.com/Images/Atelier/'+(post.imgurl))
    }

    const handleDelete3 = async post => {
        setHome(Home.filter((p) => p.id !== post.id));
        await axios.put(apiEndPoint3, Home.filter((p) => p.id !== post.id));
        await axios.delete('https://parkeunsunbucket.s3.eu-west-3.amazonaws.com/Images/Home/'+(post.imgurl))
    }

  return (
    <div className='md:mt-20'>
              <div>
                <div className='flex w-full justify-end pr-10 z-20'>
                    <button
                    type="button"
                    onClick={() => signOut()}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                    Logout
                    </button>
                </div>
                                  
                <div id='exhibitions' className='flex justify-center md:pt-[5vh] md:mx-10'>
                <div className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800 w-full">
                    Home Items
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">There are {Home.length} elements in the Exhibition page</p>
                </div>    
                <button onClick={() => setShowModal2(true)} className='relative bg-blue-700 hover:bg-blue-400 text-white'>Add item</button>
                </div>
                
                <div className='md:mx-10'>
                    <div className="relative overflow-x-auto overflow-y-scroll shadow-md md:min-h-[20vh]">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                            
                            <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        dim
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Img Url
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <span  className="sr-only">Delete</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                { Home.map((content) => (
                                <tr key={content.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {content.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {content.dim}
                                    </td>
                                    <td className="px-6 py-4">
                                        {content.imgurl}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a onClick={()=>handleDelete3(content)} className="font-medium text-red-600 dark:text-blue-500 hover:underline hover:cursor-pointer">Delete</a>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>

        {showModal2 ? (
            <div className='flex justify-center'>
                <Modjson3 
                    set={setShowModal2} 
                    apiEndPoint2={apiEndPoint3}
                    posts2={Home}
                    setPosts2={setHome}/>
            </div>
            ) : null}

        {showModal1 ? (
            <div className='flex justify-center'>
                <Modjson 
                    set={setShowModal1} 
                    apiEndPoint2={apiEndPoint2}
                    posts2={posts2}
                    setPosts2={setPosts2}/>
            </div>
            ) : null}

        {showModal ? (
            <div className='flex justify-center'>
                <Modjson2 
                    set={setShowModal} 
                    apiEndPoint1={apiEndPoint1}
                    posts1={posts1}
                    setPosts1={setPosts1}/>
            </div>
            ) : null}


        

      <div className='grid grid-cols-2 grid-flow-row mb-10'>

        <div>

            <div id='atelier' className='flex justify-center md:pt-[5vh] md:mx-10'>
                  <div className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800 w-full">
                      Atelier Items
                      <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">There are {posts2.length} elements in the atelier page</p>
                  </div>    

                  <button onClick={() => setShowModal1(true)} className='relative bg-blue-700 hover:bg-blue-400 text-white'>Add item</button>
            </div>
              
            <div className='md:mx-10'>
                    <div className="relative overflow-x-auto overflow-y-scroll shadow-md md:h-[70vh]">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                            <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Dimensions
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Img Url
                                    </th>

                                    <th scope="col" className="px-6 py-3">
                                        <span  className="sr-only">Delete</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                { posts2.map((content) => (
                                    <>
                                  <tr key={content.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                       <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {content.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {content.dim}
                                        </td>
                                        <td className="px-6 py-4">
                                            {content.imgurl}
                                        </td>

                                        <td className="px-6 py-4 text-right">
                                            <a onClick={()=>handleDelete2(content)} className="font-medium text-red-600 dark:text-blue-500 hover:underline hover:cursor-pointer">Delete</a>
                                        </td>
                                    </tr>

                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
            </div>

        </div>

        <div>
                                  
            <div id='exhibitions' className='flex justify-center md:pt-[5vh] md:mx-10'>
              <div className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800 w-full">
                  Exhibitions Items
                  <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">There are {posts1.length} elements in the Exhibition page</p>
              </div>    
              <button onClick={() => setShowModal(true)} className='relative bg-blue-700 hover:bg-blue-400 text-white'>Add item</button>
            </div>
            
            <div className='md:mx-10'>
                <div className="relative overflow-x-auto overflow-y-scroll shadow-md md:h-[70vh]">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                        
                        <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Exhib Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Year
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Img Url
                                </th>
                                 <th scope="col" className="px-6 py-3">
                                    <span  className="sr-only">Delete</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            { posts1.map((content) => (
                              <tr key={content.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                      {content.title}
                                  </th>
                                  <td className="px-6 py-4">
                                      {content.year}
                                  </td>
                                  <td className="px-6 py-4">
                                      {content.url}
                                  </td>
                                  <td className="px-6 py-4 text-right">
                                      <a onClick={()=>handleDelete1(content)} className="font-medium text-red-600 dark:text-blue-500 hover:underline hover:cursor-pointer">Delete</a>
                                  </td>
                              </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            

        </div>


      </div>



    </div>
  )
}

export default AdminPage