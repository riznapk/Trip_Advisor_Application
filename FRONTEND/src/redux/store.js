import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./userDetailsReducer";
import packageDetailsReducer from "./packageDetailsReducer";

const rootReducer = combineReducers({
  user: userDetailsReducer,
  package: packageDetailsReducer,
});

export default configureStore({
  reducer: rootReducer,
});
