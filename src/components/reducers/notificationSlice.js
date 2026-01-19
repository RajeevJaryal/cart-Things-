import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    status: null,   // "pending" | "success" | "error"
    message: null,
  },
  reducers: {
    showNotification(state, action) {
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
    clearNotification(state) {
      state.status = null;
      state.message = null;
    }
  }
});

export const { showNotification, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
