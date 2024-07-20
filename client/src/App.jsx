import { Outlet, Navigate } from "react-router-dom";
import Appbar from "./components/Appbar";
import BottomNav from "./components/BottomNav";
import AuthContext from "./context/AuthContext";
import { useContext } from "react";
import Loading from "./components/Loading";

const App = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading />;
  }

  return user ? (
    <main className="">
      <Appbar />
      <Outlet />
      <BottomNav />
    </main>
  ) : (
    <Navigate to="/login" />
  );
};

export default App;
