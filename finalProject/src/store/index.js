import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import {
  persistStore,
  persistReducer,
} from "redux-persist";

import AsyncStorage from "@react-native-async-storage/async-storage";
import authReducer from "./reducers/Auth";
import todoReducer from "./reducers/Todo";
import messageReducer from "./reducers/Message";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth", "todo"],
};

const reducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
  message: messageReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = new createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

export default store;
