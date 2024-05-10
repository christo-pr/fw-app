import { useCallback } from "react";
import { Button, Typography, Box } from "@mui/material";
import Container from "@mui/material/Container";

import useAuthStore from "src/store/auth.store";
import useSetupStore, { setupSteps } from "src/store/setup.store";

export default function Dashboard() {
  const setCurrentStep = useSetupStore((s) => s.setCurrentStep);
  const setComplete = useSetupStore((s) => s.setComplete);
  const currentUser = useAuthStore((s) => s.currentUser);
  const onTryAgain = useCallback(() => {
    setComplete(false);
    setCurrentStep(setupSteps[0]);
  }, [setComplete, setCurrentStep]);

  return (
    <Container>
      <Box sx={{ marginTop: 20 }}>
        <Typography>Welcome back {currentUser?.name}</Typography>
        <Button onClick={onTryAgain}>Try Again!</Button>
      </Box>
    </Container>
  );
}
