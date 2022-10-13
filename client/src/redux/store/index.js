import {configureStore } from "@reduxjs/toolkit"
import state from "../slices"
export default configureStore({
    reducer:{
        state
    }
})
