import baseApi from './baseApi';
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from './types';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        body,
        url: 'auth/login',
        method: 'POST',
      }),
    }),
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (body) => ({
        body,
        url: 'auth/register',
        method: 'POST',
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;

export default authApi;
