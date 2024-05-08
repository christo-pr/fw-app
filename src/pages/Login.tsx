import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Grid from "@mui/material/Unstable_Grid2";

import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import AirIcon from "@mui/icons-material/Air";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import BarChartIcon from "@mui/icons-material/BarChart";
import BadgeIcon from "@mui/icons-material/Badge";

export default function Login() {
  const options = {
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
  };
  return (
    <Container maxWidth="xl">
      <Grid container>
        {/* Left container */}
        <Grid xs={6}>
          {/* Header ext */}
          <Typography>Fieldwork</Typography>
          <Box>
            <Typography>
              Fieldwork is the leading sales tool for your HVAC business.
            </Typography>
            <Grid container>
              {/* For bussines */}
              <Grid xs={6}>
                <Typography>For Business Owners</Typography>
                <List>
                  {options.bussines.map((opt) => (
                    <ListItem>
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
                  {options.technicians.map((opt) => (
                    <ListItem>
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
        <Grid xs={6}>Form</Grid>
      </Grid>
    </Container>
  );
}
