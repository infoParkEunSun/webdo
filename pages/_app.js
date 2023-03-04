import {React, useRef} from 'react'
import '../styles/globals.css'
import Navbar from '../components/navbar'
import { useRouter } from "next/router";
import {AnimatePresence, motion} from "framer-motion";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  const router = useRouter();

  return (

    <>
    { router.route == ['/admin', 'auth/'] ?
    (
    <main >
      <SessionProvider session={session}>

        <Component {...pageProps} />    

      </SessionProvider>         
    </main>) 
    : (
      <>
        <Navbar/>
        <AnimatePresence mode='wait'>
          <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
              y:0,
            },
            animateState: {
              opacity: 1,
              y:0,
            },
            exitState: {
              opacity:0,
              y:0,
            },
          }}>
              <main >
                <SessionProvider session={session}>
                    <Component {...pageProps} />    
                </SessionProvider>     
              </main>

            </motion.div>
          </AnimatePresence>
      </>
    )
  }
      
    </>

    )
  }

export default MyApp
