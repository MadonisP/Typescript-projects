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
    _id: string;
    questionTitle: string;
    examId: string;
    options: {
        option: string;
        isCorrect: boolean;
        _id: string;
    }
}


export const fetchUser = createAsyncThunk("fetchUser", async () => {
    const response = await axios.get("http://localhost:5000/examquestions/");
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
        builder.addCase(fetchUser.fulfilled, (state, action: PayloadAction<Quest>) => {
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



/*



"_id": "62f7be439e6521a04d6e0fbc",
"examId": "62f287dcee776e0f64687406",
"questionTitle": "deneme sorusu11",
"options": [
    {
        "option": "a sıkki",
        "isCorrect": false,
        "_id": "62f7be439e6521a04d6e0fbd"
    },
    {
        "option": "b sıkki",
        "isCorrect": true,
        "_id": "62f7be439e6521a04d6e0fbe"
    }
],
"createdAt": "2022-08-13T15:07:47.258Z",
"updatedAt": "2022-08-14T11:00:59.877Z",
"__v": 0
},


*/