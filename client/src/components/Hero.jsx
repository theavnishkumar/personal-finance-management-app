import { SavingsRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-24">
      <p className="mx-auto -mt-4 max-w-2xl text-lg tracking-tight text-gray-600 sm:mt-6">
        Welcome to
        {/* <span className="border-b border-dotted border-slate-300">Financial Management App</span> */}
      </p>

      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        <span className="inline-block">
          {/* Personal */}
          <span className="relative whitespace-nowrap text-teal-700">
            <span className="relative flex items-center justify-center">
              <SavingsRounded sx={{ fontSize: "4rem" }} />
              Financial&nbsp;
            </span>
          </span>
        </span>
        <span className="inline-block">Management App</span>
      </h1>

      <p className="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-gray-600 sm:mt-6">
        <span className="inline-block">
          Effortlessly Track Expenses, Set and Achieve Financial Goals, and Gain
          Detailed Insights into Your Spending Habits for a More Secure
          Financial Future
        </span>
        {/* <span className="inline-block">
          Monitor Expenses, Set Goals, and Gain Insights for Smarter Money
          Management.
        </span> */}
      </p>

      <div className="mt-12 flex justify-center gap-6">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#02474d",
            color: "white",
            "&:hover": {
              backgroundColor: "#026873",
            },
          }}
        >
          <Link to={"/login"}>Login</Link>
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#02474d",
            borderColor: "#02474d",
            "&:hover": {
              color: "#026873",
              borderColor: "#026873",
            },
          }}
        >
          <Link to={"/signup"}>Signup</Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
