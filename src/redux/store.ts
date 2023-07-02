import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import userReducer from "./features/userSlice";

import { useSelector, TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: {
    defaultThemePreference: themeReducer,
    userData: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
