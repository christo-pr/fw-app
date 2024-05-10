import { useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import useAuthStore from "src/store/auth.store";
import Login from "src/pages/Login";
import Setup from "src/pages/Setup";

function App() {
  const currentUser = useAuthStore((s) => s.currentUser);
  const isLoggedIn = useMemo(() => currentUser !== undefined, [currentUser]);

  return (
    <>
      <CssBaseline />
      {isLoggedIn ? <Setup /> : <Login />}
    </>
  );
}

export default App;
