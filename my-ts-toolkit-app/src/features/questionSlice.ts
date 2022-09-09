import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from 'uuid'
import axios from 'axios'

interface Question {
    data: Quest | null,
    loading: boolean,
    error: string,
}

const initialState: Question = {
    data: null,
    loading: false,
    error: ""
}

export interface Quest {

}

export const fetchUser = createAsyncThunk("fetchUser", async () => {
    const response = await axios.get("https://randomuser.me/api/");
    return response.data;
})

const questionSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        })
        builder.addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
            state.data = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error fetching user data"
        })
    }
})

export default questionSlice.reducer;
export const { } = questionSlice.actions; 