import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from './user/userSLice'


export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
