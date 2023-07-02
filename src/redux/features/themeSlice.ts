import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeType } from "../../utils/types/redux/ReduxType";

// set theme based on the users browser preference
function userThemePreference() {
  const theme = window.matchMedia("(prefers-color-scheme: dark");
  return theme.matches;
  //   if (theme.matches)
  //     return true;
  //    else
  //     return false;
}

const initialState: ThemeType = {
  darkTheme: userThemePreference(),
};

export const themeSlice = createSlice({
  name: "defaultThemePreference",
  initialState,
  reducers: {
    setTheme: (state: ThemeType, action: PayloadAction<ThemeType>) => {
      state.darkTheme = action.payload.darkTheme;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export const selectTheme = (state: {
  defaultThemePreference: { darkTheme: Boolean };
}) => state.defaultThemePreference.darkTheme;

export default themeSlice.reducer;
