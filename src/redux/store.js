import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSLice";
import movieReducer from './movies/moviesSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  }
});
