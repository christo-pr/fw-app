import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { SetupSteps } from "src/components/SetupSteps";
import { SetupForm } from "src/components/SetupForm/SetupForm";

export default function Setup() {
  return (
    <Box position="relative">
      <SetupSteps />
      <Container maxWidth="md" sx={{ paddingTop: 15 }}>
        <SetupForm />
      </Container>
    </Box>
  );
}
