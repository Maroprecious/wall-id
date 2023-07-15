import { createSlice } from "@reduxjs/toolkit";
import {
    getListOrganizations,
    getJoinedOrganizations,
    joinRequest
} from './thunk-action'

interface IState {
    loading: "failed" | "pending" | "successful" | "idle";
    list: [],
    joinedList: []
}

const initialState: IState = {
    loading: "idle",
    list: [],
    joinedList: []

};

const userOrganizationSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(getListOrganizations.pending, (state) => {
            return { ...state, loading: "pending" };
        });
        builder.addCase(getListOrganizations.fulfilled, (state, action) => {
            return { ...state, loading: "successful", list: action.payload };
        });
        builder.addCase(getListOrganizations.rejected, (state, action) => {
            return { ...state, loading: "failed" };
        });

        //joined organizations
        builder.addCase(getJoinedOrganizations.pending, (state) => {
            return { ...state, loading: "pending" };
        });
        builder.addCase(getJoinedOrganizations.fulfilled, (state, action) => {
            return { ...state, loading: "successful", user: action.payload };
        });
        builder.addCase(getJoinedOrganizations.rejected, (state, action) => {
            return { ...state, loading: "failed" };
        });

         //join request
         builder.addCase(joinRequest.pending, (state) => {
            return { ...state, loading: "pending" };
        });
        builder.addCase(joinRequest.fulfilled, (state, action) => {
            return { ...state, loading: "successful", user: action.payload };
        });
        builder.addCase(joinRequest.rejected, (state, action) => {
            return { ...state, loading: "failed" };
        });
    },

});
export const userOrganizationReducer = userOrganizationSlice.reducer;