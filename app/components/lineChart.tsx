"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ["2016", "2017", "2018", "2019", "2020"],
    datasets: [
      {
        label: "No. of downloads (K)",
        data: [2, 6, 9, 7, 11],
        borderColor: "#C8ECCC",
        backgroundColor: "#F0FAF1",
        pointBorderColor: "#AAA",
        pointBackgroundColor: "#FEF1F1",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <h3 className="text-lg font-semibold mb-4">Employee Data</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
