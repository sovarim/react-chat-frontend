import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Message } from 'api/types';
import { RootState } from 'store';

const messageAdapter = createEntityAdapter<Message>({
  selectId: (message) => message._id,
});
const initialState = messageAdapter.getInitialState();

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    addMessage: messageAdapter.addOne,
    upsertMessages: messageAdapter.upsertMany,
  },
  extraReducers: (builder) => {
    builder.addCase('logOut', () => initialState);
  },
});

export const { addMessage, upsertMessages } = messageSlice.actions;

export const { selectById: selectMessageById } = messageAdapter.getSelectors(
  (state: RootState) => state.message,
);

export default messageSlice.reducer;
