import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
/** Icons */
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import AirIcon from "@mui/icons-material/Air";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import BarChartIcon from "@mui/icons-material/BarChart";
import BadgeIcon from "@mui/icons-material/Badge";

import useAuth from "src/hooks/useAuth";
import { useCallback, useMemo, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("tim@wintershomeservices.com");
  const [password, setPassword] = useState("ILOVEHVACS");
  const { signup } = useAuth();
  const handleLogin = useCallback(async () => {
    const response = await signup({ email, password });
    console.log("response: ", response);
  }, [email, password, signup]);
  const options = useMemo(
    () => ({
      bussines: [
        {
          text: "Standardizes how your technicians sell in the field.",
          Icon: <AlignHorizontalRightIcon />,
        },
        {
          text: "Turns best practices from your top performers into a guide for your low performers.",
          Icon: <AirportShuttleIcon />,
        },
        {
          text: "Increases business performance, sales efficiency, and transparency.",
          Icon: <AirIcon />,
        },
      ],
      technicians: [
        {
          text: "Reduces the time and effort to create proposals on the spot.",
          Icon: <AppRegistrationIcon />,
        },
        {
          text: "Builds a greater trust with customers through beautiful proposal presentations.",
          Icon: <BarChartIcon />,
        },
        {
          text: "Increases replacement ticket sizes by 20% or more*.",
          Icon: <BadgeIcon />,
        },
      ],
    }),
    []
  );

  return (
    <Container maxWidth="xl">
      <Grid container>
        {/* Left container */}
        <Grid xs={6}>
          {/* Header ext */}
          <Typography>Fieldwork</Typography>
          <Box padding={10}>
            <Typography>
              Fieldwork is the leading sales tool for your HVAC business.
            </Typography>
            <Grid container marginTop={5}>
              {/* For bussines */}
              <Grid xs={6}>
                <Typography>For Business Owners</Typography>
                <List>
                  {options.bussines.map((opt, i) => (
                    <ListItem key={i}>
                      <ListItemIcon>{opt.Icon}</ListItemIcon>
                      <ListItemText primary={opt.text} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              {/* For Technicians */}
              <Grid xs={6}>
                <Typography>For Field Technicians</Typography>
                <List>
                  {options.technicians.map((opt, i) => (
                    <ListItem key={i}>
                      <ListItemIcon>{opt.Icon}</ListItemIcon>
                      <ListItemText primary={opt.text} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        {/* Right container (Form) */}
        <Grid xs={6}>
          <Typography variant="h4">Join Fieldwork</Typography>
          <Box marginTop={6}>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              label="User Email"
            />
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              label="Password"
              type="password"
              sx={{
                marginTop: 5,
              }}
            />
          </Box>
          <Button
            variant="contained"
            sx={{ marginTop: 2 }}
            onClick={() => handleLogin()}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
