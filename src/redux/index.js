import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./slices/contacts";
import { userAuthReducer } from "./slices/userAuth";


export const store = configureStore({
    reducer: {
        userAuth: userAuthReducer,
        contacts: contactsReducer
        // products: productsRESHALA
    }
})