import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Fab
        aria-label="edit"
        sx={{
          position: "fixed",
          bottom: { xs: 70, md: 20 },
          right: 15,
          backgroundColor: "#02474d",
          color: "white",
        }}
      >
        <EditIcon />
      </Fab>
    </div>
  );
};

export default Dashboard;
