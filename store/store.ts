// store\store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // import the root reducer

const preloadedState = typeof window !== 'undefined' && localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')!) : {};

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

store.subscribe(() => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
