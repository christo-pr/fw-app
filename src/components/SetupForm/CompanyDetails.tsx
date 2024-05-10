import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import useSetupStore, { setupSteps } from "src/store/setup.store";

type CompanyForm = {
  name: string;
  address: string;
  phone: string;
  numberOfEmployees: number;
};

export const CompanyDetails: React.FC = () => {
  const setCurrentStep = useSetupStore((s) => s.setCurrentStep);
  const company = useSetupStore((s) => s.company);
  const [form, setForm] = useState<CompanyForm>({
    name: company?.name || "",
    address: "",
    phone: "",
    numberOfEmployees: 0,
  });

  return (
    <Box>
      <Typography>
        Let’s start with some basic info about{" "}
        {company?.name || "Testing company"}
      </Typography>
      <Box>
        <TextField
          value={form.name}
          onChange={(e) => setForm((old) => ({ ...old, name: e.target.value }))}
          fullWidth
          label="Company name"
          sx={{
            marginTop: 5,
          }}
        />
        <TextField
          value={form.address}
          onChange={(e) =>
            setForm((old) => ({ ...old, address: e.target.value }))
          }
          fullWidth
          label="Company address"
          sx={{
            marginTop: 5,
          }}
        />
        <TextField
          value={form.phone}
          onChange={(e) =>
            setForm((old) => ({ ...old, phone: e.target.value }))
          }
          fullWidth
          label="Company phone"
          sx={{
            marginTop: 5,
          }}
        />
        <TextField
          value={form.numberOfEmployees}
          onChange={(e) => {
            const value = isNaN(+e.target.value) ? 0 : +e.target.value;
            setForm((old) => ({
              ...old,
              numberOfEmployees: value,
            }));
          }}
          fullWidth
          label="Number of employees"
          sx={{
            marginTop: 5,
          }}
        />
        <Button
          variant="contained"
          sx={{ marginTop: 2 }}
          onClick={() => setCurrentStep(setupSteps[1])}
        >
          Continue to next step
        </Button>
      </Box>
    </Box>
  );
};
