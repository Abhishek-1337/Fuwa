import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import alertSlice from "./slices/alertSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
  },
});

export default store;
