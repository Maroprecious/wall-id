import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth";
import { userReducer } from "./reducers/user";
import { userOrganizationReducer } from "./reducers/user-organization";
import { userSubscriptionReducer } from "./reducers/user-subscriptions";

export const rootReducer = combineReducers({
  authReducer,
  userReducer,
  userOrganizationReducer,
  userSubscriptionReducer
});
export type RootState = ReturnType<typeof rootReducer>;
