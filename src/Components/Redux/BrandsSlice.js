import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getBrandsAPI = createAsyncThunk('brandsSlice/getBrandsAPI', async () => {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
    return data.data
})

let initialState = { brands: [], spinner: true }
let brandsSlice = createSlice({
    name: 'BrandSlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getBrandsAPI.fulfilled, (state, action) => {
            state.brands = action.payload
            state.spinner = false
        })
    }
})

export let allBrandsSlice = brandsSlice.reducer