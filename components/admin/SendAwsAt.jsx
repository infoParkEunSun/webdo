import { useState } from "react";
import awsAt from "../../pages/api/awsAt";

export default function SendAwsAt(props)
{
    const [message, setMessage] = useState();
    const [file, setFile] = useState();

    function storeFile(e)
    {
        console.log("uploading new img");
        setFile(e.target.files[0]);
    }

    const uploadFile = async() => {
        setMessage("uploading!");

        var returnData = await awsAt(file)

        setMessage(String(returnData));

        setFile(null);
    }
    return (
        <>
            <div className="bg-white rounded-lg md:m-10 md:py-2">
                <div className="mx-5 text-[20px]">
                    <p className="py-5">Upload file to the Atelier database:</p>
                    <p className="text-blue-700">{message}</p>
                    <input type="file" onChange={(e) => storeFile(e)}/>
                    <div className="relative flex w-full justify-end">
                        <input className="m-2 p-2 rounded-md bg-slate-800 text-white hover:bg-slate-600 text-base" type="button" onClick={uploadFile} defaultValue="Send"/>
                    </div>
                </div>

            </div>
        </>
    )
}