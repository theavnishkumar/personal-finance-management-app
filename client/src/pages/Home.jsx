import { Button } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <main>
        <Button variant="contained" sx={{ margin: 3 }}>
          <Link to={"/dashboard"}>Login</Link>
        </Button>
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
