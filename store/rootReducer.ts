import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import postReducer from './postSlice';

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
