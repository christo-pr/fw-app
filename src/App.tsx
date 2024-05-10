import { useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import useAuthStore from "src/store/auth.store";
import Login from "src/pages/Login";
import Setup from "src/pages/Setup";
import Dashboard from "src/pages/Dashboard";
import useSetupStore from "./store/setup.store";

function App() {
  const complete = useSetupStore((s) => s.complete);
  const currentUser = useAuthStore((s) => s.currentUser);
  const isLoggedIn = useMemo(() => currentUser !== undefined, [currentUser]);

  return (
    <>
      <CssBaseline />
      {isLoggedIn ? !complete ? <Setup /> : <Dashboard /> : <Login />}
    </>
  );
}

export default App;
