import { configureStore } from '@reduxjs/toolkit';
import homeSlice from '../modules/home/homeSlice';

const store = configureStore({
   reducer: {
      homeSlice,
   },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
