import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import useSetupStore, { setupSteps } from "src/store/setup.store";
import useAuthStore from "src/store/auth.store";

type PersonalDetailsForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export const PersonalDetails: React.FC = () => {
  const setCurrentStep = useSetupStore((s) => s.setCurrentStep);
  const currentUser = useAuthStore((s) => s.currentUser);
  const [form, setForm] = useState<PersonalDetailsForm>({
    firstName: currentUser?.name || "",
    lastName: "",
    email: "",
    phone: "",
  });

  if (!currentUser) return;

  return (
    <Box>
      <Typography>Let’s make sure your personal info is correct</Typography>
      <Box>
        <TextField
          value={form.firstName}
          onChange={(e) =>
            setForm((old) => ({ ...old, firstName: e.target.value }))
          }
          fullWidth
          name="name"
          label="First Name"
          sx={{
            marginTop: 5,
          }}
        />
        <TextField
          value={form.lastName}
          onChange={(e) =>
            setForm((old) => ({ ...old, lastName: e.target.value }))
          }
          fullWidth
          label="Last Name"
          sx={{
            marginTop: 5,
          }}
        />
        <TextField
          value={form.email}
          onChange={(e) =>
            setForm((old) => ({ ...old, email: e.target.value }))
          }
          fullWidth
          label="Email address"
          sx={{
            marginTop: 5,
          }}
        />
        <Button
          variant="contained"
          sx={{ marginTop: 2 }}
          onClick={() => setCurrentStep(setupSteps[2])}
        >
          Continue to next step
        </Button>
      </Box>
    </Box>
  );
};
