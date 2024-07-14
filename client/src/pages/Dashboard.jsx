import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Fab
        color="primary"
        aria-label="edit"
        sx={{ position: "fixed", bottom: 70, right: 30 }}
      >
        <EditIcon />
      </Fab>
    </div>
  );
};

export default Dashboard;
