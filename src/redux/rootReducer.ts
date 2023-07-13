import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth";
import { userReducer } from "./reducers/user";

export const rootReducer = combineReducers({
  authReducer,
  userReducer
});
export type RootState = ReturnType<typeof rootReducer>;
