import { createTheme, ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    background: {
      default: "#f2f2f5",
    },
    mode: "light",
    primary: {
      main: "#FDE047",
    },
    secondary: {
      main: "#f2f2f5",
    },
    text: {
      primary: "#1F2937",
      secondary: "#1F2937",
      disabled: "#1F2937",
    },
  },
  typography: {
    h2: {
      fontSize: 30,
      fontWeight: 500,
    },
    h4: {
      fontSize: 20,
      fontWeight: 500,
    },
    body1: {
      fontSize: 16,
    },
  },
};

export default createTheme(themeOptions);
