import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducer";

const store = configureStore({
  // reducer
  reducer: mainReducer,
});

export default store;
