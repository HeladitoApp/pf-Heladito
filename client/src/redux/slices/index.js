import { createSlice } from '@reduxjs/toolkit';
//hola
export const state = createSlice({
    name: "state",
    initialState: {
        productos: [],
        productosFiltrados: [],
        flavors: [],
        toppings: [],
        types: ["helados", "combos", "bombones", "shakes", "parfaits", "crepes"], /* <-- está harcodeado hasta que funcione la action */
        details: [],
        carrito: {},
        respuestacompra: '',
        loading: false
    },
    reducers: {
        //Aqui se realiza las actions
        changeLoading: (state, action) => {
            state.loading = action.payload
        },
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
            state.productos = state.productos.sort((a, b) => {
                if(a.price < b.price) {
                    return action.payload === "ascendente" ? -1 : 1;
                }
                if(a.price > b.price) {
                    return action.payload === "ascendente" ? 1 : -1;
                }
                return 0;
            });
        },
        addToCart: (state, {payload}) => {
            state.carrito = { ...state.carrito, payload }
        },
        addCompra:(state, action) => {
            state.respuestacompra =  action.payload 
        },
        clearDetails: (state) => {
            state.details = []
        }
    }
});

export const { changeLoading, getProductos, getFlavors, getToppings, getTypes, getDetails, orderByPrice, filterByType, addCompra, clearDetails } = state.actions;
export default state.reducer;
