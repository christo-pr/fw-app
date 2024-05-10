import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import useSetupStore, { setupSteps } from "src/store/setup.store";

export const SetupSteps: React.FC = () => {
  const currentStep = useSetupStore((s) => s.currentStep);

  return (
    <Box
      sx={{
        position: "absolute",
        top: 20,
        left: 20,
      }}
    >
      <Stepper activeStep={currentStep.index} orientation="vertical">
        {setupSteps.map((step) => (
          <Step key={step.label} completed={currentStep.index > step.index}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
