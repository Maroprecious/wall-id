import { createSlice } from "@reduxjs/toolkit";
import {
    getallSubscriptions
} from './thunk-action'

interface IState {
    loading: "failed" | "pending" | "successful" | "idle";
    userSubscriptions: []
}

const initialState: IState = {
    loading: "idle",
    userSubscriptions: [],

};

const userSubscriptionSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(getallSubscriptions.pending, (state) => {
            return { ...state, loading: "pending" };
        });
        builder.addCase(getallSubscriptions.fulfilled, (state, action) => {
            return { ...state, loading: "successful", user: action.payload };
        });
        builder.addCase(getallSubscriptions.rejected, (state, action) => {
            return { ...state, loading: "failed" };
        });
    },

});
export const userSubscriptionReducer = userSubscriptionSlice.reducer;