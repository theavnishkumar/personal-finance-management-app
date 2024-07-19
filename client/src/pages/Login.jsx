import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { ArrowBackIosRounded, HomeRounded } from "@mui/icons-material";
import { useState } from "react";
const VITE_API = `${import.meta.env.VITE_API}`;

const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${VITE_API}/api/login`, userData).then((res) => {
      console.log(res);
      if (res.status === 200) {
        navigate("/dashboard");
      }
    });
  };

  return (
    <div className="min-h-[calc(100svh-4.3rem)] mt-10 items-center max-[600px]:min-h-[calc(100svh-7rem)]">
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
            Login
          </Typography>
          <Link to={"/"}>
            <HomeRounded />
          </Link>
        </Container>
        <Divider sx={{ width: "100%", marginBottom: 1 }} />
        <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
          <TextField
            required
            id="standard-required"
            label="Email"
            variant="standard"
            fullWidth={true}
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
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
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
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
            type="submit"
          >
            Login
          </Button>
        </form>
        <Typography>
          Don&apos;t have an account?{" "}
          <Link to={"/signup"} className="underline font-semibold">
            Sign Up
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

export default Login;
