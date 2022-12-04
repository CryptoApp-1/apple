import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './Store'
import { useEffect, useState } from 'react'
import { fetchCategories } from '../utils/fetchCategories'
import { fetchProducts } from '../utils/fetchProducts'
import { GetServerSideProps } from 'next'

export interface BasketState {
  items: Product[]
  products:Product[]
}
const initialState: BasketState = {
  items: [], 
  products:[]
}
interface Props {
  categories: Category[];
  products: Product[];
}





export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {

    addToBasket: (state: BasketState, action: PayloadAction<Product>) => {
      state.items = [...state.items,action.payload]
    },

    removeFromBasket: (
      state: BasketState,
      action: PayloadAction<{ id: string }>
    ) => {
      const lastElement = (item: Product) => item._id === action.payload.id
      const index = state.items.findLastIndex(lastElement);


        console.log(action.payload.id)
      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      
      } else {
        console.log(
          `Cant remove product (id: ${action.payload.id}) as its not in basket!`
        );
      }

      state.items = newBasket;

    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors -> retrieving items in state to use in different components
export const selectBasketItems = (state: RootState) => state.basket.items;
export const selectBasketItemsWithId = (state: RootState, id: string) => {
  state.basket.items.filter((item: Product) => item._id === id);
};
export const selectBasketTotal = (state: RootState) =>
  state.basket.items.reduce(
    (total: number, item: Product) => (total += item.price),
    0
  );
export default basketSlice.reducer;



export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const categories = await fetchCategories();
  const products = await fetchProducts();
 
  return {
    props: {
      categories,
      products,
    },
  };
};