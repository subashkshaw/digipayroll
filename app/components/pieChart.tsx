"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }: any) => {
  const chartData = {
    labels: data.map((item: any) => item.label), // Extract labels
    datasets: [
      {
        data: data.map((item: any) => item.count), // Extract counts
        backgroundColor: [
          "#FF6384", // Add colors for slices
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#E7E9ED",
          "#FF6F61",
          "#6A4C93",
          "#29A19C",
          "#F6CD61",
          "#F7CAC9",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#E7E9ED",
          "#FF6F61",
          "#6A4C93",
          "#29A19C",
          "#F6CD61",
          "#F7CAC9",
        ],
      },
    ],
  };

  return (
    <div className="w-full h-96 mx-auto border-2 p-4 rounded-lg shadow hover:shadow-lg">
      {/* <h3 className="text-lg font-semibold mb-4">Employee Data</h3> */}
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
