import { Box, Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Fab
        aria-label="edit"
        sx={{
          position: "fixed",
          bottom: { xs: 70, sm: 20 },
          right: 15,
          backgroundColor: "#02474d",
          color: "white",
        }}
      >
        <EditIcon />
      </Fab>
      <Box
        sx={{
          position: "fixed",
          bottom: { xs: 70, sm: 20 },
          left: 0,
          right: 0,
        }}
      >
        <Footer />
      </Box>
    </div>
  );
};

export default Dashboard;
