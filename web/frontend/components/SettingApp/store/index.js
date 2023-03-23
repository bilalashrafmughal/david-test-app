import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  disableRightClick: false,
  protectImages: false,
  protectTextContent: false,
  disableTextCopy: false,
  turnOffSpyExtensions: false,
  disableKeyboardShortcuts: false,
  blockInspectElements: false,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    disableRightClickToggle: (state) => {
      state.disableRightClick = !state.disableRightClick;
    },
    protectImagesToggle: (state) => {
      state.protectImages = !state.protectImages;
    },
    protectTextContentToggle: (state) => {
      state.protectTextContent = !state.protectTextContent;
    },
    disableTextCopyToggle: (state) => {
      state.disableTextCopy = !state.disableTextCopy;
    },
    turnOffSpyExtensionsToggle: (state) => {
      state.turnOffSpyExtensions = !state.turnOffSpyExtensions;
    },
    disableKeyboardShortcutsToggle: (state) => {
      state.disableKeyboardShortcuts = !state.disableKeyboardShortcuts;
    },
    blockInspectElementsToogle: (state) => {
      state.blockInspectElements = !state.blockInspectElements;
    },
  },
});

export const {
  disableRightClickToggle,
  protectImagesToggle,
  protectTextContentToggle,
  disableKeyboardShortcutsToggle,
  disableTextCopyToggle,
  turnOffSpyExtensionsToggle,
  blockInspectElementsToogle,
} = settingsSlice.actions;

export default settingsSlice.reducer;
