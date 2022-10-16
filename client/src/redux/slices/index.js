import { createSlice } from '@reduxjs/toolkit';

export const state = createSlice({
    name: "state",
    initialState: {
        productos: [],
        flavors: [],
        toppings: [],
        types: ["helados", "combos", "bombones", "shakes", "parfaits", "crepes"], /* <-- está harcodeado hasta que funcione la action */
        details: [],
        carrito: {},
        compra: {}
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
        orderByPrice: (state, action) => {
            state.productos = action.payload
        },
        addToCart: (state, {payload}) => {
            state.carrito = { ...state.carrito, payload }
        },
        addCompra:(state, {payload}) => {
            state.compra = { ...state.compra, payload }
        },
    }
});

export const { getProductos, getFlavors, getToppings, getTypes, getDetails, orderByPrice, addCompra } = state.actions;
export default state.reducer;