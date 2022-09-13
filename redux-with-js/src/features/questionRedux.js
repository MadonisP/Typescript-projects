import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
  name: "question",
  initialState: {
    questions: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getQuestiontStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getQuestionSuccess: (state, action) => {
      state.isFetching = false;
      state.questions = action.payload;
    },
    getQuestionFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteQuestionStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteQuestionSuccess: (state, action) => {
      state.isFetching = false;
      state.questions.splice(
        state.questions.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteQuestiontFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateQuestionStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateQuestionSuccess: (state, action) => {
      state.isFetching = false;
      state.questions[
        state.questions.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.question;
    },
    updateQuestionFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addQuestionStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addQuestionSuccess: (state, action) => {
      state.isFetching = false;
      state.questions.push(action.payload);
    },
    addQuestionFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getQuestionStart,
  getQuestionSuccess,
  getQuestionFailure,
  deleteQuestionStart,
  deleteQuestionSuccess,
  deleteQuestionFailure,
  updateQuestionStart,
  updateQuestionSuccess,
  updateQuestionFailure,
  addQuestionStart,
  addQuestionSuccess,
  addQuestionFailure,
} = questionSlice.actions;

export default questionSlice.reducer;