import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import productReducer from './features/products/productSlice';
import userReducer from './features/user/userSlice'
import { api } from './api/apiSlice';
const store = configureStore({
  reducer: {
    cartReducer,
    product: productReducer,
    user:userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
