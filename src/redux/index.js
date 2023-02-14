import { configureStore } from "@reduxjs/toolkit";
import { userAuthReducer } from "./slices/userAuth";


export const store = configureStore({
    reducer: {
        userAuth: userAuthReducer
        // products: productsRESHALA
    }
})