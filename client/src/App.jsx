import { Outlet } from "react-router-dom";
import Appbar from "./components/Appbar";

const App = () => {
  return (
    <main>
      <Appbar />
      <Outlet />
    </main>
  );
};

export default App;
