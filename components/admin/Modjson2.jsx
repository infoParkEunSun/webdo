import {React, useState} from 'react'
import axios from 'axios'
import awsEx from "../../pages/api/awsEx";

const Modjson2 = (props) => {

  const [inputTitle, setinputTitle] = useState([props?.name ?? '']);
  const [inputYear, setinputYear] = useState([props?.dim ?? '']);
  const [inputText, setinputText] = useState([props?.dim ?? '']);

  const addPosts1 = async () => {
    const post1 = {
        title:inputTitle,
        year:inputYear,
        url:file.name,
        text:inputText,
        id:props.posts1.length +1
    };
    await axios.put(props.apiEndPoint1, [post1,...props.posts1]);
    props.setPosts1([post1,...props.posts1]);
  }

    const [file, setFile] = useState([]);
    const [message, setMessage] = useState();
    
    function storeFile(e)
    {
        console.log("uploading new img");
        setFile(e.target.files[0]);
    }

    const uploadFile = async() => {
        setMessage("uploading!");

        var returnData = await awsEx(file)

        setMessage(String(returnData));

        setFile(null);}
      

  return (
    <div className='mt-10 mx-10  bg-white w-[50%] rounded-lg p-2'>
                            
        <div className='w-full flex justify-center'>
          <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                      onClick={() => props.set(false)}>
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Close modal</span>
          </button>
        </div>


      <div className='grid grid-cols-2 grid-rows-2 gap-2 px-10 pb-5 '>
        
        <div className=' flex justify-center col-span-1 row-span-1'>

          <div className='grid grid-cols-1 grid-flow-row'>
            <p>Exhibit name</p>
            <input type="text" value={inputTitle} onInput={e => setinputTitle(e.target.value)} className="form-input px-4 py-3 rounded-lg h-8"/>
          </div>

        </div>

        <div className=' flex justify-center col-span-1 row-span-1'>

          <div className='grid grid-cols-1 grid-flow-row'>
            <p>Year</p>
            <input type="number" value={inputYear} onInput={e => setinputYear(e.target.value)} className="form-input px-4 py-3 rounded-lg h-8"/>
          </div>

        </div>

        <div className=' flex justify-center col-span-2 row-span-1'>

          <div className='grid grid-cols-1 grid-flow-row'>
            <p>Text</p>
            <input type="text" value={inputText} onInput={e => setinputText(e.target.value)} className="form-input px-4 py-3 rounded-lg h-8"/>
          </div>

        </div>

        <div className=' flex justify-center col-span-2 row-span-1'>
          <div className='mt-6'>
            
            <input type="file" onChange={(e) => storeFile(e)}/>
          
          </div>
        </div>

      </div>

      <div className='w-full flex justify-end -mt-14'>
         <button onClick={()=>{addPosts1(); uploadFile(); props.set(false)}} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </div>
    </div>
  )
}

export default Modjson2