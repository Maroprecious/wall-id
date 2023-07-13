import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Toast from 'react-native-toast-message';
import { BASE_URL } from "../../../config/api";
import useAxios from "../../../hooks/useAxios";
import { saveToken } from "../../../hooks/useAxios";

export const signIn = createAsyncThunk(
  "auth/signup",
  async (data: object, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${BASE_URL}/auth/register`,
        method: "post",
        data: data,
      });
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Successfully created a new account, verify your email now'
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const mss = error.response.data.message
        console.log(error.response.data.message)
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: mss
        });
        return thunkAPI.rejectWithValue(mss);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);



export const signUpOrganization = createAsyncThunk(
  "auth/signUpOrganization",
  async (data: object, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${BASE_URL}/auth/organization/register`,
        method: "post",
        data: data,
      });
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Successfully created a new account, verify your email now'
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const mss = error.response.data.message
        console.log(error.response.data.message)
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: mss
        });
        return thunkAPI.rejectWithValue(mss);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);


export const login = createAsyncThunk(
  "auth/login",
  async (data: object, thunkAPI) => {
    
    try {
      const response = await useAxios({
        url: `${BASE_URL}/auth/login`,
        method: "post",
        data: data,
      }, false);

      const authData: { data: { tokens: string} } = response.data;
      await saveToken('token', authData.data.tokens)
      console.log(authData.data.tokens)
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Login successful'
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const mss = error.response.data.message
        console.log(error.response.data.message)
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: mss
        });
        return thunkAPI.rejectWithValue(mss);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);



export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (data: object, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${BASE_URL}/auth/password/email`,
        method: "post",
        data: data,
      });
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: "We've sent you the password reset instructions"
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const mss = error.response.data.message
        console.log(error.response.data.message)
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: mss
        });
        return thunkAPI.rejectWithValue(mss);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);



export const updatePassword = createAsyncThunk(
  "auth/updatePassword",
  async (data: object, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${BASE_URL}/auth/password/reset`,
        method: "post",
        data: data,
      });
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: "Your password has been updated successfully"
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const mss = error.response.data.message
        console.log(error.response.data.message)
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: mss
        });
        return thunkAPI.rejectWithValue(mss);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);

