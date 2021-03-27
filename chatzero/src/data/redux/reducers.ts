import { combineReducers, AnyAction, Reducer } from "redux";
import { User } from "../../../../common/types";
import { SET_CURRENT_USER, UserAction } from "./actions";

export interface GeneralState {
  currentUser: User;
}

const initState: GeneralState = {
  currentUser: {
    name: "",
    avatar: "",
    password: "",
  },
};

const generalReducer: Reducer = (
  state: GeneralState = initState,
  action: AnyAction
) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      state.currentUser = (action as UserAction).user;
      return state;
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  general: generalReducer,
});
