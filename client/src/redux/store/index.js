import {configureStore } from "@reduxjs/toolkit"
import users from "../slices"
export default configureStore({
    reducer:{
        users
    }
})