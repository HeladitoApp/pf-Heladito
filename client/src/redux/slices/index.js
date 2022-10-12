import {createSlice} from '@reduxjs/toolkit'

export const state = createSlice({
    name: "state",
    initialState: {
        productos: []
    },
    reducers:{
        //Aqui se realiza las actions
        getProductos : (state,action)=>{
            state.productos = action.payload 
        }
    }
})
export const {getProductos} = state.actions
export default state.reducer