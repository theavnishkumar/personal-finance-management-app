import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { ArrowBackIosRounded, HomeRounded } from "@mui/icons-material";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100svh-4.3rem)] mt-10 max-[600px]:min-h-[calc(100svh-7rem)]">
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          minWidth: { xs: 330, sm: 450 },
          maxWidth: { xs: 350, sm: 450 },
          alignItems: "center",
          margin: "auto",
          py: 4,
          gap: 2,
          px: 4,
        }}
        elevation={4}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link onClick={() => navigate(-1)}>
            <ArrowBackIosRounded />
          </Link>
          <Typography
            variant="h5"
            sx={{ textTransform: "uppercase", fontWeight: 600 }}
          >
            Signup
          </Typography>
          <Link to={"/"}>
            <HomeRounded />
          </Link>
        </Container>
        <Divider sx={{ width: "100%", marginBottom: 1 }} />
        <TextField
          required
          id="standard-name-required"
          label="Name"
          variant="standard"
          fullWidth={true}
          sx={{ marginBottom: 1 }}
        />
        <TextField
          required
          id="standard-required"
          label="Email"
          variant="standard"
          fullWidth={true}
          sx={{ marginBottom: 1 }}
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          required
          autoComplete="current-password"
          variant="standard"
          fullWidth={true}
          sx={{ marginBottom: 2 }}
        />
        <Button
          fullWidth={true}
          sx={{
            backgroundColor: "#02474d",
            color: "white",
            "&:hover": {
              backgroundColor: "#026873",
            },
          }}
        >
          Signup
        </Button>
        <Typography>
          Already have an account?{" "}
          <Link to={"/login"} className="underline font-semibold">
            Login
          </Link>
        </Typography>
      </Paper>
      <Box
        sx={{
          position: "fixed",
          bottom: 15,
          left: 0,
          right: 0,
        }}
      >
        <Footer />
      </Box>
    </div>
  );
};

export default Signup;
