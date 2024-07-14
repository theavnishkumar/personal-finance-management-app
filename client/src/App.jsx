import { Outlet } from "react-router-dom";
import Appbar from "./components/Appbar";
import BottomNav from "./components/BottomNav";

const App = () => {
  return (
    <main className="min-h-svh">
      <Appbar />
      <Outlet />
      <BottomNav />
    </main>
  );
};

export default App;
