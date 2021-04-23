import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CollectiveChatData, Message } from "../../../utils/types";

interface ChatState {
  collectiveChatData: CollectiveChatData | undefined;
  activeChatIndex: number | undefined;
}

const initialState = {
  collectiveChatData: undefined,
  activeChatIndex: undefined,
} as ChatState;

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setCollectiveChatData(
      state,
      action: PayloadAction<CollectiveChatData | undefined>
    ) {
      state.collectiveChatData = action.payload;
    },
    setActiveChatIndex(state, action: PayloadAction<number>) {
      state.activeChatIndex = action.payload;
    },
    disableChatInit(state, action: PayloadAction<number>) {
      state.collectiveChatData!.chatData[action.payload].chat.isInit = true;
    },
    addMessage(state, action: PayloadAction<Message>) {
      const activeChatData = state.collectiveChatData!.chatData[
        state.activeChatIndex!
      ];
      activeChatData.messages = [...activeChatData.messages, action.payload];
    },
  },
});

export const {
  setCollectiveChatData,
  setActiveChatIndex,
  disableChatInit,
  addMessage,
} = chatSlice.actions;
export default chatSlice.reducer;
