import { createSlice } from '@reduxjs/toolkit';

export const state = createSlice({
    name: "state",
    initialState: {
        productos: [],
        flavors: [],
        toppings: [],
        types: [],
        details: {},
        carrito: {}
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
        getDetails: (state, action) => {
            state.details = action.payload
        },
        getTypes: (state, action) => {
            state.types = action.payload
        },
        filterByType: (state, action) => {
            state.productos = action.payload
        },
        addToCart: (state, {payload}) => {
            state.carrito = { ...state.carrito, payload }
        }
    }
});

export const { getProductos, getFlavors, getToppings } = state.actions;
export default state.reducer;