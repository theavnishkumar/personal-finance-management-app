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
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

const Signup = () => {
  const { signup, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(userData.name, userData.email, userData.password);
      navigate("/dashboard");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

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
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          <TextField
            required
            id="standard-name-required"
            label="Name"
            variant="standard"
            fullWidth={true}
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            sx={{ marginBottom: 1 }}
          />
          <TextField
            required
            id="standard-required"
            label="Email"
            variant="standard"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            fullWidth={true}
            sx={{ marginBottom: 1 }}
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
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
            // onClick={handleSubmit}
            type="submit"
            disabled={
              userData.name === "" ||
              userData.email === "" ||
              userData.password === ""
            }
          >
            Signup
          </Button>
        </form>
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
