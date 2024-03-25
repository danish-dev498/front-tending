import APIRequest from '@/hooks/useFetch';
import { createSlice } from '@reduxjs/toolkit';
import { SETTING_URL } from '../service/APIUrls';

const initialState = {
  question_category: '',
  question_difficulty: '',
  question_type: '',
  amount_of_question: 0,
  score: 0,
  correct_answer: 0,
  wrong_answer: 0,
};


const questionSlice = createSlice({
  name: 'question',
  initialState: initialState,
  reducers: {
    handleChnageDifficulty: (state, action) => ({
      ...state,
      question_difficulty: action.payload,
    }),

    handleChnageCategory: (state, action) => ({
      ...state,
      question_category: action.payload,
    }),

    handleChnageType: (state, action) => ({
      ...state,
      question_type: action.payload,
    }),
    handleChangeAmmount: (state, action) => ({
      ...state,
      amount_of_question: action.payload,
    }),
    handleScoreChange: (state, action) => ({
      ...state,
      score: action.payload,
    }),
    handleCorrectAnswer: (state, action) => ({
      ...state,
      correct_answer: action.payload,
    }),
    handleWrongAnswer: (state, action) => ({
      ...state,
      wrong_answer: action.payload,
    }),
    reset: () => initialState,
  },
});

export const {
  handleChnageDifficulty,
  handleChnageCategory,
  handleChnageType,
  handleChangeAmmount,
  handleScoreChange,
  handleCorrectAnswer,
  handleWrongAnswer,
  reset,
} = questionSlice.actions;

export const asyncFetchQuestions=()=>{
   return (async (dispatch, getState)=>{
    try {
      const response= await APIRequest.getRequest(SETTING_URL)
      if(response){
        dispatch(handleChnageCategory({payload:response}))
      }
    } catch (error) {
      
    }
  })
}

export default questionSlice.reducer;
