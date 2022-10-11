import {createSlice} from '@reduxjs/toolkit'
//Prueba
export const userSlice = createSlice({
    name: "user",
    initialState:{
        list: "hola estado incial"
    },
    reducers:{
        //Aqui se realiza las actions
        addList: (state,action)=>{
            state.list = "hola"
        }
    }
})
//{´------------}
export const {addList} = userSlice.actions
export default userSlice.reducer