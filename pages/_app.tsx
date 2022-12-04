import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../Redux/Store'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { AnimatePresence , motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import { Scrollbar } from "smooth-scrollbar-react";
import { useRef } from 'react'
import type { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";
import { fetchCategories } from '../utils/fetchCategories'
import { fetchProducts } from '../utils/fetchProducts'
import { GetServerSideProps, GetStaticProps } from "next";



function  MyApp({ Component, pageProps , router}: AppProps) {


 
console.log(router.route)
const scrollbar = useRef<BaseScrollbar | null>(null);
  return (
    
    <Provider store={store}>
      <Toaster position="bottom-center"/>
      <Header/>
      <AnimatePresence  exitBeforeEnter      >
        <motion.div key ={router.route} className="z-20"  >
       

   < Component  {...pageProps}  />

   </motion.div>
   </AnimatePresence>
   </Provider>
   
    )
}


export default MyApp
