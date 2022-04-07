import {
  createApi,
  fetchBaseQuery,
  FetchArgs,
  FetchBaseQueryError,
  BaseQueryFn,
} from '@reduxjs/toolkit/query/react';
import { RootState } from 'store';
import { UserResponse } from './types';
import { setAuthToken } from 'store/features/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> =
  async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
      const refresh = await baseQuery('/auth/refresh', api, extraOptions);
      if (refresh.data) {
        api.dispatch(setAuthToken(refresh.data));
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch({ type: 'logOut' });
        api.dispatch(baseApi.util.resetApiState());
      }
    }
    return result;
  };

const baseApi = createApi({
  baseQuery: baseQueryWithRefreshToken,
  endpoints: (builder) => ({
    getUsers: builder.query<UserResponse[], { search?: string }>({
      query: (params) => ({
        params,
        url: 'users',
      }),
    }),
  }),
});

export const { useGetUsersQuery } = baseApi;

export default baseApi;
