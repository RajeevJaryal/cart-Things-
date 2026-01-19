import { createSlice } from "@reduxjs/toolkit";

const cartVisible=createSlice({
    name:"cartVisible",
    initialState: {showCart: false},
    reducers:{
        cartShow(state) {
      state.showCart = !state.showCart;
    },
    }
});

export const {cartShow}=cartVisible.actions;
export default cartVisible.reducer;