import { createSlice } from "@reduxjs/toolkit";
import {
  getUser
} from "./thunkAction";
import { IUser, IUserData } from "../../../navigations/types";

interface IState {
  loading: "failed" | "pending" | "successful" | "idle";
  user: IUser
}

const initialState: IState = {
  loading: "idle",
  user: {
    id: 0,
    username: '',
    email: '',
    type: '',
    status: '',
    details: {
      id: 0,
      firstname: '',
      lastname: '',
      phone: '',
      dob: '',
      id_card_number: '',
      image: '',
      bio: '',
      created_at: ''
    }
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      return { ...state, loading: "successful", user: action.payload };
    });
    builder.addCase(getUser.rejected, (state, action) => {
      return { ...state, loading: "failed" };
    });
  },
});
export const userReducer = userSlice.reducer;
