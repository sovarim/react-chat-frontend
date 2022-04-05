import authApi from 'api/authApi';
import { createSlice } from '@reduxjs/toolkit';
import { UserResponse } from 'api/types';

const accessKey = '_chat-access';

type AuthState = {
  isAuth: boolean;
  token: string | null;
  me: UserResponse | null;
};

const token = localStorage.getItem(accessKey);

const initialState: AuthState = {
  token,
  isAuth: !!token,
  me: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
        localStorage.setItem(accessKey, payload.token);
        state.token = payload.token;
        state.isAuth = true;
      })
      .addMatcher(authApi.endpoints.getMe.matchFulfilled, (state, { payload }) => {
        state.me = payload;
      });
  },
});

export default authSlice.reducer;
