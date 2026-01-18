import { createSlice } from "@reduxjs/toolkit";

const initialValues={showCart:false};
const cartSlice=createSlice({
    name:"cart",
    initialState: initialValues,
    reducers:{
        cartShow(state){
            state.showCart=!state.showCart;
        }
    }
});
export const {cartShow}=cartSlice.actions;
export default cartSlice.reducer;