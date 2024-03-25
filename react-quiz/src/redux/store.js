'use client';

import { configureStore } from '@reduxjs/toolkit';
import questionReducers from './feature/questionSlice';

export const store = configureStore({
  reducer: { questions: questionReducers },
});
