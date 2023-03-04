import {React, useState, useEffect} from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";

import axios from 'axios'

const CardsBio = () => { 
     

    const [post, setPosts] = useState([])
    const apiEndPoint = 'https://parkeunsunbucket.s3.eu-west-3.amazonaws.com/JsonFiles/bio.json'

    useEffect(() => {

        const getPosts = async () => {
            const { data : res } = await axios.get(apiEndPoint)
            setPosts(res);
        };
        getPosts();
    },[]);

    const panel = post.map((bio) => {
        return (
            <TabsBody>

                {bio.text.map((text) => (
                <TabPanel key={text.key} value={text.value} className='' >

                        <div className='snap-start text-xl font-bold justify-left mb-5 text-black'>
                            {text.biotitle}
                        </div>

                        <p className='mx-2 text-black'>
                            {text.biotext}
                        </p>
     
                </TabPanel>))}

            </TabsBody>
        )})
        

      return (
        <div className='flex w-screen justify-center mt-[20vh] bg-transparent'>
            <Tabs value="html" className='bg-transparent rounded-xl z-[50] mx-5'>
            <TabsHeader className=" rounded-lg border-none bg-transparent">
                {post.map(({ label, value, key }) => (
                <Tab key={key} value={value}>
                {label}
                </Tab>
                ))}
            </TabsHeader>
            <dl key={0} className="overflow-y-auto snap-proximity snap-y h-[60vh] p-4 pt-0 mx-auto max-w-screen-xl text-black bg-transparent">
            {panel}
            </dl>
      
            </Tabs>
        </div>
        
      );
    }
    // return (
        
    //     <div className='flex justify-center mt-[20vh]'>
    //         <div className="w-[80vw] bg-white rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700">

    //             <ul key={0} className="text-base font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 sm:flex dark:divide-gray-600 dark:text-gray-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
    //                 <li className="w-[80vw]" key={1}>
    //                     <button id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true" className="inline-block p-4 w-full bg-gray-50 rounded-tl-lg hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Early days</button>
    //                 </div>
    //                 <li className="w-[80vw]" key={2}>
    //                     <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false" className="inline-block p-4 w-full bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Destination Italy</button>
    //                 </div>
    //                 <li className="w-[80vw]" key={3}>
    //                     <button id="faq-tab" data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="false" className="inline-block p-4 w-full bg-gray-50 rounded-tr-lg hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">The success</button>
    //                 </div>
    //             </ul>


    //             <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
    //                 <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
    //                     <dl className="overflow-y-auto snap-proximity snap-y h-[60vh] grid grid-cols-1 p-4 pt-0 mx-auto max-w-screen-xl text-gray-900  dark:text-white sm:p-8">
                            
    //                         { bio_sec1.map((id) => (
    //                         <>
    //                             <div className='snap-start text-xl font-bold justify-left mb-5'>
    //                                 {id.biotitle}</div>
    //                             <div className="flex text-left">
    //                                 {id.biotext1} <br/>
    //                                 {id.biotext2} <br/>
    //                                 {id.biotext3} <br/>
    //                                 {id.biotext4} <br/>
    //                                 {id.biotext5} <br/>
    //                                 {id.biotext6} </div>
    //                         </>
    //                         ))}
    //                     </dl>
    //                 </div>

    //                 <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
    //                     <dl className="overflow-y-auto snap-proximity snap-y h-[60vh] grid grid-cols-1 p-4 pt-0 mx-auto max-w-screen-xl text-gray-900  dark:text-white sm:p-8">
                            
    //                         { bio_sec2.map((id) => (
    //                         <>
    //                             <div className='snap-start text-xl font-bold justify-left mb-5 mt-5'>
    //                                 {id.biotitle}</div>
    //                             <div className="flex text-left">
    //                                 {id.biotext1} <br/>
    //                                 {id.biotext2} <br/>
    //                                 {id.biotext3} <br/>
    //                                 {id.biotext4} <br/>
    //                                 {id.biotext5} <br/>
    //                                 {id.biotext6}<br/>
    //                                 {id.biotext7} </div>
    //                         </>
    //                         ))}
    //                     </dl>
    //                 </div>

    //                 <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="faq" role="tabpanel" aria-labelledby="faq-tab">
    //                     <dl className="overflow-y-auto snap-proximity snap-y h-[60vh] grid grid-cols-1 p-4 pt-0 mx-auto max-w-screen-xl text-gray-900  dark:text-white sm:p-8">
                                
    //                             { bio_sec3.map((id) => (
    //                             <>
    //                                 <div className='snap-start text-xl font-bold justify-left mb-5 mt-5'>
    //                                     {id.biotitle}</div>
    //                                 <div className="flex text-left">
    //                                     {id.biotext1} <br/>
    //                                     {id.biotext2} <br/>
    //                                     {id.biotext3} <br/>
    //                                     {id.biotext4} <br/>
    //                                     {id.biotext5} <br/>
    //                                     {id.biotext6} </div>
    //                             </>
    //                             ))}
    //                     </dl>
    //                 </div>
    //             </div>
    //         </div>

            
    //     </div>
    // )
    // }

export default CardsBio