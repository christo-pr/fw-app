import { useCallback, useMemo, useState } from "react";
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
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
/** Icons */
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import AirIcon from "@mui/icons-material/Air";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import BarChartIcon from "@mui/icons-material/BarChart";
import BadgeIcon from "@mui/icons-material/Badge";

import useAuth from "src/hooks/useAuth"; // <---- Cognito login
import useAuthStore from "src/store/auth.store";

export default function Login() {
  const [companyName, setCompanyName] = useState("Facebook");
  const [email, setEmail] = useState("cristofer.flort@gmail.com");
  const [password, setPassword] = useState("$omthingS3cure!");
  const setCurrentUser = useAuthStore((s) => s.setCurrentUser);
  const { login, getCurrentUser, fetchAuthSession } = useAuth(); // <---- Cognito login
  const handleLogin = useCallback(async () => {
    await login({ email, password }); // <---- Cognito login

    const user = await getCurrentUser();
    const session = await fetchAuthSession();

    setCurrentUser({
      id: user.userId as string,
      email: user.signInDetails?.loginId as string,
      name: "testing",
      token: session.tokens?.idToken?.toString() || "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);
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
    <Container maxWidth="xl" sx={{ height: "100vh" }}>
      <Grid container alignItems="center" height="100%">
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
          <Card>
            <CardContent
              sx={{
                paddingX: 10,
                paddingTop: 5,
              }}
            >
              <Typography variant="h4">Join Fieldwork</Typography>
              <Box marginTop={6}>
                <TextField
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  fullWidth
                  label="Company name"
                />
                <Box display="flex" alignItems="center" gap={5}>
                  <TextField
                    fullWidth
                    label="First Name"
                    sx={{
                      marginTop: 4,
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Last Name"
                    sx={{
                      marginTop: 4,
                    }}
                  />
                </Box>
                <TextField
                  fullWidth
                  label="Phone Number"
                  sx={{
                    marginTop: 5,
                  }}
                />
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  label="User Email"
                  sx={{
                    marginTop: 5,
                  }}
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
              <Box marginTop={3}>
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <>
                      I agree to Fieldwork’s to <a href="#">Terms of Service</a>
                    </>
                  }
                />
              </Box>
              <Button
                variant="contained"
                sx={{ marginTop: 2 }}
                onClick={() => handleLogin()}
                fullWidth
              >
                Create account
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
