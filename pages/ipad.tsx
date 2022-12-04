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
import LandingIpad from "../components/LandingIpad";

interface Props {

  products: Product[]
}


const Home = ({products}:Props) => {
const categories = [{_id:"237feab8-aae5-438a-8988-81adcc3c28ea"}]
  console.log(products)

  const showProducts = () => {
    return products
      .filter((product) => product.category._ref === categories[0]._id)
      .map((product) => <Product product={product} key={product._id} />); // filter products by category
  };
  return (
 <div >

      <Basket/>
  <main className="relative h-[100vh] bg-[#E7ECEE]  ">
  <LandingIpad/>
  </main>
  {/* <Video/> */}
  <section className="relative  min-h-screen bg-[#1B1B1B]">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            New Promos
          </h1>


          {/* <Video/> */}
             
    
        </div>
      </section>

 </div>
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

