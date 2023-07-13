import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Toast from 'react-native-toast-message';
import { BASE_URL } from "../../../config/api";
import useAxios from "../../../hooks/useAxios";
import { IUser } from "../../../navigations/types";


export const getUser = createAsyncThunk(
  "auth/getUser",
  async (data: any, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${BASE_URL}/user`,
        method: "get",
      });
      const reps: { data: { user: IUser } } = response.data
      return reps.data.user;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const mss = error.response.data.message
        console.log(error.response.data.message)
        return thunkAPI.rejectWithValue(mss);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);
