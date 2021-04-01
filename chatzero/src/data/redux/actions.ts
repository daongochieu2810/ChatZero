import { User } from "../../utils/types";

export const SET_CURRENT_USER = "SET_CURRENT_USER";

export interface UserAction {
  type: string;
  user: User;
}

const setCurrentUser = (payload: User): UserAction => ({
  type: SET_CURRENT_USER,
  user: payload,
});

export { setCurrentUser };
