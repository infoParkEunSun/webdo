import Head from 'next/head'
import Image from 'next/image'
import CardsBio from '../components/bio/CardsBio'
import IntroBio from '../components/bio/IntroBio'

export default function bio() {
  return (
    <div>
      <Head>
        <title>Park Eun Sun</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IntroBio/>
      <CardsBio/>
    </div>
  )
}