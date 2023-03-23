import { Divider, Switch, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PrimaryButton from "../../shared/Components/PrimaryButton";
import StyledSwitch from "../../shared/Components/StyledSwitch";
import {
  disableRightClickToggle,
  protectImagesToggle,
  protectTextContentToggle,
  disableKeyboardShortcutsToggle,
  disableTextCopyToggle,
  turnOffSpyExtensionsToggle,
  blockInspectElementsToogle,
} from "./store";

const SettingBar = ({ id, name, description, onChange, value }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const hoverClass =
    theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-300";
  return (
    <div key={`setting-card-${id}`}>
      <div
        className={`px-8 py-6 flex items-center rounded-lg cursor-pointer justify-between ${hoverClass}`}
      >
        <div className="flex flex-col">
          <Typography
            variant="subtitle2"
            className="text-16 font-700"
            color="textPrimary"
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            className="text-14 font-400 mt-2"
            color="textSecondary"
          >
            {description}
          </Typography>
        </div>
        <div>
          {/* <Switch /> */}
          <StyledSwitch
            defaultChecked={false}
            color="primary"
            checked={value}
            value={value}
            onChange={() => dispatch(onChange())}
          >
            <TickIcon />
          </StyledSwitch>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default function SettingsSection() {
  const {
    disableRightClick,
    protectImages,
    protectTextContent,
    disableTextCopy,
    turnOffSpyExtensions,
    disableKeyboardShortcuts,
    blockInspectElements,
  } = useSelector((state) => state.settings);

  const settingsList = [
    {
      id: 1,
      name: "Disable Right Click",
      description: "disable right click",
      onChange: disableRightClickToggle,
      value: disableRightClick,
    },
    {
      id: 2,
      name: "Protect Images",
      description: "Block Image Saving",
      onChange: protectImagesToggle,
      value: protectImages,
    },
    {
      id: 3,
      name: "Protect Text Content",
      description: "disable text selection",
      onChange: protectTextContentToggle,
      value: protectTextContent,
    },
    {
      id: 4,
      name: "Disable Text Copy/Paste",
      description: "Prevent Text coping",
      onChange: disableTextCopyToggle,
      value: disableTextCopy,
    },
    {
      id: 5,
      name: "Turn Off spy Extensions",
      description: "block Third-Party Spy Extensions",
      onChange: turnOffSpyExtensionsToggle,
      value: turnOffSpyExtensions,
    },
    {
      id: 6,
      name: "Disable Keyboard Shortcuts",
      description: "Block keyboard shortcuts to save content",
      onChange: disableKeyboardShortcutsToggle,
      value: disableKeyboardShortcuts,
    },
    {
      id: 7,
      name: "Block Inspection Element",
      description: "Disable Inspect Elements",
      onChange: blockInspectElementsToogle,
      value: blockInspectElements,
    },
  ];

  return (
    <div>
      {/* Title bar */}
      <div className="flex items-center space-x-6 pb-5">
        <img src="/assets/icons/settingIcon.svg" alt="setting-icon" />
        <Typography variant="h5" className="text-24">
          {" "}
          Settings{" "}
        </Typography>
      </div>
      {/* Settings list */}
      {settingsList.map((setting) => (
        <SettingBar {...setting} />
      ))}
      <div>
        <TextField
          variant="outlined"
          color="primary"
          fullWidth
          placeholder="Enter warning message"
        />
        <div className="mt-4 pb-20">
          <PrimaryButton color="primary" variant="contained">
            Save Text
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

const TickIcon = () => {
  return (
    <svg
      width="6"
      height="2"
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.3125 6.86612L1.94194 4.49556C1.69786 4.25148 1.30214 4.25148 1.05806 4.49556C0.813981 4.73964 0.813981 5.13536 1.05806 5.37944L3.87056 8.19194C4.11464 8.43602 4.51036 8.43602 4.75444 8.19194L11.6294 1.31694C11.8735 1.07286 11.8735 0.677136 11.6294 0.433058C11.3854 0.188981 10.9896 0.188981 10.7456 0.433058L4.3125 6.86612Z"
        fill="#1965D3"
      />
    </svg>
  );
};
