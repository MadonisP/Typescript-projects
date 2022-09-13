import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "../features/questionRedux";

export const store = configureStore({
    reducer: {
        question: questionReducer,
    }
});


