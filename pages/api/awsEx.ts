import S3 from "aws-sdk/clients/s3"
import axios from 'axios'

const s3 = new S3({
    region: 'eu-west-3',
    accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
    secretAccessKey: process.env.NEXT_PUBLIC_SECRET_KEY,
    signatureVersion: "v4",
  });

export default async function awsEx(file:File)
{
    try
    {
        const fileParams = {
            Bucket: process.env.NEXT_PUBLIC_BUCKET_NAME,
            Key: `Images/Exhib/${file.name}`,
            Expires: 600,
            ContentType: file.type
        }

        const url = await s3.getSignedUrlPromise("putObject", fileParams);

        await axios.put(url, file, {
            headers:
            {
                'Content-type':String(file.type)
            }
        })

        return "Uploaded!";
    }
    catch(err)
    {
        return err;
    }
}