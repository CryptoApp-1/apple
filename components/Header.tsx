import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../Redux/basketSlice";
import { motion } from "framer-motion"
import {  slideIn, textVariant } from "../utils/motion";
//animation varitan START
export const staggerVariants = {
  hidden: { opacity:1},
  show: { opacity:1,
  transition: {
    staggerChildren:0.1,
    delayChildren:1
    
    
    
  }
  
  }
} 
export const navLVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      
      ease: "easeInOut",
      type:"spring"
    },
  },
} 
export const navRVariants = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      
      ease: "easeInOut",
      type:"spring"
    },
  },
} 
//animation varitan END









function Header() {
  
  const session = false;
  const items = useSelector(selectBasketItems)
  
  const [color, setColor] = useState(true)

  

  useEffect(() => {
   
    const changeColor =()=> {
      console.log(window.scrollY)
      if(window.scrollY >= 90) {
        setColor(true)
      }else {
        setColor(false)
      }}

    window.addEventListener("scroll", changeColor);



},[])
    
  




  return (
    <motion.header     className={`sticky ${ color ?"bg-dark" : "bg-[#35383C]"} p-4`} >
      <motion.div   variants={staggerVariants} initial="hidden" animate="show" className=" relative top-0 z-10 flex w-full items-center justify-between" >
      <div   className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <motion.div variants={navLVariants}  className="relative h-10 w-5 cursor-pointer opacity-75  hover:opacity-100">
            <img
              src="./icon.png"
             
              alt=""
           
            />
          </motion.div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <Link href="/iphone">
        <motion.p variants={navLVariants} className="headerLink">iPhone</motion.p>
        </Link>
        <Link href="/mac">
        <motion.p variants={navLVariants} className="headerLink">Mac</motion.p>
        </Link>
        <Link href="/ipad">
        <motion.p variants={navLVariants} className="headerLink">iPad</motion.p>
        </Link>
        <Link href="/watch">
        <motion.p variants={navLVariants} className="headerLink">Watch</motion.p>
        </Link>
        <Link href="/airpods">
        <motion.p variants={navLVariants} className="headerLink">AirPods</motion.p>
        </Link>
        
      </div>
      <div   className="flex items-center justify-center gap-x-4 md:w-1/5">
        <motion.div variants={navRVariants}>
        <MagnifyingGlassIcon className="headerIcon" />
        </motion.div>
        <div className="relative cursor-pointer">
        <motion.div variants={navRVariants}>
        <Link  href="/checkout">
          <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white transition">
            {items.length}
          </span>
          
          
          <ShoppingBagIcon  className="headerIcon" />
          
          </Link>
          </motion.div>
        </div>

        <motion.div variants={navRVariants}>
        {session ? (
          <Image 
            src={
              // session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            // onClick={() => signOut()}
          />
        ) : (
          <UserIcon className="headerIcon"
           // onClick={() => signIn()} 
           />
        )}
      </motion.div>
      </div>

      </motion.div>
    </motion.header>
  );
}

export default Header;
