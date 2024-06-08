import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import userReducer from "./userSlice";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

const rootReducer = combineReducers({
  user: persistedUserReducer,
});

export default rootReducer;
