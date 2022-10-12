import {configureStore } from "@reduxjs/toolkit"
// import users from "../slices"
import data from '../slices/index'
export default configureStore({
    reducer:{
        data:data
        // helados: helados

    }
})