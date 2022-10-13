import { createSlice } from '@reduxjs/toolkit';

export const state = createSlice({
    name: "state",
    initialState: {
        productos: [],
        flavors: [],
        toppings: [],
    },
    reducers: {
        //Aqui se realiza las actions
        getProductos: (state, action) => {
            state.productos = action.payload
        },
        getFlavors: (state, action) => {
            state.flavors = action.payload
        },
        getToppings: (state, action) => {
            state.toppings = action.payload
        },
    }
})
export const { getProductos, getFlavors, getToppings } = state.actions;
export default state.reducer;