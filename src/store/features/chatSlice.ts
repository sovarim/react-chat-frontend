import {
  createSlice,
  createAction,
  createSelector,
  createEntityAdapter,
  EntityState,
} from '@reduxjs/toolkit';
import { RootState } from 'store';
import { ChatResponse, Message, UserResponse } from 'api/types';
import baseApi from 'api/baseApi';

const chatAdapter = createEntityAdapter<ChatResponse>({
  selectId: (model) => model._id,
});
const chatAdapterInitialState = chatAdapter.getInitialState();

export const setCurrentChat = createAction('chat/setCurrent', (chat: Chat) => ({
  payload: chat,
}));

const chatApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query<EntityState<ChatResponse>, void>({
      query: () => 'chats',
      transformResponse: (result: ChatResponse[]) =>
        chatAdapter.setAll(chatAdapterInitialState, result),
      onCacheEntryAdded: async (
        _,
        { getState, cacheDataLoaded, cacheEntryRemoved, updateCachedData },
      ) => {
        const token = (getState() as RootState).auth.token;
        const ws = new WebSocket(`${process.env.REACT_APP_WS_URL}?token=${token}`);
        try {
          await cacheDataLoaded;

          const listener = (e: MessageEvent) => {
            const data: { event: string; data: Message } = JSON.parse(e.data);
            const message = data.data;
            updateCachedData((draft) => {
              chatAdapter.updateOne(draft, {
                id: message.chat,
                changes: { messages: [...(draft.entities[message.chat]?.messages || []), message] },
              });
            });
          };
          ws.onmessage = listener;
        } catch {
          //pass
        }
        await cacheEntryRemoved;
        ws.close();
      },
    }),
    createChat: builder.mutation<ChatResponse, { userId: string }>({
      query: (body) => ({
        body,
        url: 'chats/create',
        method: 'POST',
      }),

      onQueryStarted: async (_, { dispatch, queryFulfilled, getState }) => {
        try {
          const { data: chat } = await queryFulfilled;
          dispatch(
            chatApi.util.updateQueryData('getChats', undefined, (draft) => {
              const existChat = draft.entities[chat._id];
              if (existChat) return;
              chatAdapter.addOne(draft, chat);
            }),
          );
          dispatch(
            setCurrentChat({
              _id: chat._id,
              lastMessage: chat.lastMessage,
              partner: chat.users.find(
                (user) => user._id !== (getState() as RootState)?.auth.me?._id,
              ),
            }),
          );
        } catch {
          //pass
        }
      },
    }),
  }),
});

const selectChatsResult = chatApi.endpoints.getChats.select();
const selectChatsData = createSelector(selectChatsResult, (chatsResult) => chatsResult.data);

export const { selectAll: selectAllChats, selectById: selectChatById } = chatAdapter.getSelectors(
  (state: RootState) => selectChatsData(state) ?? chatAdapterInitialState,
);

export const { useGetChatsQuery, useCreateChatMutation } = chatApi;

export type Chat = Omit<ChatResponse, 'users'> & { partner?: UserResponse };

type ChatState = {
  current: null | Chat;
};

const initialState: ChatState = {
  current: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCurrentChat, (state, { payload }) => {
      state.current = payload;
    });
  },
});

export const selectChatState = (state: RootState) => state.chat;
export const selectCurrentChat = createSelector(selectChatState, (chat) => chat.current);

export default chatSlice.reducer;
