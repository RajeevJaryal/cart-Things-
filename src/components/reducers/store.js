import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import visibleReducer from "../UI/cartVisible";
import notificationReducer from "./notificationSlice";

const store=configureStore({
    reducer:{
        cart:cartReducer,
        cartVisible:visibleReducer,
        notification:notificationReducer,
    }
})
export default store;