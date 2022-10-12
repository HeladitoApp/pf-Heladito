import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'data',
    initialState:{
        helados: []
    },
    reducers:{
        getHelados: (state, action) => {
            state.helados = action.payload
        }
    }
})
export const {getHelados} = userSlice.actions
export default userSlice.reducer