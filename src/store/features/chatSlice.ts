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
import getWebSocket from 'api/getWebSocket';
import { addMessage, upsertMessages } from './messageSlice';

const chatAdapter = createEntityAdapter<ChatResponse>({
  selectId: (model) => model._id,
});
const chatAdapterInitialState = chatAdapter.getInitialState();

export const setCurrentChat = createAction('chat/setCurrent', (chat: Chat) => ({
  payload: chat,
}));

export const chatApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query<EntityState<ChatResponse>, void>({
      query: () => 'chats',
      transformResponse: (result: ChatResponse[]) =>
        chatAdapter.setAll(chatAdapterInitialState, result),
      onCacheEntryAdded: async (
        _,
        { getState, cacheDataLoaded, cacheEntryRemoved, updateCachedData, dispatch },
      ) => {
        const token = (getState() as RootState).auth.token;
        const ws = getWebSocket({ token });
        try {
          await cacheDataLoaded;

          const listener = (e: MessageEvent) => {
            try {
              const data: { event: string; data: Message } = JSON.parse(e.data);
              const message = data.data;
              dispatch(addMessage(message));

              let isChatNotExist = false;
              updateCachedData((draft) => {
                const chat = draft.entities[message.chat];
                if (chat) {
                  chat.lastMessage = message;
                  if (chat.messages) {
                    chat.messages.push(message._id);
                  } else {
                    chat.messages = [message._id];
                  }
                  return;
                }
                isChatNotExist = true;
              });

              // если такого чата нет в сторе, запрашиваем из сервера
              if (isChatNotExist) {
                dispatch(chatApi.endpoints.getChat.initiate(message.chat));
              }
            } catch {
              //pass
            }
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
    getChatMessages: builder.query<Message[], { chatId: string }>({
      query: (params) => `chats/${params.chatId}/messages`,
      onQueryStarted: async ({ chatId }, { dispatch, queryFulfilled }) => {
        try {
          const { data: messages } = await queryFulfilled;
          dispatch(
            chatApi.util.updateQueryData('getChats', undefined, (draft) => {
              const chat = draft.entities[chatId];
              if (chat) {
                chat.messages = messages.map((message) => message._id);
              }
            }),
          );
          dispatch(upsertMessages(messages));
        } catch (error) {
          //pass
        }
      },
    }),
    getChat: builder.query<ChatResponse, string>({
      query: (id) => `chats/${id}`,
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data: chat } = await queryFulfilled;
          dispatch(
            chatApi.util.updateQueryData('getChats', undefined, (draft) => {
              chatAdapter.upsertOne(draft, chat);
            }),
          );
        } catch (error) {
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

export const { useGetChatsQuery, useCreateChatMutation, useGetChatMessagesQuery, useGetChatQuery } =
  chatApi;

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
