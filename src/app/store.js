import { configureStore } from "@reduxjs/toolkit";
import authStore from "../features/auth";
export default configureStore({
  reducer: {
    authentication: authStore,
  },
});
