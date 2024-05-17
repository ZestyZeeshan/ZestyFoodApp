import {configureStore, createReducer} from "@reduxjs/toolkit"
import cartReducer from "./cartSlice";
//import { useReducer } from "react";

const appStore = configureStore({
    reducer:{
        cart: cartReducer,
       // user:useReducer
    },
});

export default appStore;