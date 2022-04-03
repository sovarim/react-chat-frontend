import authApi from 'api/authApi';
import { createSlice } from '@reduxjs/toolkit';

const accessKey = '_chat-access';

type AuthState = {
  isAuth: boolean;
  token: string | null;
};

const token = localStorage.getItem(accessKey);

const initialState: AuthState = {
  token,
  isAuth: !!token,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      localStorage.setItem(accessKey, payload.token);
      state.token = payload.token;
      state.isAuth = true;
    });
  },
});

export default authSlice.reducer;
