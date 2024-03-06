import { configureStore } from "@reduxjs/toolkit";
import { counterSliceReducer } from "./Counterslice";
import { allBrandsSlice } from './BrandsSlice';

export let store = configureStore({
    reducer :{
      counterSlicer : counterSliceReducer,
     getAllBrandsSlice : allBrandsSlice
    }
})