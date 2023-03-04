import Head from 'next/head'
import Atelier from '../components/atelier/Atelier'
import IntroAt from '../components/atelier/IntroAt'
import Footer from '../components/Footer'

export default function bio() {
  return (
    <div>
      <Head>
        <title>Park Eun Sun</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <IntroAt/>
      <Atelier/>
      <div className='absolute '>
          <Footer/>
      </div>
      <div className='absolute right-32 opacity-0 md:opacity-100'>
          <div className='text-[28px] md:m-14'>Follow me on Instagram <a className='text-[30px] text-gray-600 hover:text-lime-700 text-  hover:cursor-pointer'>Parkeunsun.Sculptor</a></div>
      </div>
    </div>
  )
}