import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../theme/store";
import settingsSlice from "../components/SettingApp/store";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    settings: settingsSlice,
  },
});
