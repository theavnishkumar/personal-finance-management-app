import { PieChart } from "@mui/x-charts/PieChart";

const Analytics = () => {
  return (
    <div className="">
      Analytics
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 50, label: "Food" },
              { id: 1, value: 20, label: "Stationary" },
              { id: 2, value: 30, label: "Education" },
            ],
            innerRadius: 10,
            outerRadius: 90,
            paddingAngle: 5,
            cornerRadius: 8,
          },
        ]}
        width={400}
        height={200}
      />
    </div>
  );
};

export default Analytics;
