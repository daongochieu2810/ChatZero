import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SingleChat } from "../../../utils/types";

interface ChatState {
  currentChat: SingleChat | undefined;
}

const initialState = { currentChat: undefined } as ChatState;

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setCurrentChat(state, action: PayloadAction<SingleChat | undefined>) {
      state.currentChat = action.payload;
    },
  },
});

export const { setCurrentChat } = chatSlice.actions;
export default chatSlice.reducer;
