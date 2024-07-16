import { Box } from "@mui/material";
import Footer from "../components/Footer";

const Profile = () => {
  return (
    <div>
      Profile
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

export default Profile;
