import { combineReducers, configureStore } from '@reduxjs/toolkit';
import baseApi from 'api/baseApi';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import auth from './features/authSlice';
import chat from './features/chatSlice';
import message from './features/messageSlice';
import getWebSocket from 'api/getWebSocket';

const reducers = combineReducers({
  auth,
  chat,
  message,
  [baseApi.reducerPath]: baseApi.reducer,
});

const store = configureStore({
  reducer: (state, action) => {
    if (action.type === 'logOut') {
      getWebSocket({ token: state.auth.token }).closeAndClear();
      state = {} as RootState;
    }
    return reducers(state, action);
  },
  middleware: (gDM) => gDM().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
