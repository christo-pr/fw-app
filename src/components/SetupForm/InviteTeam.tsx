import { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import useSetupStore from "src/store/setup.store";

type UserInvite = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

export const InviteTeam: React.FC = () => {
  const [invitedUsers, setInivitedUsers] = useState<UserInvite[]>([]);
  const [form, setForm] = useState<Omit<UserInvite, "id">>({
    firstName: "",
    lastName: "",
    email: "",
    role: "technician",
  });
  const setComplete = useSetupStore((s) => s.setComplete);
  const onInviteUser = useCallback(() => {
    setInivitedUsers([
      ...invitedUsers,
      { ...form, id: invitedUsers.length + 1 },
    ]);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      role: "technician",
    });
  }, [form, invitedUsers]);

  return (
    <Box>
      <Typography>Add your team to Fieldwork</Typography>
      <Typography variant="caption">
        Fieldwork is best when your whole team is on it. Add your employees and
        set their permissions.
      </Typography>
      <Box>
        {/* Current users */}
        {invitedUsers.map((u) => (
          <Box
            key={u.id}
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <TextField
              defaultValue={u.firstName}
              fullWidth
              label="First Name"
              sx={{
                marginRight: 5,
              }}
            />
            <TextField
              defaultValue={u.lastName}
              fullWidth
              label="Last Name"
              sx={{
                marginRight: 5,
              }}
            />
            <TextField
              defaultValue={u.email}
              fullWidth
              label="Email"
              sx={{
                marginRight: 5,
              }}
            />
            <Select label="Role" defaultValue={u.role}>
              <MenuItem value={"owner"}>Full Access</MenuItem>
              <MenuItem value={"technician"}>Restricted Access</MenuItem>
            </Select>
          </Box>
        ))}

        {/* Enter a new item */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <TextField
            value={form.firstName}
            onChange={(e) =>
              setForm((old) => ({ ...old, firstName: e.target.value }))
            }
            fullWidth
            label="First Name"
            sx={{
              marginRight: 5,
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
              marginRight: 5,
            }}
          />
          <TextField
            value={form.email}
            onChange={(e) =>
              setForm((old) => ({ ...old, email: e.target.value }))
            }
            fullWidth
            label="Email"
            sx={{ marginRight: 5 }}
          />
          <Select
            label="Role"
            value={form.role}
            onChange={(e) =>
              setForm((old) => ({ ...old, role: e.target.value }))
            }
          >
            <MenuItem value={"owner"}>Full Access</MenuItem>
            <MenuItem value={"technician"}>Restricted Access</MenuItem>
          </Select>
        </Box>
        <Button variant="outlined" sx={{ marginTop: 2 }} onClick={onInviteUser}>
          Add user
        </Button>
        <hr />
        <Button
          variant="contained"
          sx={{ marginTop: 2 }}
          onClick={() => setComplete(true)}
        >
          Continue to next step
        </Button>
      </Box>
    </Box>
  );
};
