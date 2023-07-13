import { createSlice } from "@reduxjs/toolkit";
import {
  signIn,
  signUpOrganization,
  login,
  resetPassword,
  updatePassword
} from "./thunkAction";

interface IState {
  loading: "failed" | "pending" | "successful" | "idle";
}

const initialState: IState = {
  loading: "idle"
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    
  },

  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      return { ...state, loading: "successful", };
    });
    builder.addCase(signIn.rejected, (state, action) => {
      return { ...state, loading: "failed" };
    });

    // corperate sign up
    builder.addCase(signUpOrganization.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(signUpOrganization.fulfilled, (state, action) => {
      return { ...state, loading: "successful", };
    });
    builder.addCase(signUpOrganization.rejected, (state, action) => {
      return { ...state, loading: "failed" };
    });

    // login user
    builder.addCase(login.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(login.fulfilled, (state, action) => {
      return { ...state, loading: "successful", };
    });
    builder.addCase(login.rejected, (state, action) => {
      return { ...state, loading: "failed" };
    });

    // reset password
    builder.addCase(resetPassword.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      return { ...state, loading: "successful", };
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      return { ...state, loading: "failed" };
    });

    // update password
    builder.addCase(updatePassword.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(updatePassword.fulfilled, (state, action) => {
      return { ...state, loading: "successful", };
    });
    builder.addCase(updatePassword.rejected, (state, action) => {
      return { ...state, loading: "failed" };
    });
  },
});
export const authReducer = authSlice.reducer;
