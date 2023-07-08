import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    cartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store;
