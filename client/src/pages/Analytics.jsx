import { Box, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import Footer from "../components/Footer";
import React from "react";
import axios from "axios";
const VITE_API = `${import.meta.env.VITE_API}`;

const Analytics = () => {
  const [data, setData] = React.useState([]);
  const currentMonth = new Date().getMonth() + 1;

  React.useEffect(() => {
    axios
      .get(`${VITE_API}/api/expenses/monthly/${currentMonth}`)
      .then((response) => {
        const transformedData = response.data.map((expense) => ({
          id: expense._id,
          label: expense.title + `(${expense.amount})`,
          value: expense.amount,
        }));
        setData(transformedData);
      })
      .catch((error) => {
        console.error("There was an error making the GET request!", error);
      });
  }, [data]);

  return (
    <div className="">
      <Typography
        variant="h5"
        mb={-2}
        sx={{ px: "1rem", pt: "0.7rem", fontSize: "2rem" }}
      >
        Analytics
      </Typography>
      <div className="overflow-auto">
        <PieChart
          series={[
            {
              data: data,
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
              innerRadius: 10,
              outerRadius: 90,
              paddingAngle: 5,
              cornerRadius: 8,
            },
          ]}
          width={400}
          height={250}
        />
      </div>
      <Box
        sx={{
          position: "fixed",
          bottom: { xs: 70, sm: 20 },
          left: 0,
          right: 0,
        }}
      >
        <Footer />
      </Box>
    </div>
  );
};

export default Analytics;
