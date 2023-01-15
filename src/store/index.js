import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/entrieUser.slice";

export default configureStore({
  reducer: {
    user,
  },
});
