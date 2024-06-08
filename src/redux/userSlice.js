import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
  language: "en",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleTheme(state, action) {
      state.theme = action.payload;
    },
    toggleLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const { toggleTheme, toggleLanguage } = userSlice.actions;

export default userSlice.reducer;
