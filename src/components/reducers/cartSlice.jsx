import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  showCart: false,
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialValues,
  reducers: {
    cartShow(state) {
      state.showCart = !state.showCart;
    },

    addToCart(state, action) {
      state.totalItems++;

      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      state.totalPrice += newItem.price;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,  // unit price stored once
          quantity: 1,
          total: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.total += newItem.price;
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (!existingItem) return;

      state.totalItems--;
      state.totalPrice -= existingItem.price;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
      }
    },

    add(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (!existingItem) return;

      state.totalItems++;
      state.totalPrice += existingItem.price;
      existingItem.quantity++;
      existingItem.total += existingItem.price;
    },
  },
});

export const { cartShow, addToCart, removeFromCart, add } = cartSlice.actions;
export default cartSlice.reducer;
