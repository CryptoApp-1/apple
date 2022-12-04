import { GetServerSideProps, GetStaticProps,  } from "next"
import { Tab } from "@headlessui/react";

import LandingMac from "../components/LandingMac"
import { fetchCategories } from "../utils/fetchCategories";
import { fetchProducts } from "../utils/fetchProducts";
import Product from "../components/Product";
import Basket from "../components/Basket";
// import Video from "../components/Video";
import { motion } from "framer-motion"
import Video from "../components/Video";
import Image from "next/image";
import { useRef } from "react";
import SmoothScroll from "../components/SmoothScroll";
import Spline from '@splinetool/react-spline';
import { Scrollbar } from "smooth-scrollbar-react";
import Head from "next/head";
import Header from "../components/Header";


const pageVariants = {

  hidden: {
    y:-50,
    opacity :0
  },
  visible:{
    y:0,
    opacity:1,
    transition:{
      duration:1,
      
    
    },
    
  },
  
}
const featuresVariants = {

  hidden: {
    opacity :0
  },
  visible:{
    opacity:1,
    transition:{
      duration:1,
      
    },


    
  },
  
}



interface Props {

  products: Product[]
}


const Home = ({products}:Props) => {

const categories = [{_id:"f83b9bc0-9bb8-4c31-8cd9-1a9ea7361b03"}]
  console.log(products)

  const showProducts = () => {
    return products
      .filter((product) => product.category._ref === categories[0]._id)
      .map((product) => <Product product={product} key={product._id} />); // filter products by category
  };
  return (

    

 <motion.div variants={pageVariants} initial="hidden" animate="visible" style={{display: 'flex', maxHeight: '100vh'}}    className="z-40">
   <Basket />

  
      <Scrollbar 
 damping={0.07}

plugins={{

  overscroll: {
    effect: "bounce"
  } as const
}}
> 


  <main className="relative h-[100vh] bg-dark  space-y-10 ">
   <LandingMac/>
  </main>
  
  <motion.section  variants={featuresVariants} initial="hidden" whileInView="visible" viewport={{ once: false , amount: 0.8 }} exit={{ opacity: 0, transition:{ type:"easeIn" , duration:1}} }  className="relative   h-[100vh]  bg-[#E7ECEE] space-y-10   min-h-screen " >
        <div  className="justify-center space-x-0 items-center flex min-h-screen  relative  text-center font-medium tracking-wide text-black md:text-2xl">
          <div className="flex-row space-y-60">
          <div className=" flex items-center  transition duration-1000 space-x-3 ">
            
            <Image  src="/mac3d.png" width={400} height={400} className="hover:scale-[1.05] shadow-2xl bg-light  hover:border rounded transition"  
              alt="" />
              <div className="flex flex-col">
           
            <span className="bg-black w-20 hover:w-20 h-[2px] relative transition"></span>
            </div>
            <h1>Amazing 3d rendering</h1>
          </div>
          <div className=" flex items-center  transition duration-1000 space-x-3 ">
            
            <Image  src="/macaudio.png" width={400} height={400} className="hover:scale-[1.05] shadow-2xl bg-light  hover:border rounded transition"  
              alt="" />
              <div className="flex flex-col">
           
            <span className="bg-black w-20 hover:w-20 h-[2px] relative transition"></span>
            </div>
            <h1>Amazing 3d rendering</h1>
          </div>
          </div>
          <div className=" flex items-center  transition duration-1000 space-x-3 ">
            
              <div className="flex flex-col">
           
            <span className="bg-black w-20 hover:w-20 h-[2px] relative transition"></span>
            </div>
            <h1>Amazing 3d rendering</h1>
            <Image  src="/maccolor.png" width={400} height={400} className="hover:scale-[1.05] shadow-2xl bg-light  hover:border rounded transition"  alt="" />
          </div>
        </div>
  </motion.section >


    <section className="relative  h-screen  flex justify-center">
    <div className="w-full">
 


    </div>
    </section>


  <motion.section className="relative h-[200vh] min-h-screen bg-[#1B1B1B]" variants={featuresVariants} initial="hidden" whileInView="visible" viewport={{ once: false , amount: 0.4}} exit={{ opacity: 0, transition:{ type:"easeIn" , duration:1}} }>
        <div className="space-y-10 py-60">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            New Promos
          </h1>
          <Tab.Group>
            <Tab.List className="flex justify-center">
              
                <Tab
                  key={categories[0]._id}
                  id={categories[0]._id}
                  className= "whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none  md:py-4 md:px-6 md:text-base transition borderGradient bg-[#35383C] text-white "
                >
                  Mac
                </Tab>
              
              
            </Tab.List>
            <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
              
                
                    <Tab.Panel key={categories[0]._id} className="tabPanel">{showProducts()}</Tab.Panel>
                  
            </Tab.Panels>
          </Tab.Group>

          {/* <Video/> */}
             
    
        </div>
      </motion.section>
 
       
 </Scrollbar> 
 </motion.div>


  )
}


export default Home




// Back  END Code
export  const getServerSideProps : GetServerSideProps<Props>  = async () => {


 const products = await fetchProducts()
    
    return {
      props: {
        products,
      },
    }
}

// Backend Code 

