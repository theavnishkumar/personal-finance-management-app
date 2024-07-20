import { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);
  return (
    <>
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default Home;
