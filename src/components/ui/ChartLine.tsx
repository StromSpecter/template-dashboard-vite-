import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface ChartLineProps {
  labels: string[];
  data: number[];
  title?: string;
}

const ChartLine: React.FC<ChartLineProps> = ({
  labels,
  data,
  title = "Chart",
}) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        borderColor: "rgb(15, 23, 42)", // slate-900
        backgroundColor: "rgba(15, 23, 42, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "rgb(100, 116, 139)", // slate-500
        },
      },
      y: {
        grid: {
          color: "rgb(226, 232, 240)", // slate-200
        },
        ticks: {
          color: "rgb(100, 116, 139)", // slate-500
          callback: function (tickValue: string | number) {
            if (typeof tickValue === "number") {
              return "$" + tickValue.toLocaleString();
            }
            return tickValue;
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ChartLine;
