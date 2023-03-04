import Head from 'next/head'
import Image from 'next/image'
import Cont from '../components/contac/Cont'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

export default function contact() {
  return (
    <div>
      <Head>
        <title>Park Eun Sun</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

        <div className='fixed top-[-50vh] md:top-[30vh] left-[-160vw] md:left-[calc(100%-130%)] '>
          <img src='/media/P_Green.png'/>
        </div>
      
      <Cont/>
    </div>
  )
}
