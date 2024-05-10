import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";

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

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser.ts");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
