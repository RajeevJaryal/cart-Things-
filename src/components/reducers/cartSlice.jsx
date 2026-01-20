import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addToCartAsync = createAsyncThunk(
  "cart/addToCart",
  async (item) => item
);

export const removeFromCartAsync = createAsyncThunk(
  "cart/removeFromCart",
  async (id) => id
);

export const addAsync = createAsyncThunk(
  "cart/add",
  async (id) => id
);

const initialValues = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialValues,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.totalItems++;

        const newItem = action.payload;
        const existingItem = state.items.find(item => item.id === newItem.id);

        state.totalPrice += newItem.price;

        if (!existingItem) {
          state.items.push({
            id: newItem.id,
            title: newItem.title,
            price: newItem.price,
            quantity: 1,
            total: newItem.price,
          });
        } else {
          existingItem.quantity++;
          existingItem.total += newItem.price;
        }
      })

      .addCase(removeFromCartAsync.fulfilled, (state, action) => {
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
      })

      .addCase(addAsync.fulfilled, (state, action) => {
        const id = action.payload;
        const existingItem = state.items.find(item => item.id === id);

        if (!existingItem) return;

        state.totalItems++;
        state.totalPrice += existingItem.price;
        existingItem.quantity++;
        existingItem.total += existingItem.price;
      });
  },
});

export default cartSlice.reducer;
