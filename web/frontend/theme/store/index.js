import { createSlice } from "@reduxjs/toolkit";

const initialState = "light";

const themeSlice = createSlice({
  initialState: initialState,
  name: "theme",
  reducers: {
    toggleTheme: (state) => {
      state = state === "light" ? "dark" : "light";
      return state;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
