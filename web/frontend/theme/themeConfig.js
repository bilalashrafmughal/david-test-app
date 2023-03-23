// import { red } from "@mui/material/colors";

const darkText = {
  primary: "#FCFCFC",
  secondary: "#a6a6a6",
  disabled: "#737373",
};
const lightText = {
  primary: "#15171A",
  secondary: "#393e47",
  disabled: "#808a98",
};

const defaultTypography = {
  fontFamily: "Albert Sans', sans-serif",
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h3: {
    fontFamily: "Albert Sans, sans-serif",
    fontSize: "4.8rem",
    fontWeight: 700,
    letterSpacing: "-0.01em",
  },
  h5: {
    fontFamily: "Albert Sans, sans-serif",
    fontSize: "2.4rem",
    fontWeight: 700,
    letterSpacing: "-0.01em",
  },
  subtitle2: {
    fontFamily: "Albert Sans, sans-serif",
    fontSize: "1.6rem",
    fontWeight: 700,
    letterSpacing: "0.00938em",
  },
  body1: {
    fontFamily: "Albert Sans, sans-serif",
    fontSize: "1.6rem",
    fontWeight: 400,
    letterSpacing: "0.00938em",
    lineHeight: "112%",
  },
  body2: {
    fontFamily: "Albert Sans, sans-serif",
    fontSize: "1.4rem",
    fontWeight: 400,
    letterSpacing: "-0.01em",
    lineHeight: "112%",
  },
  button: {
    fontFamily: "Albert Sans, sans-serif",
    fontSize: "1.4rem",
    fontWeight: 700,
    lineHeight: "112%",
    padding: "30px",
    textTransform: "capitalize",
  },
};

export const themeConfig = {
  light: {
    palette: {
      mode: "light",
      common: {
        black: "rgb(17, 24, 39)",
        white: "rgb(255, 255, 255)",
      },
      primary: {
        light: "#5f99ec",
        main: "#1965D3",
        dark: "#134ca0",
        contrastText: "#fff",
      },
      secondary: {
        light: "#5f99ec",
        main: "#1965D3",
        dark: "#134ca0",
      },
      background: {
        paper: "#FFFFFF",
        default: "#F5F5F5",
      },
      // error: red,
    },
    typography: defaultTypography,
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputBase-root": {
              borderRadius: "8px",
            },
          },
        },
      },
    },
  },
  dark: {
    palette: {
      mode: "dark",
      text: darkText,
      primary: {
        light: "#5f99ec",
        main: "#1965D3",
        dark: "#134ca0",
      },
      secondary: {
        main: "#FCFCFC",
        light: "#a6a6a6",
        dark: "#737373",
      },
      background: {
        paper: "#1A1C1E",
        default: "#15171A",
      },
      // error: red,
    },
    typography: defaultTypography,
    status: {
      danger: "orange",
    },
  },
};
