import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chosenChatDetails: null,
  chatType: null,
  messages: [],
};

export const chatTypes = {
  DIRECT: "DIRECT",
  GROUP: "GROUP",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChosenChatDetails(state, action) {
      console.log(action.payload);
      const { chatDetails, chatType } = action.payload;
      state.chosenChatDetails = chatDetails;
      state.chatType = chatType;
    },
    setMessages(state, action) {
      state.messages = action.payload.messages;
    },
  },
});

export const chatActions = chatSlice.actions;
export default chatSlice;
