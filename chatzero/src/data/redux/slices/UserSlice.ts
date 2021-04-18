import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../utils/types";

interface UserState {
  currentUser: User | undefined;
}

const initialState = {
  currentUser: {
    name: "Hieugod-AnimeVer",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-GrnuvtQFOGKap5ss6nSkv1_VamdNCYvcIg&usqp=CAU",
    password: "Hieulovesanime",
    description: "AnimeGod",
  },
} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<User | undefined>) {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
