import baseApi from './baseApi';
import { ChatsResponse } from './types';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query<ChatsResponse, void>({
      query: () => 'chats',
    }),
  }),
});

export const { useGetChatsQuery } = authApi;

export default authApi;
