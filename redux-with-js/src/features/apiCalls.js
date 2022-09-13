import {
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
} from "./questionRedux";
import { Request } from "../default.js"

export const getQuestions = async (dispatch) => {
  dispatch(getQuestionStart());
  try {
    const res = await Request.get("/examquestions");
    dispatch(getQuestionSuccess(res.data));
  } catch (err) {
    dispatch(getQuestionFailure());
  }
};

export const deleteQuestion = async (id, dispatch) => {
  dispatch(deleteQuestionStart());
  try {
    dispatch(deleteQuestionSuccess(id));
  } catch (err) {
    dispatch(deleteQuestionFailure());
  }
};

export const updateQuestion = async (id, question, dispatch) => {
  dispatch(updateQuestionStart());
  try {
    // update
    dispatch(updateQuestionSuccess({ id, question }));
  } catch (err) {
    dispatch(updateQuestionFailure());
  }
};
export const addQuestion = async (question, dispatch) => {
  dispatch(addQuestionStart());
  try {
    const res = await Request.post(`/examquestions`, question);
    dispatch(addQuestionSuccess(res.data));
  } catch (err) {
    dispatch(addQuestionFailure());
  }
};