import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";

import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";

import theme from "src/theme";

// TODO: not working
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "us-east-1_VYhbu8qQw",
      userPoolClientId: "1qp6qpacl8bgucl56tkkbflt85",
      identityPoolId: "",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
