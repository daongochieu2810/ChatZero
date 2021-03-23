import { combineReducers, AnyAction, Reducer } from "redux";
import { GeneralState } from "../../types/data";
import { SET_CURRENT_USER, UserAction } from "./actions";

const initState: GeneralState = {
  currentUser: {
    name: "",
    avatar: "",
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
