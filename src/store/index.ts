import { configureStore } from '@reduxjs/toolkit';
import baseApi from 'api/baseApi';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import auth from './features/authSlice';
import chat from './features/chatSlice';
import message from './features/messageSlice';

const store = configureStore({
  reducer: {
    auth,
    chat,
    message,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (gDM) => gDM().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
