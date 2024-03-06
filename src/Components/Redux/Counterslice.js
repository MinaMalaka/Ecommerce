import { createSlice } from "@reduxjs/toolkit";

let initialState = { count: 0, userName: '' }
let counterSlice = createSlice({
    name: 'sliceCounter',
    initialState,
    reducers: {
        increase: (state) => {
            state.count += 1
        },
        decrease: (state) => {
            state.count -= 1
        },
        incByAmount: (state, action) => {
            state.count += action.payload
        }
    }
})

export let counterSliceReducer = counterSlice.reducer;
export let { increase, decrease, incByAmount } = counterSlice.actions;