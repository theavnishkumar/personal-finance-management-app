import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
  EqualizerRounded,
  SpaceDashboardRounded,
  AccountCircleRounded,
} from "@mui/icons-material";
import { Paper } from "@mui/material";
import AppDrawer from "./AppDrawer";
import { Link } from "react-router-dom";

export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Paper
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        display: { md: "none" },
      }}
      elevation={4}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Dashboard"
          icon={<SpaceDashboardRounded />}
          component={Link}
          to="/dashboard"
        />
        <BottomNavigationAction
          label="Analytics"
          icon={<EqualizerRounded />}
          component={Link}
          to="/analytics"
        />
        <BottomNavigationAction
          component={Link}
          to={"/profile"}
          label="Profile"
          icon={<AccountCircleRounded />}
        />
      </BottomNavigation>
      <AppDrawer open={open} toggleDrawer={toggleDrawer} />
    </Paper>
  );
}
