//Usuando com tookit
import { createSlice } from "@reduxjs/toolkit";

const countClick = createSlice({
    name: "counter",
    initialState: {
        counter: 0
    },
    reducers: {
        increment: (state) => {
            console.log("INCREMENTANDO")
            state.counter = state.counter + 1
        },
        decrement: (state) => {
            state.counter -= 1
        }
    },

})

export const { increment, decrement } = countClick.actions

export default countClick.reducer
//exortado para a store