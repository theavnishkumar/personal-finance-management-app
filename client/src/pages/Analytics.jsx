import { Box, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import Footer from "../components/Footer";

const expenses = [
  {
    id: 1,
    label: "Mango",
    value: 34,
  },
  {
    id: 2,
    label: "Books",
    value: 54,
  },
  {
    id: 3,
    label: "Pen",
    value: 14,
  },
  {
    id: 4,
    label: "Ice Cream",
    value: 15,
  },
];

const Analytics = () => {
  return (
    <div className="">
      <Typography
        variant="h5"
        mb={-2}
        sx={{ px: "1rem", pt: "0.7rem", fontSize: "2rem" }}
      >
        Analytics
      </Typography>
      <div className="overflow-auto -ml-4">
        <PieChart
          series={[
            {
              data: expenses,
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
              innerRadius: 10,
              outerRadius: 90,
              paddingAngle: 5,
              cornerRadius: 8,
            },
          ]}
          width={370}
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
