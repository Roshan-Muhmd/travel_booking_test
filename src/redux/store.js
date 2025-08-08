import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./commonSlice"
import authReducer from "./authslice"
import propertyReducer from "./propertySlice"

const store = configureStore({
    reducer: {
        common:commonReducer,
        auth:authReducer,
        property:propertyReducer
    }
})

export default store