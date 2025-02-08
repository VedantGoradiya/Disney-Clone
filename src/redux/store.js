import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSLice";

export default configureStore({
  reducer: {
    user: userReducer,
  }
});
