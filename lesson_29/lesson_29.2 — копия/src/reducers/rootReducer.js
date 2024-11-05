import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
