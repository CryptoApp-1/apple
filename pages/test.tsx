import Spline from '@splinetool/react-spline'
import React from 'react'
import { fetchCategories } from '../utils/fetchCategories'
import { fetchProducts } from '../utils/fetchProducts'

const test =  () => {
//   const aissa = async() =>{
// const categories = await fetchCategories();
// return categories
//   }

//   console.log(aissa())
  return (
    <div className='w-[200px] h-[200px]'>
    qsdq
 
    </div>
  )
}

export default test

export const getServerSideProps : GetServerSideProps<Props> = async () => {
 
  const products = await fetchProducts();

  return {
    props: {

      products,
    },
  };
};
