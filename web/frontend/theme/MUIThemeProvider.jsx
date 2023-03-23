import { createTheme, CssBaseline, styled } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { getTheme } from ".";

export default function MUIThemeProvider({ children }) {
  const currentTheme = useSelector((state) => state.theme);
  console.log({ currentTheme });
  const theme = createTheme(getTheme(currentTheme));
  const GlobalStyle = styled("body")({
    backgroundColor: (props) => props.theme.palette.background.default,
    minHeight: "100vh",
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle>
        <CssBaseline />
        {children}
      </GlobalStyle>
    </ThemeProvider>
  );
}
