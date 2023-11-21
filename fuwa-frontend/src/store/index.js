import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import alertSlice from "./slices/alertSlice";
import friendSlice from "./slices/friendsSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
    friend: friendSlice.reducer,
  },
});

export default store;
