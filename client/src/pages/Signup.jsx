import { Button, Divider, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-[calc(100svh-4.3rem)] flex flex-col justify-center items-center max-[600px]:min-h-[calc(100svh-7rem)]">
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
        <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
          Signup
        </Typography>
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
          sx={{ backgroundColor: "#02474d", color: "white" }}
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
    </div>
  );
};

export default Signup;
