import { createSlice, createAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

type ChatState = {
  current: null | string;
};

const initialState: ChatState = {
  current: null,
};

export const setCurrent = createAction('chat/setCurrent', (id: string) => ({ payload: id }));

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCurrent, (state, { payload }) => {
      state.current = payload;
    });
  },
});

export const selectChatState = (state: RootState) => state.chat;
export const selectCurrentChat = createSelector(selectChatState, (chat) => chat.current);

export default chatSlice.reducer;
