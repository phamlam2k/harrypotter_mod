import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import AuthReducers from "./auth/auth.store";
import StoriesReducers from "./apps/stories/stories.store";

const rootReducer = combineReducers({
  authReducers: AuthReducers,
  storiesReducers: StoriesReducers,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
