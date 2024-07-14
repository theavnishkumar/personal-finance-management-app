import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AppDrawer from "./AppDrawer";
import { Tooltip } from "@mui/material";
import { MenuOpen, Wallet } from "@mui/icons-material";
import { Link } from "react-router-dom";

const pages = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Profile", path: "/profile" },
];

function Appbar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Wallet sx={{ mr: 1, fontSize: "1.8rem" }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to={"/"}
            sx={{
              mr: 2,
              fontFamily: "sans-serif",
              fontWeight: 600,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Money Manager
          </Typography>
          <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}></Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.path}
                component={Link}
                to={page.path}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontWeight: 300,
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={toggleDrawer(true)} sx={{ p: 0 }}>
                <MenuOpen sx={{ color: "white", fontSize: "1.8rem" }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
      <AppDrawer open={open} toggleDrawer={toggleDrawer} />
    </AppBar>
  );
}
export default Appbar;
