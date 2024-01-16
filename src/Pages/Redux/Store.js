import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./UserSlice.js";
import { AlertSlice } from "./AlertSlice.js";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    alerts: AlertSlice.reducer,
  },
});
