import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

import chatReducer from "./slices/ChatSlice";
import userReducer from "./slices/UserSlice";

const persistConfig: PersistConfig<any, any, any> = {
  key: "root",
  storage,
  whitelist: ["chat", "user"],
  blacklist: [],
};

const rootReducer = combineReducers({
  chat: chatReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer);
let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default { store, persistor };
