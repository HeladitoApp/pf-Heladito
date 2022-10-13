import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'data',
    initialState:{
        productos: [],
        helados: [],
        sabores: [],
        toppings: [],
        frutas: [],
        secos: [],
        combos: []
    },
    reducers:{
        getHelados: (state, action) => {
            state.helados = action.payload
        },
        getSabores: (state, action) => {
            state.sabores = action.payload
        },
        getProductos: (state, action) => {
            state.productos = action.payload
        },
        getToppings: (state, action) => {
            state.toppings = action.payload
        },
        getFrutas: (state, action) => {
            state.frutas = action.payload
        },
        getSecos: (state, action) => {
            state.secos = action.payload
        },
        getCombos: (state, action) => {
            state.combos = action.payload
        }
    }
})
export const {getHelados, getSabores, getProductos, getToppings, getFrutas, getSecos, getCombos} = userSlice.actions
export default userSlice.reducer