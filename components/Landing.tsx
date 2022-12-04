import Image from "next/image";
import React, { useRef, useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

// Paralax  start
interface MouseEvent<T = Element> {
  clientX: number;
  clientY: number;
}

// paralax  effect end

const navVariants = {
  hidden: {
    y: 150,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
      
      
      
    },
  },
};



function Landing() {
  const [parallax, setParallax] = useState(0);
  const [parallay, setParallay] = useState(0);
  const handleMouseEvent = (e: MouseEvent<HTMLImageElement>) => {
    setTimeout(function () {
      let X = e.clientX;
      setParallax(X / 50);
      let y = e.clientY;
      setParallay(y / 50);
    }, 100);
  };

 

  const target = useRef(null);
  return (
    <section
      onMouseMove={handleMouseEvent}
      className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8 ani "
    >
      <motion.div className="space-y-8 " exit={{ opacity: 0, x: [0,10,-100], y: 0 , transition:{ type:"easeIn" , duration:1}} }>
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <motion.span
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
          >
            Powered
          </motion.span>
          <motion.span
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className="block"
          >
            By Intellect
          </motion.span>
          <motion.span
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className="block"
          >
            Driven By Values
          </motion.span>
        </h1>

        <motion.div
          className="space-x-8"
          variants={navVariants}
          initial="hidden"
          animate="visible"
         
        >
          <Button title="Buy Now " />
          <a className="link">Learn More</a>
        </motion.div>
      </motion.div>

      <motion.div
        ref={target}
        style={{ translateX: `${parallax}px`, translateY: `${parallay}px` }}
        variants={navVariants}
        initial="hidden"
        animate="visible"
        exit={{
          opacity: -1,
          x: [0,-10,100],
          y: 0,
          transition: { type: "easeIn", duration: 1 },
        }}
        className={`landing relative hidden h-[450px] w-[450px]    md:inline lg:h-[650px] lg:w-[600px]`}
      >
        <Image src="/iphone.png" layout="fill" objectFit="contain" alt="" />
      </motion.div>
    </section>
  );
}

export default Landing;
