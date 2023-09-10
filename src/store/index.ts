import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./combineReducer";
// import { movieReducer } from "./movieSlice";

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
