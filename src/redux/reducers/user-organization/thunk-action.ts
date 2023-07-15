import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Toast from 'react-native-toast-message';
import { BASE_URL } from "../../../config/api";
import useAxios from "../../../hooks/useAxios";

export const getListOrganizations = createAsyncThunk(
    "user/getListOrganizations",
    async (data: any, thunkAPI) => {
      try {
        const response = await useAxios({
          url: `${BASE_URL}/individuals/organizations/o/${data}`,
          method: "get",
        });
        return response.data.data;
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
  export const getJoinedOrganizations = createAsyncThunk(
    "user/getJoinedOrganizations",
    async (data: any, thunkAPI) => {
      try {
        const response = await useAxios({
          url: `${BASE_URL}/individuals/organizations`,
          method: "get",
        });
        return response.data;
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
  export const joinRequest = createAsyncThunk(
    "user/joinRequest",
    async (data: any, thunkAPI) => {
      try {
        const response = await useAxios({
          url: `${BASE_URL}/individuals/organizations/join-request`,
          method: "post",
          params: data
        });
        return response.data;
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