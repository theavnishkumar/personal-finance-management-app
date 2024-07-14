import PropTypes from "prop-types";
import {
  Avatar,
  Paper,
  Typography,
  Divider,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  List,
  Drawer,
  Box,
} from "@mui/material";
import {
  AccountCircle,
  AnalyticsRounded,
  Logout,
  Settings,
  SpaceDashboard,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const drawerData = [
  { name: "Dashboard", path: "/dashboard", icon: <SpaceDashboard /> },
  { name: "Analytics", path: "/analytics", icon: <AnalyticsRounded /> },
  { name: "Profile", path: "/profile", icon: <AccountCircle /> },
  { name: "Settings", path: "/settings", icon: <Settings /> },
  { name: "Logout", path: "/logout", icon: <Logout /> },
];

const AppDrawer = ({ open, toggleDrawer }) => {
  const drawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Paper
        sx={{
          margin: "1rem",
          padding: "0.6rem",
          px: "1rem",
          py: "1rem",
          display: "flex",
          justifyContent: "flex-start",
        }}
        elevation={3}
      >
        <Avatar sx={{ bgcolor: "purple", mr: "0.7rem", width: 40, height: 40 }}>
          AK
        </Avatar>
        <Box>
          <Typography variant="h6">Avnish Kumar</Typography>
          <Typography sx={{ fontSize: "0.9rem", color: "text.secondary" }}>
            hi@theavnishkumar
          </Typography>
        </Box>
      </Paper>
      <Divider />
      <List>
        {drawerData.map((data) => (
          <ListItem key={data.path} disablePadding>
            <ListItemButton component={Link} to={data.path}>
              <ListItemIcon>{data.icon}</ListItemIcon>
              <ListItemText primary={data.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
      {drawerList}
    </Drawer>
  );
};

AppDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};
export default AppDrawer;
